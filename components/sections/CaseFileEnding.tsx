import Link from "next/link";
import SceneSection from "@/components/narrative/SceneSection";
import SourceBadge from "@/components/narrative/SourceBadge";

export default function CaseFileEnding() {
  return (
    <SceneSection className="flex min-h-[80vh] flex-col items-center justify-center gap-8 bg-sand px-6 py-24 text-center text-charcoal">
      <p className="max-w-md text-xl font-medium leading-relaxed">انتهت مسارات قضائية دون محاكمة، بينما واصلت عائلات الضحايا طرح أسئلة ومطالبات بإعادة النظر في القضية.</p>
      <SourceBadge status="unverified" label="الصياغة قيد التحقق" />
      <span aria-hidden="true" className="h-px w-24 bg-charcoal/30" />
      <p className="max-w-md text-2xl font-bold text-deep-navy">هل يمكن أن تُغلق قضية دون أن تُغلق الذاكرة؟</p>
      <Link href="/ar/aldhakira" className="rounded-full bg-deep-navy px-8 py-3 text-base font-medium text-off-white transition hover:bg-sea-blue">الذاكرة ←</Link>
    </SceneSection>
  );
}