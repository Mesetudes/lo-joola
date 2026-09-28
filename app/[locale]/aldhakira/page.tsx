import MemoryCover from "@/components/sections/MemoryCover";
import MemoryTimeline from "@/components/sections/MemoryTimeline";
import PressWall from "@/components/sections/PressWall";
import AudioLibrary from "@/components/sections/AudioLibrary";
import MediaScreens from "@/components/sections/MediaScreens";
import CoverageComparison from "@/components/sections/CoverageComparison";
import MuseumSection from "@/components/sections/MuseumSection";
import GrandFinale from "@/components/sections/GrandFinale";

export default function AldhakiraPage() {
  return (
    <main className="flex flex-col">
      <MemoryCover />
      <div id="timeline">
        <MemoryTimeline />
      </div>
      <PressWall />
      <AudioLibrary />
      <MediaScreens />
      <CoverageComparison />
      <MuseumSection />
      <GrandFinale />
    </main>
  );
}