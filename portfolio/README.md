# Kottapalli Vamsi — Portfolio

A cinematic, scroll-driven portfolio built as a journey through seven scenes —
Hero, About (storybook), Skills Forest, Projects Kingdom, Journey Timeline,
Experience Hall, and Contact — using React, Tailwind CSS v4, Framer Motion,
GSAP (ScrollTrigger + MotionPath), and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/
    layout/     Navbar, ScrollProgress, LoadingScreen, SmoothScrollProvider
    hero/       Hero scene + animated sky background
    about/      Storybook page-flip component
    skills/     Skills Forest groves + glowing skill orbs
    projects/   Projects Kingdom map, location cards, detail modal
    timeline/   Journey Timeline (GSAP MotionPath traveler)
    experience/ Experience Hall (internship + achievements)
    contact/    Sunset contact scene
    common/     Shared building blocks (Button, SectionWrapper, StarField, ...)
  data/         All real content lives here — edit these files to update
                text, links, projects, skills, timeline, etc. No need to
                touch component code for content changes.
  hooks/        useLenis, useLenisScroll, useScrollProgress, useActiveSection
  styles/       globals.css — Tailwind v4 theme tokens (palette, fonts, etc.)
```

## Updating content

Everything text-based lives in `src/data/*.js`:

- `content.js` — name, bio, contact links, education, achievements
- `projects.js` — the four Projects Kingdom entries (tech, features, links)
- `skills.js` — skill groups for the Skills Forest
- `timeline.js` — Journey Timeline milestones
- `experience.js` — internship details
- `bookPages.js` — About scene storybook pages

Screenshots live in `src/assets/screenshots/`. The Clinical Note Intelligence
Platform card has `screenshot: null` in `projects.js` since it's still in
progress — add an image and update that field once it's ready.

The resume PDF is served from `public/resume/` and linked via
`personal.resumeUrl` in `content.js`.

## Deployment

This is a static Vite build, so it deploys cleanly to Vercel or Netlify:

- **Vercel**: import the repo, framework preset "Vite", build command
  `npm run build`, output directory `dist`.
- **Netlify**: same build command/output directory.

## Notes

- Smooth scroll (Lenis) is synced to GSAP's ticker and to ScrollTrigger, so
  parallax/scroll-driven animations stay in step with the smoothed scroll.
- Reduced-motion preference is respected globally (`prefers-reduced-motion`).
- All interactive elements are keyboard-reachable with visible focus states.
