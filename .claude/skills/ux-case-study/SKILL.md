---
name: ux-case-study
description: Write, rewrite, or review case studies for Stephanie's portfolio site as scannable, visual, story-driven pages that open with Problem, Insight and Solution, then go deeper section by section, following the site's shared case study structure and design conventions (with room for project-specific shapes, like a multi-part research study). Use when writing a new case study, restructuring or tightening an existing one (Kwavoo, AGO, the Recalculating diary study), writing any case study section, sharpening insights, choosing images or key takeaways, or checking a case study page against the design system.
---

# UX Case Study (Stephanie's Portfolio)

Turn a project into a **story a reader can grasp in 10 seconds, and explore for 10 minutes if they want to**. The top tells the whole story. Everything below goes deeper, one clearly marked section at a time.

Before writing, read:
- [references/design-standard.md](references/design-standard.md): the shared conventions and blocks every case study uses, and what may vary between projects
- [references/content-schema.md](references/content-schema.md): where case study content lives and how each story part maps to it
- [references/reference-patterns.md](references/reference-patterns.md): what to learn from the two reference case studies (Polimeter, NASA JPL)
- `examples/ago-example.html` (in this skill folder): a worked example of the multi-part research shape, with its images in `examples/assets/`

---

## The six rules

1. **Problem, Insight, Solution come first.** The top of every case study answers them before anything else. A reader who stops there still knows the whole story.
2. **Tell a story, not a process.** Organize around the tension and the turning point. Methods are how you found out, never the story itself. Headlines state what you learned, not what you did.
3. **Insights must change something.** An insight is a claim that reframes the problem or changes the direction ("The account is a receipt, not a relationship"), not a topic label ("Account concerns"). See *Writing insights* below.
4. **Scannable at every depth.** Every section and sub-section has a headline a skimmer can read alone, and ends with a key takeaway. Short paragraphs.
5. **Show, then tell.** Images in every sub-section. Interactive blocks (problem explorer, tabs, before/after) let you add depth without adding length.
6. **Restraint is the aesthetic.** White space, one accent color, clear demarcation between sections. Detail that doesn't move the story goes in a caption, behind a tab, or gets cut.

**Never invent facts.** No made-up metrics, quotes, participant counts, research questions or outcomes. Mark gaps as `[TODO: …]` and list them for Stephanie.

---

## Similar, not identical

Case studies should feel like they belong to the same site, but they don't need to be clones. Each project gets the shape that tells its story best, as long as it keeps:
- the **same opening**: hero, meta row, pinned hero image, and the Problem → Insight → Solution snapshot
- the **same conventions**: blocks, type scale, tokens, spacing, eyebrows, takeaways, captions, side navigation
- the **same ending**: key takeaways, then the next case study

What happens in between can flex: how many sections, whether it splits into parts, which optional blocks appear. When you deviate from the default, say why in one line when presenting the outline.

## Choose a shape

| Shape | Use when | Example |
|---|---|---|
| **Single story** | One project with one arc | Kwavoo |
| **Multi-part** | One case study that holds several distinct studies, each with its own research questions and findings | AGO (competitive analysis → interviews → contextual inquiry) |

Research projects (either shape) also follow the *Research projects* rules below.

---

## Page structure

### 0. Side navigation (desktop only)
An "On this page" list in a left column from 1280px (`xl`) wide: every top-level section, with numbered parts (`01`, `02`, `03`). It sticks while the page scrolls, the section in view is highlighted, and links scroll smoothly. It's hidden below 1280px, where the page reads top to bottom.

**Already built:** reuse `AgoSideNav` in `src/routes/work.$slug.tsx` (styles: `.cs-sidenav-*` in `src/styles.css`). For a new page, give each section marker in the Markdown an `id` (e.g. `<p class="cs-eyebrow" id="overview">`), list the same ids in the nav's sections array, and wrap the article in the `xl:grid xl:grid-cols-[12rem_minmax(0,56rem)]` layout. Generalise it into a shared component that takes the sections as a prop when the second page needs it.

### 1. Hero
- **Eyebrow:** `Case study · {year} · {discipline}`
- **Title:** the project's name or a short, evocative line (≤ 8 words)
- **Subtitle:** a hook with a turn in it, not a method description (≤ 30 words). ("I set out to fix the account. Three studies later, I found the real gap was inside the gallery.")
- **Meta row:** Role · Timeline · Team · Methods (research) or Tools (product)

### 2. Pinned hero image
The strongest visual sits pinned behind the page. As you scroll, the content slides up over it while it gently fades and shrinks. With reduced motion it stays still.

### 3. Overview: the snapshot
Problem → Insight → Solution as three numbered cards joined by arrows (stacked on mobile), under a headline that states the whole story in one line, with a turn in it ("I set out to study an account. The answer was the whole visit.").

