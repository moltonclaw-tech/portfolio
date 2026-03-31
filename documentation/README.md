# Portfolio Site Documentation

Welcome to the TalesRT portfolio documentation.

## Quick Links

### For Content Editors (Humans)
- [Projects Guide](./projects.md) — How to add and edit portfolio projects
- [Studies Guide](./studies.md) — How to add practice work/busts
- [Grid System](./grid-system.md) — How the homepage grid works

### For AI Agents
- [Agent Instructions](../agent_instructions/README.md) — Quick reference for AI agents working on this codebase

### Reference
- [Structure](./structure.md) — Directory layout
- [Deployment](./deployment.md) — How to deploy to GitHub Pages
- [Customization](./customization.md) — Theme and configuration options

---

## Overview

This is the personal portfolio website of **Tales da Rocha Trindade** (talesrt), a Lead Character Artist specializing in game character creation.

### Tech Stack
- **Hugo** — Static site generator
- **Custom Theme: talesrt** — Located in `themes/talesrt/`
- **GitHub Pages** — Hosting at `/portfolio/` subfolder
- **Netlify** — Alternative deployment option (`netlify.toml` included)

### Key Features
- **Projects Portfolio** — Showcase character art with variable grid sizing
- **Studies Section** — Automatic gallery of practice work/busts
- **About Page** — Professional biography and career timeline
- **Contact Page** — Contact form and social links

---

## The Grid System (Important!)

This portfolio uses a **procedural 12-column grid** where project size depends on `importance` parameter:

| importance | Grid Size | Visual | Click Action |
|---|---|---|---|
| 1 | 1×1 | Faded/grayscale | Opens lightbox |
| 2 | 2×2 | Slightly faded | Goes to project page |
| 3 | 3×3 | Full | Goes to project page |
| 4 | 4×4 | Full | Goes to project page |
| 6 | 6×6 + featured | Hero position | Goes to project page |

**Studies always have `importance: 1`** and are auto-generated from `assets/studies/` folder — no frontmatter needed.

**Full projects always have `importance: 2-6`** and require their own `index.md` file.

See [Grid System](./grid-system.md) for full details.

---

## Getting Started

### Local Development

```bash
npm run dev     # Development server (if available)
npm run build   # Build for production
npm run clean   # Clean generated files
```

### Adding Content

**Projects:** See [Projects Guide](./projects.md)  
**Studies:** See [Studies Guide](./studies.md)

---

## Configuration

| File | Purpose |
|------|---------|
| `hugo.toml` | Site URL, title, theme, social params |
| `data/contact.yaml` | Contact info and social links (centralized) |

> **Note:** Social links appear in TWO places (sidebar and footer) and are configured in both `data/contact.yaml` AND `hugo.toml`. Keep them in sync.

---

## Questions?

For display/grid questions → see [Grid System](./grid-system.md)  
For content questions → see [Projects Guide](./projects.md) or [Studies Guide](./studies.md)
