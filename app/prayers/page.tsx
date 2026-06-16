import type { Metadata } from "next";
import { SIKH_PRAYERS } from "@/data/prayers";

export const metadata: Metadata = {
  title: "Sikh Prayers & Banis",
  description: "Explore all major Sikh prayers and Banis — Japji Sahib, Jaap Sahib, Ardas, Sukhmani Sahib and more, with descriptions and significance.",
};

const WHEN_LABEL: Record<string, { label: string; color: string }> = {
  morning:   { label: "Morning",   color: "bg-amber-100 text-amber-800" },
  evening:   { label: "Evening",   color: "bg-blue-100 text-blue-800" },
  night:     { label: "Night",     color: "bg-indigo-100 text-indigo-800" },
  anytime:   { label: "Anytime",   color: "bg-green-100 text-green-800" },
  ceremony:  { label: "Ceremony",  color: "bg-purple-100 text-purple-800" },
};

const TYPE_LABEL: Record<string, { label: string; color: string }> = {
  nitnem:   { label: "Nitnem",   color: "bg-amber-50 border-amber-200" },
  gurbani:  { label: "Gurbani",  color: "bg-blue-50 border-blue-200" },
  ardas:    { label: "Ardas",    color: "bg-green-50 border-green-200" },
  special:  { label: "Special",  color: "bg-purple-50 border-purple-200" },
};

export default function PrayersPage() {
  const nitnem = SIKH_PRAYERS.filter(p => p.type === "nitnem");
  const gurbani = SIKH_PRAYERS.filter(p => p.type === "gurbani");
  const ardas = SIKH_PRAYERS.filter(p => p.type === "ardas");
  const special = SIKH_PRAYERS.filter(p => p.type === "special");

  const sections = [
    { title: "Nitnem — Daily Prayers", desc: "Required daily prayers recited by initiated Sikhs (Amritdhari). Morning Nitnem consists of 5 Banis; evening and night prayers follow.", prayers: nitnem, color: "bg-amber-50 border-amber-200" },
    { title: "Gurbani — Scripture Prayers", desc: "Sacred hymns from the Guru Granth Sahib recited for specific occasions, reflection, and spiritual growth.", prayers: gurbani, color: "bg-blue-50 border-blue-200" },
    { title: "Ardas — The Sikh Prayer", desc: "The formal standing prayer recited at the conclusion of all religious ceremonies, Akhand Paths, and before/after any significant undertaking.", prayers: ardas, color: "bg-green-50 border-green-200" },
    { title: "Special Prayers & Banis", desc: "Additional prayers for ceremonies, healing, and special occasions in Sikh life.", prayers: special, color: "bg-purple-50 border-purple-200" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">📖</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Sikh Prayers & Banis
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gurbani — the sacred writings in the Guru Granth Sahib — forms the foundation of Sikh prayer.
          These prayers span thousands of years of spiritual wisdom and have been memorized and recited
          by Sikhs worldwide for centuries.
        </p>
      </div>

      {/* Japji Sahib featured */}
      {SIKH_PRAYERS.filter(p => p.id === "japji-sahib").map(prayer => (
        <div key={prayer.id} className="bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-4xl">☬</div>
            <div>
              <p className="text-amber-200 text-sm font-medium">Morning Prayer · Page 1–8 of Guru Granth Sahib</p>
              <h2 className="text-2xl font-bold">{prayer.name}</h2>
              <p className="text-amber-200 text-lg">{prayer.nameGurmukhi}</p>
            </div>
          </div>
          <blockquote className="border-l-2 border-amber-300 pl-4 mb-4">
            <p className="text-xl font-medium leading-relaxed" lang="pa">{prayer.excerpt}</p>
            <p className="text-amber-200 text-sm mt-1 italic">&ldquo;{prayer.excerptTranslation}&rdquo;</p>
          </blockquote>
          <p className="text-amber-100 leading-relaxed">{prayer.description}</p>
        </div>
      ))}

      {/* Prayer sections */}
      {sections.map(({ title, desc, prayers, color }) => {
        if (!prayers.length) return null;
        return (
          <section key={title} className="mb-10">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500 mt-1">{desc}</p>
            </div>
            <div className="space-y-4">
              {prayers.map(prayer => {
                const whenStyle = WHEN_LABEL[prayer.when] || WHEN_LABEL.anytime;
                return (
                  <article key={prayer.id} className={`rounded-xl border p-5 ${color}`}>
                    <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">{prayer.name}</h3>
                        <p className="text-sm text-amber-700 font-medium">{prayer.nameGurmukhi}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Composed by {prayer.composedBy}
                          {(prayer as Record<string,unknown>)["pageInGGS"] ? ` · SGGS Page ${(prayer as Record<string,unknown>)["pageInGGS"]}` : ""}
                          {(prayer as Record<string,unknown>)["totalVerses"] ? ` · ${(prayer as Record<string,unknown>)["totalVerses"]} verses` : ""}
                        </p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${whenStyle.color}`}>
                        {whenStyle.label}
                      </span>
                    </div>

                    {prayer.excerpt && (
                      <blockquote className="bg-white/60 rounded-lg p-3 mb-3 border-l-2 border-amber-400">
                        <p className="text-sm font-medium text-gray-800 mb-1" lang="pa">{prayer.excerpt}</p>
                        {prayer.excerptTranslation && (
                          <p className="text-xs text-gray-500 italic">&ldquo;{prayer.excerptTranslation}&rdquo;</p>
                        )}
                      </blockquote>
                    )}

                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{prayer.description}</p>

                    <div className="pt-2 border-t border-gray-200 mt-2">
                      <p className="text-xs font-semibold text-gray-600">Significance: <span className="font-normal text-gray-500">{prayer.significance}</span></p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Mool Mantar */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 mt-4">
        <h2 className="text-lg font-bold text-amber-300 mb-3">The Mool Mantar — Core of Sikh Belief</h2>
        <p className="text-2xl font-medium leading-loose mb-3" lang="pa" style={{ fontFamily: "'Noto Sans Gurmukhi', serif" }}>
          ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥
        </p>
        <p className="text-gray-300 italic text-sm leading-relaxed">
          &ldquo;One Universal Creator God. The Name Is Truth. Creative Being Personified.
          No Fear. No Hatred. Image of the Undying. Beyond Birth. Self-Existent.
          By Guru&apos;s Grace.&rdquo;
        </p>
        <p className="text-gray-400 text-xs mt-3">
          The Mool Mantar is the first composition in the Guru Granth Sahib, composed by Guru Nanak Dev Ji.
          It encapsulates the fundamental beliefs of Sikhism in one compact passage.
        </p>
      </div>
    </div>
  );
}
