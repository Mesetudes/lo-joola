"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SceneSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function SceneSection({ children, className = "" }: SceneSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}