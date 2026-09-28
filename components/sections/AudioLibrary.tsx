"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { AudioItem } from "@/types/audio";
import audioData from "@/data/audio-library.json";

const items = audioData as AudioItem[];
const unknown = "لم يُحدَّد بعد";

export default function AudioLibrary() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = items.find((item) => item.id === selectedId) ?? null;
  const playable = selected !== null && selected.audio !== null && selected.usage_rights !== null;

  return (
    <section id="audio" className="flex flex-col items-center gap-6 bg-off-white px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">🎧 صوت لو جولا</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">اختر تسجيلًا واضغط «استمع».</p>
      <div className="w-full max-w-3xl overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <caption className="sr-only">مكتبة التسجيلات الصوتية</caption>
          <thead>
            <tr className="border-b border-charcoal/30 text-charcoal/70">
              <th scope="col" className="px-3 py-2 text-start font-medium">السنة</th>
              <th scope="col" className="px-3 py-2 text-start font-medium">المصدر</th>
              <th scope="col" className="px-3 py-2 text-start font-medium">اللغة</th>
              <th scope="col" className="px-3 py-2 text-start font-medium">النوع</th>
              <th scope="col" className="px-3 py-2"><span className="sr-only">الاستماع</span></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-charcoal/15">
                <td className="px-3 py-3">{item.annee ?? unknown}</td>
                <td className="px-3 py-3">{item.source ?? unknown}</td>
                <td className="px-3 py-3">{item.langue}</td>
                <td className="px-3 py-3">{item.type}</td>
                <td className="px-3 py-3">
                  <button type="button" aria-pressed={selectedId === item.id} aria-label={`استمع: ${item.titre}`} onClick={() => setSelectedId(selectedId === item.id ? null : item.id)} className={`rounded-full border px-4 py-1 text-sm font-medium ${selectedId === item.id ? "border-deep-navy bg-deep-navy text-off-white" : "border-charcoal/30"}`}>استمع ▶</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div aria-live="polite" className="min-h-32 w-full max-w-3xl rounded-2xl border border-charcoal/20 bg-sand p-5">
        {selected ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-deep-navy">{selected.titre}</h3>
            {playable ? (
              <audio controls preload="none" src={selected.audio ?? undefined} aria-label={selected.titre} className="w-full" />
            ) : (
              <p className="rounded-lg border border-dashed border-charcoal/30 px-4 py-3 text-sm text-charcoal/60">{selected.audio ? "التسجيل بانتظار التحقق من حقوق الاستخدام" : "🎧 لم يُضف التسجيل الصوتي بعد"}</p>
            )}
            <details className="text-sm">
              <summary className="cursor-pointer font-medium text-deep-navy">النص المكتوب</summary>
              <p className="mt-2 leading-relaxed">{selected.transcription}</p>
            </details>
            <Field label="المصدر" value={selected.source} />
            <Field label="حقوق الاستخدام" value={selected.usage_rights} />
            <div>
              <SourceBadge status={selected.statut_verification} />
            </div>
            {selected.notes ? <p className="text-xs text-charcoal/60">{selected.notes}</p> : null}
          </div>
        ) : (
          <p className="text-center text-sm text-charcoal/60">اختر تسجيلًا من القائمة</p>
        )}
      </div>
      <p className="max-w-md text-center text-xs text-charcoal/60">لا يُنشر أي تسجيل قبل التحقق من حقوق استخدامه.</p>
    </section>
  );
}