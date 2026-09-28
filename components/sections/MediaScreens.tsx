import MediaImage from "@/components/ui/MediaImage";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { MediaCoverage } from "@/types/coverage";
import coverageData from "@/data/media-coverage.json";

const items = coverageData as MediaCoverage[];

export default function MediaScreens() {
  return (
    <section id="screen" className="flex flex-col items-center gap-8 bg-sand px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">🎥 لو جولا على الشاشة</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">لكل مادة إعلامية بطاقتها: الصورة، والسنة، والجهة، ونوع التغطية، وموضوعها.</p>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="flex flex-col gap-3 rounded-2xl border border-charcoal/20 bg-off-white p-4">
            <MediaImage image={item.image} alt={item.alt} usageRights={item.usage_rights} className="aspect-video w-full rounded-lg" />
            <h3 className="text-lg font-bold text-deep-navy"><bdi>{item.entite}</bdi></h3>
            <Field label="السنة" value={item.annee} />
            <Field label="نوع التغطية" value={item.type_couverture} />
            <Field label="موضوعها" value={item.sujet} />
            <Field label="المصدر" value={item.source} />
            {item.source_url ? <a href={item.source_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sea-blue underline">افتح المصدر الأصلي ↗</a> : null}
            <Field label="حقوق الاستخدام" value={item.usage_rights} />
            <div>
              <SourceBadge status={item.statut_verification} />
            </div>
            {item.notes ? <p className="text-xs text-charcoal/60">{item.notes}</p> : null}
          </article>
        ))}
      </div>
      <p className="max-w-md text-center text-xs text-charcoal/60">نحيل إلى المصادر الأصلية، ولا ننشر أي مادة قبل التحقق من حقوقها.</p>
    </section>
  );
}