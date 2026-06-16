import type { Metadata } from "next";
import { SIKH_HISTORY } from "@/data/history";

export const metadata: Metadata = {
  title: "Sikh History",
  description: "An interactive timeline of Sikh history from 1469 to the present day.",
};

const CATEGORY_STYLES: Record<string, { bg: string; dot: string; label: string }> = {
  founding: { bg: "bg-amber-50 border-amber-200", dot: "bg-amber-500", label: "Founding" },
  battle: { bg: "bg-red-50 border-red-200", dot: "bg-red-500", label: "Battle" },
  martyrdom: { bg: "bg-rose-50 border-rose-200", dot: "bg-rose-600", label: "Martyrdom" },
  institution: { bg: "bg-blue-50 border-blue-200", dot: "bg-blue-500", label: "Institution" },
  modern: { bg: "bg-gray-50 border-gray-200", dot: "bg-gray-500", label: "Modern Era" },
  diaspora: { bg: "bg-teal-50 border-teal-200", dot: "bg-teal-500", label: "Diaspora" },
};

export default function HistoryPage() {
  const sorted = [...SIKH_HISTORY].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sikh History</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          From the birth of Guru Nanak Dev Ji in 1469 to the global Sikh community today — a timeline
          of faith, sacrifice, courage, and resilience.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {Object.entries(CATEGORY_STYLES).map(([key, { dot, label }]) => (
          <div key={key} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
            {label}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-0.5" />

        <div className="space-y-6">
          {sorted.map((event, idx) => {
            const style = CATEGORY_STYLES[event.category];
            const isRight = idx % 2 === 0;

            return (
              <div key={event.id} className={`relative flex items-start gap-4 sm:gap-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                {/* Year marker (desktop center) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow ${style.dot}`} />
                  <div className="text-xs font-bold text-gray-700 mt-1 bg-white px-1">{event.year}</div>
                </div>

                {/* Mobile dot */}
                <div className="sm:hidden flex-shrink-0 w-14 text-right">
                  <div className={`inline-block w-3 h-3 rounded-full ${style.dot} mt-1`} />
                  <div className="text-xs font-bold text-gray-600 block mt-0.5">{event.year}</div>
                </div>

                {/* Content card */}
                <div className={`sm:w-[calc(50%-2rem)] ${isRight ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                  <div className={`border rounded-xl p-4 ${style.bg}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${style.dot}`}>
                        {style.label}
                      </span>
                      {event.location && (
                        <span className="text-xs text-gray-500">{event.location}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{event.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{event.description}</p>
                    <div className="border-t border-current border-opacity-20 pt-2 mt-2">
                      <p className="text-xs font-semibold text-gray-700">Significance: <span className="font-normal text-gray-600">{event.significance}</span></p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 bg-amber-700 text-white rounded-2xl p-6 text-center">
        <p className="text-amber-100 italic">
          &ldquo;Sach Kaho, Sach Suno, Sach Ki Aas Rakho — Speak truth, hear truth, live in hope of truth.&rdquo;
        </p>
        <p className="text-amber-300 text-sm mt-2">— Guru Granth Sahib Ji</p>
      </div>
    </div>
  );
}
