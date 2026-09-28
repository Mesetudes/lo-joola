import Portrait from "@/components/ui/Portrait";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { Testimony } from "@/types/testimony";

export default function AudioTestimony({ item }: { item: Testimony }) {
  return (
    <article className="flex w-full flex-col gap-4 rounded-2xl border border-charcoal/20 bg-off-white p-5">
      <div className="flex items-center gap-4">
        <Portrait photo={item.photo} alt={item.alt} className="h-16 w-16 shrink-0 rounded-xl" />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-deep-navy">{item.titre}</h3>
          <p className="text-sm text-charcoal/70">{item.locuteur ?? "لم يُحدَّد بعد"}</p>
        </div>
      </div>
      {item.audio ? (
        <audio controls preload="none" src={item.audio} aria-label={item.titre} className="w-full" />
      ) : (
        <p className="rounded-lg border border-dashed border-charcoal/30 px-4 py-3 text-sm text-charcoal/60">🎧 لم يُضف التسجيل الصوتي بعد</p>
      )}
      <details className="text-sm">
        <summary className="cursor-pointer font-medium text-deep-navy">النص المكتوب</summary>
        <p className="mt-2 leading-relaxed">{item.transcription}</p>
      </details>
      <details className="text-sm">
        <summary className="cursor-pointer font-medium text-deep-navy">المصدر والحقوق</summary>
        <div className="mt-3 flex flex-col gap-3">
          <Field label="المصدر" value={item.source} />
          <Field label="موافقة صاحب الشهادة" value={item.consentement} />
          <Field label="حقوق الاستخدام" value={item.usage_rights} />
          <div>
            <SourceBadge status={item.statut_verification} />
          </div>
          {item.notes ? <p className="text-xs text-charcoal/60">{item.notes}</p> : null}
        </div>
      </details>
    </article>
  );
}