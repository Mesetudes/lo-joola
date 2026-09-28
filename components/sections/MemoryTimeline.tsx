import Timeline from "@/components/narrative/Timeline";
import type { EditorialEntity } from "@/types/editorial";
import timelineData from "@/data/timeline-memoire.json";

const events = timelineData as EditorialEntity[];

export default function MemoryTimeline() {
  return (
    <section className="flex flex-col items-center gap-8 bg-off-white px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">من الخبر إلى الذاكرة</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">اضغط على أي محطة لعرض تفاصيلها ومصدرها.</p>
      <Timeline events={events} />
      <p className="max-w-md text-center text-xs text-charcoal/60">تُحدَّث الأحداث الأخيرة وفق ما يثبت فعليًا وقت النشر.</p>
    </section>
  );
}