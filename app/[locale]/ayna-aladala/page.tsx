import CaseFileCover from "@/components/sections/CaseFileCover";
import CaseFileTimeline from "@/components/sections/CaseFileTimeline";

export default function AynaAladalaPage() {
  return (
    <main className="flex flex-col">
      <CaseFileCover />
      <div id="timeline">
        <CaseFileTimeline />
      </div>
    </main>
  );
}