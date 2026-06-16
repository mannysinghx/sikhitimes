// Hukumnama Fetcher — scrapes daily Hukumnama from SGPC website
// Falls back to SikhNet API if SGPC is unavailable

import * as cheerio from "cheerio";

export interface HukumnamaData {
  date: Date;
  gurmukhi: string;
  transliteration?: string;
  english: string;
  punjabi?: string;
  audioUrl?: string;
  sourceUrl: string;
}

const SGPC_URL = "https://www.sgpc.net/hukamnama/";
const SIKHNET_HUKUMNAMA_API = "https://sikhnet.com/hukumnama";

export async function fetchHukumnama(): Promise<HukumnamaData | null> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Try SGPC first
  try {
    const res = await fetch(SGPC_URL, {
      headers: { "User-Agent": "SikhiTimes/1.0 (+https://sikhitimes.com)" },
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);

      // SGPC page structure (may need adjustment based on actual page)
      const gurmukhi = $(".hukamnama-gurmukhi, .gurmukhi, .hukam-text")
        .first()
        .text()
        .trim();
      const english = $(".hukamnama-english, .hukam-translation, .english-translation")
        .first()
        .text()
        .trim();

      if (gurmukhi && english) {
        return {
          date: today,
          gurmukhi,
          english,
          sourceUrl: SGPC_URL,
        };
      }
    }
  } catch (err) {
    console.warn("[Hukumnama] SGPC fetch failed:", (err as Error).message);
  }

  // Fallback: SikhNet
  try {
    const res = await fetch(SIKHNET_HUKUMNAMA_API, {
      headers: { "User-Agent": "SikhiTimes/1.0 (+https://sikhitimes.com)" },
    });

    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);

      const gurmukhi = $('[class*="gurmukhi"]').first().text().trim();
      const english = $('[class*="translation"], [class*="english"]').first().text().trim();

      if (gurmukhi && english) {
        return {
          date: today,
          gurmukhi,
          english,
          sourceUrl: SIKHNET_HUKUMNAMA_API,
        };
      }
    }
  } catch (err) {
    console.warn("[Hukumnama] SikhNet fetch failed:", (err as Error).message);
  }

  return null;
}
