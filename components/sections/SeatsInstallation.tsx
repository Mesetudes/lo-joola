"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import SourceBadge from "@/components/narrative/SourceBadge";
import type { SeatsInfo } from "@/types/seats";
import seatsData from "@/data/seats.json";

const info = seatsData as SeatsInfo;
const COLUMNS = 10;

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function vanishStep(count: number) {
  let step = Math.max(2, Math.floor(count * 0.247));
  while (gcd(step, count) !== 1) step += 1;
  return step;
}

function SeatsScene({ isPreview }: { isPreview: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [vanished, setVanished] = useState(0);
  const messageOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const step = vanishStep(info.nombre);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const share = Math.min(1, Math.max(0, value / 0.75));
    setVanished(Math.round(share * info.nombre));
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-deep-navy px-6 text-center text-off-white">
        {isPreview ? <p className="absolute start-4 top-4 rounded-full border border-off-white/30 px-3 py-1 text-xs text-off-white/70">معاينة تطويرية — لا يظهر هذا المشهد في النسخة المنشورة قبل تأكيد الرقم</p> : null}
        <h2 className="text-3xl font-bold sm:text-5xl">{info.nombre} مقعدًا فارغًا</h2>
        <SourceBadge status={info.statut_verification} label="الرقم قيد التحقق" onDark />
        <p className="sr-only">مشهد بصري: صفوف من المقاعد يخفت بعضها تدريجيًا مع التمرير.</p>
        <div aria-hidden="true" className="grid w-full max-w-md gap-2" style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}>
          {Array.from({ length: info.nombre }, (_, index) => {
            const gone = (index * step) % info.nombre < vanished;
            return (
              <div key={index} className={`flex flex-col items-center transition-opacity duration-1000 ${gone ? "opacity-10" : "opacity-90"}`}>
                <span className="h-2 w-3 rounded-t-sm bg-off-white sm:h-3 sm:w-4" />
                <span className="h-1.5 w-3 rounded-sm bg-off-white sm:h-2 sm:w-4" />
              </div>
            );
          })}
        </div>
        <motion.p style={{ opacity: messageOpacity }} className="text-2xl font-medium sm:text-3xl">وراء كل مقعد قصة.</motion.p>
      </div>
    </section>
  );
}

export default function SeatsInstallation() {
  const isVerified = info.statut_verification === "verified";
  const isPreview = process.env.NODE_ENV === "development";

  if (!isVerified && !isPreview) return null;
  return <SeatsScene isPreview={!isVerified} />;
}