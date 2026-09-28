import CaseFileCover from "@/components/sections/CaseFileCover";
import CaseFileTimeline from "@/components/sections/CaseFileTimeline";
import CasePaths from "@/components/sections/CasePaths";
import DocumentsSection from "@/components/sections/DocumentsSection";
import CaseFileEnding from "@/components/sections/CaseFileEnding";

export default function AynaAladalaPage() {
  return (
    <main className="flex flex-col">
      <CaseFileCover />
      <div id="timeline">
        <CaseFileTimeline />
      </div>
      <CasePaths />
      <DocumentsSection />
      <CaseFileEnding />
    </main>
  );
}