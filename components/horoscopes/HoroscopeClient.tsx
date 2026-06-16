"use client";

import { useState } from "react";

const ZODIAC_SIGNS = [
  { sign: "aries",       name: "Aries",       symbol: "♈", dates: "Mar 21 – Apr 19", gurmukhi: "ਮੇਖ" },
  { sign: "taurus",      name: "Taurus",       symbol: "♉", dates: "Apr 20 – May 20", gurmukhi: "ਬ੍ਰਿਖ" },
  { sign: "gemini",      name: "Gemini",       symbol: "♊", dates: "May 21 – Jun 20", gurmukhi: "ਮਿਥੁਨ" },
  { sign: "cancer",      name: "Cancer",       symbol: "♋", dates: "Jun 21 – Jul 22", gurmukhi: "ਕਰਕ" },
  { sign: "leo",         name: "Leo",          symbol: "♌", dates: "Jul 23 – Aug 22", gurmukhi: "ਸਿੰਘ" },
  { sign: "virgo",       name: "Virgo",        symbol: "♍", dates: "Aug 23 – Sep 22", gurmukhi: "ਕੰਨਿਆ" },
  { sign: "libra",       name: "Libra",        symbol: "♎", dates: "Sep 23 – Oct 22", gurmukhi: "ਤੁਲਾ" },
  { sign: "scorpio",     name: "Scorpio",      symbol: "♏", dates: "Oct 23 – Nov 21", gurmukhi: "ਬਿਛਿਆ" },
  { sign: "sagittarius", name: "Sagittarius",  symbol: "♐", dates: "Nov 22 – Dec 21", gurmukhi: "ਧਨੁ" },
  { sign: "capricorn",   name: "Capricorn",    symbol: "♑", dates: "Dec 22 – Jan 19", gurmukhi: "ਮਕਰ" },
  { sign: "aquarius",    name: "Aquarius",     symbol: "♒", dates: "Jan 20 – Feb 18", gurmukhi: "ਕੁੰਭ" },
  { sign: "pisces",      name: "Pisces",       symbol: "♓", dates: "Feb 19 – Mar 20", gurmukhi: "ਮੀਨ" },
];

const PLACEHOLDER = "Your daily guidance will appear here once the AI horoscope agent is active. Remember that in Sikhi, we believe in the Hukam (God's will) above all — use horoscopes as light reflection, not as fate.";

const PERIODS = ["Daily", "Weekly", "Monthly"] as const;
type Period = typeof PERIODS[number];

export default function HoroscopeClient() {
  const [period, setPeriod] = useState<Period>("Daily");

  return (
    <>
      {/* Period tabs */}
      <div className="flex gap-2 justify-center mb-8">
        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
              period === p
                ? "bg-amber-700 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Zodiac grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {ZODIAC_SIGNS.map(({ sign, name, symbol, dates, gurmukhi }) => (
          <div
            key={sign}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all p-4 cursor-pointer group"
          >
            <div className="text-3xl mb-2">{symbol}</div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                {name}
              </h3>
              <p className="text-xs text-amber-700 font-medium">{gurmukhi}</p>
              <p className="text-xs text-gray-400 mt-0.5">{dates}</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
              {PLACEHOLDER}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
