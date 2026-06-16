// News Agent — fetches RSS + NewsAPI, summarizes with AI, stores to DB
// Runs every 30 minutes via cron job

import Parser from "rss-parser";
import { generateWithFallback } from "./providers";

const parser = new Parser();

const RSS_FEEDS = [
  // Punjab/Sikh news sources
  { url: "https://www.tribuneindia.com/rss/punjab.xml", name: "Tribune India" },
  { url: "https://www.hindustantimes.com/feeds/rss/punjab/rssfeed.xml", name: "Hindustan Times Punjab" },
  { url: "https://sikh24.com/feed/", name: "Sikh24" },
  { url: "https://www.sikhnet.com/news/rss", name: "SikhNet" },
  { url: "https://punjabinewsexpress.com/feed", name: "Punjab News Express" },
];

const NEWS_API_QUERIES = [
  "Punjab Sikhs",
  "Sikh community",
  "Golden Temple",
  "Khalsa",
  "Punjabi diaspora",
  "Sikhism",
];

export interface RawNewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  description?: string;
  imageUrl?: string;
}

export async function fetchRSSNews(): Promise<RawNewsItem[]> {
  const items: RawNewsItem[] = [];

  for (const feed of RSS_FEEDS) {
    try {
      const result = await parser.parseURL(feed.url);
      for (const item of result.items.slice(0, 10)) {
        if (!item.title || !item.link) continue;
        items.push({
          title: item.title,
          url: item.link,
          source: feed.name,
          publishedAt: item.pubDate || new Date().toISOString(),
          description: item.contentSnippet || item.summary || "",
          imageUrl: item.enclosure?.url,
        });
      }
    } catch (err) {
      console.warn(`[NewsAgent] RSS feed failed for ${feed.name}:`, (err as Error).message);
    }
  }

  return items;
}

export async function fetchNewsAPIArticles(): Promise<RawNewsItem[]> {
  if (!process.env.NEWS_API_KEY) return [];

  const items: RawNewsItem[] = [];

  for (const query of NEWS_API_QUERIES.slice(0, 3)) {
    try {
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.articles) {
        for (const article of data.articles) {
          if (!article.title || !article.url) continue;
          items.push({
            title: article.title,
            url: article.url,
            source: article.source?.name || "NewsAPI",
            publishedAt: article.publishedAt,
            description: article.description || "",
            imageUrl: article.urlToImage,
          });
        }
      }
    } catch (err) {
      console.warn(`[NewsAgent] NewsAPI failed for "${query}":`, (err as Error).message);
    }
  }

  return items;
}

export async function summarizeArticle(item: RawNewsItem): Promise<string> {
  const systemPrompt = `You are a neutral, factual news summarizer for SikhiTimes.com.
Summarize the news article in 2-3 clear, concise, neutral sentences.
Do not add bias, opinions, or sensationalism.
The audience includes Sikhs and people interested in Sikh culture worldwide.
Always maintain a respectful tone toward Sikh religion and culture.`;

  const userPrompt = `Title: ${item.title}
Source: ${item.source}
Description: ${item.description || "No description provided"}

Write a neutral 2-3 sentence summary suitable for publication.`;

  const result = await generateWithFallback(systemPrompt, userPrompt);
  return result.text;
}

export async function categorizeArticle(
  title: string,
  summary: string
): Promise<string> {
  const systemPrompt = `You categorize Sikh/Punjab news articles into exactly one of these categories:
PUNJAB, SIKH_WORLD, POLITICS, CULTURE, SPORTS, DIASPORA, RELIGION, HUMAN_RIGHTS, ECONOMY
Reply with ONLY the category name, nothing else.`;

  const result = await generateWithFallback(systemPrompt, `${title}\n${summary}`);
  const valid = [
    "PUNJAB", "SIKH_WORLD", "POLITICS", "CULTURE", "SPORTS",
    "DIASPORA", "RELIGION", "HUMAN_RIGHTS", "ECONOMY",
  ];
  const cat = result.text.trim().toUpperCase();
  return valid.includes(cat) ? cat : "SIKH_WORLD";
}
