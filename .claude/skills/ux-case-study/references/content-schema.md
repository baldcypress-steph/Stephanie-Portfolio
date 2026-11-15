# Case study content: where it lives

Project rule: **content lives in JSON** (`src/content/*.json`), typed in `src/lib/content.ts`, and is never hardcoded in components. Case studies render at `/work/<slug>` via `src/routes/work.$slug.tsx`. Never edit `src/routeTree.gen.ts`, and don't create a new route per case study.

Verify these paths still exist before relying on them.

## Today

| Case study | Source | Rendering |
|---|---|---|
| Kwavoo (coming soon) | `src/content/case-studies.json` | Shared JSON template |
| AGO | `src/content/ago-case-study.json` (meta) + `ago-case-study.md` (body) | Custom Markdown page |
| Recalculating diary study | `case-studies.json` (meta) + `recalculating-diary-study.md` (body) | Custom Markdown page |

## Story → schema mapping

Existing `CaseStudy` fields are reused where they fit. Fields marked **new** need a small type and template change (approval required).

| Story part | Field | Status |
|---|---|---|
| Eyebrow year | `year` | exists |
| Title / subtitle | `title`, `subtitle` | exists |
| Meta row | `role`, `timeline`, `team`, `tools` | exists |
| Meta: methods (research projects) | `methods` | **new** (today AGO's is hardcoded in the route) |
| Shape | `shape: "single" \| "multi-part"` (default `single`) | **new** |
| Approach overview | `approach: { lede }` (study cards and the all-questions block are built from `parts[]`) | **new** |
| Bar comparison | `sections[].chart: { title, rows: [{ label, value, highlight? }], caption }` | **new** |
| Parts (multi-part only) | `parts[]`: `{ number, label, kind, date, headline, chips[], leadQuestion, method: { who, how, when, produced }, researchQuestions[], objectives[], hypothesis: { text, verdict }, sections[], bridge }` | **new** |
| Sub-sections | `sections[]`: `{ id, eyebrow, headline, body[], images[{ src, alt, caption }], quote?: { text, author, ref? }, takeaway, tabs?[], explorer?: problems[], compare?: [{ name, logo?, tag, rows }], guide?: { title, summary, sections: [{ title, time?, observe?[], ask[] }] } }` | **new** |
| Problem explorer | `problems[]`: `{ title, summary, caption, image }` | **new** |
| Insights | `insights[]`: `{ claim, evidence, sources[] }` | **new** (replaces `research.findings` for display) |
| Synthesis table | `synthesis: { headline, rows: [{ study, believed, learned }] }` | **new** |
| Recommendations roadmap | `recommendations[]`: `{ title, detail }` | **new** |
| Before / after | `beforeAfter[]`: `{ tab, before: image \| placeholder, after: image \| placeholder, changes: [{ title, detail, insight }] }` | **new** |
| Hero image | `cover` (+ key in `covers` map in `content.ts`) | exists |
| Meta description | `overview` (≤ ~155 chars used) | exists |
| **Snapshot: Problem / Insight / Solution** | `snapshot: { problem, insight, solution }`, each `{ headline, line }` | **new** |
| Stat row | `results[]` (`metric`, `label`) | exists |
| Chapters | `process[]` (`heading`, `body`, `image`/`images`, `imageAlt`) | exists |
| Chapter eyebrow (beat · method) | `process[].eyebrow` | **new** (today the template prints "Step 01") |
| Chapter takeaway | `process[].takeaway` | **new** |
| Pull quote | `testimonial` (`quote`, `author`) | exists |
| Closing takeaways | `learnings[]` → becomes `{ title, body }[]` | **change** (today `string[]`) |
| Limitation / reflection | `reflection` | exists |

Fields like `context`, `problemPoints`, `goals`, `research` and `decisions` still exist. In the story format, fold their content into chapters rather than rendering them as separate sections.

## Images

- Images live in `public/` (e.g. `public/ago/…`) and are referenced by key or path through `getCoverImage` in `src/lib/content.ts`.
- Every image needs `alt` text that describes the content, plus a caption that says what to notice.
- Prefer existing assets. Never reference external images that Stephanie hasn't provided.
