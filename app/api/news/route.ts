import { NextRequest, NextResponse } from "next/server";
import { fetchRSSNews, fetchNewsAPIArticles } from "@/lib/ai/news-agent";

export const revalidate = 1800; // 30 min cache

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const source = searchParams.get("source") || "all";

  try {
    let articles: Awaited<ReturnType<typeof fetchRSSNews>> = [];

    if (source === "rss" || source === "all") {
      const rssArticles = await fetchRSSNews();
      articles = [...articles, ...rssArticles];
    }

    if (source === "newsapi" || source === "all") {
      const apiArticles = await fetchNewsAPIArticles();
      articles = [...articles, ...apiArticles];
    }

    // Deduplicate by URL
    const seen = new Set<string>();
    const unique = articles.filter((a) => {
      if (seen.has(a.url)) return false;
      seen.add(a.url);
      return true;
    });

    // Sort by date
    unique.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return NextResponse.json({ articles: unique.slice(0, 50) });
  } catch (error) {
    console.error("[API] News fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch news", articles: [] }, { status: 500 });
  }
}
