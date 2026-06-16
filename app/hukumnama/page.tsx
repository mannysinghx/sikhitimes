import type { Metadata } from "next";
import { BookOpen, ExternalLink } from "lucide-react";
import { FadeIn, SlideIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Daily Hukumnama",
  description: "Today's Hukumnama from Sri Harmandir Sahib (Golden Temple), Amritsar — in Gurmukhi and English.",
};

async function getHukumnama() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/hukumnama`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) return res.json();
  } catch {
    // Return placeholder if fetch fails
  }

  return {
    date: new Date().toISOString(),
    gurmukhi: "ਹੁਕਮਨਾਮਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    english: "Today's Hukumnama is being fetched. Please check back shortly or visit SGPC.net directly.",
    sourceUrl: "https://www.sgpc.net/hukamnama/",
  };
}

export default async function HukumnamaPage() {
  const hukumnama = await getHukumnama();
  const date = new Date(hukumnama.date);
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-1">
            <BookOpen size={14} />
            Daily Hukumnama
          </div>
          <p className="text-sm text-gray-500 mb-3">{dateStr}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Sri Harmandir Sahib Hukumnama
          </h1>
          <p className="text-gray-500 text-sm">
            The daily Hukumnama (Divine Command) from the Golden Temple, Amritsar
          </p>
        </div>
      </FadeIn>

      {/* Gurmukhi */}
      <SlideIn from="left" delay={0.1}>
        <div className="bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
            <span className="text-2xl">☬</span>
            <span className="font-medium">ਗੁਰਮੁਖੀ — Gurmukhi</span>
          </div>
          <p
            className="text-xl sm:text-2xl leading-loose font-medium"
            lang="pa"
            dir="ltr"
            style={{ fontFamily: "'Noto Sans Gurmukhi', serif" }}
          >
            {hukumnama.gurmukhi}
          </p>
        </div>
      </SlideIn>

      {/* English translation */}
      <SlideIn from="right" delay={0.2}>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-3">
            English Translation
          </h2>
          <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
            {hukumnama.english}
          </p>
        </div>
      </SlideIn>

      {/* Source and What is Hukumnama? */}
      <FadeIn delay={0.1}>
        <div className="text-center">
          <a
            href={hukumnama.sourceUrl || "https://www.sgpc.net/hukamnama/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 text-sm font-medium"
          >
            View on SGPC.net <ExternalLink size={13} />
          </a>
        </div>

        {/* What is Hukumnama? */}
        <div className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">What is a Hukumnama?</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            A <strong>Hukumnama</strong> (ਹੁਕਮਨਾਮਾ) is the daily &ldquo;command&rdquo; or &ldquo;edict&rdquo; taken from the
            Guru Granth Sahib Ji. Each morning at Sri Harmandir Sahib (Golden Temple) in Amritsar,
            the Guru Granth Sahib Ji is ceremonially opened at a random page, and the hymn on that
            page becomes the Hukumnama for that day — guidance for Sikhs worldwide to reflect upon.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