| Card | Contains |
|---|---|
| **Problem** | One plain sentence (≤ 15 words) as the headline, plus one short line (≤ 15 words) |
| **Insight** | Same format. The turning point; it must reframe, not restate ("Visitors didn't need a better account. They needed a better visit."). Accent number and top border |
| **Solution** | Same format. Must clearly follow from the Insight. Its short line can say where it landed (presented, shipped, tested) |

Read the three headlines alone: they must form one cause → effect sentence.

Keep the overview **high level**: no evidence blocks, charts, quotes or stat rows here. Evidence lives in the part or section where it was found (e.g. the WCAG chart sits in the competitive analysis). A stat row only belongs here if the project has real outcomes. Scope numbers ("5 interviews") belong in Approach.

### 4. Approach (multi-part, and any project with several methods)
Before the detail, give the reader the whole research design in one place:
- **Lede:** why these methods, in one sentence (e.g. what the sites do → what people say → what people do)
- **Study comparison:** one card per study with the same rows: kind of evidence, its lead question, who/what, how, when, what it produced. Scope numbers live here. Each links to its part
- **All research questions:** the full research questions (and shortened objectives) for every study side by side. Each part then leads with its hypothesis and result, with its questions collapsed beside it

### 5. The body
**Single story:** 3–5 sections, each a story beat (setup, tension, turning point, resolution, what changed).

**Multi-part:** one **part** per study. Each part has:
- A **part band**: a large accent number (`01`), an eyebrow (`Part 01 · Interviews · Oct 2025`), a headline stating what the part found, and method chips (participants, duration, technique). A tinted background and top border make it clearly a new section.
- A **hypothesis card**: the **hypothesis going in** and a one-line **result** ("Partly right about the problem, wrong about the fix"), with that study's research questions in a collapsed list beside it (the full set is in Approach).
- **Sub-sections** numbered `2.1`, `2.2`… On desktop the number sits in a left column and **sticks while you read, then gets pushed out by the next one**. On mobile it sits inline above the eyebrow.
- A **bridge line** at the end: how this part changed the question for the next one.

**Every sub-section has:**
- An eyebrow (`Finding`, `Context`, `A detour`, `Turning point`…)
- A headline that states the point (≤ 12 words)
- A body of **≤ 120 words**, at most 3 short paragraphs
- **At least one image** (or a labelled placeholder) with a caption that says what to notice
- A **key takeaway** card (≤ 20 words)
- At most one extra: a pull quote, an image grid, tabs, or a problem explorer

### 6. Interactive blocks (use where they replace length)
- **Problem explorer:** a large image stage above 4–6 numbered problem cards. Clicking a card swaps the image and caption. Use it for a set of problems or findings that each have a screenshot.
- **Tabs:** for parallel artifacts such as personas and journey maps. Each tab is one image + caption.
- **Before / after:** see section 8.

### 7. What I found: the insights
After the parts, a section that pulls everything together:
- **Insight cards** (3–5): a numbered claim as the headline, 1–2 sentences of evidence, and **source chips** naming the studies that support it. Each should be backed by at least two sources where possible.
- Optionally, a **"What I believed → what I learned"** table, one row per study.

### 8. Before & after
Show what changes, even for research projects:
- A **roadmap** of the recommendations in priority order (5 at most)
- **Tabs per screen or touchpoint**, each with a **Before / After toggle** on one image frame, next to **numbered changes**. Each change has a title, one line of explanation, and a **link back to the insight or finding that justifies it**.
- Where no design exists yet, use labelled placeholders (`[Placeholder] After: …`) and list them as TODOs.

### 9. Key takeaways
3 cards: a bold lesson headline + 1–2 sentences. At least one is an honest limitation or open question.

### 10. Next case study
References collapsed in a `<details>`, then a link to the next project.

---

## Writing insights

An insight earns its place when it **changes what you'd do next**.

| Weak (topic) | Strong (claim) |
|---|---|
| Privacy concerns | Privacy is a price the AGO isn't paying |
| Account confusion | Nobody knows what they've signed up for |
| Social visits | Museums are visited in groups. The account assumes you came alone. |

Tests:
- **Is it a sentence with a verb and a point of view?** Not a noun phrase.
- **Is it surprising, or does it contradict the brief or hypothesis?** If everyone already believed it, it's a finding, not an insight.
- **Does it point at a design response?** The reader should almost be able to guess the recommendation.
- **Is it grounded?** Name the evidence: a quote, a moment, a number, and which studies support it.
- **Use the vivid moment.** A specific scene ("she realized we were reading the back of the case") beats a summary ("labels were hard to use").

