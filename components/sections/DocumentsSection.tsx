import DocumentViewer from "@/components/narrative/DocumentViewer";
import type { CaseDocument } from "@/types/document";
import documentsData from "@/data/documents.json";

const documents = documentsData as CaseDocument[];

export default function DocumentsSection() {
  return (
    <section className="flex flex-col items-center gap-6 bg-off-white px-6 py-20 text-center text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">افتح الوثيقة</h2>
      <p className="max-w-md text-sm text-charcoal/70">اضغط على وثيقة لترى صورتها، وما فيها، ولماذا تهم، ومن أين جاءت.</p>
      {documents.map((doc) => (
        <DocumentViewer key={doc.id} doc={doc} />
      ))}
    </section>
  );
}