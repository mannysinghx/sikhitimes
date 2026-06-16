// AI Provider round-robin: DeepSeek → Kimi → Claude → Gemini → OpenAI
// Falls back to next provider on failure.

import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

export type AIProvider =
  | "deepseek"
  | "kimi"
  | "claude"
  | "gemini"
  | "openai";

const PROVIDER_ORDER: AIProvider[] = [
  "deepseek",
  "kimi",
  "claude",
  "gemini",
  "openai",
];

// Simple in-memory rotation index (resets per process restart, which is fine)
let currentIndex = 0;

function nextProvider(): AIProvider {
  const provider = PROVIDER_ORDER[currentIndex % PROVIDER_ORDER.length];
  currentIndex++;
  return provider;
}

export interface AIResponse {
  text: string;
  provider: AIProvider;
}

// DeepSeek and Kimi both use OpenAI-compatible APIs
function makeOpenAICompatibleClient(
  provider: "deepseek" | "kimi" | "openai"
): OpenAI {
  if (provider === "deepseek") {
    return new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY || "",
      baseURL: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/v1",
    });
  }
  if (provider === "kimi") {
    return new OpenAI({
      apiKey: process.env.KIMI_API_KEY || "",
      baseURL: process.env.KIMI_BASE_URL || "https://api.moonshot.cn/v1",
    });
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });
}

function modelForProvider(provider: AIProvider): string {
  switch (provider) {
    case "deepseek":
      return "deepseek-chat";
    case "kimi":
      return "moonshot-v1-8k";
    case "claude":
      return "claude-sonnet-4-6";
    case "gemini":
      return "gemini-1.5-flash";
    case "openai":
      return "gpt-4o-mini";
  }
}

async function callProvider(
  provider: AIProvider,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  if (provider === "claude") {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const msg = await client.messages.create({
      model: modelForProvider("claude"),
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });
    const block = msg.content[0];
    if (block.type !== "text") throw new Error("Unexpected response type");
    return block.text;
  }

  if (provider === "gemini") {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: modelForProvider("gemini") });
    const result = await model.generateContent(
      `${systemPrompt}\n\n${userPrompt}`
    );
    return result.response.text();
  }

  // DeepSeek, Kimi, OpenAI
  const client = makeOpenAICompatibleClient(
    provider as "deepseek" | "kimi" | "openai"
  );
  const response = await client.chat.completions.create({
    model: modelForProvider(provider),
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    max_tokens: 2048,
  });
  return response.choices[0]?.message?.content || "";
}

export async function generateWithFallback(
  systemPrompt: string,
  userPrompt: string,
  preferredProvider?: AIProvider
): Promise<AIResponse> {
  const startProvider = preferredProvider || nextProvider();
  const orderedProviders = [
    startProvider,
    ...PROVIDER_ORDER.filter((p) => p !== startProvider),
  ];

  for (const provider of orderedProviders) {
    try {
      const text = await callProvider(provider, systemPrompt, userPrompt);
      if (text?.trim()) {
        return { text: text.trim(), provider };
      }
    } catch (err) {
      console.warn(`[AI] Provider ${provider} failed:`, (err as Error).message);
    }
  }

  throw new Error("All AI providers failed. Check your API keys.");
}
