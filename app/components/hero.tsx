"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  INTRO_DONE_EVENT,
  ease,
  readIntroDone,
} from "@/app/lib/motion";
import Counter from "./counter";

type Word = {
  text: string;
  italic?: boolean;
  accent?: boolean;
  trailingSpace?: boolean;
};

const headlineWords: Word[] = [
  { text: "Translating", trailingSpace: true },
  { text: "behavioral", trailingSpace: true },
  { text: "data", italic: true, trailingSpace: true },
  { text: "into", trailingSpace: true },
  { text: "strategic", trailingSpace: true },
  { text: "decisions", italic: true },
  { text: ".", accent: true },
];

const headlineParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const headlineChild: Variants = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.75, ease: ease.out },
  },
};

const eyebrowParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const eyebrowChild: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [introDone, setIntroDone] = useState(true);

  useEffect(() => {
    setIntroDone(readIntroDone());
    const onDone = () => setIntroDone(true);
    window.addEventListener(INTRO_DONE_EVENT, onDone);
    return () => window.removeEventListener(INTRO_DONE_EVENT, onDone);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const animateState = introDone ? "visible" : "hidden";

  return (
    <section id="hero" ref={sectionRef} className="relative isolate">
      <motion.div
        style={
          reduce
            ? undefined
            : { y: yScroll, opacity: opacityScroll, scale: scaleScroll }
        }
        className="mx-auto flex min-h-[88vh] max-w-7xl flex-col px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-24"
      >
        <motion.div
          variants={eyebrowParent}
          initial="hidden"
          animate={animateState}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <motion.span variants={eyebrowChild}>01 — Introduction</motion.span>
          <motion.span
            variants={eyebrowChild}
            aria-hidden="true"
            className="h-px w-8 bg-border-strong"
          />
          <motion.span variants={eyebrowChild}>Dheeraj Kanneganti</motion.span>
        </motion.div>

        <h1
          className="mt-auto pt-10 leading-[0.9] text-foreground"
          style={{
            fontSize: "clamp(2.75rem, 10.5vw, 10.5rem)",
            textWrap: "balance",
          }}
        >
          <motion.span
            className="block"
            variants={headlineParent}
            initial="hidden"
            animate={animateState}
            aria-label="Translating behavioral data into strategic decisions."
          >
            {headlineWords.map((w, i) => (
              <HeadlineWord key={i} word={w} />
            ))}
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={
              introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
            }
            transition={{ delay: 1.1, duration: 0.6, ease: ease.out }}
            className="max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            Behavioral research that drives commercial decisions. Researcher
            and analyst working across I-O Psychology, consumer behavior, and
            applied market analysis. Based in Riverside, CA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={
              introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
            }
            transition={{ delay: 1.2, duration: 0.6, ease: ease.out }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View my work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Get in touch
            </a>
            <a
              href="/deliverables/dheeraj-kanneganti-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Download
                size={14}
                strokeWidth={1.75}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download résumé
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.35, duration: 0.6 }}
        className="border-y border-border bg-surface-2/40"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          <Stat
            label="Identified in workforce optimization"
            value={
              <>
                <span className="text-accent">$</span>
                <Counter value={648} />
                <span className="text-accent">K+</span>
              </>
            }
          />
          <Stat
            label="Mixed-methods research engagements"
            value={
              <>
                <Counter value={5} />
                <span className="text-accent">+</span>
              </>
            }
          />
          <Stat
            label="I-O Psychology candidate"
            value={
              <span className="font-display italic font-normal">M.S.</span>
            }
          />
        </div>
      </motion.div>
    </section>
  );
}

function HeadlineWord({ word: w }: { word: Word }) {
  const baseClass = w.italic
    ? "font-display italic font-normal"
    : "font-sans font-medium uppercase";
  const accentClass = w.accent ? "text-accent" : "";
  return (
    <>
      <span
        className="inline-block overflow-hidden align-baseline"
        style={{ paddingBottom: "0.18em", marginBottom: "-0.18em" }}
      >
        <motion.span
          variants={headlineChild}
          className={`inline-block ${baseClass} ${accentClass}`}
        >
          {w.text}
        </motion.span>
      </span>
      {w.trailingSpace ? " " : null}
    </>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 px-6 py-7 md:px-10 md:py-8">
      <span className="font-mono text-3xl text-foreground md:text-4xl">
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
    </div>
  );
}
