import SceneSection from "@/components/narrative/SceneSection";

export default function CaseFileCover() {
  return (
    <SceneSection className="flex min-h-screen flex-col items-center justify-center gap-8 bg-sand px-6 text-center text-charcoal">
      <p className="text-sm tracking-widest text-charcoal/60">⚖️ 03 — أين العدالة؟</p>
      <span className="-rotate-3 border-2 border-burnt-orange px-5 py-2 font-mono text-2xl font-bold tracking-[0.3em] text-burnt-orange">CASE FILE</span>
      <h1 className="text-4xl font-bold text-deep-navy sm:text-6xl">ملف القضية</h1>
      <p className="max-w-md text-xl">بعد الكارثة، بدأت الأسئلة.</p>
      <a href="#timeline" className="mt-2 rounded-full border border-charcoal/40 px-6 py-3 text-sm font-medium transition hover:border-sea-blue">الخط الزمني ↓</a>
    </SceneSection>
  );
}