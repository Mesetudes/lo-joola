"use client";

import { useState } from "react";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { EditorialEntity } from "@/types/editorial";
import shipData from "@/data/ship.json";

const facts = shipData as EditorialEntity[];

const hotspots = [
  { id: "ship-length", left: "78%", top: "72%" },
  { id: "ship-width", left: "36%", top: "51%" },
  { id: "ship-capacity", left: "50%", top: "36%" },
];

export default function ShipInfographic() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = facts.find((fact) => fact.id === selectedId) ?? null;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-deep-navy px-6 py-24 text-center text-off-white">
      <h2 className="text-3xl font-bold">السفينة</h2>
      <p className="max-w-md text-sm text-off-white/70">اضغط على أجزاء السفينة لتظهر المعلومات.</p>
      <div className="relative w-full max-w-md">
        <svg viewBox="0 0 400 200" role="img" aria-label="رسم تخطيطي لسفينة" className="w-full fill-off-white/90">
          <path d="M40 120 L360 120 L330 165 L80 165 Z" />
          <rect x="120" y="85" width="160" height="35" />
          <rect x="150" y="60" width="100" height="25" />
          <rect x="190" y="35" width="20" height="25" />
          <circle cx="145" cy="102" r="4" className="fill-deep-navy" />
          <circle cx="175" cy="102" r="4" className="fill-deep-navy" />
          <circle cx="205" cy="102" r="4" className="fill-deep-navy" />
          <circle cx="235" cy="102" r="4" className="fill-deep-navy" />
          <circle cx="265" cy="102" r="4" className="fill-deep-navy" />
        </svg>
        {hotspots.map((spot, index) => {
          const fact = facts.find((item) => item.id === spot.id);
          if (!fact) return null;
          const isSelected = selectedId === spot.id;
          return (
            <button key={spot.id} type="button" aria-pressed={isSelected} aria-label={fact.titre} onClick={() => setSelectedId(isSelected ? null : spot.id)} style={{ left: spot.left, top: spot.top }} className={`absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-sm font-bold ${isSelected ? "border-off-white bg-off-white text-deep-navy" : "border-off-white/60 bg-sea-blue text-off-white"}`}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="min-h-40 w-full max-w-md rounded-2xl border border-off-white/10 px-6 py-6">
        {selected ? (
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-off-white/60">{selected.titre}</span>
            <span className="text-3xl font-bold">{selected.description}</span>
            <SourceBadge status={selected.statut_verification} />
            <p className="text-xs text-off-white/60">{selected.source ? `المصدر: ${selected.source}` : "المصدر: لم يُحدَّد بعد"}</p>
            {selected.notes ? <p className="text-xs text-off-white/60">{selected.notes}</p> : null}
          </div>
        ) : (
          <p className="text-sm text-off-white/50">اختر نقطة على السفينة</p>
        )}
      </div>
    </section>
  );
}