"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Field from "@/components/ui/Field";
import Portrait from "@/components/ui/Portrait";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { Survivor } from "@/types/survivor";
import survivorsData from "@/data/survivors.json";

const survivors = survivorsData as Survivor[];

function Media({ survivor }: { survivor: Survivor }) {
  if (survivor.video && survivor.sous_titres) {
    return (
      <video controls preload="none" poster={survivor.photo ?? undefined} aria-label={survivor.titre} className="w-full rounded-lg bg-black">
        <source src={survivor.video} />
        <track kind="captions" src={survivor.sous_titres} srcLang="ar" label="العربية" default />
      </video>
    );
  }
  if (survivor.video) {
    return <p className="rounded-lg border border-dashed border-charcoal/30 px-4 py-3 text-sm text-charcoal/60">🎬 الفيديو ينتظر ملف الترجمة النصية قبل نشره</p>;
  }
  return <Portrait photo={survivor.photo} alt={survivor.alt} className="aspect-[4/3] w-full rounded-lg" />;
}

export default function SurvivorsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = survivors.find((survivor) => survivor.id === selectedId) ?? null;

  return (
    <section id="survivors" className="flex flex-col items-center gap-8 bg-sand px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">الناجون</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">قصص من نجوا. اضغط على بطاقة لتقرأ قصتها.</p>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {survivors.map((survivor) => (
          <button key={survivor.id} type="button" onClick={() => setSelectedId(survivor.id)} className="flex flex-col items-center gap-3 rounded-2xl border border-charcoal/20 bg-off-white p-5 transition hover:border-sea-blue">
            <Portrait photo={survivor.photo} alt={survivor.alt} className="h-24 w-24 rounded-full" />
            <span className="text-lg font-bold text-deep-navy">{survivor.titre}</span>
          </button>
        ))}
      </div>
      <p className="max-w-md text-center text-xs text-charcoal/60">لكل ناجٍ حق البقاء مجهول الهوية، ولا تُنشر أي بطاقة دون موافقته.</p>
      <Modal open={selected !== null} onClose={() => setSelectedId(null)} label={selected?.titre ?? "بطاقة"}>
        {selected ? (
          <>
            <Media survivor={selected} />
            <h3 className="text-xl font-bold text-deep-navy">{selected.titre}</h3>
            <Field label="قصته / قصتها" value={selected.recit} />
            <Field label="المصدر" value={selected.source} />
            <Field label="موافقة الناجي" value={selected.consentement} />
            <Field label="حقوق الاستخدام" value={selected.usage_rights} />
            <div>
              <SourceBadge status={selected.statut_verification} />
            </div>
            {selected.notes ? <p className="text-xs text-charcoal/60">{selected.notes}</p> : null}
          </>
        ) : null}
      </Modal>
    </section>
  );
}