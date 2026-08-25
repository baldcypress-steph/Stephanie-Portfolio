# PRD — Personal Portfolio Website

## 1. Summary
A fast, responsive personal portfolio for a designer/developer. Three surfaces:
a home page, an about page, and case study pages. Content is data-driven (JSON)
so new work can be added without touching layout code.

## 2. Goals
- Communicate who I am and what I do within 5 seconds of landing.
- Showcase 3–6 deep case studies with a repeatable narrative structure.
- Make it trivial to add a new case study (one JSON entry + optional images).
- Score well on Lighthouse (perf, a11y, SEO) and look great on mobile.

## 3. Non-goals
- Blog / CMS / comments.
- Auth, database, or any backend.
- Dark/light toggle (single committed theme).

## 4. Audience
Hiring managers, recruiters, and prospective clients. They skim on desktop,
share links on mobile, and read one case study end-to-end at most.

## 5. Pages & requirements

### Home `/`
- Hero: name, one-line positioning statement, availability status, primary CTA.
- Selected work: 3–4 case study cards (cover, title, role, year, tags).
- Capabilities strip: 3–5 short service/skill statements.
- Footer CTA: email + social links.

### About `/about`
- Portrait + longer bio (2–3 paragraphs, first person).
- Experience timeline (role, company, period).
- Skills/tools grouped by category.
- Optional: "currently" list (reading, learning, listening).

### Work index `/work`
- Full list of case studies.

### Case study `/work/$slug`
Repeatable narrative sections:
1. Header: title, subtitle, role, timeline, team, tools.
2. Overview / context.
3. Problem statement.
4. Process (2–4 blocks, each with heading + body + optional image).
5. Outcome + measurable results (metric + label).
6. Reflection / what I'd do differently.
7. Next case study link.

## 6. Content model
See `docs/content-model.md`. Source of truth: `src/content/*.json`.

## 7. Success metrics
- Lighthouse ≥ 95 across the board on mobile.
- Time-to-add a case study < 15 minutes.
- Every page has unique title/description/OG metadata.

## 8. Constraints
- React + TanStack Router (file-based routes), Tailwind, TypeScript.
- No hardcoded colors in components — design tokens only.
- Mobile-first: 360px → 1440px+.

## 9. Milestones
See `docs/roadmap.md`.
