"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import Field from "@/components/ui/Field";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { Person } from "@/types/person";
import peopleData from "@/data/people.json";

const people = peopleData as Person[];

function Portrait({ person, className }: { person: Person; className: string }) {
  if (person.photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={person.photo} alt={person.alt} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={`flex items-center justify-center bg-sea-blue/10 text-4xl text-sea-blue/60 ${className}`}>؟</div>
  );
}

export default function PeopleGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = people.find((person) => person.id === selectedId) ?? null;

  return (
    <section id="people" className="flex flex-col items-center gap-8 bg-sand px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">كل صورة قصة</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">اضغط على صورة لتقرأ قصتها.</p>
      <div className="grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
        {people.map((person) => (
          <button key={person.id} type="button" onClick={() => setSelectedId(person.id)} className="flex flex-col gap-2 rounded-xl border border-charcoal/20 bg-off-white p-3 text-start transition hover:border-sea-blue">
            <Portrait person={person} className="aspect-square w-full rounded-lg" />
            <span className="text-sm font-bold text-deep-navy">{person.nom}</span>
          </button>
        ))}
      </div>
      <p className="max-w-md text-center text-xs text-charcoal/60">لا تُنشر البطاقات إلا بعد التحقق من المصدر وبموافقة الأسرة.</p>
      <Modal open={selected !== null} onClose={() => setSelectedId(null)} label={selected?.nom ?? "بطاقة"}>
        {selected ? (
          <>
            <div className="flex items-center gap-4">
              <Portrait person={selected} className="h-24 w-24 shrink-0 rounded-xl" />
              <h3 className="text-xl font-bold text-deep-navy">{selected.nom}</h3>
            </div>
            <Field label="العمر" value={selected.age} />
            <Field label="المهنة / الدراسة" value={selected.profession} />
            <Field label="مكان الإقامة" value={selected.residence} />
            <Field label="قصته / قصتها" value={selected.histoire} />
            <Field label="المصدر" value={selected.source} />
            <Field label="موافقة الأسرة" value={selected.consentement} />
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