"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ease } from "@/app/lib/motion";

type Props = {
  text: string;
  className?: string;
  trigger?: "load" | "scroll";
  delay?: number;
  stagger?: number;
};

export default function RevealText({
  text,
  className = "",
  trigger = "scroll",
  delay = 0,
  stagger = 0.05,
}: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const parent: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const child: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : {
        hidden: { y: "110%" },
        visible: {
          y: "0%",
          transition: { duration: 0.7, ease: ease.out },
        },
      };

  const triggerProps =
    trigger === "load"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, amount: 0.4 },
        };

  return (
    <motion.span
      className={className}
      variants={parent}
      initial="hidden"
      {...triggerProps}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom: "0.18em", marginBottom: "-0.18em" }}
        >
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      )).flatMap((node, i) =>
        i < words.length - 1 ? [node, " "] : [node],
      )}
    </motion.span>
  );
}
