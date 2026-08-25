# Portfolio

A responsive personal portfolio: home, about, work index, and data-driven case
study pages. Built with React + TypeScript, TanStack Router (file-based routes),
Tailwind v4 and Vite.

## Vibe-coding this in Cursor

Clone the repo and open it in Cursor.
Run `npm install`, then `npm run dev` → http://localhost:5173
Cursor picks up `.cursor/rules/portfolio.mdc` automatically — it tells the model the conventions (tokens only, content in JSON, route naming).
4. Point the model at the docs when prompting:
   `@docs/PRD.md @docs/content-model.md add a testimonials section to the home page`

## Structure

```
docs/
  PRD.md              product requirements — what and why
  content-model.md    JSON schemas for all content
  design-system.md    tokens, type scale, layout rhythm
  roadmap.md          milestones and backlog
.cursor/rules/
  portfolio.mdc       always-on rules for the AI
src/
  content/
    site.json         name, bio, socials, experience, skills
    case-studies.json every case study
  lib/content.ts      typed accessors over the JSON
  components/         SiteHeader, SiteFooter, CaseStudyCard
  routes/
    __root.tsx        html shell, fonts, default metadata
    index.tsx         /
    about.tsx         /about
    work.index.tsx    /work
    work.$slug.tsx    /work/:slug  (renders any case study)
  styles.css          design tokens (Hex/RGBA) + Tailwind theme
  assets/             cover artwork + portrait
```

## Make it yours


- Edit `src/content/site.json` — name, tagline, email, socials, bio, experience.
- Edit `src/content/case-studies.json` — one object per project. No new route file
  needed; `/work/$slug` renders whatever is in the array.
- Swap the images in `src/assets/` and register new covers in the `covers` map
  in `src/lib/content.ts`.
- Adjust colors/type in `src/styles.css` only. Components never hardcode color.