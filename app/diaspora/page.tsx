import type { Metadata } from "next";
import { SIKH_STATS, SIKH_FACTS } from "@/data/sikh-facts";

export const metadata: Metadata = {
  title: "Sikh Diaspora & Global Community",
  description: "Explore the global Sikh diaspora — population statistics, community achievements, and the worldwide reach of the Sikh community.",
};

const DIASPORA_COUNTRIES = [
  {
    country: "Canada",
    flag: "🇨🇦",
    population: "770,000+",
    percentage: "2% of Canada's population",
    notable: "Jagmeet Singh (NDP Leader), Harjit Sajjan (Minister of Defence), Anita Anand (Minister of Finance)",
    cities: "Brampton, Surrey (BC), Toronto, Calgary, Edmonton",
    fact: "Canada has the largest Sikh population outside of India, and Brampton is often called 'Bramladesh' for its thriving Punjabi-Sikh community.",
    color: "bg-red-50 border-red-200",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    population: "430,000+",
    percentage: "0.6% of UK population",
    notable: "Lord Indarjit Singh (House of Lords), Tanmanjeet Singh Dhesi (MP), Preet Kaur Gill (MP)",
    cities: "Southall (London), Birmingham, Wolverhampton, Leicester",
    fact: "Sikhs have been in the UK since the late 19th century. Southall in West London is the cultural heart of Britain's Sikh community, known as 'Little Punjab.'",
    color: "bg-blue-50 border-blue-200",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    population: "500,000+",
    percentage: "0.15% of US population",
    notable: "Dalip Singh Saund (first Sikh in US Congress, 1956), Nikki Haley, Preet Bharara",
    cities: "Fremont (CA), Yuba City (CA), New York, Houston, Chicago",
    fact: "Yuba City, California hosts one of the largest Sikh Nagar Kirtans (processions) outside India, drawing over 100,000 attendees each year.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    population: "210,000+",
    percentage: "0.8% of Australia's population",
    notable: "Dave Sharma, many community leaders in Victoria and NSW",
    cities: "Melbourne, Sydney, Brisbane, Perth",
    fact: "Australia's Sikh community is one of the fastest-growing in the world, doubling in size between 2011 and 2021.",
    color: "bg-green-50 border-green-200",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    population: "70,000+",
    percentage: "Largest Sikh community in continental Europe",
    notable: "Known for agricultural work in Emilia-Romagna; Gurdwara Guru Nanak Darbar in Novellara",
    cities: "Novellara, Reggio Emilia, Cremona",
    fact: "The town of Novellara in Emilia-Romagna has a significant Sikh community — Sikhs are key workers in Italy's famous Parmigiano-Reggiano cheese industry.",
    color: "bg-green-50 border-green-200",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    population: "40,000+",
    percentage: "Growing community",
    notable: "Active community in Auckland, Wellington",
    cities: "Auckland, Wellington, Hamilton, Christchurch",
    fact: "New Zealand's Sikh community is well-established with over 40 Gurdwaras, and played a key role in disaster relief after the Christchurch earthquake.",
    color: "bg-teal-50 border-teal-200",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    population: "15,000+",
    percentage: "0.3% of Singapore's population",
    notable: "Sikhs have served in Singapore's military and police since colonial times",
    cities: "Singapore City",
    fact: "Sikhs have been in Singapore since 1819 when Sir Stamford Raffles founded the city. The Central Sikh Temple in Towner Road has served the community for over 100 years.",
    color: "bg-amber-50 border-amber-200",
  },
  {
    country: "East Africa",
    flag: "🌍",
    population: "20,000+",
    percentage: "Kenya, Uganda, Tanzania",
    notable: "Historic presence since railway construction in colonial era",
    cities: "Nairobi, Mombasa, Kampala, Dar es Salaam",
    fact: "Sikhs came to East Africa in the 1890s as skilled artisans to help build the Uganda Railway. Their descendants built thriving communities that still exist today.",
    color: "bg-orange-50 border-orange-200",
  },
];

export default function DiasporaPage() {
  const militaryFacts = SIKH_FACTS.filter(f => f.category === "Military");
  const generalFacts = SIKH_FACTS.filter(f => f.category !== "Military").slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">🌍</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Sikh Diaspora & Global Community
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          With ~30 million Sikhs worldwide, the Sikh diaspora has built thriving communities across
          every continent. Known for their work ethic, service to others, and distinctive identity,
          Sikhs have become an integral part of societies worldwide.
        </p>
      </div>

      {/* Global stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {[
          { label: "Worldwide Sikhs", value: SIKH_STATS.worldwideSikhs, icon: "🌍" },
          { label: "In India", value: SIKH_STATS.inIndia, icon: "🇮🇳" },
          { label: "In Canada", value: SIKH_STATS.inCanada, icon: "🇨🇦" },
          { label: "In UK", value: SIKH_STATS.inUK, icon: "🇬🇧" },
          { label: "In USA", value: SIKH_STATS.inUSA, icon: "🇺🇸" },
          { label: "In Australia", value: SIKH_STATS.inAustralia, icon: "🇦🇺" },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-lg font-bold text-amber-800">{value}</div>
            <div className="text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Country cards */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Sikh Communities Around the World</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {DIASPORA_COUNTRIES.map(c => (
          <article key={c.country} className={`rounded-xl border p-5 ${c.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{c.flag}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{c.country}</h3>
                <p className="text-sm text-gray-500">{c.population} · {c.percentage}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{c.fact}</p>
            <div className="space-y-1.5 text-xs text-gray-600">
              <div><span className="font-semibold">Major cities: </span>{c.cities}</div>
              <div><span className="font-semibold">Notable Sikhs: </span>{c.notable}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Remarkable facts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Remarkable Sikh Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIKH_FACTS.slice(0, 12).map(fact => (
            <div key={fact.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 flex-shrink-0">
                  {fact.category}
                </span>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-1">{fact.fact}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{fact.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service tradition */}
      <div className="bg-amber-700 text-white rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-3">Seva — A Global Tradition of Service</h2>
        <p className="text-amber-100 leading-relaxed mb-4">
          Wherever Sikhs settle, Seva (selfless service) comes with them. During the COVID-19 pandemic,
          Sikh Gurdwaras worldwide became food distribution hubs, serving millions of free meals.
          After major disasters — from Hurricane Katrina to the Turkey-Syria earthquake — Sikh volunteers
          have been among the first to arrive and last to leave.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Langar", desc: "Free food served at every Gurdwara, every day, to anyone who walks in — regardless of faith, caste, or status." },
            { title: "Khalsa Aid", desc: "International humanitarian organization providing disaster relief worldwide, staffed entirely by Sikh volunteers." },
            { title: "United Sikhs", desc: "A UN-affiliated organization providing legal aid, disaster relief, and humanitarian assistance in 24+ countries." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/15 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-amber-100 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
