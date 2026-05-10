"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { ease } from "@/app/lib/motion";

const methods = [
  "Stakeholder Interviews",
  "Cross-Cultural Frameworks",
  "Comparative Case Analysis",
  "Theoretical Synthesis",
  "Implementation Design",
];

const foundations = [
  { author: "Hofstede", concept: "Power Distance" },
  { author: "Trompenaars", concept: "Specific vs Diffuse" },
  { author: "Edmondson", concept: "Psychological Safety" },
  { author: "Collins", concept: "Cognitive Apprenticeship" },
];

type Tone = "neutral" | "grave" | "positive";

const comparatives: {
  tag: string;
  tone: Tone;
  value: string;
  valueLabel: string;
  source: string;
  desc: string;
}[] = [
  {
    tag: "Cautionary tale",
    tone: "neutral",
    value: "46%",
    valueLabel: "attrition",
    source: "TBAL · Hyderabad",
    desc: "Without integration architecture, talent compounds out the door.",
  },
  {
    tag: "Consequence",
    tone: "grave",
    value: "346",
    valueLabel: "lives lost",
    source: "Boeing 737 MAX",
    desc: "What unmanaged silence costs in a safety-critical organization.",
  },
  {
    tag: "The model",
    tone: "positive",
    value: "×10",
    valueLabel: "output growth",
    source: "GE Pune",
    desc: "5,000 engineers trained · $30M reinvested · proof a global standard scales here.",
  },
];

const pillars: { letter: string; title: string; body: React.ReactNode }[] = [
  {
    letter: "L",
    title: "Learn Together",
    body: (
      <>
        Cultural Bridge Training, scenario-based — French and Indian engineers
        in the same room, in their first week on site.
      </>
    ),
  },
  {
    letter: "E",
    title: "Empower Knowledge",
    body: (
      <div>
        <p>A 3-level capability framework that moves engineers up:</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span className="rounded-full border border-border-strong bg-surface px-3 py-1">
            Procedure Follower
          </span>
          <span aria-hidden="true" className="text-accent">→</span>
          <span className="rounded-full border border-border-strong bg-surface px-3 py-1">
            Independent Decision-Maker
          </span>
          <span aria-hidden="true" className="text-accent">→</span>
          <span className="rounded-full border border-accent bg-accent-soft px-3 py-1 text-accent">
            Peer Teacher
          </span>
        </div>
      </div>
    ),
  },
  {
    letter: "A",
    title: "Act with Care",
    body: (
      <>
        Wellness Wallet — <span className="font-mono text-accent">₹3,000</span>{" "}
        per employee per month, anonymous, employee-controlled. Eighty-three
        percent of program budget sits here on purpose.
      </>
    ),
  },
  {
    letter: "P",
    title: "Protect the Moment",
    body: (
      <>
        The founding window is real. Culture set in years 1–2 is nearly
        impossible to change later — design for it now or inherit it forever.
      </>
    ),
  },
];

const phases = [
  { id: "01", name: "Foundation", duration: "M1–3" },
  { id: "02", name: "Build", duration: "M4–12" },
  { id: "03", name: "Scale", duration: "Y2–3" },
  { id: "04", name: "Mature", duration: "Y4–5" },
];

const outcomes = [
  {
    value: "35%+",
    label: "Projected attrition reduction over five years",
  },
  {
    value: "€470K",
    label: "Annual program design · ₹4.15 Cr · 83% to Wellness Wallet",
  },
  {
    value: "5-year",
    label: "Path to self-sustaining site capability",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: ease.out } },
};

