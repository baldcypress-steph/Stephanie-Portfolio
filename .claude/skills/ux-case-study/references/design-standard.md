# Case study design standard

Case studies share **one structure and one set of components**. A reader moving between projects should feel at home: the same opening, the same cards, personas, journey maps, before/afters and references. The middle of a page can take the shape its story needs, but it never invents a new version of a component that already exists here.

Source of truth: tokens in `src/styles.css` (`:root`) and the `.case-study-markdown .cs-*` blocks in the same file. Case study content is Markdown in `src/content/*.md`, rendered by `src/routes/work.$slug.tsx`. Raw HTML blocks pass through `marked`, so **never put a blank line inside an HTML block**.

Both live case studies follow this standard: `ago-case-study.md` (multi-part) and `recalculating-diary-study.md` (multi-part). Copy markup from them rather than writing it from scratch.

---

## Rules that apply everywhere

1. **Cards in a set look identical.** No purple top border, number or label on one card just to emphasize it. A highlight is only allowed when it means something the reader needs, and you say why: the subject in a comparison (the AGO card among peers), the biggest bar in a chart, low points on a journey map, the selected tab or problem card.
2. **Type scale only.** Text sizes come from the site scale: 12, 14, 16, 18, 20, 24, 30, 48, 60, 72px (`0.75rem` … `3.75rem`). Nothing under 12px except reference superscripts.
3. **One label style.** Small uppercase labels are 12px, weight 600, `letter-spacing: 0.16em`, muted (or accent for section eyebrows and "Key takeaway" / "Why" / "After").
4. **Headings are bold.** Section and sub-section headlines use Syne, weight 600, `letter-spacing: -0.025em`. Section headlines are 24px on mobile and 30px from 768px.
5. **One card shape.** Cards, tables, panels, takeaways, the journey map frame and the cover use `border-radius: var(--radius-card)` (20px), a `1px` white/60% border, `var(--glass-card)` and `var(--shadow-card)`. Images and video inside use `var(--radius)` (12px).
6. **One numbering style.** Numbers use Syne, weight 600, accent colour: part numbers 48/60px, card numbers (`.cs-num`) 20px, small numbers 12–14px.
7. **Colours are tokens.** No hex values in new rules; use `var(--color-*)`. Muted text is `#6b7080` (passes WCAG AA).
8. **Check before showing.** Look at new UI zoomed in, at 375px, 768px and 1360px, with no horizontal page scroll.
9. **Voice.** Plain, first person, specific. Avoid "X, not Y" constructions, colon reveals, punchy aphorisms and noun-phrase labels. Keep Stephanie's own edits word for word.

---

## Page structure (both case studies)

Hero (title and subtitle from `case-studies.json`) → Overview snapshot → (My role) → Approach → Parts `01`–`03` → What I found → What I recommended → **Redesigned screens** → Takeaways → References.

Every section marker has an `id` that is also listed in the page's `SideNavSection[]` array (`agoSections`, `diarySections`) in `work.$slug.tsx`, rendered by `CaseStudySideNav`.

---

## Components

Each entry: what it is for, the class names, and the rules. The markup in the two Markdown files is the reference implementation.

### Snapshot (Overview)
`.cs-snapshot` with three plain `.cs-card`s: `.cs-label` (number in a circle + "The problem / The insight / The solution"), `.cs-big` headline, `.cs-small` line. **All three cards look the same.**

### Study cards (Approach)
`.cs-studies` with one `.cs-card` per study: `.cs-num` (`01 <span>label</span>`), `.cs-title`, `.cs-ask` (lead question), and a `<dl>` with the same rows on every card (How / When / Produced, or Who / How / When / Produced).

### Part band
`<p class="cs-part" id="…"><span>01</span>Name · Month Year</p>` followed by an `###` headline that states what the part found.

### Key takeaway
`<p class="cs-takeaway"><span>Key takeaway</span>…</p>`. Same card as everything else; the accent label marks it. One per sub-section at most.

### Bar chart
`.cs-card.cs-bars-card` → `.cs-who` (source) → `.cs-title` → `.cs-bars` with `role="img"` and an `aria-label` listing every value → `.cs-bar` rows. Only the largest (or the subject) bar gets `.cs-bar--accent`. Sort largest first. Always say what the numbers count.

