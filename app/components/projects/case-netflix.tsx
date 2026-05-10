"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { ease } from "@/app/lib/motion";
import NetflixDashboard from "./netflix-dashboard";

const methods = [
  "Market Analysis",
  "Cultural Diagnostics",
  "Financial Modeling",
  "Change Management",
  "Org Design",
];

const outcomes = [
  {
    value: "22%",
    label:
      "Netflix's current Japan streaming share, mapped against the $1.67T anime market opportunity.",
  },
  {
    value: "$5.2B",
    label:
      "Projected 5-year revenue (base case) · $2.4B net profit · 84% ROI.",
  },
  {
    value: "24 mo",
    label: "Projected payback period.",
  },
  {
    value: "6 phases",
    label:
      "Implementation roadmap from Foundation (M0–3) to Stabilization (M19–24).",
  },
];

export default function CaseNetflix() {
  const reduce = useReducedMotion();
  const headingClip = reduce
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : {
        initial: { clipPath: "inset(100% 0 0 0)" },
        whileInView: { clipPath: "inset(0% 0 0 0)" },
      };

  return (
    <article aria-labelledby="case-netflix-title" className="flex flex-col gap-12 md:gap-16">
      <header className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl font-normal italic leading-none text-accent">
              01
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              / 03
            </span>
          </div>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Headline feature
          </span>
        </div>

        <div className="md:col-span-10">
          <motion.h3
            id="case-netflix-title"
            {...headingClip}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: ease.inOut }}
            className="font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.75rem] lg:text-5xl"
            style={{ textWrap: "balance" }}
          >
            Netflix Japan: Glocalizing Freedom &amp; Responsibility
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.15 }}
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:text-xs"
          >
            Graduate Capstone
            <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
            Market Entry Strategy &amp; Cultural Transformation
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.22 }}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            Strategy Lead · Team of 6
            <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
            2025
          </motion.p>
        </div>
      </header>

      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7 md:col-start-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: ease.out }}
            className="text-base leading-[1.7] text-foreground md:text-lg"
          >
            A multi-method strategic analysis for Netflix's expansion into the
            Japanese streaming market. Combined market sizing, cultural
            diagnostics, organizational design, and 5-year financial modeling
            to design a phased 18–24 month implementation roadmap that balanced
            Netflix's freedom-and-responsibility culture with Japan's
            relationship-driven studio ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: ease.out, delay: 0.15 }}
            className="mt-7"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Methods
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {methods.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <ul className="flex flex-col gap-6 md:col-span-3 md:col-start-10">
          <li>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Key outcomes
            </span>
          </li>
          {outcomes.map((o, i) => (
            <motion.li
              key={o.value}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                ease: ease.out,
                delay: 0.1 + i * 0.08,
              }}
              className="border-l-2 border-accent pl-4"
            >
              <div className="font-mono text-2xl text-accent md:text-[1.75rem]">
                {o.value}
              </div>
              <div className="mt-1.5 text-[12.5px] leading-[1.55] text-muted">
                {o.label}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.8, ease: ease.out }}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Live deliverable · Interactive ROI dashboard
          </span>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-border md:block" />
        </div>
        <NetflixDashboard />
      </motion.div>

      <div className="grid gap-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Deliverables
          </span>
        </div>
        <ul className="grid gap-3 md:col-span-10 md:grid-cols-2">
          <DeliverableLink
            href="/deliverables/projects/netflix-japan-presentation.pdf"
            label="View Full Presentation"
            ext="PDF"
            size="9.2 MB"
          />
          <DeliverableLink
            href="/deliverables/projects/netflix-japan-roi-analysis.pdf"
            label="View ROI Analysis"
            ext="PDF"
            size="5.2 MB"
          />
        </ul>
      </div>
    </article>
  );
}

function DeliverableLink({
  href,
  label,
  ext,
  size,
}: {
  href: string;
  label: string;
  ext: string;
  size: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-md border border-border-strong bg-surface px-4 py-3.5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="flex items-center gap-3">
          <FileText
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-muted transition-colors group-hover:text-accent"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {ext} · {size}
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
  );
}
