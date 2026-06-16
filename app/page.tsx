import Link from "next/link";
import { ArrowRight, Newspaper, BookOpen, Clock, Video, Users, PenTool, Shield, MapPin, Swords, Star, Globe } from "lucide-react";
import { SIKH_GURUS } from "@/data/gurus";
import { SIKH_HISTORY } from "@/data/history";
import { NOTABLE_SIKHS } from "@/data/notable-sikhs";
import { SIKH_STATS } from "@/data/sikh-facts";

// Quick stats for hero
const HERO_STATS = [
  { label: "Sikh Gurus", value: "10" },
  { label: "Sikhs Worldwide", value: "~30M" },
  { label: "SGGS Pages", value: "1,430" },
  { label: "Years of History", value: "550+" },
];

const SECTIONS = [
  {
    href: "/news",           icon: Newspaper,  title: "Punjab & World News",
    desc: "AI-fetched Sikh & Punjab news from across the globe, summarized and categorized.",
    color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600",
  },
  {
    href: "/hukumnama",      icon: BookOpen,   title: "Daily Hukumnama",
    desc: "Today's Hukumnama from Golden Temple — Gurmukhi and English.",
    color: "bg-amber-50 border-amber-200", iconColor: "text-amber-700",
  },
  {
    href: "/gurus",          icon: Star,       title: "The 10 Sikh Gurus",
    desc: "Detailed profiles, teachings, and contributions of all ten Sikh Gurus.",
    color: "bg-orange-50 border-orange-200", iconColor: "text-orange-700",
  },
  {
    href: "/history",        icon: Clock,      title: "Sikh History",
    desc: "Interactive timeline from 1469 to the present — 50+ key events.",
    color: "bg-purple-50 border-purple-200", iconColor: "text-purple-700",
  },
  {
    href: "/battles",        icon: Swords,     title: "Sikh Battles",
    desc: "28 major battles from Bhangani (1688) to Saragarhi (1897).",
    color: "bg-red-50 border-red-200", iconColor: "text-red-700",
  },
  {
    href: "/prayers",        icon: BookOpen,   title: "Prayers & Banis",
    desc: "Japji Sahib, Ardas, Sukhmani Sahib, and 14 Sikh prayers explained.",
    color: "bg-indigo-50 border-indigo-200", iconColor: "text-indigo-700",
  },
  {
    href: "/festivals",      icon: Star,       title: "Festivals & Gurpurabs",
    desc: "Vaisakhi, Bandi Chhor Divas, Hola Mohalla, and all Gurpurabs.",
    color: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-700",
  },
  {
    href: "/holy-sites",     icon: MapPin,     title: "Holy Sites & Gurdwaras",
    desc: "Five Takhts, Golden Temple, and 17 sacred Sikh sites worldwide.",
    color: "bg-teal-50 border-teal-200", iconColor: "text-teal-700",
  },
  {
    href: "/symbols",        icon: Shield,     title: "Sikh Symbols",
    desc: "Khanda, Ik Onkar, the Five Ks (Panj Kakaars), Dastar and more.",
    color: "bg-green-50 border-green-200", iconColor: "text-green-700",
  },
  {
    href: "/notable-sikhs",  icon: Users,      title: "Notable Sikhs",
    desc: "47 inspiring Sikh profiles — scientists, soldiers, artists, leaders.",
    color: "bg-pink-50 border-pink-200", iconColor: "text-pink-700",
  },
  {
    href: "/diaspora",       icon: Globe,      title: "Sikh Diaspora",
    desc: "30 million Sikhs across 8 countries — their communities and achievements.",
    color: "bg-sky-50 border-sky-200", iconColor: "text-sky-700",
  },
  {
    href: "/darshan",        icon: Video,      title: "Live Darshan",
    desc: "Live webcam feeds from Harmandir Sahib and Gurdwaras worldwide.",
    color: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-700",
  },
  {
    href: "/blogs",          icon: PenTool,    title: "AI Blogs",
    desc: "Daily AI-written articles on Sikh spirituality, health, and culture.",
    color: "bg-rose-50 border-rose-200", iconColor: "text-rose-700",
  },
  {
    href: "/horoscopes",     icon: Star,       title: "Horoscopes",
    desc: "Daily and weekly horoscopes with a Sikh spiritual perspective.",
    color: "bg-violet-50 border-violet-200", iconColor: "text-violet-700",
  },
  {
    href: "/community",      icon: Users,      title: "Community",
    desc: "Connect with Sikhs worldwide — channels, messages, and events.",
    color: "bg-cyan-50 border-cyan-200", iconColor: "text-cyan-700",
  },
];

