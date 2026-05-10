"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ease } from "@/app/lib/motion";
import SectionDivider from "./section-divider";

const EMAIL = "dheeraj.kanneganti17@gmail.com";
const LINKEDIN = "https://linkedin.com/in/dheeraj-kanneganti";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type Word = {
  text: string;
  italic?: boolean;
  accent?: boolean;
  trailingSpace?: boolean;
};

const headlineWords: Word[] = [
  { text: "Let's", trailingSpace: true },
  { text: "talk", italic: true },
  { text: ".", accent: true },
];

const headlineParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const headlineChild: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 0.75, ease: ease.out } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.out } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span>06</span>
          <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
          <span>Contact</span>
        </motion.div>

        {/* Giant headline */}
        <h2
          className="mt-6 leading-[0.9] text-foreground"
          style={{
            fontSize: "clamp(3rem, 13vw, 13rem)",
            textWrap: "balance",
          }}
        >
          <motion.span
            className="block"
            variants={headlineParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            aria-label="Let's talk."
          >
            {headlineWords.map((w, i) => (
              <HeadlineWord key={i} word={w} />
            ))}
          </motion.span>
        </h2>

        {/* Giant email link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-baseline gap-3 text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span
              className="font-display italic font-normal leading-[1.1]"
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
                fontStyle: "italic",
              }}
            >
              {EMAIL}
            </span>
            <ArrowUpRight
              strokeWidth={1.25}
              aria-hidden="true"
              className="h-[clamp(1.5rem,5vw,4rem)] w-[clamp(1.5rem,5vw,4rem)] shrink-0 text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Two-column form + details */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-7"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:col-start-9"
          >
            <DetailsBlock />
          </motion.div>
        </div>
      </div>
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

function ContactForm() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Portfolio inquiry — ${name || "Anonymous"}`;
    const body = `From: ${name} <${email}>\n\n${message}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Quick message
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>

      <Field
        id="contact-name"
        label="Name"
        value={name}
        onChange={setName}
        required
      />
      <Field
        id="contact-email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        required
      />
      <FieldTextarea
        id="contact-message"
        label="Message"
        value={message}
        onChange={setMessage}
        required
      />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Send message
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
        {sent ? (
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            Mail client opened — finish sending there.
          </motion.span>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-b border-border-strong bg-transparent py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}

function FieldTextarea({
  id,
  label,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </span>
      <textarea
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="resize-y border-b border-border-strong bg-transparent py-2 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}

function DetailsBlock() {
  return (
    <div className="flex flex-col gap-10">
      <DetailGroup label="Direct">
        <DetailLine term="Based" value="Riverside, CA" />
        <DetailLine term="Status" value="Open to research & consulting roles" />
        <DetailLine term="Response" value="Typically within 24 hours" />
      </DetailGroup>

      <DetailGroup label="Channels">
        <a
          href={`mailto:${EMAIL}`}
          className="group flex items-center justify-between gap-4 border-b border-border py-3 transition-colors hover:border-accent"
        >
          <span className="font-display text-lg font-normal text-foreground transition-colors group-hover:text-accent">
            Email
          </span>
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 border-b border-border py-3 transition-colors hover:border-accent"
        >
          <span className="flex items-center gap-3 font-display text-lg font-normal text-foreground transition-colors group-hover:text-accent">
            <LinkedinIcon size={16} />
            LinkedIn
          </span>
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </a>
      </DetailGroup>
    </div>
  );
}

function DetailGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function DetailLine({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-2.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {term}
      </span>
      <span className="text-right text-[14px] text-foreground md:text-[15px]">
        {value}
      </span>
    </div>
  );
}