export default function CaseSafran() {
  const reduce = useReducedMotion();
  const headingClip = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };

  return (
    <article
      aria-labelledby="case-safran-title"
      className="flex flex-col gap-14 md:gap-20"
    >
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-display text-3xl font-normal italic leading-none text-accent md:text-4xl">
            02
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            / 03
          </span>
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-border-strong sm:block"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            I-O Psychology Capstone
          </span>
        </div>

        <motion.h3
          id="case-safran-title"
          {...headingClip}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: ease.inOut }}
          className="font-display mt-2 max-w-4xl text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          style={{ textWrap: "balance" }}
        >
          The LEAP Integration Framework
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:text-xs"
        >
          Cross-Cultural Workforce Strategy for Safran's Hyderabad MRO Facility
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          Sole Author
          <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
          2026
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

      {/* The setup */}
      <section aria-labelledby="safran-setup">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="safran-setup"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            The setup
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border-strong bg-border md:grid-cols-3">
          <SetupCell
            label="Scale"
            value="250 → 1,100"
            sub="employees by 2030"
          />
          <SetupCell
            label="Cultural distance"
            value="France ↔ India"
            sub="opposite ends of every dimension"
          />
          <SetupCell
            label="Stakes"
            value="Silence = risk"
            sub="aviation MRO is safety-critical"
          />
        </div>
      </section>

      {/* Theoretical foundations */}
      <section aria-labelledby="safran-foundations">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="safran-foundations"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Theoretical foundations
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <ul className="flex flex-wrap gap-2">
          {foundations.map((f) => (
            <li key={f.author}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3.5 py-1.5">
                <em
                  className="font-display italic font-normal text-accent"
                  style={{ fontStyle: "italic" }}
                >
                  {f.author}
                </em>
                <span aria-hidden="true" className="text-border-strong">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {f.concept}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Comparative evidence */}
      <section aria-labelledby="safran-evidence">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="safran-evidence"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Comparative evidence
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
          {comparatives.map((c, i) => (
            <motion.li
              key={c.source}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: ease.out, delay: i * 0.1 }}
            >
              <ComparativeCard {...c} />
            </motion.li>
          ))}
        </ul>
      </section>

      {/* The LEAP Framework */}
      <section aria-labelledby="safran-leap">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="safran-leap"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            The framework
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col">
          {pillars.map((p, i) => (
            <Pillar
              key={p.letter}
              letter={p.letter}
              title={p.title}
              isLast={i === pillars.length - 1}
            >
              {p.body}
            </Pillar>
          ))}
        </div>
      </section>

      {/* Implementation phases */}
      <section aria-labelledby="safran-phases">
        <div className="mb-6 flex items-center gap-3">
          <span
            id="safran-phases"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Implementation
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <ol className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {phases.map((p, i) => (
            <motion.li
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: ease.out, delay: i * 0.07 }}
              className="flex flex-col gap-3 pr-4 md:pr-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                />
                {i < phases.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-border-strong md:block"
                  />
                )}
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Phase {p.id}
                </span>
                <h5 className="font-display text-xl font-normal leading-tight text-foreground">
                  {p.name}
                </h5>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {p.duration}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Outcomes */}
      <section aria-labelledby="safran-outcomes">
        <div className="mb-5 flex items-center gap-3">
          <span
            id="safran-outcomes"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            Projected outcomes
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border-strong bg-border md:grid-cols-3">
          {outcomes.map((o) => (
            <div
              key={o.value}
              className="flex flex-col gap-3 bg-surface p-5 md:p-6"
            >
              <span className="font-mono text-3xl text-accent md:text-4xl">
                {o.value}
              </span>
              <span className="text-[13px] leading-[1.55] text-muted">
                {o.label}
              </span>
            </div>
          ))}
        </div>
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
              href="/deliverables/projects/safran-leap-framework.pptx"
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
                    View Full Capstone Deck
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    PPTX · 60 KB
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

function SetupCell({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col gap-2 bg-surface p-5 md:p-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <span className="font-display text-2xl font-normal leading-tight text-foreground md:text-[1.65rem]">
        {value}
      </span>
      <span className="text-[12.5px] leading-[1.45] text-muted">{sub}</span>
    </div>
  );
}

function ComparativeCard({
  tag,
  tone,
  value,
  valueLabel,
  source,
  desc,
}: {
  tag: string;
  tone: Tone;
  value: string;
  valueLabel: string;
  source: string;
  desc: string;
}) {
  const tagColor =
    tone === "positive"
      ? "text-accent"
      : tone === "grave"
        ? "text-rose-400"
        : "text-muted";
  const cardClass =
    tone === "positive"
      ? "border-accent/60"
      : tone === "grave"
        ? "border-rose-400/30"
        : "border-border-strong";
  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-md border ${cardClass} bg-surface p-5 md:p-6`}
    >
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${tagColor}`}
      >
        {tag}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-3xl text-foreground md:text-4xl">
          {value}
        </span>
        <span className="text-sm text-muted">{valueLabel}</span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {source}
      </span>
      <p className="text-sm leading-[1.55] text-foreground">{desc}</p>
    </div>
  );
}

function Pillar({
  letter,
  title,
  children,
  isLast,
}: {
  letter: string;
  title: string;
  children: React.ReactNode;
  isLast: boolean;
}) {
  const reduce = useReducedMotion();
  const letterReveal = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };
  return (
    <div
      className={`grid grid-cols-[3.5rem_1fr] items-start gap-5 border-t border-border py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 md:grid-cols-[7rem_1fr] md:gap-10 md:py-10 ${
        isLast ? "border-b border-border" : ""
      }`}
    >
      <motion.span
        {...letterReveal}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, ease: ease.inOut }}
        className="font-display italic font-normal leading-[0.85] text-accent"
        style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
      >
        {letter}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: ease.out, delay: 0.15 }}
        className="flex flex-col gap-3 pt-2 md:gap-4 md:pt-4"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Pillar
          </span>
          <h4 className="font-sans text-xl font-medium uppercase leading-tight tracking-[0.02em] text-foreground sm:text-2xl">
            {title}
          </h4>
        </div>
        <div className="max-w-2xl text-base leading-[1.65] text-foreground md:text-lg">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
