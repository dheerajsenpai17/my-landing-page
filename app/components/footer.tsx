"use client";

import { ArrowUp, Mail } from "lucide-react";

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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Selected work" },
  { href: "#skills", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface-2/40">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <a
              href="#hero"
              className="font-display text-3xl leading-none tracking-tight text-foreground transition-colors hover:text-accent md:text-4xl"
            >
              Dheeraj<span className="text-accent">.</span>
            </a>
            <p
              className="mt-5 max-w-md font-display text-lg font-normal italic leading-snug text-muted md:text-xl"
              style={{ fontStyle: "italic" }}
            >
              Behavioral research that drives commercial decisions.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="md:col-span-3 md:col-start-7"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Navigate
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Reach out
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2.5 text-[14px] text-foreground transition-colors hover:text-accent"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[14px] text-foreground transition-colors hover:text-accent"
                >
                  <span className="text-muted transition-colors group-hover:text-accent">
                    <LinkedinIcon size={14} />
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-5 border-t border-border pt-6 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span>&copy; {year} Dheeraj Kanneganti</span>
            <span aria-hidden="true" className="mx-3 text-border-strong">
              ·
            </span>
            <span>
              Built with Next.js, Framer Motion, and Tailwind v4
            </span>
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Back to top
            <ArrowUp
              size={12}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
