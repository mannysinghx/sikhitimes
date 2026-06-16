import type { Metadata } from "next";
import HoroscopeClient from "@/components/horoscopes/HoroscopeClient";

export const metadata: Metadata = {
  title: "Horoscopes",
  description: "Daily and weekly horoscopes with a Sikh spiritual perspective.",
};

export default function HoroscopesPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Horoscopes</h1>
        <p className="text-gray-500 text-sm">{today}</p>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm">
          Horoscopes offered with a Sikh spiritual perspective — always remember that Waheguru&apos;s
          Hukam (divine will) is the true guide.
        </p>
      </div>

      <HoroscopeClient />

      {/* Sikh note */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 text-center">
        <strong>A note from SikhiTimes:</strong> In Sikhism, astrology is viewed as a guide to
        self-reflection, not a prediction of fate. Waheguru&apos;s Hukam (divine will) is supreme.
        These horoscopes are offered for light reflection only. &nbsp;☬
      </div>
    </div>
  );
}
