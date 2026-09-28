import ShipHero from "@/components/sections/ShipHero";
import ShipInfographic from "@/components/sections/ShipInfographic";
import JourneyMap from "@/components/sections/JourneyMap";
import RiskFactors from "@/components/sections/RiskFactors";
import StormScene from "@/components/sections/StormScene";
import SinkingScene from "@/components/sections/SinkingScene";
import EndOfJourney from "@/components/sections/EndOfJourney";

export default function LaylatLoJoolaPage() {
  return (
    <main className="flex flex-col">
      <ShipHero />
      <div id="navire">
        <ShipInfographic />
      </div>
      <JourneyMap />
      <RiskFactors />
      <StormScene />
      <SinkingScene />
      <EndOfJourney />
    </main>
  );
}