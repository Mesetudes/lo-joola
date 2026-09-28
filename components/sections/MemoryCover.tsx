import SceneSection from "@/components/narrative/SceneSection";
import WaterLine from "@/components/narrative/WaterLine";

export default function MemoryCover() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 text-center text-off-white" style={{ background: "linear-gradient(to bottom, #0b1f33, #1d4e6b)" }}>
      <SceneSection className="flex flex-col items-center gap-6">
        <p className="text-sm tracking-widest text-off-white/70">🕯️ 05 — الذاكرة</p>
        <h1 className="text-4xl font-bold sm:text-6xl">الذاكرة</h1>
        <p className="max-w-md text-xl">ماذا يبقى من الكارثة عندما ينتهي الخبر؟</p>
        <a href="#timeline" className="mt-2 rounded-full border border-off-white/40 px-6 py-3 text-sm font-medium transition hover:border-off-white">من الخبر إلى الذاكرة ↓</a>
      </SceneSection>
      <WaterLine className="absolute bottom-0 left-0 text-off-white/40" />
    </section>
  );
}