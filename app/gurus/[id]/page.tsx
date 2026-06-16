import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SIKH_GURUS } from "@/data/gurus";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const guru = SIKH_GURUS.find((g) => g.id === parseInt(id));
  if (!guru) return { title: "Guru Not Found" };
  return {
    title: guru.name,
    description: guru.biography.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return SIKH_GURUS.map((g) => ({ id: g.id.toString() }));
}

export default async function GuruDetailPage({ params }: Props) {
  const { id } = await params;
  const guru = SIKH_GURUS.find((g) => g.id === parseInt(id));
  if (!guru) notFound();

  const prevGuru = SIKH_GURUS.find((g) => g.id === guru.id - 1);
  const nextGuru = SIKH_GURUS.find((g) => g.id === guru.id + 1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link
        href="/gurus"
        className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-900 mb-6 font-medium"
      >
        <ArrowLeft size={14} /> Back to All Gurus
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
            {guru.id}
          </div>
          <div>
            <p className="text-amber-200 text-sm font-medium">
              Guru #{guru.id} · {guru.gurushipStart}–{guru.gurushipEnd}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold">{guru.name}</h1>
            <p className="text-amber-200 text-base mt-0.5">{guru.nameGurmukhi}</p>
          </div>
        </div>
        <blockquote className="border-l-2 border-amber-300 pl-4 italic text-amber-100 mt-4">
          &ldquo;{guru.famousWords}&rdquo;
        </blockquote>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Born", value: guru.born },
          { label: "Passed", value: guru.died },
          { label: "Birthplace", value: guru.birthPlace },
          { label: "Key Teaching", value: guru.keyTeaching },
        ].map(({ label, value }) => (
          <div key={label} className="bg-amber-50 border border-amber-100 rounded-xl p-3">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{label}</p>
            <p className="text-sm text-gray-800 font-medium leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Biography */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Biography</h2>
        <p className="text-gray-700 leading-relaxed">{guru.biography}</p>
      </section>

      {/* Contributions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Contributions</h2>
        <ul className="space-y-2">
          {guru.contributions.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-100">
        {prevGuru ? (
          <Link href={`/gurus/${prevGuru.id}`} className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium">
            <ArrowLeft size={14} />
            <span>
              <span className="text-gray-400 text-xs block">Previous</span>
              {prevGuru.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextGuru ? (
          <Link href={`/gurus/${nextGuru.id}`} className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium text-right">
            <span>
              <span className="text-gray-400 text-xs block">Next</span>
              {nextGuru.name}
            </span>
            <ArrowLeft size={14} className="rotate-180" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
