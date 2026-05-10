"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "@/app/lib/motion";

type Props = {
  index: string;
  eyebrow: string;
  heading: string;
  className?: string;
  align?: "left" | "center";
};

function parseHeading(text: string): ReactNode[] {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em
          key={i}
          className="font-display italic font-normal normal-case text-accent"
          style={{ fontStyle: "italic", textTransform: "none" }}
        >
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const eyebrowParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const eyebrowChild: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.out } },
};

export default function SectionHeading({
  index,
  eyebrow,
  heading,
  className = "",
  align = "left",
}: Props) {
  const reduce = useReducedMotion();
  const headingClip = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };

  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <motion.div
        variants={eyebrowParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <motion.span variants={eyebrowChild}>{index}</motion.span>
        <motion.span
          variants={eyebrowChild}
          aria-hidden="true"
          className="h-px w-8 bg-border-strong"
        />
        <motion.span variants={eyebrowChild}>{eyebrow}</motion.span>
      </motion.div>
      <motion.h2
        {...headingClip}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: ease.inOut }}
        className="font-sans mt-5 text-3xl font-medium uppercase leading-[1.04] tracking-[-0.01em] text-foreground sm:text-5xl md:text-6xl"
        style={{ textWrap: "balance" }}
      >
        {parseHeading(heading)}
      </motion.h2>
    </div>
  );
}