### Problem explorer
For a set of 3–6 problems that each have a screenshot (e.g. AGO competitive analysis). Replaces horizontal-scroll galleries of problem screenshots.
```
<div class="cs-explorer">
  <input type="radio" name="cs-explorer-ID" id="cs-ex-ID-1" checked /> … one per problem
  <div class="cs-explorer-stage">
    <figure class="cs-explorer-shot"><img …/><figcaption><b>01</b> what to notice</figcaption></figure> …
  </div>
  <div class="cs-explorer-cards" role="radiogroup" aria-label="…">
    <label for="cs-ex-ID-1"><span class="cs-explorer-num">01</span><span class="cs-explorer-title">Problem as a short claim</span><span class="cs-explorer-desc">One line of evidence.</span></label> …
  </div>
  <p class="cs-explorer-hint">Select a problem to see it on ….</p>
</div>
```
Order of inputs, shots and labels must match. CSS supports up to 6. The selected card gets the accent outline. Works without JavaScript and with the keyboard (arrow keys move between radios).

### Tabs
Pill tabs used for personas and for comparing apps or screens.
```
<div class="cs-tabs">
  <input type="radio" name="cs-NAME-tabs" id="cs-tab-a" checked /><input … id="cs-tab-b" />
  <div class="cs-tablist"><label for="cs-tab-a">Name <span>Detail</span></label>…</div>
  <div class="cs-tab-panel cs-tab-panel--1">…</div><div class="cs-tab-panel cs-tab-panel--2">…</div>
</div>
```
Up to 3 tabs. Input order = label order = panel number. The `<span>` detail hides on mobile.

### Personas (with journey maps)
Always in persona tabs, **primary persona first**, tab detail = priority (`Primary`, `Secondary`, `Tertiary`). Each panel holds one persona card, then its journey map, then a `.cs-caption` naming the low point.

