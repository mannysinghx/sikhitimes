import type { Metadata } from "next";
import { SIKH_SYMBOLS } from "@/data/symbols";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Sikh Symbols & Articles of Faith",
  description: "Explore the symbols of Sikhism — the Khanda, Ik Onkar, the Five Ks (Panj Kakaars), the Dastar, Langar, and more.",
};

const TYPE_STYLE: Record<string, { bg: string; badge: string }> = {
  emblem:           { bg: "bg-amber-50 border-amber-200",   badge: "bg-amber-700 text-white" },
  "article-of-faith": { bg: "bg-blue-50 border-blue-200",  badge: "bg-blue-700 text-white" },
  flag:             { bg: "bg-orange-50 border-orange-200", badge: "bg-orange-600 text-white" },
  greeting:         { bg: "bg-green-50 border-green-200",   badge: "bg-green-700 text-white" },
  concept:          { bg: "bg-purple-50 border-purple-200", badge: "bg-purple-700 text-white" },
};

export default function SymbolsPage() {
  const emblems = SIKH_SYMBOLS.filter(s => s.type === "emblem" || s.type === "flag");
  const articles = SIKH_SYMBOLS.filter(s => s.type === "article-of-faith");
  const concepts = SIKH_SYMBOLS.filter(s => s.type === "concept" || s.type === "greeting");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Sikh Symbols & Identity
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sikh identity is expressed through sacred symbols, articles of faith, and core concepts
            that have united the Khalsa community since 1699. Every symbol carries deep spiritual meaning
            rooted in Gurbani and the Sikh way of life.
          </p>
        </div>
      </FadeIn>

      {/* Emblems */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sikh Emblems & Flag</h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {emblems.map(symbol => {
            const style = TYPE_STYLE[symbol.type];
            return (
              <StaggerItem key={symbol.id}>
                <HoverCard>
                  <article className={`rounded-2xl border p-6 text-center ${style.bg}`}>
                    {symbol.symbol && (
                      <div className="text-6xl mb-3">{symbol.symbol}</div>
                    )}
                    <h3 className="font-bold text-gray-900 text-lg mb-0.5">{symbol.name}</h3>
                    <p className="text-amber-700 font-medium text-sm mb-3">{symbol.nameGurmukhi}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{symbol.description}</p>
                    <p className="text-xs text-gray-400 mt-3 font-medium italic">{symbol.significance}</p>
                    {symbol.usedSince && (
                      <p className="text-xs text-gray-400 mt-1">Used since: {symbol.usedSince}</p>
                    )}
                  </article>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Panj Kakaars */}
      <section className="mb-10">
        <FadeIn>
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 sm:p-8 mb-5">
            <h2 className="text-2xl font-bold mb-2">Panj Kakaars — The Five Articles of Faith</h2>
            <p className="text-blue-100 leading-relaxed">
              On Vaisakhi 1699, Guru Gobind Singh Ji instituted the Panj Kakaars (Five Ks) as the
              mandatory articles of faith for all initiated Khalsa Sikhs. Each &ldquo;K&rdquo; begins with
              &ldquo;Ka&rdquo; in Punjabi and carries deep spiritual significance.
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {articles.map((symbol, i) => {
            const kakaars = ["Kesh", "Kara", "Kanga", "Kachera", "Kirpan"];
            const icons = ["💈", "⭕", "🪮", "👕", "⚔️"];
            return (
              <StaggerItem key={symbol.id}>
                <HoverCard>
                  <article className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 text-center">
                    <div className="text-3xl mb-2">{icons[i] || "☬"}</div>
                    <div className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                      K{i + 1}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{symbol.name}</h3>
                    <p className="text-xs text-blue-700 font-medium mb-2">{symbol.nameGurmukhi}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{symbol.description}</p>
                    <p className="text-xs text-gray-400 mt-2 italic">{symbol.significance}</p>
                  </article>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Concepts & Greetings */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Core Sikh Concepts & Greetings</h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map(symbol => {
            const style = TYPE_STYLE[symbol.type] || TYPE_STYLE.concept;
            return (
              <StaggerItem key={symbol.id}>
                <HoverCard>
                  <article className={`rounded-xl border p-5 ${style.bg}`}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{symbol.name}</h3>
                        <p className="text-xs text-amber-700 font-medium">{symbol.nameGurmukhi}</p>
                      </div>
                      {symbol.symbol && (
                        <span className="text-2xl flex-shrink-0">{symbol.symbol}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{symbol.description}</p>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 italic">{symbol.significance}</p>
                    </div>
                  </article>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Turban section */}
      <FadeIn>
      <div className="bg-amber-700 text-white rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-3">The Dastar — The Sikh Turban</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <p className="text-amber-100 leading-relaxed">
            The Dastar (turban) is one of the most visible symbols of Sikh identity worldwide.
            While not one of the five Ks, it is considered an integral part of Sikh identity and
            is worn to protect the Kesh (uncut hair). Different styles of turbans carry meaning —
            the Patiala turban, the Hazuri style, the Nok-style, and others identify regional and
            personal traditions.
          </p>
          <div>
            <h3 className="font-semibold text-amber-200 mb-2 text-sm">What the Dastar represents:</h3>
            <ul className="space-y-1 text-sm text-amber-100">
              {[
                "Sovereignty and dignity",
                "Commitment to the Sikh faith",
                "Honour and respect",
                "Protection of Kesh (uncut hair)",
                "Service to the Guru Granth Sahib",
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
