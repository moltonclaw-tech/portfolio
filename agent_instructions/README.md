# Agent Instructions — TalesRT Portfolio

> **For:** AI Agents working on this codebase.

## Who You're Helping

**Tales da Rocha Trindade** — Lead Character Artist based in Curitiba, Brazil. Specializes in character art, game pipelines, and team leadership. Portfolio URL: https://talesrt.com (or https://moltonclaw-tech.github.io/portfolio/ until custom domain is active).

## Project Overview

Hugo static site generator with a **custom theme** (`themes/talesrt/`). The site is deployed to GitHub Pages at `/portfolio/` subfolder.

**URL:** https://moltonclaw-tech.github.io/portfolio/

## Critical Rules for AI Agents

### 1. Always Check `importance` First

Before touching any project frontmatter, identify the `importance` value. This controls everything:
- **importance: 1** → Study/Bust → No page, lightbox only
- **importance: 2-6** → Full project → Has a page

### 2. Studies Are NOT Markdown Files

Studies are **image files only** in `assets/studies/`. Do NOT create markdown files for studies. They are auto-rendered from the folder.

### 3. Thumbnails Are Required for Projects

Every project needs a `thumb.jpg` or `thumb.png` in its folder. Without it, the homepage grid shows broken images.

### 4. All Images Go in the Project Folder

Project images go in `content/projects/project-name/` and are referenced in frontmatter `content:` array. NOT in `static/` unless you want them as raw files.

### 5. Hugo Image Processing

The theme uses Hugo's resource pipeline:
- Images referenced in frontmatter are **automatically resized** to WebP
- Multiple resolutions are generated (srcset)
- Blur-up (LQIP) placeholders are created
- You should reference images by filename in frontmatter — Hugo handles the rest

### 6. Rebuild Required After Changes

Hugo is a **static generator**. After any content change, the site must be rebuilt:
```bash
npm run build
```
Then commit and push the `public/` folder.

## Grid System (Critical)

The homepage grid is **procedural** based on `importance` parameter:

| importance | Grid Size | Behavior |
|---|---|---|
| 1 | 1×1 | Faded/grayscale → lightbox on click |
| 2 | 2×2 | Slightly faded → project page |
| 3 | 3×3 | Full → project page |
| 4 | 4×4 | Full → project page |
| 6 | 6×6 + featured position | Hero/featured placement |

Sorting: by `importance` descending, then `order` ascending.

## Content Types

### Projects (`content/projects/`)
- Each has `index.md` with frontmatter
- Have `thumb.jpg/png` for grid thumbnail
- May have multiple images displayed on project page
- importance: 1 = no page (study), importance 2-6 = has page

### Studies (`assets/studies/`)
- Image files only (JPG, PNG)
- No frontmatter, no markdown
- Auto-rendered as importance-1 cards
- Click opens lightbox

### About Page (`content/about/index.md`)
- HTML content directly in markdown
- Contains bio, shipped titles, journey timeline

### Contact Page
- Template-driven from `data/contact.yaml`
- No markdown content needed

## Key Files and What They Do

| File | Purpose |
|------|---------|
| `layouts/index.html` | Homepage grid — procedural placement based on importance |
| `layouts/projects/single.html` | Project detail page template |
| `themes/talesrt/layouts/_default/baseof.html` | Base HTML template with sidebar + lightbox JS |
| `themes/talesrt/assets/css/main.css` | All styles — grid, sidebar, project pages, responsive |
| `data/contact.yaml` | Centralized contact info + social links |
| `hugo.toml` | Site config — baseURL, title, theme, social params |
| `archetypes/default.md` | Template for new content files |

### Theme Override System

Root `layouts/` **overrides** `themes/talesrt/layouts/`. When modifying templates:
1. Check `layouts/` first (root overrides)
2. Then check `themes/talesrt/` for base templates

Current root overrides: `layouts/index.html`, `layouts/projects/single.html`

## Important CSS Classes

- `.gallery-container` — 12-column CSS Grid
- `.span-1` through `.span-6` — grid column/row spans
- `.project-card` — grid item
- `.importance-1` — study behavior (lightbox, no link)
- `.lightbox` — full-screen image overlay
- `.sidebar` — fixed left navigation

## Common Tasks

### Add a New Project
1. Create `content/projects/project-name/`
2. Add `thumb.jpg` + project images
3. Create `index.md` with frontmatter (importance 2-6)
4. Build: `npm run build`

### Add a Study
1. Drop image into `assets/studies/`
2. Build: `npm run build`
3. Study auto-appears as faded 1×1 card

### Change Grid Size of a Project
Edit `importance` in frontmatter:
- Higher = larger
- importance 1 = study (no page)
- importance 6 = featured hero position

## Social Links

Social links are configured in TWO places (they must match):
1. `data/contact.yaml` → `socials[]` array (icons + URLs)
2. `hugo.toml` → `[params.social]` (footer links)

Update BOTH when changing socials.

## Deployment

Current: Manual build + GitHub Pages.
- Build: `npm run build`
- Push `public/` folder to GitHub
- GitHub Pages serves from `/portfolio/` subfolder

See `documentation/deployment.md` for full details.

## Questions?

If unsure about the display behavior of a project, refer to `documentation/grid-system.md`.
For content editing, refer to `documentation/projects.md`.
For studies, refer to `documentation/studies.md`.
