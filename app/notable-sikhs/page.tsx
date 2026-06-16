import type { Metadata } from "next";
import { NOTABLE_SIKHS } from "@/data/notable-sikhs";

export const metadata: Metadata = {
  title: "Notable Sikhs",
  description: "Profiles of successful and inspirational Sikhs from around the world.",
};

const FIELD_COLORS: Record<string, string> = {
  "Politics": "bg-red-100 text-red-800",
  "Politics / Economics": "bg-red-100 text-red-800",
  "Athletics": "bg-green-100 text-green-800",
  "Cricket": "bg-green-100 text-green-800",
  "Law": "bg-blue-100 text-blue-800",
  "Entertainment / Media": "bg-purple-100 text-purple-800",
  "Film / Arts": "bg-purple-100 text-purple-800",
  "Music / Film": "bg-pink-100 text-pink-800",
  "Music / Kirtan": "bg-amber-100 text-amber-800",
  "Beauty / Entertainment": "bg-rose-100 text-rose-800",
};

export default function NotableSikhsPage() {
  const fields = [...new Set(NOTABLE_SIKHS.map((s) => s.field))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notable Sikhs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sikhs have made extraordinary contributions in politics, sports, arts, science, law, and
          humanitarian work worldwide. Here are some of their stories.
        </p>
      </div>

      {/* Field filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button className="px-4 py-1.5 bg-amber-700 text-white text-sm font-medium rounded-full">
          All
        </button>
        {fields.map((field) => (
          <button
            key={field}
            className="px-4 py-1.5 bg-white border border-gray-200 text-sm text-gray-700 font-medium rounded-full hover:border-amber-400 hover:text-amber-700 transition-colors"
          >
            {field}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NOTABLE_SIKHS.map((person) => {
          const colorClass = FIELD_COLORS[person.field] || "bg-gray-100 text-gray-800";
          return (
            <article
              key={person.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5"
            >
              {/* Avatar placeholder */}
              <div className="flex items-start gap-4 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{person.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{person.nationality}{person.born ? ` · b. ${person.born}` : ""}</p>
                  <span className={`mt-1 inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>
                    {person.field}
                  </span>
                </div>
              </div>

              <p className="text-xs font-semibold text-amber-700 mb-1">{person.achievement}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{person.description}</p>

              <div className="flex flex-wrap gap-1 mt-3">
                {person.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