---

## Research projects

- **Find the source material first.** Ask Stephanie where the original plans, reports and presentations are. Pull the **real research questions, hypotheses, objectives, participant details and quotes** from them. Never paraphrase research questions into something new. If a study had none, say so and propose "Guiding questions" marked `[TODO]` for her to confirm.
- **Every part shows its research questions** and its hypothesis + result.
- **Personas and journey maps** go behind tabs, not inline one after another.
- **Discussion and observation guides** go in an expandable panel ("Read the discussion guide"), grouped by section, so curious readers can see the rigour without everyone scrolling past it. Quote the original guide; if it's missing, rebuild it only from the researcher's own questions (never participant details) and flag it for verification.
- **Context that sets up the problem** (e.g. how each competitor positions itself) gets a compact comparison block, not paragraphs. Keep reference numbers.
- **Keep the quotes and citations Stephanie chose**, including academic ones, with their reference.
- **Recruiting and method changes are story beats**, not footnotes (e.g. "Turned away on day one").
- **Limitations** appear in the takeaways.

---

## Word and visual budget

| Part | Budget |
|---|---|
| Single story | 900–1,500 words of body text |
| Multi-part research | up to ~2,700 visible words. It stays scannable because of headlines, takeaways, tabs and images. Text in expandable panels doesn't count |
| Snapshot card | headline ≤ 20 words + one supporting line |
| Sub-section body | ≤ 120 words; paragraphs ≤ 3 sentences |
| Images | ≥ 1 per sub-section; aim for as much visual as text when scrolling |
| Tables | Only for ≥ 3 rows × ≥ 2 attributes |
| Bold | One key phrase per paragraph, at most |

If content exceeds the budget, **cut or move behind a tab or caption, don't compress**. Give Stephanie a "cut list" of what was removed so nothing disappears silently.

---

## Voice

- First person, warm and confident: "I noticed…", "I recommended…"
- Past tense for what happened; present tense for insights that still hold
- Plain words over jargon (say "people", not "end-users", unless quoting)
- Specific over general: a moment, a quote, a number
- Credit collaborators and advisors by role
- Personality in small doses: an eyebrow label, a caption, a bridge line

---

## Workflow

1. **Gather.** Read the existing content (`src/content/…`) and the design standard. Ask Stephanie, **in one grouped message**, for anything missing and **where her source files are** (reports, plans, decks, images).
2. **Mine the sources** for research questions, hypotheses, quotes, numbers and vivid moments. Note which slide or page each image comes from.
3. **Draft the snapshot and the insights first** and get approval. They decide the whole story.
4. **Outline**: shape, sections and parts, each sub-section's headline, takeaway and image. Show it as a short table and get approval.
5. **Write** within the budgets.
6. **Place images.** Use existing assets in `public/`. Export new ones from source files only with Stephanie's OK. Where none exists, add a labelled placeholder.
7. **Check** against the checklist and the design standard. Report `[TODO]`s, the cut list, and any caption you couldn't verify.
8. **Preview** at 360px, 768px and 1280px: side nav hidden below 1280px and highlighting the right section, sticky numbers working, no horizontal scroll.

Never change site code (components, styles, routes) without showing Stephanie the plan first. Writing content is the default job. Code changes are a separate, approved step.

---

## Checklist

**Story**
- [ ] The snapshot alone tells a complete cause → effect story, and each card names its source study
- [ ] Overview stays high level: no evidence, charts or quotes there; scope numbers only in Approach
- [ ] Insights are claims that reframe, each with evidence and source chips
- [ ] Headlines state points; no method names as headlines
- [ ] Every sub-section ends with a key takeaway
- [ ] Multi-part: Approach overview up front, a bridge line between parts, a synthesis after them
- [ ] 3 closing takeaways, including one limitation

**Research**
- [ ] Every study's real research questions shown in Approach; hypothesis + result in each part
- [ ] Discussion guides available in expandable panels
- [ ] Quotes and numbers traceable to Stephanie's sources

**Scannable and visual**
- [ ] A skimmer gets the story from hero + snapshot + headlines + takeaways
- [ ] Every section clearly demarcated (part bands, dividers, numbering)
- [ ] Images in every sub-section; every image has alt text and a caption that says what to notice
- [ ] Before / after section with numbered changes linked to insights

**Design standard** (see design-standard.md)
- [ ] Same opening and ending as every other case study; side nav on desktop only
- [ ] Built only from the standard blocks; any new block approved and added to the standard
- [ ] Only semantic tokens and existing utilities; no hardcoded colors
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Renders cleanly at 360 / 768 / 1280px with no console errors

**Truth**
- [ ] No invented facts; every `[TODO]` is listed for Stephanie
