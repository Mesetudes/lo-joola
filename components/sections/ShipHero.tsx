"use client";

import { motion, useReducedMotion } from "framer-motion";
import ShipSilhouette from "@/components/narrative/ShipSilhouette";
import WaterLine from "@/components/narrative/WaterLine";

export default function ShipHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-deep-navy px-6 pb-24 text-center text-off-white">
      <motion.div className="w-full max-w-md" animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 1, 0, -1, 0] }} transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}>
        <ShipSilhouette className="w-full fill-off-white/90" />
      </motion.div>
      <h1 className="text-4xl font-bold sm:text-6xl">ليلة لو جولا</h1>
      <p className="text-lg text-off-white/80 sm:text-2xl">كيف حدث الغرق؟</p>
      <a href="#navire" className="mt-2 rounded-full bg-sea-blue px-6 py-3 text-sm font-medium text-off-white">ابدأ الرحلة ↓</a>
      <WaterLine className="absolute bottom-0 left-0 text-sea-blue" />
    </section>
  );
}