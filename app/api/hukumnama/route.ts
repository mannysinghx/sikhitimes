import { NextResponse } from "next/server";
import { fetchHukumnama } from "@/lib/ai/hukumnama-fetcher";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const hukumnama = await fetchHukumnama();

    if (!hukumnama) {
      return NextResponse.json(
        {
          date: new Date().toISOString(),
          gurmukhi: "ਹੁਕਮਨਾਮਾ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕਿਆ",
          english: "Today's Hukumnama could not be fetched. Please visit SGPC.net directly.",
          sourceUrl: "https://www.sgpc.net/hukamnama/",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(hukumnama);
  } catch (error) {
    console.error("[API] Hukumnama fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch Hukumnama" }, { status: 500 });
  }
}
