# Content Model

All content lives in `src/content/` as typed JSON. Types are declared in
`src/lib/content.ts`. Adding content never requires editing a component.

## `site.json`

```jsonc
{
  "name": "string",              // your name, used in header + <title>
  "role": "string",              // e.g. "Product Designer & Developer"
  "tagline": "string",           // one-line positioning statement
  "availability": "string",      // e.g. "Open to freelance — Q3 2026"
  "email": "string",
  "location": "string",
  "socials": [{ "label": "string", "href": "string" }],
  "capabilities": [{ "title": "string", "body": "string" }],
  "about": {
    "portraitAlt": "string",
    "paragraphs": ["string"],
    "experience": [{ "role": "string", "company": "string", "period": "string", "summary": "string" }],
    "skills": [{ "group": "string", "items": ["string"] }],
    "currently": ["string"]
  }
}
```

## `case-studies.json`

Array of case studies, ordered as they should appear.

```jsonc
{
  "slug": "kebab-case",          // becomes /work/<slug>
  "title": "string",
  "subtitle": "string",
  "year": "2026",
  "role": "string",
  "timeline": "string",
  "team": "string",
  "tools": ["string"],
  "featured": true,              // shows on the home page
  "cover": { "src": "string", "alt": "string" },  // absolute https URL or /images/*
  "accent": "amber | ink | sage", // token-based accent for the card
  "overview": "string",
  "problem": "string",
  "process": [{ "heading": "string", "body": "string", "image": { "src": "string", "alt": "string" } | null }],
  "results": [{ "metric": "string", "label": "string" }],
  "outcome": "string",
  "reflection": "string"
}
```

## Rules
- `slug` must be unique and URL-safe; it is the route param.
- Every image needs `alt` text.
- Keep `overview` under ~240 chars — it doubles as the meta description.
- 3–6 `process` blocks reads best; more than 8 gets skimmed.
