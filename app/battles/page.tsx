import type { Metadata } from "next";
import { SIKH_BATTLES } from "@/data/battles";

export const metadata: Metadata = {
  title: "Sikh Battles & Military History",
  description: "A comprehensive record of Sikh battles from 1688 to 1897 — from Guru Gobind Singh Ji to the legendary Battle of Saragarhi.",
};

const CATEGORY_META: Record<string, { label: string; color: string; dotColor: string; desc: string }> = {
  "guru-period":    { label: "Guru Period",     color: "bg-amber-50 border-amber-300",  dotColor: "bg-amber-500",  desc: "Battles fought under the Sikh Gurus (1688–1708)" },
  "banda-bahadur":  { label: "Banda Bahadur",   color: "bg-orange-50 border-orange-300", dotColor: "bg-orange-500", desc: "Banda Singh Bahadur's campaigns (1708–1716)" },
  "misl-era":       { label: "Misl Era",         color: "bg-blue-50 border-blue-300",    dotColor: "bg-blue-500",   desc: "Sikh confederacies resist Mughal/Afghan rule" },
  "sikh-empire":    { label: "Sikh Empire",      color: "bg-green-50 border-green-300",  dotColor: "bg-green-600",  desc: "Expansion of the Sikh Empire (1799–1839)" },
  "anglo-sikh":     { label: "Anglo-Sikh Wars",  color: "bg-red-50 border-red-300",      dotColor: "bg-red-600",    desc: "Two Anglo-Sikh Wars (1845–1849)" },
  "colonial":       { label: "Colonial Era",     color: "bg-purple-50 border-purple-300", dotColor: "bg-purple-600", desc: "Sikhs defending the frontier under British India" },
};

const OUTCOME_BADGE: Record<string, string> = {
  victory: "bg-green-100 text-green-800",
  defeat:  "bg-red-100 text-red-800",
  stalemate: "bg-gray-100 text-gray-700",
  pyrrhic: "bg-yellow-100 text-yellow-800",
};

export default function BattlesPage() {
  const categories = Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>;
  const stats = {
    total: SIKH_BATTLES.length,
    victories: SIKH_BATTLES.filter(b => b.outcome === "victory").length,
    defeats:   SIKH_BATTLES.filter(b => b.outcome === "defeat").length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Sikh Military History
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From the first battle at Bhangani in 1688 to the legendary last stand at Saragarhi in 1897,
          Sikhs have demonstrated unparalleled courage in defence of their faith and people.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Battles", value: stats.total },
          { label: "Victories", value: stats.victories, color: "text-green-700" },
          { label: "Defeats", value: stats.defeats, color: "text-red-700" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
            <div className={`text-3xl font-bold ${color || "text-amber-800"}`}>{value}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => {
          const m = CATEGORY_META[cat];
          return (
            <div key={cat} className="flex items-center gap-1.5 text-xs text-gray-600">
              <span className={`w-2.5 h-2.5 rounded-full ${m.dotColor}`} />
              {m.label}
            </div>
          );
        })}
      </div>

      {/* Battles by category */}
      {categories.map(cat => {
        const battles = SIKH_BATTLES.filter(b => b.category === cat);
        if (!battles.length) return null;
        const m = CATEGORY_META[cat];
        return (
          <section key={cat} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-3 h-3 rounded-full ${m.dotColor}`} />
              <h2 className="text-xl font-bold text-gray-900">{m.label}</h2>
              <span className="hidden sm:inline text-sm text-gray-400">— {m.desc}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {battles.map(battle => (
                <article key={battle.id} className={`rounded-xl border p-5 ${m.color}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-0.5">{battle.year}</div>
                      <h3 className="font-bold text-gray-900 leading-snug">{battle.name}</h3>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full capitalize ${OUTCOME_BADGE[battle.outcome] || "bg-gray-100 text-gray-700"}`}>
                      {battle.outcome}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div>
                      <span className="text-gray-400">Sikh Commander: </span>
                      <span className="font-medium text-gray-700">{battle.commander}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Opponent: </span>
                      <span className="font-medium text-gray-700">{battle.opponent}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Location: </span>
                      <span className="font-medium text-gray-700">{battle.location}</span>
                    </div>
                    {battle.casualties && (
                      <div>
                        <span className="text-gray-400">Casualties: </span>
                        <span className="font-medium text-gray-700">{battle.casualties}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{battle.description}</p>

                  <div className="pt-2 border-t border-current border-opacity-20">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Significance: </span>
                      {battle.significance}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      {/* Saragarhi callout */}
      <div className="mt-4 bg-gradient-to-br from-amber-800 to-red-900 text-white rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-3">Battle of Saragarhi — September 12, 1897</h2>
        <p className="text-amber-100 leading-relaxed mb-3">
          Twenty-one Sikhs of the 36th Sikh Regiment, under Havildar Ishar Singh, held off an estimated
          10,000–12,000 Afghan tribesmen at the signal post of Saragarhi for over seven hours.
          Not one soldier surrendered. All 21 were killed — but not before killing hundreds of attackers.
        </p>
        <p className="text-amber-200 text-sm">
          The British Parliament rose in a standing ovation to pay tribute. Their story is listed by
          UNESCO as one of the eight most heroic last stands in military history.
        </p>
      </div>
    </div>
  );
}
