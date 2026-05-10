"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/app/lib/motion";

export default function SectionDivider({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduce ? 0 : 1.1, ease: ease.inOut }}
      className={`h-px w-full origin-left bg-border-strong ${className}`}
    />
  );
}
