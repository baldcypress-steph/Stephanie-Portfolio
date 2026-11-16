# Case study design standard

Case studies share **one structure and one set of conventions**, not one rigid template. A reader moving between projects should feel at home: the same opening, the same visual language, and the same way of marking takeaways. The middle of each page can take the shape its story needs. `docs/design-system.md` and `src/styles.css` remain the source of truth for tokens; this file applies them to case studies.

## Fixed vs flexible

| Always the same (conventions) | Can vary per project |
|---|---|
| Hero layout: eyebrow, title, subtitle, meta row, pinned hero image | Meta labels beyond the core three (Role, Timeline, Team): e.g. **Methods** for research, **Tools** for product work |
| Side navigation on desktop (hidden on mobile) | Which sections appear in it (parts vs sections) |
| Problem → Insight → Solution snapshot as the Overview | Stat row: 0–4 stats |
| Type scale, fonts, colors (tokens only), radius, shadow, spacing rhythm | Number of sections (3–5), or **parts** (multi-part shape) |
| Eyebrow, headline and caption styles; sub-section numbering (`2.1`) | Which optional blocks appear (quote, problem explorer, tabs, gallery, table) |
| Key takeaway styling, inline and closing | Image layout per sub-section (single, 2-up, 3-up, 4-up grid) |
| Insight cards with source chips; before/after with numbered changes | Whether there's an Approach overview (required for multi-part) |
| Closing key takeaways → next case study | A light project theme in eyebrow labels and captions |
| Text measure ~62ch | Wide blocks (galleries, explorers, tables, cards) use the full container |

**The test:** if you swapped two case studies' content, would the pages still look like siblings? If yes, the variation is fine. If one introduces a new color, font size, card style or heading pattern, it breaks the conventions. In that case, either reuse an existing block or propose a new one for the standard.

---

## Foundations (from the site design system)

