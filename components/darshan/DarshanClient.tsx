"use client";

import { useState } from "react";
import { Video, Globe, ExternalLink, Radio } from "lucide-react";
import type { GurdwaraFeedData } from "@/data/gurdwara-feeds";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/motion";

const COUNTRY_FLAGS: Record<string, string> = {
  India: "🇮🇳",
  Canada: "🇨🇦",
  "United Kingdom": "🇬🇧",
  USA: "🇺🇸",
  Australia: "🇦🇺",
};

function extractYouTubeId(url: string): string | null {
  // Handles: ?v=ID, youtu.be/ID, /live/ID, /embed/ID
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /\/live\/([A-Za-z0-9_-]{11})/,
    /\/embed\/([A-Za-z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

function EmbedFrame({ feed, large }: { feed: GurdwaraFeedData; large?: boolean }) {
  const videoId = feed.youtubeUrl ? extractYouTubeId(feed.youtubeUrl) : null;

  if (videoId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={feed.name}
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-400 px-4">
      <Radio size={large ? 40 : 28} className="opacity-40" />
      <p className={`${large ? "text-sm" : "text-xs"} text-center opacity-60`}>
        Live stream not yet configured
      </p>
      {feed.youtubeChannelUrl && (
        <a
          href={feed.youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full transition-colors"
        >
          <ExternalLink size={11} />
          Watch on YouTube
        </a>
      )}
    </div>
  );
}

interface Props {
  feeds: GurdwaraFeedData[];
}

export default function DarshanClient({ feeds }: Props) {
  const [activeCountry, setActiveCountry] = useState<string>("All");

  const countries = ["All", ...Array.from(new Set(feeds.map((f) => f.country)))];

  const featured = feeds[0];
  const secondary = feeds.slice(1);
  const filtered =
    activeCountry === "All"
      ? secondary
      : secondary.filter((f) => f.country === activeCountry);

  const featuredVideoId = featured.youtubeUrl ? extractYouTubeId(featured.youtubeUrl) : null;

  return (
    <>
      {/* Featured — Golden Temple */}
      <FadeIn>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h2 className="font-bold text-gray-900">
              {COUNTRY_FLAGS[featured.country] ?? "🌍"} {featured.name}
            </h2>
            <span className="text-xs text-gray-500">{featured.location}</span>
            {featuredVideoId && (
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                LIVE
              </span>
            )}
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
            <EmbedFrame feed={featured} large />
          </div>
          {featured.description && (
            <p className="text-xs text-gray-500 mt-2">{featured.description}</p>
          )}
        </div>
      </FadeIn>

      {/* Country filter */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-6">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                activeCountry === country
                  ? "bg-amber-700 text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400"
              }`}
            >
              {country === "All" ? "All" : `${COUNTRY_FLAGS[country] ?? <Globe size={12} />} ${country}`}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Feed grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((feed) => {
          const hasEmbed = !!feed.youtubeUrl && !!extractYouTubeId(feed.youtubeUrl);
          return (
            <StaggerItem key={feed.id}>
              <HoverCard>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="aspect-video bg-gray-900 relative">
                    <EmbedFrame feed={feed} />
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 leading-snug">
                          {feed.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {COUNTRY_FLAGS[feed.country] ?? "🌍"} {feed.location}
                        </p>
                      </div>
                      {hasEmbed && (
                        <span className="flex-shrink-0 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
                          LIVE
                        </span>
                      )}
                    </div>
                    {feed.description && (
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                        {feed.description}
                      </p>
                    )}
                    {!hasEmbed && feed.youtubeChannelUrl && (
                      <a
                        href={feed.youtubeChannelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 mt-2 font-medium"
                      >
                        <ExternalLink size={10} />
                        Watch on YouTube
                      </a>
                    )}
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Video size={36} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm">No feeds available for {activeCountry} yet.</p>
        </div>
      )}
    </>
  );
}
