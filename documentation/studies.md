# Studies Guide

> **For:** Humans adding practice work, busts, or quick studies.

---

## What Are Studies?

Studies are **quick practice pieces** — busts, quick sculpts, wireframe experiments, etc. Unlike projects, studies:
- Do **NOT** have their own page
- Appear as **faded 1×1 thumbnails** on the homepage grid
- Click to open a **lightbox** (full-screen image overlay)
- Are **automatically** pulled from a folder — no frontmatter needed

---

## Adding a Study

Simply drop an image file into `assets/studies/`. That's it.

```
assets/studies/
├── Busto.png
├── Faun.png
├── JediSurvivors.png
└── MyNewStudy.jpg
```

Supported formats: **JPG**, **PNG**

**No frontmatter, no markdown file, no build step** — just drop the image and rebuild.

---

## How It Works

The homepage template (`layouts/index.html`) automatically scans the `assets/studies/` folder:

```go
{{ $studies := resources.Match "studies/*" }}
{{ range $studies }}
  <!-- Rendered as importance-1 cards -->
{{ end }}
```

Each study is rendered as:
- 1×1 grid cell
- Faded (opacity 0.3, grayscale 100%)
- Title taken from the **filename** (without extension)
- Click opens lightbox

---

## Image Naming

The filename becomes the title displayed on hover. Use clear names:

✅ `Busto.png` → shows "Busto"  
✅ `Faun_Wireframe.png` → shows "Faun_Wireframe"  
❌ `AAAAA.jpg` → shows "AAAAA" (not descriptive)

---

## Image Recommendations

- **Minimum size:** 300×300px (1×1 display)
- **Format:** JPG for photos, PNG for wireframes/transparency
- **No processing:** Studies are served as-is (no WebP conversion, no resizing)

---

## Removing a Study

Delete the image file from `assets/studies/` and rebuild.
