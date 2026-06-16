import type { Metadata } from "next";
import { Video, Globe } from "lucide-react";
import { GURDWARA_FEEDS } from "@/data/gurdwara-feeds";

export const metadata: Metadata = {
  title: "Live Darshan — Gurdwara Webcams",
  description: "Watch live webcam feeds from Harmandir Sahib (Golden Temple) and Gurdwaras worldwide.",
};

const COUNTRY_FLAGS: Record<string, string> = {
  India: "🇮🇳",
  Canada: "🇨🇦",
  "United Kingdom": "🇬🇧",
  USA: "🇺🇸",
  Australia: "🇦🇺",
};

function getYouTubeEmbedId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function DarshanPage() {
  const featuredFeed = GURDWARA_FEEDS[0]; // Golden Temple
  const otherFeeds = GURDWARA_FEEDS.slice(1);

  const countries = [...new Set(GURDWARA_FEEDS.map((f) => f.country))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live Darshan
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Live Darshan — Gurdwaras Worldwide
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Watch live from Sri Harmandir Sahib (Golden Temple) and Gurdwaras around the world.
          Connect with the Sangat wherever you are.
        </p>
      </div>

      {/* Featured — Golden Temple */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <h2 className="font-bold text-gray-900">
            {COUNTRY_FLAGS[featuredFeed.country]} {featuredFeed.name}
          </h2>
          <span className="text-xs text-gray-500">{featuredFeed.location}</span>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
          {featuredFeed.youtubeUrl && getYouTubeEmbedId(featuredFeed.youtubeUrl) ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeEmbedId(featuredFeed.youtubeUrl!)}?autoplay=0&rel=0`}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={featuredFeed.name}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white gap-3">
              <Video size={48} className="opacity-30" />
              <p className="text-sm opacity-50">Live feed loading...</p>
            </div>
          )}
        </div>
      </div>

      {/* Country filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-1.5 bg-amber-700 text-white text-sm font-medium rounded-full">
          All
        </button>
        {countries.map((country) => (
          <button
            key={country}
            className="px-4 py-1.5 bg-white border border-gray-200 text-sm text-gray-700 font-medium rounded-full hover:border-amber-400 transition-colors"
          >
            {COUNTRY_FLAGS[country] || <Globe size={12} className="inline" />} {country}
          </button>
        ))}
      </div>

      {/* Other feeds grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherFeeds.map((feed) => (
          <div key={feed.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
            <div className="aspect-video bg-gray-900 relative">
              {feed.youtubeUrl && getYouTubeEmbedId(feed.youtubeUrl) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeEmbedId(feed.youtubeUrl!)}?rel=0`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={feed.name}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                  <Video size={32} className="opacity-30" />
                  <p className="text-xs opacity-50">Coming soon</p>
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-900 leading-snug">{feed.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {COUNTRY_FLAGS[feed.country] || "🌍"} {feed.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Submit a feed */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
        <Globe size={24} className="text-amber-700 mx-auto mb-2" />
        <h3 className="font-bold text-gray-900 mb-1">Know a Gurdwara with a live feed?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Help us grow our live darshan collection. Submit a YouTube live link for your local Gurdwara.
        </p>
        <a
          href="/about#contact"
          className="inline-block px-5 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors"
        >
          Submit a Feed
        </a>
      </div>
    </div>
  );
}
