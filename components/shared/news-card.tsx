import Link from "next/link";
import { ExternalLink, Clock } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  imageUrl?: string;
  category: string;
  publishedAt: string | Date;
  region?: string;
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

export function NewsCard({
  title,
  summary,
  sourceName,
  sourceUrl,
  imageUrl,
  category,
  publishedAt,
  region,
}: NewsCardProps) {
  const date = new Date(publishedAt);
  const timeAgo = getTimeAgo(date);
  const colorClass = CATEGORY_COLORS[category] || "bg-gray-100 text-gray-800";

  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {imageUrl && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>
            {category.replace("_", " ")}
          </span>
          {region && (
            <span className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
              {region}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
          {summary}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Clock size={11} />
            <span>{timeAgo}</span>
            <span>·</span>
            <span className="font-medium text-gray-500">{sourceName}</span>
          </div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 font-medium"
          >
            Read <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </article>
  );
}

function getTimeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
