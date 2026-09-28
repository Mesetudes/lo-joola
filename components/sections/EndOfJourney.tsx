"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SourceBadge from "@/components/narrative/SourceBadge";

export default function EndOfJourney() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.8 },
    transition: { delay, duration: 2 },
  });

  return (
    <section className="flex flex-col items-center bg-black px-6 pb-32 text-center text-off-white">
      <h2 className="sr-only">النهاية</h2>
      <div aria-hidden="true" className="h-[70vh]" />
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <motion.p {...reveal(0)} className="text-3xl font-bold sm:text-4xl">انتهت الرحلة.</motion.p>
        <motion.p {...reveal(1.8)} className="text-2xl font-bold text-off-white/90 sm:text-3xl">لكن القصة لم تنتهِ.</motion.p>
      </div>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <motion.p {...reveal(0)} className="text-2xl font-medium">64 شخصًا نجوا.</motion.p>
        <motion.div {...reveal(1)}>
          <SourceBadge status="unverified" label="الرقم قيد التحقق" />
        </motion.div>
      </div>
      <motion.div {...reveal(0)} className="flex w-full max-w-md flex-col gap-6">
        <Link href="/ar/alladhina-baqou" className="flex flex-col gap-1 rounded-2xl border border-off-white/20 px-6 py-5 transition hover:border-sea-blue">
          <span className="text-sm text-off-white/70">ماذا حدث للذين بقوا؟</span>
          <span className="text-xl font-bold">الذين بقوا ←</span>
        </Link>
        <Link href="/ar/ayna-aladala" className="flex flex-col gap-1 rounded-2xl border border-off-white/20 px-6 py-5 transition hover:border-sea-blue">
          <span className="text-sm text-off-white/70">ماذا حدث للمسؤولية؟</span>
          <span className="text-xl font-bold">أين العدالة؟ ←</span>
        </Link>
      </motion.div>
    </section>
  );
}