import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horoscopes",
  description: "Daily and weekly horoscopes with a Sikh spiritual perspective.",
};

const ZODIAC_SIGNS = [
  { sign: "aries", name: "Aries", symbol: "♈", dates: "Mar 21 – Apr 19", gurmukhi: "ਮੇਖ" },
  { sign: "taurus", name: "Taurus", symbol: "♉", dates: "Apr 20 – May 20", gurmukhi: "ਬ੍ਰਿਖ" },
  { sign: "gemini", name: "Gemini", symbol: "♊", dates: "May 21 – Jun 20", gurmukhi: "ਮਿਥੁਨ" },
  { sign: "cancer", name: "Cancer", symbol: "♋", dates: "Jun 21 – Jul 22", gurmukhi: "ਕਰਕ" },
  { sign: "leo", name: "Leo", symbol: "♌", dates: "Jul 23 – Aug 22", gurmukhi: "ਸਿੰਘ" },
  { sign: "virgo", name: "Virgo", symbol: "♍", dates: "Aug 23 – Sep 22", gurmukhi: "ਕੰਨਿਆ" },
  { sign: "libra", name: "Libra", symbol: "♎", dates: "Sep 23 – Oct 22", gurmukhi: "ਤੁਲਾ" },
  { sign: "scorpio", name: "Scorpio", symbol: "♏", dates: "Oct 23 – Nov 21", gurmukhi: "ਬਿਛਿਆ" },
  { sign: "sagittarius", name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21", gurmukhi: "ਧਨੁ" },
  { sign: "capricorn", name: "Capricorn", symbol: "♑", dates: "Dec 22 – Jan 19", gurmukhi: "ਮਕਰ" },
  { sign: "aquarius", name: "Aquarius", symbol: "♒", dates: "Jan 20 – Feb 18", gurmukhi: "ਕੁੰਭ" },
  { sign: "pisces", name: "Pisces", symbol: "♓", dates: "Feb 19 – Mar 20", gurmukhi: "ਮੀਨ" },
];

// Placeholder horoscope content (replaced by AI-generated content once API keys are set)
const PLACEHOLDER = "Your daily guidance will appear here once the AI horoscope agent is active. Remember that in Sikhi, we believe in the Hukam (God's will) above all — use horoscopes as light reflection, not as fate.";

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

      {/* Period tabs */}
      <div className="flex gap-2 justify-center mb-8">
        {["Daily", "Weekly", "Monthly"].map((period, i) => (
          <button
            key={period}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
              i === 0
                ? "bg-amber-700 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400"
            }`}
          >
            {period}
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

      {/* Sikh note */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 text-center">
        <strong>A note from SikhiTimes:</strong> In Sikhism, astrology is viewed as a guide to
        self-reflection, not a prediction of fate. Waheguru&apos;s Hukam (divine will) is supreme.
        These horoscopes are offered for light reflection only. &nbsp;☬
      </div>
    </div>
  );
}
