"use client";

import { useState } from "react";
import { NotableSikh } from "@/data/notable-sikhs";
import { StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/motion";

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

interface FilteredListProps {
  sikhs: NotableSikh[];
  fields: string[];
}

export default function FilteredList({ sikhs, fields }: FilteredListProps) {
  const [activeField, setActiveField] = useState<string>("All");

  const filtered = activeField === "All" ? sikhs : sikhs.filter((s) => s.field === activeField);

  return (
    <>
      {/* Field filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setActiveField("All")}
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors flex-shrink-0 ${
            activeField === "All"
              ? "bg-amber-700 text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400 hover:text-amber-700"
          }`}
        >
          All
        </button>
        {fields.map((field) => (
          <button
            key={field}
            onClick={() => setActiveField(field)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors flex-shrink-0 ${
              activeField === field
                ? "bg-amber-700 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400 hover:text-amber-700"
            }`}
          >
            {field}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-400 py-16">No profiles found.</div>
      ) : (
        /* Profiles grid */
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((person) => {
            const colorClass = FIELD_COLORS[person.field] || "bg-gray-100 text-gray-800";
            return (
              <StaggerItem key={person.id}>
                <HoverCard>
                  <article
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5"
                  >
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
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}
    </>
  );
}
