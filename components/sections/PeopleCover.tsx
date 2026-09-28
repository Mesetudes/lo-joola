import SceneSection from "@/components/narrative/SceneSection";
import SourceBadge from "@/components/narrative/SourceBadge";

export default function PeopleCover() {
  return (
    <SceneSection className="flex min-h-screen flex-col items-center justify-center gap-6 bg-off-white px-6 text-center text-charcoal">
      <p className="text-sm tracking-widest text-charcoal/60">👥 04 — الذين بقوا</p>
      <h1 className="text-4xl font-bold text-deep-navy sm:text-6xl">الذين بقوا</h1>
      <p className="text-6xl font-bold text-deep-navy sm:text-8xl">1,863</p>
      <p className="max-w-md text-xl">إنسانًا، لا رقمًا فقط.</p>
      <SourceBadge status="unverified" label="الرقم قيد التحقق" />
      <a href="#people" className="mt-2 rounded-full border border-charcoal/40 px-6 py-3 text-sm font-medium transition hover:border-sea-blue">↓</a>
    </SceneSection>
  );
}