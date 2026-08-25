# Design System

Airy, glassmorphism portfolio. Cool whites and soft silvers with subtle ambient brand gradients, translucent surfaces, and restrained typography. The overall feel is light, editorial, and product-precise.

## Tokens

Defined in `src/styles.css` as Hex and RGBA CSS variables and exposed to Tailwind via `@theme inline`. **Never** write hardcoded utility overrides where a token exists — use semantic utility classes (`bg-background`, `text-muted-foreground`, `bg-card`, `border-border`).

| Token | Hex / Value | Use |
| --- | --- | --- |
| `background` / `foreground` | `#fafafa` / `#333333` | Page surface + high-contrast body text |
| `card` / `card-foreground` | `#ffffff` / `#333333` | Glassy raised surfaces, case study cards |
| `primary` / `primary-foreground` | `#333333` / `#fafafa` | Ink — primary CTA triggers, strong emphasis |
| `secondary` / `secondary-foreground` | `#f4f4f6` / `#333333` | Muted interactive surfaces, secondary actions |
| `accent` | `#421bcf` | Core brand purple — link hovers, active rings |
| `muted` / `muted-foreground` | `#f1f1f4` / `#838896` | Secondary surfaces + metadata/subtitles |
| `border` / `input` | `#e2e4e9` | Subtle hairlines, dividers, neutral card edges |

## Custom Utilities & Glass Surfaces

All reusable interactive behaviors and glass surfaces are registered in `src/styles.css` via `@utility`:

* **`glass-card`**: Linear white gradient (`rgba(255, 255, 255, 0.9)` to `rgba(250, 250, 252, 0.5)`), `24px` backdrop blur, `rgba(255, 255, 255, 0.6)` border, and soft ambient shadow.
* **`hover-card`**: Case study card interaction — `-0.25rem` smooth vertical lift, deep elevation shadow, and neutral border transition.
* **`btn-primary` & `btn-secondary`**: Standardized CTA triggers with built-in micro-interactions (`scale(1.01)` on hover, `scale(0.98)` on press).
* **`pastel-glow-brand`**: Ambient background aura using brand purple (`rgba(66, 27, 207, 0.08)`) with a `120px` blur.
* **`pastel-glow-slate`**: Subtle neutral background aura (`rgba(226, 232, 240, 0.5)`) with a `120px` blur.

## Typography

- **Display**: **Syne** — Headings, hero display, case study titles.
- **Body / UI**: **DM Sans** — Paragraphs, navigation, labels, metadata.
- **Scale**: `text-xs` meta → `text-base/relaxed` body → `text-3xl` → `text-6xl` display.
- **Measure**: Cap long-form text reading width at `max-w-[65ch]`.

## Layout

- **Container**: `mx-auto w-full max-w-6xl px-5 sm:px-8`.
- **Long-form column**: `max-w-2xl`.
- **Section rhythm**: `py-16 sm:py-24`.
- **Grids**: 1-column mobile → 2-column `sm:` → 3-column `lg:`.

## Responsive Rules & Accessibility

- Mobile-first design; test at 360px / 768px / 1280px.
- Enforce light-mode consistency across all devices.
- High contrast compliant (`#ffffff` text on `#421bcf` accent backgrounds).
- Respect `prefers-reduced-motion: reduce` across all interactive utilities.

## Motion

Subtle only: 150–300ms ease-out transitions (`cubic-bezier(0.22, 1, 0.36, 1)`) for hover states, scale tweaks, and page routing. No parallax or scroll-jacking.