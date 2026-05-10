"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

function LinkedinIcon({ size = 15 }: { size?: number }) {
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

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ICON_BUTTON =
  "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-all duration-200 hover:scale-105 hover:border-border-strong hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10"
      >
        <a
          href="#hero"
          className="font-display text-xl leading-none tracking-tight text-foreground"
        >
          Dheeraj<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="mailto:dheeraj.kanneganti17@gmail.com"
            aria-label="Email Dheeraj"
            className={ICON_BUTTON}
          >
            <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/dheeraj-kanneganti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dheeraj on LinkedIn"
            className={ICON_BUTTON}
          >
            <LinkedinIcon />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-border-strong md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col px-6 py-1">
          {links.map((link) => (
            <li
              key={link.href}
              className="border-b border-border last:border-b-0"
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
