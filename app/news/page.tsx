import type { Metadata } from "next";
import { Newspaper, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Punjab & Sikh World News",
  description: "AI-fetched and summarized news about Punjab and Sikhs from across the globe.",
};

const CATEGORIES = [
  "All", "Punjab", "Sikh World", "Politics", "Culture", "Sports", "Diaspora", "Religion", "Human Rights", "Economy",
];

const PLACEHOLDER_NEWS = [
  {
    id: "1",
    title: "Sikh Community in Canada Leads National Food Bank Drive",
    summary:
      "Members of the Sikh community across Canada organized a massive langar-inspired food drive this weekend, collecting over 50,000 pounds of food for local shelters, continuing the tradition of seva (selfless service).",
    sourceName: "CBC News",
    sourceUrl: "#",
    category: "DIASPORA",
    region: "Canada",
    publishedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "2",
    title: "Punjab Government Announces New Agricultural Support Package",
    summary:
      "The Punjab state government unveiled a comprehensive support package for farmers this week, including subsidized equipment and new irrigation infrastructure to address the ongoing water table concerns.",
    sourceName: "Tribune India",
    sourceUrl: "#",
    category: "PUNJAB",
    region: "Punjab",
    publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: "3",
    title: "Golden Temple Receives Record Number of Visitors in May",
    summary:
      "Sri Harmandir Sahib in Amritsar reported record pilgrimage numbers in May, with over 1.2 million visitors from across India and the world attending the sacred shrine.",
    sourceName: "SikhNet",
    sourceUrl: "#",
    category: "RELIGION",
    region: "India",
    publishedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    id: "4",
    title: "Sikh Athletes Make History at International Games",
    summary:
      "Three Sikh athletes representing India and Canada won medals at the international athletics championships, with kabaddi star Gurpreet Singh taking gold in the open category.",
    sourceName: "Sikh24",
    sourceUrl: "#",
    category: "SPORTS",
    region: "World",
    publishedAt: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
  },
];

function getTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const CATEGORY_COLORS: Record<string, string> = {
  PUNJAB: "bg-orange-100 text-orange-800",
  SIKH_WORLD: "bg-blue-100 text-blue-800",
  POLITICS: "bg-red-100 text-red-800",
  CULTURE: "bg-purple-100 text-purple-800",
  SPORTS: "bg-green-100 text-green-800",
  DIASPORA: "bg-teal-100 text-teal-800",
  RELIGION: "bg-amber-100 text-amber-800",
  HUMAN_RIGHTS: "bg-pink-100 text-pink-800",
  ECONOMY: "bg-gray-100 text-gray-800",
};

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Punjab & Sikh World News</h1>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <RefreshCw size={13} /> AI-fetched and summarized every 30 minutes
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg">
          <Newspaper size={13} className="text-amber-700" />
          Neutral · Fact-based · Source-cited
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              i === 0
                ? "bg-amber-700 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PLACEHOLDER_NEWS.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[article.category] || "bg-gray-100 text-gray-800"}`}>
                {article.category.replace("_", " ")}
              </span>
              {article.region && (
                <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                  {article.region}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-4 mb-3">
              {article.summary}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{getTimeAgo(article.publishedAt)} · {article.sourceName}</span>
              <a href={article.sourceUrl} className="text-amber-700 hover:text-amber-900 font-medium">
                Read →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* API note */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>Note:</strong> Live news is fetched automatically from RSS feeds and NewsAPI every 30 minutes.
        Once your API keys are configured in <code className="bg-blue-100 px-1 rounded">.env.local</code>, live articles will appear here.
      </div>
    </div>
  );
}
