import type { Metadata } from "next";
import { SIKH_GURUS } from "@/data/gurus";
import { GuruCard } from "@/components/shared/guru-card";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "The 10 Sikh Gurus",
  description: "Detailed profiles of all ten Sikh Gurus — their lives, teachings, and contributions to Sikhism.",
};

export default function GurusPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">☬</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">The Ten Sikh Gurus</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From 1469 to 1708, ten enlightened Gurus guided the Sikh faith — each building upon the
            last&apos;s teachings. Their combined wisdom lives on in the Guru Granth Sahib Ji.
          </p>
        </div>
      </FadeIn>

      {/* Timeline bar */}
      <FadeIn delay={0.1}>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-center">
          <p className="text-sm text-amber-800 font-medium">
            Guru Nanak Dev Ji (1469) → Guru Gobind Singh Ji (1708) → Guru Granth Sahib Ji (Eternal Guru)
          </p>
        </div>
      </FadeIn>

      {/* Guru grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SIKH_GURUS.map((guru) => (
          <StaggerItem key={guru.id}>
            <HoverCard>
              <GuruCard guru={guru} />
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Guru Granth Sahib note */}
      <FadeIn>
        <div className="mt-10 bg-amber-700 text-white rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-4xl mb-3">📖</div>
          <h2 className="text-xl font-bold mb-2">Guru Granth Sahib Ji — The Eternal Guru</h2>
          <p className="text-amber-100 leading-relaxed max-w-2xl mx-auto">
            In 1708, Guru Gobind Singh Ji declared the Guru Granth Sahib as the living, eternal Guru
            of the Sikhs. It contains 1,430 pages of hymns from the Sikh Gurus and saints of other
            faiths — a scripture that transcends religion and speaks to all of humanity.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
