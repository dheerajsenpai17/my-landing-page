"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { INTRO_DONE_EVENT, INTRO_KEY, ease } from "@/app/lib/motion";

const WORD = "Dheeraj";

export default function IntroOverlay() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      seen = true;
    }
    if (seen || reduce) {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        /* noop */
      }
      window.dispatchEvent(new CustomEvent(INTRO_DONE_EVENT));
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    const totalIn = 100 + WORD.length * 70 + 700; // delay + stagger + duration
    const hold = 380;
    const timer = setTimeout(() => {
      setVisible(false);
    }, totalIn + hold);
    return () => clearTimeout(timer);
  }, [reduce]);

  const handleExitComplete = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* noop */
    }
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent(INTRO_DONE_EVENT));
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: ease.inOut }}
        >
          <motion.span
            className="font-display flex items-end leading-[0.9] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.1 },
              },
            }}
          >
            {WORD.split("").map((char, i) => (
              <Char key={i} char={char} />
            ))}
            <Char char="." accent />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Char({ char, accent = false }: { char: string; accent?: boolean }) {
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ paddingBottom: "0.18em", marginBottom: "-0.18em" }}
    >
      <motion.span
        className={`inline-block ${accent ? "text-accent" : ""}`}
        variants={{
          hidden: { y: "115%" },
          visible: {
            y: "0%",
            transition: { duration: 0.7, ease: ease.out },
          },
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}
