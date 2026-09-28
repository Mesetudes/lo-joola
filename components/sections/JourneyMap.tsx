"use client";

import { motion, useReducedMotion } from "framer-motion";
import SourceBadge from "@/components/narrative/SourceBadge";

export default function JourneyMap() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-deep-navy px-6 py-24 text-center text-off-white">
      <h2 className="text-3xl font-bold">الرحلة</h2>
      <p className="max-w-md text-sm text-off-white/70">من Ziguinchor إلى Karabane ثم إلى عرض البحر.</p>
      <svg viewBox="0 0 240 420" role="img" aria-label="مخطط تبسيطي لمسار الرحلة من Ziguinchor إلى Karabane ثم إلى البحر" className="w-full max-w-xs">
        <motion.path d="M120 50 C60 120 180 150 120 220 S60 320 120 370" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-sand" initial={shouldReduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 3, ease: "easeInOut" }} />
        <circle cx="120" cy="50" r="7" className="fill-off-white" />
        <circle cx="120" cy="220" r="7" className="fill-off-white" />
        <circle cx="120" cy="370" r="7" strokeWidth="2" className="fill-sea-blue stroke-off-white" />
        <text x="200" y="55" textAnchor="middle" fontSize="14" className="fill-off-white">Ziguinchor</text>
        <text x="200" y="225" textAnchor="middle" fontSize="14" className="fill-off-white">Karabane</text>
        <motion.text x="120" y="405" textAnchor="middle" fontSize="22" initial={shouldReduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 2.6, duration: 0.8 }}>🌊</motion.text>
      </svg>
      <SourceBadge status="unverified" label="مخطط تبسيطي غير مطابق للمقياس — قيد التحقق" />
    </section>
  );
}