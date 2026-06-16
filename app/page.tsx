import Link from "next/link";
import { ArrowRight, Newspaper, BookOpen, Clock, Video, Users, PenTool } from "lucide-react";

const FEATURE_CARDS = [
  {
    href: "/news",
    icon: Newspaper,
    title: "Punjab & World News",
    desc: "AI-fetched Sikh & Punjab news from across the globe, summarized and categorized.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    href: "/hukumnama",
    icon: BookOpen,
    title: "Daily Hukumnama",
    desc: "Today's Hukumnama from Sri Darbar Sahib (Golden Temple), Amritsar — in Gurmukhi & English.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-700",
  },
  {
    href: "/gurus",
    icon: BookOpen,
    title: "The 10 Sikh Gurus",
    desc: "Detailed profiles, teachings, and contributions of all ten Sikh Gurus.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-700",
  },
  {
    href: "/darshan",
    icon: Video,
    title: "Live Darshan",
    desc: "Live webcam feeds from Harmandir Sahib and Gurdwaras worldwide.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
  },
  {
    href: "/history",
    icon: Clock,
    title: "Sikh History",
    desc: "An interactive timeline of Sikh history from 1469 to the present day.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-700",
  },
  {
    href: "/community",
    icon: Users,
    title: "Community",
    desc: "Connect with Sikhs worldwide. Messaging, channels, and events — all in one place.",
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-700",
  },
  {
    href: "/blogs",
    icon: PenTool,
    title: "AI Blogs",
    desc: "Fresh articles on Sikh spirituality, health, culture, and community — written daily by AI.",
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-700",
  },
  {
    href: "/horoscopes",
    icon: Clock,
    title: "Horoscopes",
    desc: "Daily and weekly horoscopes for all 12 signs with a Sikh spiritual perspective.",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-700",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-800 via-amber-700 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center">
            <div className="text-6xl mb-4">☬</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-amber-200">Sikhi</span>Times
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto mb-2 leading-relaxed">
              Your neutral, research-based home for everything Sikh.
            </p>
            <p className="text-sm text-amber-200 mb-8">
              News · History · Gurus · Hukumnama · Community · Live Darshan
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/news"
                className="flex items-center gap-2 px-6 py-3 bg-white text-amber-800 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
              >
                Today&apos;s News <ArrowRight size={16} />
              </Link>
              <Link
                href="/hukumnama"
                className="flex items-center gap-2 px-6 py-3 border-2 border-amber-300 text-white font-semibold rounded-xl hover:bg-amber-800 transition-colors"
              >
                Daily Hukumnama <BookOpen size={16} />
              </Link>
              <Link
                href="/darshan"
                className="flex items-center gap-2 px-6 py-3 border-2 border-amber-300 text-white font-semibold rounded-xl hover:bg-amber-800 transition-colors"
              >
                Live Darshan <Video size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 40H1440V10C1200 35 960 5 720 20C480 35 240 5 0 20V40Z"
              fill="rgb(249 250 251)"
            />
          </svg>
        </div>
      </section>

      {/* Mission statement */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 text-center">
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          SikhiTimes is built on one principle:{" "}
          <strong className="text-amber-800">truth without bias.</strong> We use AI to aggregate news,
          preserve history, and share culture — always with respect for the Sikh faith and all of humanity.
        </p>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Everything on SikhiTimes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURE_CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group">
              <div
                className={`h-full rounded-xl border p-5 ${card.color} hover:shadow-md transition-shadow`}
              >
                <card.icon className={`mb-3 ${card.iconColor}`} size={24} />
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Why SikhiTimes?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Sikh community deserves a media platform that reflects their values: truth, equality, and service.
            We built SikhiTimes to be that platform — free of political bias, kid-friendly, and powered by
            transparent AI that always cites its sources.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
          >
            Learn about our mission <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
