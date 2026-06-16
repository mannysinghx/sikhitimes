import Link from "next/link";
import type { SikhGuru } from "@/data/gurus";

interface GuruCardProps {
  guru: SikhGuru;
  compact?: boolean;
}

export function GuruCard({ guru, compact = false }: GuruCardProps) {
  return (
    <Link href={`/gurus/${guru.id}`}>
      <article className="bg-white rounded-xl border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all p-5 cursor-pointer group">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl font-bold text-amber-800 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
            {guru.id}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-amber-700 font-medium mb-0.5">
              {guru.gurushipStart} – {guru.gurushipEnd}
            </p>
            <h3 className="font-bold text-gray-900 leading-tight group-hover:text-amber-800 transition-colors">
              {guru.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">{guru.nameGurmukhi}</p>
          </div>
        </div>

        {!compact && (
          <>
            <div className="mt-3 pt-3 border-t border-amber-50">
              <p className="text-xs font-semibold text-amber-700 mb-1">Key Teaching</p>
              <p className="text-sm text-gray-700 italic">&ldquo;{guru.keyTeaching}&rdquo;</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
              {guru.biography.slice(0, 120)}...
            </p>
          </>
        )}
      </article>
    </Link>
  );
}
