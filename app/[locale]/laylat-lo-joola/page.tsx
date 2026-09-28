import ShipHero from "@/components/sections/ShipHero";
import ShipInfographic from "@/components/sections/ShipInfographic";
import JourneyMap from "@/components/sections/JourneyMap";

export default function LaylatLoJoolaPage() {
  return (
    <main className="flex flex-col">
      <ShipHero />
      <div id="navire">
        <ShipInfographic />
      </div>
      <JourneyMap />
    </main>
  );
}