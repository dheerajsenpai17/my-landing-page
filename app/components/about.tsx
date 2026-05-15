"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ease } from "@/app/lib/motion";
import SectionDivider from "./section-divider";

const paragraphs = [
  "I'm a behavioral researcher and analyst — combining quantitative methods (Python, R, SPSS, Tableau) with qualitative work like VoC interviews, ethnographic observation, and competency modeling. The throughline is consistent in either mode: turn behavior into evidence, and evidence into commercial and organizational decisions.",
  "My foundation is in behavioral science. I'm completing my M.S. in Industrial-Organizational Psychology at California Baptist University in June 2026, after earning a B.S. in Psychology from NIMS University, India in 2023. The work has always sat at the boundary between research method and applied judgment.",
  "I'm drawn to questions of segmentation, decision-making, behavior change, and measurement design — and to the work of translating complex findings into clear business action. I'm currently looking for roles in applied research, consumer behavior, and market analysis where careful methods compound into commercial impact.",
];

const eyebrowParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const eyebrowChild: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.out } },
};

const proseParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const proseChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

export default function About() {
  const reduce = useReducedMotion();
  const headingClip = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };

  return (
    <section id="about" className="relative">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-4xl">
          <motion.div
            variants={eyebrowParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
          >
            <motion.span variants={eyebrowChild}>02</motion.span>
            <motion.span
              variants={eyebrowChild}
              aria-hidden="true"
              className="h-px w-8 bg-border-strong"
            />
            <motion.span variants={eyebrowChild}>About</motion.span>
          </motion.div>
          <motion.h2
            {...headingClip}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: ease.inOut }}
            className="font-display mt-4 text-3xl font-normal leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
            style={{ textWrap: "balance" }}
          >
            At the intersection of behavioral science, data, and strategy.
          </motion.h2>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-start md:gap-14">
          <Portrait />
          <motion.div
            variants={proseParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="md:col-span-7 md:col-start-1 md:row-start-1 lg:col-span-6"
          >
            <motion.p
              variants={proseChild}
              className="text-base leading-[1.75] text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-[0.05em] first-letter:font-display first-letter:text-[3rem] first-letter:font-normal first-letter:leading-[0.85] first-letter:text-accent md:text-lg"
            >
              {paragraphs[0]}
            </motion.p>
            <motion.p
              variants={proseChild}
              className="mt-5 text-base leading-[1.75] text-foreground md:text-lg"
            >
              {paragraphs[1]}
            </motion.p>
            <motion.p
              variants={proseChild}
              className="mt-5 text-base leading-[1.75] text-foreground md:text-lg"
            >
              {paragraphs[2]}
            </motion.p>

            <motion.dl
              variants={proseChild}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-7 sm:grid-cols-4"
            >
              <Fact label="Currently" value="M.S. I-O Psych" sub="CBU · 2026" />
              <Fact label="Foundation" value="B.S. Psychology" sub="NIMS · 2023" />
              <Fact label="Based" value="Riverside, CA" sub="USA" />
              <Fact label="Focus" value="Applied research" sub="& analytics" />
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </dt>
      <dd className="text-sm font-medium text-foreground">{value}</dd>
      <dd className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {sub}
      </dd>
    </div>
  );
}

function Portrait() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: ease.out }}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border-strong bg-surface-2 shadow-xl shadow-black/10 ring-1 ring-black/[0.04] md:col-span-5 md:col-start-8 md:row-start-1"
    >
      <Image
        src="/images/dheeraj.jpg"
        alt="Dheeraj Kumar"
        fill
        sizes="(min-width: 768px) 42vw, 100vw"
        className="object-cover object-[center_22%]"
      />
    </motion.figure>
  );
}