Persona card (`.cs-card.cs-persona`):
- Side: round headshot `.cs-avatar` (crop the face from the source slide, ~150–200px square, saved next to the case study's images), `.cs-who` "Persona · Priority", `.cs-title` full name, `.cs-tag` one-line summary, `<dl>` with 4 rows (e.g. mode or role, how often, where/age, experience or share of users).
- Main: `.cs-persona-desc` (2 sentences), `.cs-persona-cols` with exactly 3 columns: **Goals**, **Frustrations**, and one behaviour column named for the project ("Opens the app to", "Uses the account to", "Would sign up for"), then `.cs-persona-quotes` ("In their words", 1–2 verbatim quotes with the participant).
- Content comes only from the persona slides and research; never invent.

### Journey map
A map, not a grid of text cards: a feeling curve over a transit-line of stages, with short rows lined up under each stop.
- `.cs-jm` with `style="--jm-n:N"` (N = number of stages, 4–7).
- Rows, in order: **Feeling** (curve + emotion words), **Stage** (numbered stops), **Doing**, **Pain point**, **Opportunity**. Use `—` (renders faint) when a cell has nothing.
- Feeling levels: 3 good, 2 mixed, 1 low. Low stops and dots are filled accent; nothing else is highlighted.
- Cells are a few words. Goals, context, artifacts and people rows from the source map are left out; the persona card covers goals.
- Generate the markup (curve path and dot positions) with the builder used for both pages; don't hand-edit coordinates.

### Insights (What I found)
`#### 0N Claim as a full sentence.` followed by a blockquote: 1–2 sentences of evidence ending in italic sources (`*Interviews · Contextual inquiry*`). Then a "What we believed / What we learned" table.

### Roadmap (What I recommended)
`.cs-roadmap` with up to 5 numbered `.cs-card`s: `.cs-num`, `.cs-title` (an action, e.g. "Give directions by route instead of by bus"), `.cs-small` (example or detail).

### Redesigned screens (before / after)
Its own section after the recommendations:
```
<p class="cs-eyebrow" id="redesign">From research to screens</p>
### Redesigned screens
One short intro paragraph.
```
then one **change card** per redesign (2–4):
```
<article class="cs-card cs-change">
  <header class="cs-change-head"><p class="cs-num">01</p><div>
    <p class="cs-title">The change, as an action</p>
    <p class="cs-change-why"><span>Why</span>The finding behind it. <em>(Insight 0X)</em></p>
    <p class="cs-change-quote">“Short verbatim quote.” <cite>P3</cite></p>   (optional)
  </div></header>
  <div class="cs-change-compare">
    <div class="cs-change-pane"><p class="cs-who">Before</p> …media… <p class="cs-change-cap">What's wrong today</p></div>
    <span class="cs-change-arrow" aria-hidden="true"></span>
    <div class="cs-change-pane cs-change-pane--after"><p class="cs-who">After</p> …media… <p class="cs-change-cap">What the redesign does</p></div>
  </div>
  <div class="cs-change-what"><p class="cs-who">What changes</p><ol><li><b>Title.</b> One line. <em>(Insight 0X)</em></li>…</ol></div>
</article>
```
Media inside a pane, one of:
- Phone screenshot + screen recording: `<figure class="cs-shot-pair"><div><img/><video/></div><figcaption>…</figcaption></figure>`. **Screenshot always first, video second.** Captions name the app: "Before, in Google Maps: …" plus a reference superscript.
- Several apps for the same problem: put the shot pairs in app tabs inside the Before pane (the compare grid widens the Before side automatically). When the After pane also holds a shot pair, the grid splits evenly so both sides' phones are the same size. Crop recordings to the phone screen only, with no mockup bezel or background.
- Optional **Update** block (`.cs-change-update`) after What changes, when something changed after the study (e.g. a real app later shipped the change). Label it `Update · Month Year` in a `cs-who`, one or two plain sentences, then a shot pair with a caption naming the app and date.
- Web page or photo: `<img class="cs-change-img" …/>`.
- Not ready yet: `<div class="cs-change-ph"><span>Placeholder</span>Screenshot coming</div>` (Before) or `<span>Redesign</span>Screen coming` (After).

Videos: H.264 MP4 (convert iPhone HEVC with `avconvert -p Preset640x480`), under ~15 MB, `autoplay muted loop playsinline preload="metadata"`, a poster, and an `aria-label`. Reduced-motion users get controls instead of autoplay (`useReducedMotionVideos`). Record with Location Services off so no location dot appears, and check sample frames before publishing. Keep originals out of git (see `.gitignore`).

### Photos and images
- **Never put a screenshot of a slide on the page.** Slide titles, dates, page furniture and slide-made collages don't belong. Use the original photo or screen. If only the slide exists, crop each photo out of it (inside its border, no slide text) into `public/<project>/photos/`. If a crop would be under ~200px wide or unreadable, use a placeholder and ask Stephanie for the original.
- Photos go in `.cs-grid` rows (`--2` or `--3`); every image in a row shares one shape: `4:3` by default, `3:4` with `.cs-grid--portrait`. A 2-up portrait row is capped at 36rem wide.
- Each photo gets alt text and a short caption that says what to notice, starting with the place when comparing ("AGO: …", "ROM: …").
- Keep Stephanie's purple annotations (circles, outlines) when they point at the thing the caption describes.
- Synthesis boards (FigJam, affinity maps) are real artefacts and stay as single `.case-study-analysis-image` figures.

### Diagrams (floor plans, flows, maps)
Rebuild sketches from slides as an inline SVG in a `figure.cs-floorplan`: `.cs-floorplan-scroll` card (scrolls sideways on phones, with `role="img"` and a full `aria-label` describing the diagram), then `.cs-floorplan-legend`, then a caption. Rooms and fixtures are `fp-room` (card fill, border stroke, 6px corners); the key path is solid accent, a secondary path is dashed muted; the one thing the finding is about gets the dashed accent outline (`fp-booth`). Labels use `fp-label` (13px, 600) and `fp-small` (12px muted). Only redraw what the source sketch shows.

### Expandable panel
`<details class="cs-guide">` with `<summary><span>Title<small>one line</small></span><b aria-hidden="true">+</b></summary>`; the `+` renders as a chevron that flips when open. Inside: `.cs-guide-body` → `.cs-guide-cols`.

### Takeaways (closing)
`.cs-roadmap.cs-roadmap--3` with 3 cards; at least one is a limitation.

### References
APA 7, **alphabetical by author**, as a numbered Markdown list under `### References`. The page cites them with superscripts (`<sup>N</sup>`) whose numbers match the alphabetical list; when a reference is added or removed, renumber every superscript. Apps: `Company. (Year). *App name* [Mobile app]. URL`. Same author, no date: `(n.d.-a)`, `(n.d.-b)` ordered by title.

---

## Adding a new component

Propose it to Stephanie first, build it once in `src/styles.css` under `.case-study-markdown`, use it on every page where it fits, and add it to this file with its markup and rules.
