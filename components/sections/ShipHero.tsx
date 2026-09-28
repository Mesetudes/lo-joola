"use client";

import { motion, useReducedMotion } from "framer-motion";
import WaterLine from "@/components/narrative/WaterLine";

export default function ShipHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-deep-navy px-6 pb-24 text-center text-off-white">
      <motion.svg
        viewBox="0 0 400 200"
        role="img"
        aria-label="رسم تخطيطي لسفينة في عرض البحر"
        className="w-full max-w-md fill-off-white/90"
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      >
        <path d="M40 120 L360 120 L330 165 L80 165 Z" />
        <rect x="120" y="85" width="160" height="35" />
        <rect x="150" y="60" width="100" height="25" />
        <rect x="190" y="35" width="20" height="25" />
        <circle cx="145" cy="102" r="4" className="fill-deep-navy" />
        <circle cx="175" cy="102" r="4" className="fill-deep-navy" />
        <circle cx="205" cy="102" r="4" className="fill-deep-navy" />
        <circle cx="235" cy="102" r="4" className="fill-deep-navy" />
        <circle cx="265" cy="102" r="4" className="fill-deep-navy" />
      </motion.svg>
      <h1 className="text-4xl font-bold sm:text-6xl">ليلة لو جولا</h1>
      <p className="text-lg text-off-white/80 sm:text-2xl">كيف حدث الغرق؟</p>
      <a href="#navire" className="mt-2 rounded-full bg-sea-blue px-6 py-3 text-sm font-medium text-off-white">ابدأ الرحلة ↓</a>
      <WaterLine className="absolute bottom-0 left-0 text-sea-blue" />
    </section>
  );
}