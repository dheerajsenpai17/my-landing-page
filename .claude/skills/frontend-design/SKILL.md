---
name: frontend-design
description: Design system and aesthetic principles for building premium-feeling landing pages. Apply this to every UI component, layout, and styling decision.
---

# Frontend Design Skill

You are building a production-grade landing page that should look like it came from a top-tier design agency, not from an AI. Apply these rules to every component, section, and styling decision.

## Core Principle: Avoid the Generic AI Aesthetic

Default AI-generated UIs look identical: gradient backgrounds, rounded buttons, three-card grids with emoji icons, purple-to-pink hero gradients, generic stock-feeling copy, and hover states that just change opacity. Avoid all of this. Every choice should feel intentional.

## Typography

- Use a real type scale. Headings step down in clear ratios — never arbitrary sizes.
- Recommended scale (rem): 4.5, 3, 2.25, 1.875, 1.5, 1.25, 1.125, 1, 0.875.
- Body text is 1rem (16px) minimum. Never smaller than 0.875rem for any readable copy.
- Line height: 1.1–1.2 for headings, 1.5–1.7 for body.
- Letter spacing: tight on large headings (-0.02em to -0.04em), normal on body, slightly wider on small caps/labels (0.05em).
- Use one display font (e.g. Inter, Geist, Satoshi) and one body font max. Often the same font in different weights is enough.
- Headings use weights 600–800. Body uses 400–500.

## Spacing

- Use an 8px base grid. Every margin, padding, and gap is a multiple of 8 (or 4 for fine adjustments).
- Section padding: minimum 96px top/bottom on desktop, 64px on mobile.
- Container max-width: 1200–1280px, centered.
- Generous whitespace beats dense layouts. When in doubt, add more space.

## Color

- Define color tokens. No random hex codes scattered through components.
- Tokens needed: background, foreground (text), muted (secondary text), border, primary (brand accent), primary-foreground.
- Use neutrals (warm grays or cool grays) for 90% of the page. Color is an accent, not a flood.
- Avoid full-saturation gradients in heroes. Subtle radial glows or grain textures work better.
- Dark mode: pure black (#000) often looks worse than near-black (#0a0a0a or #111). Test both.

## Layout

- Lead with a clear hero: short, punchy headline (max 8–12 words), one subhead line, one primary CTA.
- Avoid the "three feature cards in a row with emoji icons" pattern. Try asymmetric layouts, full-bleed sections, alternating image-left/image-right rows, or bento grids instead.
- Sticky navbar should be slim — 64–72px tall, with a subtle blur backdrop on scroll.
- Footer should be intentional, not an afterthought. Multiple columns with real navigation.

## Components

- Buttons: primary buttons have solid fill with subtle shadow, secondary buttons are ghost/outline. No gradient buttons unless intentional. Border radius is consistent across the page (usually 6, 8, or 12px — pick one).
- Cards: subtle borders or very soft shadows, never both. Use background contrast instead of heavy shadows.
- Forms: large hit targets (44px+ tall inputs), clear focus rings, labels above inputs (not placeholder-only).

## Motion (with Framer Motion)

- Every section should have a subtle entrance animation when scrolled into view: fade + small upward translate (8–16px), 400–600ms duration, ease-out.
- Stagger child elements by 50–100ms for lists and grids.
- Hover states should feel tactile — slight scale (1.02), translate, or color shift. Use spring transitions for natural feel.
- Avoid: bouncy springs on entrance animations, anything over 800ms, simultaneous animations on many elements.

## Performance & Quality

- Use next/image for all images.
- Lazy-load below-the-fold sections.
- Use semantic HTML (header, nav, main, section, article, footer).
- Ensure WCAG AA contrast on all text.
- Mobile-first: every component must look great on a 375px viewport before desktop.

## Final Check Before Showing Output

Before presenting any UI to the user, ask yourself:
1. Does this look like every other AI-generated SaaS site? If yes, redesign.
2. Is the spacing generous and consistent?
3. Is the typography hierarchy obvious from 6 feet away?
4. Are colors restrained and intentional?
5. Will animations feel premium, not gimmicky?
