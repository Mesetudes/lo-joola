"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { EditorialEntity } from "@/types/editorial";
import riskData from "@/data/risk-factors.json";

const factors = riskData as EditorialEntity[];

export default function RiskFactors() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = factors.find((factor) => factor.id === selectedId) ?? null;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-deep-navy px-6 py-24 text-center text-off-white">
      <h2 className="text-3xl font-bold">عوامل الخطر</h2>
      <p className="max-w-md text-sm text-off-white/70">اضغط على أي عنصر لتعرف ما نعرفه، وما مصدره.</p>
      <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
        {factors.map((factor, index) => {
          const isSelected = selectedId === factor.id;
          return (
            <motion.button key={factor.id} type="button" aria-pressed={isSelected} onClick={() => setSelectedId(isSelected ? null : factor.id)} initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.2, duration: 0.6 }} className={`rounded-2xl border px-4 py-5 text-base font-medium ${isSelected ? "border-off-white bg-off-white text-deep-navy" : "border-off-white/20 text-off-white"}`}>
              {factor.titre}
            </motion.button>
          );
        })}
      </div>
      <div aria-live="polite" className="min-h-48 w-full max-w-md rounded-2xl border border-off-white/10 px-6 py-6 text-start">
        {selected ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">{selected.titre}</h3>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-off-white/60">ماذا نعرف؟</span>
              <p className="text-sm">{selected.description}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-off-white/60">ما مصدر هذه المعلومة؟</span>
              <p className="text-sm">{selected.source ?? "لم يُحدَّد بعد"}</p>
            </div>
            <div>
              <SourceBadge status={selected.statut_verification} />
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-off-white/50">اختر عنصرًا لعرض بطاقته</p>
        )}
      </div>
    </section>
  );
}