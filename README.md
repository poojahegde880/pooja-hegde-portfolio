# Pooja Hegde — Portfolio

A premium, recruiter-focused personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. All content (projects, skills, education, certifications, contact info) is sourced directly from `Pooja_Hegde.pdf` — nothing is invented.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (animations)
- lucide-react + react-icons (icons)

## Getting started

This project's dependencies were **not** installed or build-verified in the environment that generated it (no network access there), so do this locally:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional, preview the production build locally
```

The build output goes to `dist/`.

## Deploying

`dist/` is a static site — drag-and-drop it onto Netlify/Vercel, or run:

```bash
npm run build
```

and point your host at the `dist` folder. The resume's listed live portfolio is Netlify, so Netlify is a natural fit (drag the `dist` folder into Netlify's "Deploys" page, or connect the repo for CI builds).

## Project structure

```
public/
  profile.jpg               <- profile photo (used in Hero + About)
  Pooja_Hegde_Resume.pdf    <- downloadable resume (Navbar + Hero "Download Resume")
  robots.txt, sitemap.xml
src/
  data/profile.ts           <- single source of truth, all content pulled from the resume
  data/skillIcons.tsx       <- icon lookup for the Skills section
  types/                    <- shared TypeScript interfaces
  context/ThemeContext.tsx  <- dark/light mode (persisted to localStorage)
  hooks/                    <- scroll-spy, typing effect, count-up animation
  components/layout/        <- Navbar, Footer, LoadingScreen, ParticleBackground,
                               TraceRail (signature scroll indicator), ThemeToggle, BackToTop
  components/sections/      <- Hero, Stats, About, Skills, Projects, Education,
                               Certifications, Contact
  components/ui/            <- small reusable pieces (SectionHeading, TechBadge)
```

## Design notes

- Palette: deep "void" navy in dark mode / cool "mist" off-white in light mode, with a sky-blue ("signal") and amber gradient accent. Defined as named tokens in `tailwind.config.js`.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (tags, stats, code-flavored UI) - loaded from Google Fonts in `index.html`.
- Signature element: the vertical "trace rail" on the left edge of the page (desktop only) lights up node by node as you scroll - a nod to the step-by-step traversal animation in the Algorithm Visualizer project from the resume.
- Skill bars: only two honest tiers are used - "Core" (listed in the resume's Technical Skills section) and "Applied" (used inside a project's tech stack). No invented precision percentages.

## Updating content

Everything text-based lives in `src/data/profile.ts`. Edit values there and every section updates automatically - no need to touch component files for content changes.

## Accessibility & performance notes

- Keyboard focus is visible on all interactive elements.
- `prefers-reduced-motion` is respected (animations shorten/disable).
- The particle background pauses node movement under reduced motion.
- Images use explicit width/height to avoid layout shift; the hero photo loads eagerly, the About photo lazily.
