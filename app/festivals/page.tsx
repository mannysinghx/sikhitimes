import type { Metadata } from "next";
import { SIKH_FESTIVALS } from "@/data/festivals";

export const metadata: Metadata = {
  title: "Sikh Festivals & Gurpurabs",
  description: "Explore all major Sikh festivals, Gurpurabs, and celebrations — their significance, history, and how they are observed worldwide.",
};

const TYPE_STYLE: Record<string, { bg: string; badge: string; icon: string }> = {
  gurpurab:    { bg: "bg-amber-50 border-amber-200",   badge: "bg-amber-100 text-amber-800",  icon: "☬" },
  religious:   { bg: "bg-blue-50 border-blue-200",     badge: "bg-blue-100 text-blue-800",    icon: "🙏" },
  cultural:    { bg: "bg-green-50 border-green-200",   badge: "bg-green-100 text-green-800",  icon: "🎉" },
  anniversary: { bg: "bg-purple-50 border-purple-200", badge: "bg-purple-100 text-purple-800", icon: "📖" },
};

export default function FestivalsPage() {
  const gurpurabs = SIKH_FESTIVALS.filter(f => f.type === "gurpurab");
  const others = SIKH_FESTIVALS.filter(f => f.type !== "gurpurab");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Sikh Festivals & Gurpurabs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gurpurabs are sacred anniversaries marking the birth or martyrdom of the Sikh Gurus.
          Alongside major festivals, they fill the Sikh calendar with celebration, remembrance, and devotion.
        </p>
      </div>

      {/* Vaisakhi featured */}
      {SIKH_FESTIVALS.filter(f => f.name === "Vaisakhi").map(festival => {
        const style = TYPE_STYLE[festival.type];
        return (
          <div key={festival.id} className="bg-gradient-to-br from-amber-700 to-orange-600 text-white rounded-2xl p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🌾</span>
              <div>
                <p className="text-amber-200 text-sm font-medium">{festival.date} · Featured Festival</p>
                <h2 className="text-2xl sm:text-3xl font-bold">{festival.name}</h2>
                <p className="text-amber-200 text-lg">{festival.nameGurmukhi}</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed mb-3 text-base">{festival.description}</p>
            <div className="bg-white/10 rounded-xl p-4 mt-3">
              <p className="text-amber-200 text-sm font-semibold mb-1">How it&apos;s celebrated:</p>
              <p className="text-white text-sm leading-relaxed">{festival.howCelebrated}</p>
            </div>
          </div>
        );
      })}

      {/* Other major festivals */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Major Festivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {others.map(festival => {
          const style = TYPE_STYLE[festival.type] || TYPE_STYLE.religious;
          return (
            <article key={festival.id} className={`rounded-xl border p-5 ${style.bg}`}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-2xl">{style.icon}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${style.badge}`}>
                  {festival.type.replace("-", " ")}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">{festival.name}</h3>
              <p className="text-sm text-amber-700 font-medium mb-1">{festival.nameGurmukhi}</p>
              <p className="text-xs text-gray-500 mb-3 font-medium">{festival.date}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{festival.description}</p>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-0.5">Celebrations:</p>
                <p className="text-xs text-gray-500 leading-relaxed">{festival.howCelebrated}</p>
              </div>
              {festival.relatedGuru && (
                <p className="text-xs text-amber-700 font-medium mt-2">Related: {festival.relatedGuru}</p>
              )}
            </article>
          );
        })}
      </div>

      {/* Gurpurabs */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Gurpurabs — Guru Anniversaries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gurpurabs.filter(f => f.name !== "Vaisakhi").map(festival => (
          <article key={festival.id} className="bg-white rounded-xl border border-amber-100 shadow-sm p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
                ☬
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">{festival.name}</h3>
                <p className="text-xs text-amber-700 font-medium">{festival.nameGurmukhi}</p>
                <p className="text-xs text-gray-400 mt-0.5">{festival.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{festival.significance}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{festival.howCelebrated}</p>
          </article>
        ))}
      </div>

      {/* How Gurpurabs are observed */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">How Gurpurabs are Observed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          {[
            { title: "Akhand Path", desc: "Continuous, uninterrupted reading of the entire Guru Granth Sahib (1,430 pages) completed over 48 hours, ending on the Gurpurab day." },
            { title: "Nagar Kirtan", desc: "Procession through city streets with the Guru Granth Sahib borne on a palanquin, accompanied by kirtan (devotional singing) and seva volunteers." },
            { title: "Langar", desc: "Free community meals served to everyone regardless of faith, caste, or status — thousands or even millions of people served on major Gurpurabs." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
