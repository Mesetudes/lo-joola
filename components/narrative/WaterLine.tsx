"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WaterLine({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div dir="ltr" aria-hidden="true" className={`w-full overflow-hidden ${className}`}>
      <motion.div
        className="w-[200%]"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 800 40" preserveAspectRatio="none" className="h-10 w-full">
          <path d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20 T250 20 T300 20 T350 20 T400 20 T450 20 T500 20 T550 20 T600 20 T650 20 T700 20 T750 20 T800 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
}