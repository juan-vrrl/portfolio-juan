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
  floating-navigation.tsx
  reveal.tsx
  section-heading.tsx
  skills-section.tsx
  education-timeline.tsx
  project-card.tsx
  tech-icons.tsx
  social-links.tsx
  ui/                  # shadcn-style primitives
lib/
  utils.ts
public/                # Images, CV, favicon
```

## Notes

- All motion respects `prefers-reduced-motion`.
- Project images are served through `next/image`; `sharp` is installed for production image optimization.
- Large source images for the heaviest project cards are available as optimized `.webp` files under `public/`.
