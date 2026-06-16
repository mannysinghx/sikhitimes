import type { Metadata } from "next";
import { SIKH_HOLY_SITES } from "@/data/holy-sites";
import { MapPin, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sikh Holy Sites & Gurdwaras",
  description: "A guide to the Five Takhts and major Gurdwaras of Sikhism — their history, significance, and how to visit.",
};

const TYPE_STYLE: Record<string, { bg: string; badge: string; label: string }> = {
  "takht":                { bg: "bg-amber-50 border-amber-300",  badge: "bg-amber-700 text-white",        label: "Takht" },
  "historical-gurdwara":  { bg: "bg-blue-50 border-blue-200",   badge: "bg-blue-700 text-white",          label: "Historical" },
  "gurdwara":             { bg: "bg-green-50 border-green-200",  badge: "bg-green-700 text-white",         label: "Gurdwara" },
  "birthplace":           { bg: "bg-orange-50 border-orange-200", badge: "bg-orange-600 text-white",       label: "Birthplace" },
};

const COUNTRY_FLAG: Record<string, string> = {
  India: "🇮🇳",
  Pakistan: "🇵🇰",
  India_Himachal: "🇮🇳",
  India_Bihar: "🇮🇳",
  India_Maharashtra: "🇮🇳",
};

export default function HolySitesPage() {
  const takhts = SIKH_HOLY_SITES.filter(s => s.type === "takht");
  const historicalGurdwaras = SIKH_HOLY_SITES.filter(s => s.type === "historical-gurdwara");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">🛕</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Sikh Holy Sites & Gurdwaras
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gurdwaras (literally "doorway to the Guru") are places of Sikh worship and community gathering,
          found in over 100 countries. The Five Takhts are the highest seats of Sikh authority,
          and Harmandir Sahib is the holiest of all shrines.
        </p>
      </div>

      {/* Golden Temple featured */}
      {SIKH_HOLY_SITES.filter(s => s.id === "harmandir-sahib").map(site => (
        <div key={site.id} className="bg-gradient-to-br from-amber-600 to-yellow-600 text-white rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">🌟</div>
            <div>
              <p className="text-amber-200 text-sm font-medium">Most Sacred Sikh Shrine · Amritsar, Punjab</p>
              <h2 className="text-2xl sm:text-3xl font-bold">{site.name}</h2>
              {site.nameGurmukhi && <p className="text-amber-200 text-lg">{site.nameGurmukhi}</p>}
            </div>
          </div>
          <p className="text-amber-100 leading-relaxed mb-4">{site.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: "👥", label: "Daily Visitors", value: "100,000+" },
              { icon: "🍽️", label: "Free Meals Daily", value: "100,000+" },
              { icon: "📅", label: "Open", value: "24/7, 365 days" },
              { icon: "🌍", label: "Faith Required", value: "None — all welcome" },
              { icon: "📅", label: "Established", value: site.established },
              { icon: "💛", label: "Gold used", value: "~750 kg on dome" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">{icon}</div>
                <div className="text-white font-semibold text-sm">{value}</div>
                <div className="text-amber-200 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Five Takhts */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Star className="text-amber-700" size={22} />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">The Five Takhts</h2>
            <p className="text-sm text-gray-500">Highest seats of Sikh temporal and spiritual authority</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {takhts.map((site, i) => (
            <article key={site.id} className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="bg-amber-700 text-white p-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white text-amber-800 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="font-semibold text-sm">Takht #{i + 1}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">{site.name}</h3>
                {site.nameGurmukhi && <p className="text-xs text-amber-700 font-medium mb-2">{site.nameGurmukhi}</p>}
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                  <MapPin size={11} />
                  <span>{site.city}, {site.country}</span>
                </div>
                <p className="text-xs font-semibold text-gray-600 mb-1">{site.significance}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{site.description}</p>
                {site.established && (
                  <p className="text-xs text-gray-400 mt-2">Established: {site.established}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Historical Gurdwaras */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Major Historical Gurdwaras</h2>
        <p className="text-sm text-gray-500 mb-6">Sacred sites connected to key events in Sikh history</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {historicalGurdwaras.filter(s => s.id !== "harmandir-sahib").map(site => {
            const flag = COUNTRY_FLAG[site.country] || "🌍";
            return (
              <article key={site.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 leading-snug">{site.name}</h3>
                    {site.nameGurmukhi && <p className="text-xs text-amber-700 font-medium">{site.nameGurmukhi}</p>}
                  </div>
                  <span className="text-xl flex-shrink-0">{flag}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                  <MapPin size={10} />
                  <span>{site.city}, {site.region}, {site.country}</span>
                </div>
                {site.visitorsPerYear && (
                  <div className="flex items-center gap-1 text-xs text-blue-600 mb-2">
                    <Users size={10} />
                    <span>{site.visitorsPerYear} visitors/year</span>
                  </div>
                )}
                <p className="text-xs font-semibold text-amber-700 mb-2">{site.significance}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{site.description}</p>
                {site.established && (
                  <p className="text-xs text-gray-400 mt-2">Established: {site.established}</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Info box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="font-bold text-gray-900 mb-3">Visiting a Gurdwara</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[
            { title: "Cover your head", desc: "All visitors — of any faith — must cover their head as a sign of respect. Head coverings are provided." },
            { title: "Remove shoes", desc: "Shoes are removed before entering and stored in the shoe room (jootiyan). Socks are fine." },
            { title: "Wash hands", desc: "Wash your feet and hands at the entrance. At Harmandir Sahib, you wade through the sacred sarovar entrance." },
            { title: "Langar is free", desc: "All Gurdwaras serve free food (Langar) to everyone. You are always welcome to eat, regardless of your faith." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-3 border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-1 text-xs uppercase tracking-wide">{title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