// Featured Guru (rotate by day of year)
const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
const featuredGuru = SIKH_GURUS[dayOfYear % SIKH_GURUS.length];

// Featured historical event
const featuredEvent = SIKH_HISTORY[dayOfYear % SIKH_HISTORY.length];

// Featured notable Sikh
const featuredSikh = NOTABLE_SIKHS[dayOfYear % Math.min(NOTABLE_SIKHS.length, 47)];

const MOOL_MANTAR_LINES = [
  { gu: "ੴ ਸਤਿ ਨਾਮੁ", en: "One Universal Creator — Truth is His Name" },
  { gu: "ਕਰਤਾ ਪੁਰਖੁ", en: "The Creative Being Personified" },
  { gu: "ਨਿਰਭਉ ਨਿਰਵੈਰੁ", en: "No Fear, No Hatred" },
  { gu: "ਅਕਾਲ ਮੂਰਤਿ", en: "Undying, Beyond Time" },
  { gu: "ਅਜੂਨੀ ਸੈਭੰ", en: "Beyond Birth, Self-Existent" },
  { gu: "ਗੁਰ ਪ੍ਰਸਾਦਿ", en: "By Guru's Grace" },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-700 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center">
            <div className="text-7xl mb-4">☬</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
              <span className="text-amber-200">Sikhi</span>Times
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto mb-1 leading-relaxed">
              Your neutral, research-based home for everything Sikh.
            </p>
            <p className="text-sm text-amber-300 mb-8">
              550+ years of history · 30 million Sikhs · One platform
            </p>

            {/* Hero stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {HERO_STATS.map(({ label, value }) => (
                <div key={label} className="bg-white/15 rounded-xl px-5 py-3 text-center min-w-[90px]">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-amber-200">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/news" className="flex items-center gap-2 px-6 py-3 bg-white text-amber-800 font-semibold rounded-xl hover:bg-amber-50 transition-colors">
                Today&apos;s News <ArrowRight size={16} />
              </Link>
              <Link href="/hukumnama" className="flex items-center gap-2 px-6 py-3 border-2 border-amber-300 text-white font-semibold rounded-xl hover:bg-amber-800 transition-colors">
                Daily Hukumnama <BookOpen size={16} />
              </Link>
              <Link href="/darshan" className="flex items-center gap-2 px-6 py-3 border-2 border-amber-300 text-white font-semibold rounded-xl hover:bg-amber-800 transition-colors">
                Live Darshan <Video size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V10C1200 35 960 5 720 20C480 35 240 5 0 20V40Z" fill="rgb(249 250 251)" />
          </svg>
        </div>
      </section>

      {/* ── MOOL MANTAR STRIP ── */}
      <section className="bg-gray-900 text-white py-8 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 text-center uppercase tracking-widest mb-4">Mool Mantar — The Core of Sikh Belief</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {MOOL_MANTAR_LINES.map(({ gu, en }) => (
              <div key={gu} className="bg-white/5 rounded-xl p-3">
                <p className="text-base font-medium text-amber-300 mb-1" lang="pa">{gu}</p>
                <p className="text-xs text-gray-400 leading-snug">{en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GURU OF THE DAY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Guru of the day */}
          <div className="lg:col-span-1 bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-6">
            <p className="text-amber-200 text-xs font-semibold uppercase tracking-wide mb-3">Guru of the Day</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                {featuredGuru.id}
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">{featuredGuru.name}</h3>
                <p className="text-amber-200 text-xs">{featuredGuru.nameGurmukhi}</p>
              </div>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed mb-3 line-clamp-4">
              {featuredGuru.biography}
            </p>
            <blockquote className="border-l-2 border-amber-300 pl-3 text-xs text-amber-200 italic mb-4">
              &ldquo;{featuredGuru.keyTeaching}&rdquo;
            </blockquote>
            <Link href={`/gurus/${featuredGuru.id}`} className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
              Full Profile <ArrowRight size={12} />
            </Link>
          </div>

          {/* Historical event + Notable Sikh */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Historical event */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
              <p className="text-purple-600 text-xs font-semibold uppercase tracking-wide mb-2">From Sikh History</p>
              <p className="text-xs text-purple-500 font-bold mb-1">{featuredEvent.year}</p>
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{featuredEvent.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{featuredEvent.description}</p>
              <Link href="/history" className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:text-purple-900 mt-3">
                View Full Timeline <ArrowRight size={11} />
              </Link>
            </div>

            {/* Notable Sikh */}
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5">
              <p className="text-pink-600 text-xs font-semibold uppercase tracking-wide mb-2">Notable Sikh</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {featuredSikh.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{featuredSikh.name}</h3>
                  <p className="text-xs text-gray-500">{featuredSikh.field}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-pink-700 mb-1">{featuredSikh.achievement}</p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{featuredSikh.description}</p>
              <Link href="/notable-sikhs" className="inline-flex items-center gap-1 text-xs font-semibold text-pink-700 hover:text-pink-900 mt-3">
                See All Notable Sikhs <ArrowRight size={11} />
              </Link>
            </div>

            {/* Quick facts */}
            <div className="sm:col-span-2 bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-amber-700 text-xs font-semibold uppercase tracking-wide mb-3">Sikh Community by Numbers</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Sikhs in Canada", value: SIKH_STATS.inCanada },
                  { label: "Sikhs in UK", value: SIKH_STATS.inUK },
                  { label: "Sikhs in USA", value: SIKH_STATS.inUSA },
                  { label: "Golden Temple meals/day", value: SIKH_STATS.goldenTempleMealsDaily },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-bold text-amber-800">{String(value)}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SECTIONS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Everything on SikhiTimes</h2>
        <p className="text-gray-500 text-sm mb-6">{SECTIONS.length} sections packed with Sikh knowledge, news, and community</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {SECTIONS.map(({ href, icon: Icon, title, desc, color, iconColor }) => (
            <Link key={href} href={href} className="group">
              <div className={`h-full rounded-xl border p-4 ${color} hover:shadow-md transition-shadow`}>
                <Icon className={`mb-2 ${iconColor}`} size={20} />
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-amber-800 transition-colors">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SIKH GURUS STRIP ── */}
      <section className="bg-amber-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">The Ten Sikh Gurus</h2>
            <Link href="/gurus" className="text-amber-200 text-sm font-medium hover:text-white flex items-center gap-1">
              All Gurus <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {SIKH_GURUS.map(guru => (
              <Link key={guru.id} href={`/gurus/${guru.id}`} className="group text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors flex items-center justify-center text-lg font-bold mx-auto mb-1">
                  {guru.id}
                </div>
                <p className="text-xs text-amber-100 leading-tight">{guru.name.replace("Guru ", "").replace(" Ji", "")}</p>
                <p className="text-xs text-amber-300 mt-0.5 opacity-70">{guru.gurushipStart}–{guru.gurushipEnd}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS OF SIKHISM ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">The Five Pillars of Sikhism</h2>
        <p className="text-gray-500 text-sm text-center mb-6">Core principles taught by Guru Nanak Dev Ji</p>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { pillar: "Nam Japna", gu: "ਨਾਮ ਜਪਣਾ", icon: "🙏", desc: "Meditate on God's name through prayer and devotion (Nitnem)" },
            { pillar: "Kirat Karni", gu: "ਕਿਰਤ ਕਰਨੀ", icon: "⚒️", desc: "Earn an honest living through hard, ethical work" },
            { pillar: "Vand Chhakna", gu: "ਵੰਡ ਛਕਣਾ", icon: "🍽️", desc: "Share your earnings with those in need — generosity and service" },
            { pillar: "Seva", gu: "ਸੇਵਾ", icon: "🤝", desc: "Selfless service to God through service to humanity" },
            { pillar: "Sangat & Pangat", gu: "ਸੰਗਤ ਤੇ ਪੰਗਤ", icon: "👥", desc: "Holy congregation and sitting together equally to eat Langar" },
          ].map(({ pillar, gu, icon, desc }) => (
            <div key={pillar} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-0.5">{pillar}</h3>
              <p className="text-xs text-amber-700 font-medium mb-2">{gu}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK FACTS TICKER ── */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-4">Did You Know?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
            {[
              "The Golden Temple in Amritsar is open to people of ALL faiths, 24 hours a day, 365 days a year.",
              "21 Sikh soldiers at the Battle of Saragarhi (1897) held off 10,000+ Afghan tribesmen — their story was presented to the UK Parliament.",
              "Dr. Narinder Singh Kapany, a Sikh scientist, invented fiber optic technology — the foundation of the modern internet.",
            ].map(fact => (
              <div key={fact} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-amber-400 font-bold mr-1">☬</span>
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why SikhiTimes?</h2>
          <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
            The Sikh community deserves a media platform that reflects their values: truth, equality,
            and service. We built SikhiTimes to be that platform — free of political bias, kid-friendly,
            and powered by AI that always cites its sources. Built with deep respect for the Sikh faith
            and open to all who want to learn.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors text-sm">
            Learn about our mission <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
