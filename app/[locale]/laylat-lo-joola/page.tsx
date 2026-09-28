import ShipHero from "@/components/sections/ShipHero";
import ShipInfographic from "@/components/sections/ShipInfographic";

export default function LaylatLoJoolaPage() {
  return (
    <main className="flex flex-col">
      <ShipHero />
      <div id="navire">
        <ShipInfographic />
      </div>
    </main>
  );
}