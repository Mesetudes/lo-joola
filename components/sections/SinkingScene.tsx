"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ShipSilhouette from "@/components/narrative/ShipSilhouette";
import SoundToggle from "@/components/narrative/SoundToggle";
import SourceBadge from "@/components/narrative/SourceBadge";
import WaterLine from "@/components/narrative/WaterLine";
import { setSeaIntensity } from "@/lib/seaSound";

export default function SinkingScene() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const tilt = useTransform(scrollYProgress, [0, 0.8], [shouldReduceMotion ? 0 : -14, shouldReduceMotion ? 0 : -78]);
  const sink = useTransform(scrollYProgress, [0.1, 0.85], ["0vh", shouldReduceMotion ? "0vh" : "55vh"]);
  const waterTop = useTransform(scrollYProgress, [0, 1], ["46%", shouldReduceMotion ? "46%" : "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const blackout = useTransform(scrollYProgress, [0.8, 0.97], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setSeaIntensity(value < 0.7 ? 1 : 1 - (value - 0.7) / 0.3);
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050d16] text-off-white">
        <h2 className="sr-only">الدقائق الأخيرة</h2>
        <SoundToggle className="absolute end-6 top-6 z-30" />
        <div className="absolute inset-x-0 top-[28%] flex justify-center px-6">
          <motion.div style={{ rotate: tilt, y: sink, transformOrigin: "50% 70%" }} className="w-full max-w-md">
            <ShipSilhouette className="w-full fill-off-white/90" />
          </motion.div>
        </div>
        <motion.div style={{ top: waterTop }} className="absolute inset-x-0 bottom-0 z-10 bg-[#0d2a44]">
          <WaterLine className="absolute -top-5 text-sea-blue" />
        </motion.div>
        <motion.div style={{ opacity: textOpacity }} className="absolute inset-x-0 top-[10%] z-20 flex flex-col items-center gap-3 px-6 text-center">
          <p className="text-2xl font-medium sm:text-3xl">أقل من خمس دقائق…</p>
          <SourceBadge status="unverified" label="المدة قيد التحقق" />
        </motion.div>
        <motion.div style={{ opacity: blackout }} className="pointer-events-none absolute inset-0 z-40 bg-black" />
      </div>
    </section>
  );
}