import type { Metadata } from "next";
import { Shield, Search, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About SikhiTimes",
  description: "Learn about SikhiTimes — a neutral, research-based Sikh information platform.",
};

const PRINCIPLES = [
  {
    icon: Shield,
    title: "Neutral & Non-Partisan",
    desc: "We have no political agenda. SikhiTimes does not take sides in political disputes, territorial debates, or factional disagreements within the Sikh community. We report facts.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Search,
    title: "Research-Based",
    desc: "Every historical claim is cross-referenced with multiple academic sources. AI-generated content is reviewed for accuracy. We cite our sources — always.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Heart,
    title: "Kid-Friendly",
    desc: "SikhiTimes is a safe space for all ages. We filter inappropriate content automatically. Sikh values of respect and dignity guide everything we publish.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Users,
    title: "Community-First",
    desc: "Built for Sikhs, by people who care deeply about Sikh culture. Our community platform is moderated to maintain a respectful, inclusive environment.",
    color: "text-amber-600 bg-amber-50",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">☬</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About SikhiTimes</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A neutral, research-based platform dedicated to Sikh news, history, culture,
          and community — built with deep respect for the Sikh faith.
        </p>
      </div>

      {/* Why we built this */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Built SikhiTimes</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The Sikh community is one of the world&apos;s most vibrant, accomplished, and service-oriented
            communities — yet comprehensive, unbiased Sikh media has been hard to find. Most platforms
            covering Sikh news are either politically aligned, commercially driven, or simply incomplete.
          </p>
          <p>
            SikhiTimes was built to fill that gap. We believe that Sikh history deserves to be told
            accurately. Sikh news deserves to be reported neutrally. And the Sikh community deserves a
            digital home that reflects their values: <strong>truth, equality, and service to all.</strong>
          </p>
          <p>
            We use AI to aggregate, summarize, and fact-check content — but AI is a tool, not an editor.
            Our editorial principles are human values, rooted in the teachings of the Guru Granth Sahib Ji.
          </p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI & Technology */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AI & Technology</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          SikhiTimes uses AI agents to fetch and summarize news, generate blog articles, and fetch the
          daily Hukumnama. We rotate across multiple AI providers — including DeepSeek, Kimi, Claude,
          Gemini, and OpenAI — for reliability and balance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>We never use AI to fabricate history or distort facts.</strong> AI-generated content
          is clearly labeled. All factual claims — especially about Sikh history and Gurus — are
          drawn from established academic and religious sources.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our content moderation system automatically filters inappropriate language in all user-generated
          content, making SikhiTimes safe for children and families.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-400 text-sm mb-6">
          Have feedback, a news tip, or want to add a Gurdwara webcam feed? We&apos;d love to hear from you.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Your message..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-amber-700 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
