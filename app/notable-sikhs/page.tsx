import type { Metadata } from "next";
import { NOTABLE_SIKHS } from "@/data/notable-sikhs";
import FilteredList from "@/components/notable-sikhs/FilteredList";

export const metadata: Metadata = {
  title: "Notable Sikhs",
  description: "Profiles of successful and inspirational Sikhs from around the world.",
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

      <FilteredList sikhs={NOTABLE_SIKHS} fields={fields} />
    </div>
  );
}
