// Blog Writer Agent — generates 2-3 articles daily on Sikh life & culture
// Topics rotate: spirituality, health, history, travel, community, youth

import { generateWithFallback, AIResponse } from "./providers";

const BLOG_TOPICS = [
  { category: "Spirituality", prompts: ["The importance of Seva in Sikh daily life", "Understanding the concept of Waheguru", "Nitnem — the power of daily Sikh prayers"] },
  { category: "Health", prompts: ["Langar and the science of vegetarian nutrition", "Meditation and mental health in Sikhism", "Physical fitness inspired by Sikh warriors"] },
  { category: "History", prompts: ["The Battle of Chamkaur — sacrifice and courage", "The founding of the Khalsa by Guru Gobind Singh Ji", "The legacy of Maharaja Ranjit Singh"] },
  { category: "Culture", prompts: ["Punjabi folk music and its Sikh roots", "The art of Phulkari embroidery", "Vaisakhi celebrations around the world"] },
  { category: "Community", prompts: ["How Sikhs are leading humanitarian efforts globally", "Young Sikhs keeping traditions alive", "The Sikh diaspora building bridges"] },
  { category: "Travel", prompts: ["A pilgrimage guide to the Golden Temple Amritsar", "Top 10 historic Gurdwaras to visit in India", "Sikh heritage sites in Punjab — a travel guide"] },
  { category: "Youth", prompts: ["Growing up Sikh in the West", "How to explain Sikhism to your non-Sikh friends", "Career advice from successful young Sikhs"] },
];

export interface BlogDraft {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  kidFriendly: boolean;
  aiProvider: string;
}

function pickTodayTopics(): Array<{ category: string; prompt: string }> {
  // Use date-based deterministic rotation so same day always picks same topics
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const results = [];
  for (let i = 0; i < 3; i++) {
    const topicGroup = BLOG_TOPICS[(dayOfYear + i) % BLOG_TOPICS.length];
    const prompt = topicGroup.prompts[(dayOfYear + i) % topicGroup.prompts.length];
    results.push({ category: topicGroup.category, prompt });
  }
  return results;
}

export async function generateBlog(
  topic: string,
  category: string
): Promise<BlogDraft> {
  const systemPrompt = `You are a thoughtful, knowledgeable writer for SikhiTimes.com — a neutral, research-based Sikh information platform.
Write an engaging, accurate, and respectful blog article about Sikh culture, history, and community.
Requirements:
- 600-800 words
- Use clear headings (## for sections)
- Kid-friendly language (suitable for ages 10+)
- Neutral and factual — no political bias
- Respectful and uplifting tone
- Include relevant quotes from Gurbani where appropriate
- End with a reflection or takeaway for the reader
Format: Return JSON with fields: title, excerpt (1-2 sentences), content (markdown), tags (array of 5 keywords)`;

  const userPrompt = `Write a blog article about: "${topic}"
Category: ${category}`;

  const result: AIResponse = await generateWithFallback(systemPrompt, userPrompt);

  let parsed: Partial<BlogDraft> = {};
  try {
    const jsonMatch = result.text.match(/\{[\s\S]*\}/);
    if (jsonMatch) parsed = JSON.parse(jsonMatch[0]);
  } catch {
    // Fallback: use raw text as content
    parsed = {
      title: topic,
      excerpt: `An exploration of ${topic.toLowerCase()}`,
      content: result.text,
      tags: [category.toLowerCase(), "sikhi", "sikh culture", "punjab", "gurbani"],
    };
  }

  return {
    title: parsed.title || topic,
    excerpt: parsed.excerpt || "",
    content: parsed.content || result.text,
    category,
    tags: parsed.tags || [category.toLowerCase(), "sikhitimes"],
    kidFriendly: true,
    aiProvider: result.provider,
  };
}

export async function generateDailyBlogs(): Promise<BlogDraft[]> {
  const topics = pickTodayTopics();
  const blogs: BlogDraft[] = [];

  for (const { category, prompt } of topics) {
    try {
      const blog = await generateBlog(prompt, category);
      blogs.push(blog);
    } catch (err) {
      console.error(`[BlogWriter] Failed to generate blog for "${prompt}":`, err);
    }
  }

  return blogs;
}