| Aspect | Standard |
|---|---|
| Feel | Airy, editorial, glassy; cool whites + soft silver; one purple accent |
| Colors | Semantic tokens only: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `text-accent`, `border-border`. **Never** `text-white`, `bg-blue-50`, `border-white/60`, `bg-[#…]` |
| Accent | `accent` (#421bcf) for eyebrows, numbers, active and hover states only; never large fills |
| Display font | Syne (`font-display`): titles, headlines, stat numbers |
| Body font | DM Sans (`font-sans`): body, labels, captions, meta |
| Radius | `rounded-xl` for cards and images; `rounded-2xl` for the hero image and large callouts |
| Surfaces | `glass-card` utility for raised cards (not inline `backdropFilter` styles) |
| Background glow | `pastel-glow-*` utilities (not ad-hoc `bg-blue-50/70 blur-[140px]` divs) |
| Shadow | `shadow-card` |
| Motion | 150–300ms, `ease-out-soft`; respect `prefers-reduced-motion`; no scroll-jacking. The only scroll-linked effects are the pinned hero image fade and sticky sub-section numbers, both of which are static with reduced motion |

## Layout

| Element | Standard |
|---|---|
| Page container | `mx-auto w-full max-w-6xl px-5 sm:px-8` |
| Side nav column | From 1280px (`xl`), the nav and article sit in a grid: `xl:max-w-[76rem] xl:grid-cols-[12rem_minmax(0,56rem)] xl:gap-10`; below that the article is the usual `max-w-4xl` column |
| Reading column | Text never wider than ~62ch |
| Wide blocks (hero image, snapshot, explorers, image grids, insight cards) | Full `max-w-6xl` container |
| Section rhythm | `py-16 sm:py-24` between top-level sections; part bands `pt-20`; `py-14` per sub-section with a dashed divider |
| Breakpoints | Designed mobile-first; checked at 360 / 768 / 1280px |

## Type scale (case study pages)

| Role | Classes |
|---|---|
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.16em] text-accent` |
| Page title (h1) | `font-display text-4xl sm:text-6xl font-semibold leading-[0.95] tracking-tight text-foreground` |
| Subtitle | `text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-[58ch]` |
| Section / part headline (h2) | `font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground` |
| Sub-section headline (h3) | `font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground` |
| Card title (h4) | `font-display text-lg font-semibold tracking-tight text-foreground` |
| Part number | `font-display text-7xl sm:text-8xl font-bold text-accent leading-[0.8]` |
| Sub-section number | `font-display text-lg sm:text-4xl font-semibold text-accent` (sticky from `md:`) |
| Body | `text-base leading-relaxed text-muted-foreground` |
| Caption / meta value | `text-sm text-muted-foreground` |
| Stat number | `font-display text-3xl sm:text-4xl font-semibold text-accent` |

---

## Standard blocks

Every case study is built from these blocks. Not every page uses every block, but it never invents a different version of one. A new block needs Stephanie's approval and must be added here.

| Block | Look | Content |
|---|---|---|
| **Hero** | Eyebrow → title → subtitle; meta row (3–4 items: Role, Timeline, Team + Methods or Tools) beneath with a top hairline `border-t border-border` | `year`, `title`, `subtitle`, `role`, `timeline`, `team`, `tools` / `methods` |
| **Side nav** (built: `AgoSideNav`) | Sticky (`top-28`) left column from 1280px; "On this page" label + section list with accent `01`-style numbers; active item (`aria-current="location"`) gets a bold label and an accent left rule; smooth scroll unless reduced motion; anchors use `scroll-margin-top` to clear the sticky header; hidden below 1280px | section `id`s on the Markdown markers |
| **Pinned hero image** | Sticky behind the page; the content sheet (rounded top, soft shadow) slides over it while the image fades to ~10% and scales to 94%; static with reduced motion | `cover` |
| **Snapshot** | 3 `glass-card` cards joined by accent `→` on desktop; numbered label (`1 The problem`), display-font headline sentence, one short muted line; Insight card has an accent number and top border | `snapshot.problem/insight/solution` |
| **Stat row** | 2–4 stats above a hairline; number in Stat style, label in caption style. **Outcomes or comparisons only**, never project scope | `results[]` |
| **Bar comparison** | Small glass card inside a section: accent bar for the subject, muted bars for peers, value at the end, one caption. Used where the evidence was found, never in the overview | `sections[].chart` |
| **Study comparison** | One glass card per study: accent number + kind of evidence, name, lead question with an accent left rule, hairline-separated rows (Who/Compared · How · When · Produced), "Read part ↓" link | `parts[]` |
| **All research questions** | One glass card, three columns divided by hairlines (stacked on mobile): numbered research questions + muted objectives per study | `parts[].researchQuestions`, `parts[].objectives` |
| **Comparison block** | 2–4 small glass cards side by side with the same labelled rows (e.g. Serves · Goals · Site built around); the subject gets an accent top border; optional logo on a small white plate above each name (and as a tiny icon in any bar comparison of the same subjects), using files saved in `public/`; reference numbers kept | `sections[].compare` (`logo?` per card) |
| **Expandable guide** | Card-style `<details>` with a title, a muted one-line summary and a `+` that rotates; inside, guide sections in two columns with "Observe"/"Ask" labels | `sections[].guide` |
| **Part band** | Full-width band with a tinted `secondary → background` gradient and top border; huge accent number beside eyebrow + h2; method chips below | `parts[]` |
| **Hypothesis card** | Glass card: "Hypothesis going in" in display font with a one-line accent result, beside a collapsed "Research questions (n)" list | `parts[].hypothesis`, `parts[].researchQuestions` |
| **Sub-section** | Grid with a narrow number column (`2.1`, sticky on desktop so the next pushes it out; inline on mobile) and content: eyebrow → h3 → body (≤ 120 words) → image(s) → takeaway; dashed divider between sub-sections | `parts[].sections[]` / `process[]` |
| **Image / gallery** | 1 image, or 2-, 3- or 4-up grid; `rounded-xl shadow-card border`; caption says what to notice | `images[]` |
| **Placeholder** | Dashed border, subtle diagonal stripes, bold label + what should go there; never mistaken for a real image | `[TODO]` |
| **Key takeaway (inline)** | Card with a 3px accent left border, small accent "Key takeaway" eyebrow, text `font-medium` | `sections[].takeaway` |
| **Pull quote** | `border-l-2 border-accent pl-6`, quote in display font `text-xl`, attribution in caption | `sections[].quote` |
| **Problem explorer** | Glass stage with a 16:9 frame that crossfades between images, caption below; "Click a card to explore" hint; 2–3 column grid of numbered cards (`aria-pressed`), the active one with an accent border and filled number | `problems[]` |
| **Tabs** | Pill tabs (active = `primary` fill); each panel one image + caption | `tabs[]` |
| **Bridge line** | Display-font line with an accent `→` and a small "Into part 02" label, at the end of a part | `parts[].bridge` |
| **Insight card** | Glass card: accent number, display-font claim headline, 1–2 sentences of evidence, source chips; the first may span full width | `insights[]` |
| **Comparison table** | Glass table; only for ≥ 3 rows × ≥ 2 columns; scrolls horizontally inside its card on mobile | `synthesis.table` |
| **Roadmap** | Up to 5 numbered glass cards in a row (stacked on mobile): title + one line | `recommendations[]` |
| **Before / after** | Tabs per screen; inside each, a Before/After segmented toggle over one frame (crossfade, corner label) beside numbered changes, each with a title, one line and an accent "Insight 0X" link | `beforeAfter[]` |
| **Key takeaways (closing)** | 3 glass cards: accent number + bold lesson headline + 1–2 sentences | `learnings[]` |
| **Next case study** | References in a collapsed `<details>`, then a hairline + eyebrow + large link | automatic |

---

## Current state (audit, Nov 2026)

These inconsistencies exist today. The skill **flags** them when touching a case study, and fixes them only after Stephanie approves a plan.

1. **Conventions drift between pages.** Kwavoo uses the JSON template. AGO and the Recalculating diary study each have their own hand-built page in `src/routes/work.$slug.tsx`, rendering Markdown. A different *shape* is fine (AGO is multi-part), but these are *convention* differences: the hero title differs (`text-6xl` bold vs `text-7xl` semibold), the meta sits below the title on one and in a side column on the others, and the reading width is `max-w-2xl` vs `max-w-4xl`.
2. **The core meta labels aren't consistent.** AGO shows Role / Timeline / Methods, with no Team (and the Methods text is hardcoded in the component). The diary study shows Role / Timeline / Team. Kwavoo shows Role / Timeline / Team / Tools. Under the standard, Role / Timeline / Team always appear, and the fourth label (Methods or Tools) is chosen per project.
3. **Hardcoded colors** in case study code: `bg-blue-50/50`, `bg-blue-50/70`, `bg-purple-50/40`, `bg-purple-50/70`, `border-white/60`, `border-white/70`. The project rules forbid these, and `pastel-glow-*` utilities already exist for the glows.
4. **Inline glass styles** (`style={{ backdropFilter: … }}`) instead of the `glass-card` utility.
5. **Content outside JSON.** The AGO image mapping and its Methods text live in the route file, breaking the rule that content lives in `src/content/` and is read through `src/lib/content.ts`.
6. **Doc drift.** `docs/design-system.md` names `pastel-glow-brand`, but `styles.css` defines `pastel-glow-blue`, `pastel-glow-slate` and `pastel-glow-purple`.
7. **Most standard blocks don't exist yet.** The side nav exists on the AGO page only (`AgoSideNav`, with its sections hardcoded). The pinned hero, snapshot, part band, research questions card, sticky sub-sections, problem explorer, tabs, insight cards and before/after viewer all need building as shared components. `examples/ago-example.html` in this skill folder is the visual reference for them.

**Recommended path** (needs approval): shared block components (Hero, Snapshot, Chapter, Takeaway, Part header, etc.) that every case study page is assembled from. A single-story page and a multi-part page can then differ in arrangement while sharing every block. The content moves into JSON (shortened to the story budget at the same time), the hardcoded colors are replaced with tokens and utilities, and `docs/design-system.md` is updated to match.
