# Projects Guide

> **For:** Content editors, humans adding new work to the portfolio.

---

## Adding a New Project

### 1. Create the Project Folder

```
content/projects/my-project/
```

### 2. Add Images

Required:
- `thumb.jpg` or `thumb.png` — thumbnail for the homepage grid

Optional:
- Any number of project images (referenced in frontmatter)

### 3. Create `content/projects/my-project/index.md`

```yaml
---
title: "Project Name"
date: 2026-03-31
type: projects
description: "Brief description shown on project page."
tags: ["character", "zbrush", "blender"]
importance: 3
draft: false
---
```

### 4. Add Project Images (in frontmatter)

```yaml
content:
  - type: image
    src: "my-image-1.jpg"
  - type: image
    src: "my-image-2.jpg"
```

---

## Frontmatter Reference

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Project name |
| `date` | ✅ | Publication date (YYYY-MM-DD) |
| `type` | ✅ | Always `projects` |
| `description` | ✅ | Short description for project page |
| `tags` | ✅ | Array of software/tags (zbrush, blender, character, etc.) |
| `importance` | ✅ | Grid size + behavior (see grid-system.md) |
| `content` | ❌ | Array of images to display on project page |
| `draft` | ✅ | Must be `false` to appear |

---

## Importance — Which to Use?

| Type | Importance | Grid Size | When to Use |
|------|-----------|-----------|-------------|
| **Study/Bust** | 1 | 1×1 | Quick studies, practice pieces, busts |
| **Small project** | 2 | 2×2 | Smaller character work |
| **Medium project** | 3 | 3×3 | Standard character or prop |
| **Large project** | 4 | 4×4 | Complex scenes, detailed characters |
| **Hero/Featured** | 6 | 6×6 + featured | Best work, showcase pieces |

**Guideline:** Importance 1 = studies/busts. Importance 2-6 = full projects with their own page.

---

## Image Recommendations

- **Thumbnail:** 800×800px minimum, square aspect ratio works best
- **Project images:** 2000px wide recommended for full detail
- **Format:** JPG for photos, PNG for transparency if needed

### Hugo Image Processing

All project images referenced in frontmatter are automatically processed:

| Image Type | Sizes Generated | Notes |
|---|---|---|
| **Thumbnails (homepage)** | 300w, 600w, 1200w | Used in grid cards |
| **Project detail images** | 800w, 1200w, 2000w | Used on project page |
| **All images** | WebP conversion | Automatic format optimization |
| **Lazy loading** | Yes | IntersectionObserver |
| **LQIP** | Yes | Blur-up placeholder |

**Hugo's resource pipeline** handles all of this automatically — just reference the filename in frontmatter.

---

## Publishing

After adding the project:

```bash
npm run build
git add -A
git commit -m "Add new project: My Project"
git push
```

GitHub Pages will rebuild automatically.
