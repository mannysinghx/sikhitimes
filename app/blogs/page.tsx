import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs — Sikh Life & Culture",
  description: "AI-written articles on Sikh spirituality, health, history, culture, and community.",
};

const BLOG_CATEGORIES = [
  "All", "Spirituality", "Health", "History", "Culture", "Community", "Travel", "Youth",
];

// Placeholder blogs (replaced by DB content once agents run)
const PLACEHOLDER_BLOGS = [
  {
    slug: "importance-of-seva",
    title: "The Importance of Seva in Sikh Daily Life",
    excerpt: "Seva — selfless service — is one of the pillars of Sikhism. From volunteering at Langar to humanitarian work worldwide, Sikhs have made service to humanity their highest calling.",
    category: "Spirituality",
    tags: ["seva", "sikhism", "service", "langar"],
    readTime: "5 min read",
    kidFriendly: true,
    aiProvider: "deepseek",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    slug: "battle-of-chamkaur",
    title: "The Battle of Chamkaur — Sacrifice and Courage",
    excerpt: "In 1704, Guru Gobind Singh Ji faced one of history's most devastating battles. Outnumbered thousands to one, the Sikhs of Chamkaur showed the world what it means to die with honor.",
    category: "History",
    tags: ["chamkaur", "sahibzade", "sikh history", "courage"],
    readTime: "7 min read",
    kidFriendly: true,
    aiProvider: "kimi",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    slug: "langar-vegetarian-nutrition",
    title: "Langar and the Science of Vegetarian Nutrition",
    excerpt: "The Golden Temple serves 100,000 free meals a day. But beyond its spiritual significance, Langar's plant-based menu turns out to be a nutritional goldmine backed by modern science.",
    category: "Health",
    tags: ["langar", "vegetarian", "nutrition", "health", "golden temple"],
    readTime: "6 min read",
    kidFriendly: true,
    aiProvider: "deepseek",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
  },
];

const PROVIDER_BADGE: Record<string, string> = {
  deepseek: "bg-blue-50 text-blue-700",
  kimi: "bg-purple-50 text-purple-700",
  claude: "bg-orange-50 text-orange-700",
  gemini: "bg-green-50 text-green-700",
  openai: "bg-gray-50 text-gray-700",
};

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Blogs</h1>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <PenTool size={13} /> AI-written articles published daily
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {BLOG_CATEGORIES.map((cat, i) => (
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

      {/* Blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLACEHOLDER_BLOGS.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
            <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              {/* Category header */}
              <div className="bg-gradient-to-r from-amber-700 to-orange-600 h-1.5 rounded-t-xl" />

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                  {blog.kidFriendly && (
                    <span className="text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      Kid Friendly
                    </span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${PROVIDER_BADGE[blog.aiProvider] || "bg-gray-50 text-gray-600"}`}>
                    AI: {blog.aiProvider}
                  </span>
                </div>

                <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-amber-800 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mt-3 mb-3">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-400 pt-3 border-t border-gray-50">
                  <Clock size={11} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-xl hover:border-amber-400 hover:text-amber-700 transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
