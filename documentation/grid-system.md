# Grid System — Visual Display Guide

> **For AI Agents:** This is part of the core display logic. Read carefully — it affects how content is rendered.

## Overview

The portfolio homepage uses a **12-column CSS Grid** with **procedural/semi-dynamic placement**. Projects are placed based on their `importance` parameter, sorted by importance descending then by `order` ascending.

**Key file:** `layouts/index.html`

---

## Importance Levels

The `importance` parameter in frontmatter controls both **size** and **behavior**:

| Importance | Grid Size | Visual Effect | Click Action |
|---|---|---|---|
| **1** | 1×1 | Faded (opacity 0.3) + grayscale | Opens **lightbox** (no page) |
| **2** | 2×2 | Slightly faded (opacity 0.5) | Navigates to project page |
| **3** | 3×3 | Full opacity | Navigates to project page |
| **4** | 4×4 | Full opacity | Navigates to project page |
| **6** | 6×6 | Full opacity + **featured position** (col 4, row 1) | Navigates to project page |

### CSS Classes Applied

- `importance-1` → `span-1` + CSS `opacity: 0.3; filter: grayscale(100%)`
- `importance-2` → `span-2` + `opacity: 0.5`
- `importance-3` → `span-3`
- `importance-4` → `span-4`
- `importance-6` → `span-6` + special featured positioning via `grid-column: 4 / span 6; grid-row: 1 / span 6; z-index: 10`

### Hover Behavior

- **Importance 1:** On hover → `opacity: 0.7`, grayscale removed (partial reveal)
- **Importance 2:** On hover → `opacity: 1`, grayscale removed (full reveal)
- **Importance 3+:** Overlay appears with title, no opacity change

---

## Sorting

Projects are sorted by:
1. `Params.importance` **descending** (highest importance first)
2. `Params.order` **ascending** (for same importance)

The `order` parameter is not documented in frontmatter — it's an optional tiebreaker.

---

## Studies (Automatic)

Studies are **not project content** — they are automatically pulled from `assets/studies/` folder and rendered as **importance 1 cards** (1×1, faded, lightbox on click).

```go
{{ $studies := resources.Match "studies/*" }}
{{ range $studies }}
  <!-- Rendered as importance-1 cards -->
{{ end }}
```

**For humans:** Drop image files (JPG, PNG) into `assets/studies/` and they automatically appear on the homepage grid as faded 1×1 thumbnails.

---

## Featured Project (importance: 6)

Importance 6 projects get a **hero/featured position** — they are placed at grid column 4, spanning 6 columns, at the top row. This overrides the normal flow order.

```css
.project-card[data-importance="6"] {
    grid-column: 4 / span 6 !important;
    grid-row: 1 / span 6 !important;
    z-index: 10;
}
```

---

## Responsive Behavior

| Breakpoint | Width | Grid Columns | Notes |
|---|---|---|---|
| Desktop (>1700px) | Full 12 cols | 12 | Normal flow |
| 1100px–1700px | Desktop | 12 | Importance 2-6 double in size |
| 624px–1100px | Tablet | 12 | Full layout, importance 6 goes full width |
| 400px–624px | Mobile | 4 | Importance 1 stays 1×1 faded, others scale down |
| <400px | Small mobile | 1 | All become 1×1 |

---

## Lightbox (importance 1 only)

Importance 1 cards open a **full-screen lightbox** when clicked. The lightbox markup is at the bottom of `layouts/index.html`:

```html
<div id="lightbox" class="lightbox">
    <button class="lightbox-close">&times;</button>
    <img id="lightbox-image" src="" alt="">
</div>
```

Click handlers are in the inline `<script>` in `layouts/_default/baseof.html`.

**Important for AI agents:** When adding new importance-1 content, you do NOT create a link (`<a>`) — use a `<div>` with class `importance-1` and a `data-image` attribute pointing to the full image.
