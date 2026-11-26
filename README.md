# Juan Verrel Tanuwijaya — Portfolio

A personal portfolio for a full-stack developer, built with Next.js 14, TypeScript, Tailwind CSS v4, and the App Router.

## Pages

- `/` — Hero with animated role typewriter, core stack, social links, and CV download.
- `/about` — Profile, quick facts, education timeline, and a brand-icon skills grid.
- `/projects` — Filterable project grid with case-study dialogs, live links, and source links.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 with CSS-first tokens in `app/globals.css`
- **Type:** Sora (display), Manrope (body), JetBrains Mono (meta)
- **Icons:** Lucide + Simple Icons brand logos (`components/tech-icons.tsx`)
- **Motion:** CSS keyframes and an IntersectionObserver reveal primitive (`components/reveal.tsx`)
- **Backgrounds:** Vanta.js effects

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```

## Structure

```text
app/
  layout.tsx           # Fonts, metadata, navigation, global providers
  globals.css          # Design tokens, utilities, reveal/motion rules
  page.tsx             # Home
  about/page.tsx       # About
  projects/page.tsx    # Projects + filtering
components/
  backgrounds.tsx      # Persistent Vanta layers (init, prewarm, pause/resume)
  vanta-effects.ts     # Effect configs per route
  page-shell.tsx
  floating-navigation.tsx
  reveal.tsx
  section-heading.tsx
  skills-section.tsx
  education-timeline.tsx
  project-card.tsx
  tech-icons.tsx
  typing-phrases.tsx
  social-links.tsx
  ui/                  # shadcn-style primitives
lib/
  utils.ts
public/                # Images, CV, favicon
```

## Notes

- All motion respects `prefers-reduced-motion`.
- Each Vanta background is a persistent layer: it initialises once after `load` on an idle frame, the others prewarm on hover or after settling, and hidden layers pause. Route changes just cross-fade existing WebGL scenes, so navigation never builds or tears down a context; device pixel ratio is capped at 2x.
- Project images are served through `next/image` with AVIF/WebP output; `sharp` is installed for production image optimization.
- Large source images for the heaviest project cards are available as optimized `.webp` files under `public/`.
