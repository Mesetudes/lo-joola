"use client";

import { useState } from "react";
import MediaImage from "@/components/ui/MediaImage";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { PressItem } from "@/types/press";
import pressData from "@/data/press.json";

const items = pressData as PressItem[];
const years = Array.from(new Set(items.map((item) => item.annee))).sort();

export default function PressWall() {
  const [year, setYear] = useState<string>(years[0] ?? "");
  const visible = items.filter((item) => item.annee === year);

  return (
    <section id="press" className="flex flex-col items-center gap-6 bg-sand px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">📰 الصحف تتذكر</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">اختر سنة، ثم اسحب لتتصفح الصحف.</p>
      <div role="group" aria-label="السنوات" className="flex flex-wrap justify-center gap-2">
        {years.map((value) => (
          <button key={value} type="button" aria-pressed={year === value} onClick={() => setYear(value)} className={`rounded-full border px-4 py-2 text-sm font-medium ${year === value ? "border-deep-navy bg-deep-navy text-off-white" : "border-charcoal/30 bg-off-white"}`}>{value}</button>
        ))}
      </div>
      <div role="region" aria-label="صحف السنة المختارة" tabIndex={0} className="flex w-full max-w-3xl snap-x gap-4 overflow-x-auto pb-4">
        {visible.map((item) => (
          <article key={item.id} className="flex w-72 shrink-0 snap-center flex-col gap-3 rounded-2xl border border-charcoal/20 bg-off-white p-4">
            <p className="text-xs text-charcoal/60">{item.journal}</p>
            <h3 className="text-lg font-bold text-deep-navy">{item.titre}</h3>
            <MediaImage image={item.image} alt={item.alt} usageRights={item.usage_rights} className="aspect-[3/4] w-full rounded-lg" />
            <Field label="المصدر" value={item.source} />
            <Field label="حقوق الاستخدام" value={item.usage_rights} />
            <div>
              <SourceBadge status={item.statut_verification} />
            </div>
            {item.notes ? <p className="text-xs text-charcoal/60">{item.notes}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}