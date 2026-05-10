"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { ease } from "@/app/lib/motion";

const methods = [
  "Organizational Analysis",
  "Cultural Diagnostics",
  "Strategic Recommendations",
];

const paragraphs = [
  "An examination of how cultural dynamics, leadership decisions, and market forces shaped one of automotive history's most dramatic turnarounds — and the subsequent stagnation that no one quite expected.",
  "The case traces Nissan from the glory years (GT-R R34, 240SX market dominance) through the perfect storm of the late nineties (Japan's market crash, keiretsu constraints, product overload), the Renault Alliance rescue (1999–2002 turnaround under Ghosn), and into the post-2006 stagnation despite EV leadership — Nissan launched the Leaf in 2010 as the first mass-market EV.",
  "The puzzle is what culture inherits: why an organization with engineering depth, financial discipline, and a category-creating product fails to convert any of it into sustained leadership. The paper distills four leverage points — leadership, values, talent, and governance — for organizations navigating cultural transformation in long-cycle industries.",
];

const eras = [
  {
    range: "~1995–1998",
    id: "01",
    name: "Glory Years",
    points: [
      "GT-R R34 — peak engineering identity.",
      "240SX market dominance in U.S. enthusiast segments.",
    ],
  },
  {
    range: "1998–1999",
    id: "02",
    name: "Perfect Storm",
    points: [
      "Japan's market crashes; domestic demand collapses.",
      "Keiretsu obligations starve reinvestment.",
      "Product overload erodes brand clarity.",
    ],
  },
  {
    range: "1999–2002",
    id: "03",
    name: "Alliance Rescue",
    points: [
      "Renault Alliance closes; Ghosn arrives.",
      "Cost discipline + product focus restore profitability.",
      "Engineering identity reasserts itself.",
    ],
  },
  {
    range: "2006–Present",
    id: "04",
    name: "Stagnation",
    points: [
      "Leaf launches 2010 — first mass-market EV.",
      "EV head start fails to convert into leadership.",
      "Cultural inertia outlasts the turnaround.",
    ],
  },
];

const recommendations = [
  {
    id: "01",
    title: "Leadership Transformation",
    body: "Move beyond fragmented post-Ghosn governance. Establish unified strategic direction with explicit accountability for cultural stewardship.",
  },
  {
    id: "02",
    title: "Core Value Realignment",
    body: "Codify a contemporary Nissan identity that reconciles engineering heritage with the realities of software, electrification, and platform competition.",
  },
  {
    id: "03",
    title: "Strategic Talent Acquisition",
    body: "Compete for software, EV platform, and mobility-services talent against tech employers — not just legacy automakers.",
  },
  {
    id: "04",
    title: "Adaptive Governance",
    body: "Replace rigid hierarchies with decision frameworks that match compressed product cycles; push authority toward where the new bets are made.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: ease.out } },
};

export default function CaseNissan() {
  const reduce = useReducedMotion();
  const headingClip = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };

  return (
    <article
      aria-labelledby="case-nissan-title"
      className="flex flex-col gap-14 md:gap-20"
    >
      <header className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            03 / 03
          </span>
          <span aria-hidden="true" className="text-border-strong">·</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Independent case study
          </span>
        </div>

        <motion.h3
          id="case-nissan-title"
          {...headingClip}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: ease.inOut }}
          className="font-display max-w-4xl text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          style={{ textWrap: "balance" }}
        >
          Nissan&apos;s Crossroads.
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-display max-w-3xl text-xl font-normal italic leading-snug text-accent sm:text-2xl md:text-[1.75rem]"
          style={{ fontStyle: "italic" }}
        >
          A case study in cultural transformation.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          Organizational Analysis
          <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
          Sole Author
          <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
          2025
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-2 flex flex-wrap gap-2"
        >
          {methods.map((m) => (
            <span
              key={m}
              className="rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
            >
              {m}
            </span>
          ))}
        </motion.div>
      </header>

      {/* Narrative brief — wider editorial column */}
      <section
        aria-labelledby="nissan-brief"
        className="grid gap-10 md:grid-cols-12 md:gap-10"
      >
        <div className="md:col-span-2">
          <span
            id="nissan-brief"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Brief
          </span>
        </div>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-9 md:col-start-3"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`text-base leading-[1.7] text-foreground md:text-lg ${
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-[0.05em] first-letter:font-display first-letter:text-[3rem] first-letter:font-normal first-letter:leading-[0.85] first-letter:text-accent"
                  : "mt-5"
              }`}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* The Arc — 4-era horizontal grid */}
      <section aria-labelledby="nissan-arc">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="nissan-arc"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            The arc
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border-strong bg-border sm:grid-cols-2 lg:grid-cols-4">
          {eras.map((era, i) => (
            <motion.article
              key={era.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: ease.out,
                delay: i * 0.08,
              }}
              className="flex flex-col gap-3 bg-surface p-5 md:p-6"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {era.range}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Era {era.id}
                </span>
              </div>
              <h4 className="font-display text-xl font-normal leading-tight text-foreground sm:text-2xl">
                {era.name}
              </h4>
              <ul className="mt-1 flex flex-col gap-2 text-[13.5px] leading-[1.55] text-foreground">
                {era.points.map((p, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[0.65em] h-px w-2.5 shrink-0 bg-accent"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Strategic Recommendations — 2x2 numbered cards */}
      <section aria-labelledby="nissan-recs">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="nissan-recs"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Strategic recommendations
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {recommendations.map((r, i) => (
            <motion.li
              key={r.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: ease.out,
                delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.04,
              }}
              className="group relative flex flex-col gap-4 rounded-md border border-border-strong bg-surface p-6 transition-colors hover:border-accent md:p-7"
            >
              <span
                className="font-display italic font-normal leading-none text-accent"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontStyle: "italic" }}
              >
                {r.id}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-10 origin-left bg-accent transition-transform duration-500 group-hover:w-16"
              />
              <h4 className="font-display text-xl font-normal leading-tight tracking-tight text-foreground md:text-2xl">
                {r.title}
              </h4>
              <p className="text-[14.5px] leading-[1.6] text-muted md:text-[15px]">
                {r.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Deliverable */}
      <div className="grid gap-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Deliverable
          </span>
        </div>
        <ul className="md:col-span-10">
          <li>
            <a
              href="/deliverables/projects/nissan-crossroads.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-md border border-border-strong bg-surface px-4 py-3.5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:max-w-md"
            >
              <div className="flex items-center gap-3">
                <FileText
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-muted transition-colors group-hover:text-accent"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    View Full Case Study
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    PDF · 1.4 MB
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
