import MemoryCover from "@/components/sections/MemoryCover";
import MemoryTimeline from "@/components/sections/MemoryTimeline";

export default function AldhakiraPage() {
  return (
    <main className="flex flex-col">
      <MemoryCover />
      <div id="timeline">
        <MemoryTimeline />
      </div>
    </main>
  );
}