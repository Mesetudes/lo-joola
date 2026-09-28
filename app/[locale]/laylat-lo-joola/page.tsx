import ShipHero from "@/components/sections/ShipHero";
import SceneSection from "@/components/narrative/SceneSection";

export default function LaylatLoJoolaPage() {
  return (
    <main className="flex flex-col">
      <ShipHero />
      <SceneSection className="flex min-h-[60vh] items-center justify-center bg-off-white px-6 text-center text-charcoal">
        <p id="navire" className="text-lg">المشهد الثاني: السفينة — قيد الإنشاء 🚧</p>
      </SceneSection>
    </main>
  );
}