"use client";

import { motion, type Variants } from "framer-motion";
import { ease } from "@/app/lib/motion";
import SectionDivider from "./section-divider";
import SectionHeading from "./section-heading";

type Capability = {
  id: string;
  title: string;
  tagline: string;
  skills: string[];
};

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Research methods",
    tagline: "Designing studies that hold up under scrutiny.",
    skills: [
      "Mixed-methods research",
      "Qualitative interviewing (VoC)",
      "Ethnographic field observation",
      "Survey design",
      "Competency modeling",
      "Selection system design",
      "Customer discovery",
      "Stakeholder mapping",
      "Behavioral coding",
    ],
  },
  {
    id: "02",
    title: "Quantitative & analytics",
    tagline: "Turning numbers into decisions.",
    skills: [
      "SPSS",
      "Python (pandas, NumPy)",
      "Statistical modeling",
      "Regression analysis",
      "Workforce segmentation",
      "Benchmarking models",
      "HRIS data management",
      "Excel modeling",
      "Chart.js / data viz",
    ],
  },
  {
    id: "03",
    title: "AI & workflow",
    tagline: "Compounding output through tooling.",
    skills: [
      "Claude / GPT prompting",
      "Workflow automation",
      "Notion systems",
      "Figma",
      "Python scripting",
      "Process design",
    ],
  },
  {
    id: "04",
    title: "Strategic & applied",
    tagline: "From insight to intervention.",
    skills: [
      "Organizational diagnostics",
      "Cultural diagnostics",
      "Strategic recommendations",
      "Executive communication",
      "Intervention design",
      "Stakeholder facilitation",
    ],
  },
];

type Certification = {
  name: string;
  issuer: string;
  year: string;
};

// PLACEHOLDER — edit with actual credentials
const certifications: Certification[] = [
  {
    name: "Human Subjects Research (CITI Program)",
    issuer: "CITI Program",
    year: "2025",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    year: "2024",
  },
  {
    name: "SPSS Statistical Analysis",
    issuer: "Coursera",
    year: "2024",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.out } },
};

const chipParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const chipChild: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.out } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          index="05"
          eyebrow="Capabilities"
          heading="Core *capabilities*"
          className="max-w-4xl"
        />

        <ol className="mt-12 md:mt-16">
          {capabilities.map((cap, i) => (
            <CapabilityBand
              key={cap.id}
              cap={cap}
              isLast={i === capabilities.length - 1}
            />
          ))}
        </ol>

        <section
          aria-labelledby="certifications-heading"
          className="mt-20 md:mt-28"
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              id="certifications-heading"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
            >
              Certifications & training
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border-strong bg-border sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.li
                key={c.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  ease: ease.out,
                  delay: i * 0.05,
                }}
                className="flex flex-col gap-2 bg-surface p-5 md:p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {c.year}
                </span>
                <h4 className="font-display text-base font-normal leading-tight text-foreground md:text-lg">
                  {c.name}
                </h4>
                <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {c.issuer}
                </span>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

function CapabilityBand({
  cap,
  isLast,
}: {
  cap: Capability;
  isLast: boolean;
}) {
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 ${
        isLast ? "" : "mb-10 border-b border-border pb-10 md:mb-14 md:pb-14"
      }`}
    >
      <div className="md:col-span-2">
        <span
          className="font-display italic font-normal leading-none text-accent"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontStyle: "italic",
          }}
        >
          {cap.id}
        </span>
      </div>

      <div className="md:col-span-4 md:pr-6">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {cap.title}
        </h3>
        <p
          className="mt-3 font-display text-xl font-normal italic leading-snug text-foreground md:text-2xl"
          style={{ fontStyle: "italic" }}
        >
          {cap.tagline}
        </p>
      </div>

      <motion.div
        variants={chipParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2 md:col-span-6"
      >
        {cap.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={chipChild}
            className="rounded-full border border-border-strong bg-surface px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.li>
  );
}
