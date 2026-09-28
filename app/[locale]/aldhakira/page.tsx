import MemoryCover from "@/components/sections/MemoryCover";
import MemoryTimeline from "@/components/sections/MemoryTimeline";
import PressWall from "@/components/sections/PressWall";
import AudioLibrary from "@/components/sections/AudioLibrary";

export default function AldhakiraPage() {
  return (
    <main className="flex flex-col">
      <MemoryCover />
      <div id="timeline">
        <MemoryTimeline />
      </div>
      <PressWall />
      <AudioLibrary />
    </main>
  );
}