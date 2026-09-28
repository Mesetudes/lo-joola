"use client";

import { useRef } from "react";
import Image from "next/image";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { CaseDocument } from "@/types/document";

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-charcoal/60">{label}</span>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default function DocumentViewer({ doc }: { doc: CaseDocument }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} className="flex w-full max-w-md items-center gap-3 rounded-xl border border-charcoal/30 bg-white/60 px-5 py-4 text-start transition hover:border-sea-blue">
        <span className="text-2xl">📄</span>
        <span className="flex flex-col">
          <span className="text-xs text-charcoal/60">افتح الوثيقة</span>
          <span className="text-base font-bold text-deep-navy">{doc.titre}</span>
        </span>
      </button>
      <dialog ref={dialogRef} aria-label={doc.titre} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }} className="m-auto max-h-[90vh] w-[min(92vw,32rem)] overflow-y-auto rounded-2xl bg-off-white p-0 text-charcoal backdrop:bg-black/60">
        <div className="flex flex-col gap-5 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-deep-navy">{doc.titre}</h3>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="إغلاق" className="rounded-full border border-charcoal/30 px-3 py-1 text-sm">✕</button>
          </div>
          {doc.image ? (
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-charcoal/20">
              <Image src={doc.image} alt={doc.alt} fill className="object-contain" />
            </div>
          ) : (
            <div aria-hidden="true" className="relative flex aspect-[3/4] w-full flex-col gap-3 overflow-hidden rounded-lg border border-charcoal/20 bg-white p-6">
              <div className="h-3 w-2/3 rounded bg-charcoal/15" />
              <div className="h-3 w-full rounded bg-charcoal/10" />
              <div className="h-3 w-full rounded bg-charcoal/10" />
              <div className="h-3 w-5/6 rounded bg-charcoal/10" />
              <div className="h-3 w-full rounded bg-charcoal/10" />
              <div className="h-3 w-3/4 rounded bg-charcoal/10" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="-rotate-12 border-2 border-burnt-orange px-4 py-2 text-lg font-bold text-burnt-orange">نموذج توضيحي</span>
              </span>
            </div>
          )}
          <Block label="ماذا نرى فيها؟" text={doc.ce_que_nous_voyons} />
          <Block label="ما أهميتها؟" text={doc.importance} />
          <Block label="المصدر" text={doc.source ?? "لم يُحدَّد بعد"} />
          <Block label="حقوق الاستخدام" text={doc.usage_rights ?? "لم تُحدَّد بعد"} />
          <div>
            <SourceBadge status={doc.statut_verification} />
          </div>
          {doc.notes ? <p className="text-xs text-charcoal/60">{doc.notes}</p> : null}
        </div>
      </dialog>
    </>
  );
}