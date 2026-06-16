import type { Metadata } from "next";
import { Globe } from "lucide-react";
import { GURDWARA_FEEDS } from "@/data/gurdwara-feeds";
import DarshanClient from "@/components/darshan/DarshanClient";

export const metadata: Metadata = {
  title: "Live Darshan — Gurdwara Webcams",
  description: "Watch live webcam feeds from Harmandir Sahib (Golden Temple) and Gurdwaras worldwide.",
};

export default function DarshanPage() {
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

      <DarshanClient feeds={GURDWARA_FEEDS} />

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
