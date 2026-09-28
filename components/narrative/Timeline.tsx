"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { EditorialEntity } from "@/types/editorial";

export default function Timeline({ events }: { events: EditorialEntity[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ol className="flex w-full max-w-md flex-col">
      {events.map((event, index) => {
        const isOpen = openId === event.id;
        const isLast = index === events.length - 1;
        return (
          <li key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className={`mt-3 h-3 w-3 rounded-full border-2 border-sea-blue ${isOpen ? "bg-sea-blue" : "bg-off-white"}`} />
              {isLast ? null : <span className="w-px flex-1 bg-sea-blue/40" />}
            </div>
            <div className="flex flex-1 flex-col gap-3 pb-8">
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenId(isOpen ? null : event.id)} className="flex flex-col text-start">
                <span className="text-2xl font-bold text-deep-navy">{event.titre}</span>
                {event.libelle ? <span className="text-sm text-charcoal/70">{event.libelle}</span> : null}
              </button>
              {isOpen ? (
                <div className="flex flex-col gap-4 rounded-xl border border-charcoal/20 bg-white/60 p-4">
                  <Field label="التاريخ" value={event.date} />
                  <Field label="ماذا حدث؟" value={event.description} />
                  <Field label="الجهة" value={event.institution} />
                  <Field label="الوثيقة" value={event.document} />
                  <Field label="المصدر" value={event.source} />
                  <div>
                    <SourceBadge status={event.statut_verification} />
                  </div>
                  {event.notes ? <p className="text-xs text-charcoal/60">{event.notes}</p> : null}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}