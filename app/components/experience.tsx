"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, FileText, Lock } from "lucide-react";
import { useRef } from "react";
import { ease } from "@/app/lib/motion";
import SectionDivider from "./section-divider";
import SectionHeading from "./section-heading";

type Deliverable =
  | {
      type: "pdf";
      href: string;
      label: string;
      meta: string;
    }
  | {
      type: "confidential";
      label: string;
      note: string;
    };

type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  deliverable?: Deliverable;
};

const roles: Role[] = [
  {
    title: "Research Assistant",
    company: "California Baptist University",
    location: "Riverside, CA",
    dates: "Dec 2025 — Present",
    bullets: [
      "Design and execute mixed-methods research using SPSS; automate data cleaning pipelines in Python; translate statistical findings into actionable insights for faculty stakeholders.",
    ],
  },
  {
    title: "I-O Consultant",
    company: "Ascend Day Program",
    location: "California",
    dates: "Sep 2025 — Dec 2025",
    bullets: [
      "Designed an end-to-end selection system grounded in customer-discovery research (VoC interviews, stakeholder mapping) and competency modeling. Built and validated an evaluation framework in a resource-constrained applied setting.",
    ],
    deliverable: {
      type: "pdf",
      href: "/deliverables/experience/ascend-dsp-selection-system.pdf",
      label: "Selection System — Final Report",
      meta: "PDF",
    },
  },
  {
    title: "HR Consultant",
    company: "UCLA Health",
    location: "Los Angeles, CA",
    dates: "Jan 2025 — Apr 2025",
    bullets: [
      "Conducted multi-job-family workforce analytics; built segmentation and benchmarking models that identified $648K+ in projected operational savings. Translated findings into executive-ready insights for senior leadership.",
    ],
    deliverable: {
      type: "confidential",
      label: "Confidential — internal report",
      note: "Available on request",
    },
  },
  {
    title: "Business Consultant",
    company: "SEBS Feed and Supply",
    location: "Idaho",
    dates: "Sep 2024 — Dec 2024",
    bullets: [
      "Led mixed-methods organizational diagnostics; designed and tested measurable interventions across stakeholder groups.",
    ],
  },
  {
    title: "School Coordinator",
    company: "Sanghamitra School",
    location: "Hyderabad",
    dates: "Sep 2023 — Jun 2024",
    bullets: [
      "Conducted qualitative research (semi-structured interviews, ethnographic field observations) to assess engagement; implemented and measured climate interventions that raised satisfaction scores.",
    ],
  },
  {
    title: "HR Analytics Intern",
    company: "YEJALLA PVT LTD",
    location: "Hyderabad",
    dates: "Jun 2023 — Sep 2023",
    bullets: [
      "Analyzed onboarding and engagement data to identify process gaps; supported HRIS data management and pipeline metrics.",
    ],
  },
];

const entryParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const entryChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.out },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: ease.out },
  },
};

export default function Experience() {
  const reduce = useReducedMotion();
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 35%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });

  return (
    <section id="experience" className="relative">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          heading="Featured *experience*"
          className="max-w-4xl"
        />

        <ol
          ref={timelineRef}
          className="relative mt-12 md:mt-16"
          aria-label="Work experience"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 top-2 w-px md:left-[calc(25%-0.5px)] left-[11px]"
          >
            <div className="absolute inset-0 bg-border" />
            <motion.div
              style={reduce ? { scaleY: 1 } : { scaleY }}
              className="absolute inset-0 origin-top bg-accent"
            />
          </div>

          {roles.map((role, i) => (
            <RoleEntry
              key={`${role.company}-${i}`}
              role={role}
              isLast={i === roles.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleEntry({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <motion.li
      variants={entryParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
      className={`relative grid grid-cols-1 gap-3 pl-8 md:grid-cols-12 md:gap-10 md:pl-0 ${
        isLast ? "" : "pb-10 md:pb-14"
      }`}
    >
      <motion.span
        variants={dotVariants}
        aria-hidden="true"
        className="absolute left-[11px] top-[8px] h-[10px] w-[10px] -translate-x-1/2 rounded-full border border-accent bg-background md:left-[calc(25%-0.5px)] md:top-[10px]"
      />
      <span
        aria-hidden="true"
        className="absolute left-[11px] top-[12.5px] h-px w-4 bg-accent/40 md:hidden"
      />

      <motion.span
        variants={entryChild}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:col-span-3 md:pr-10 md:pt-2 md:text-right"
      >
        {role.dates}
      </motion.span>

      <div className="md:col-span-9 md:pl-12">
        <motion.h3
          variants={entryChild}
          className="font-display text-2xl font-normal leading-[1.15] tracking-[-0.01em] text-foreground sm:text-3xl"
        >
          {role.title}
        </motion.h3>
        <motion.p
          variants={entryChild}
          className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          {role.company}
          <span aria-hidden="true" className="mx-2 text-border-strong">·</span>
          <span className="text-muted/80">{role.location}</span>
        </motion.p>
        <motion.ul
          variants={entryChild}
          className="mt-4 flex flex-col gap-3 text-[15px] leading-[1.6] text-foreground"
        >
          {role.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.65em] h-px w-3 shrink-0 bg-accent"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </motion.ul>

        {role.deliverable ? (
          <motion.div variants={entryChild} className="mt-5">
            <RoleDeliverable deliverable={role.deliverable} />
          </motion.div>
        ) : null}
      </div>
    </motion.li>
  );
}

function RoleDeliverable({ deliverable }: { deliverable: Deliverable }) {
  if (deliverable.type === "pdf") {
    return (
      <a
        href={deliverable.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-md border border-border-strong bg-surface px-3.5 py-2.5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <FileText
          size={14}
          strokeWidth={1.5}
          aria-hidden="true"
          className="text-muted transition-colors group-hover:text-accent"
        />
        <span className="text-[13px] font-medium text-foreground">
          {deliverable.label}
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {deliverable.meta}
        </span>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          aria-hidden="true"
          className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </a>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-md border border-dashed border-border-strong bg-surface px-3.5 py-2.5">
      <Lock
        size={13}
        strokeWidth={1.5}
        aria-hidden="true"
        className="text-muted"
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {deliverable.label}
      </span>
      <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
      <span className="text-[12.5px] italic text-muted">
        {deliverable.note}
      </span>
    </div>
  );
}
