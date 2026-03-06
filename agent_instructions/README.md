# Agent Instructions - TalesRT Portfolio

## About This Project

Character artist portfolio website built with **Hugo** for Tales (TalesRT).

**URL:** https://talesrt.com/ (when deployed)

## Tech Stack

- **Hugo** - Static site generator
- **Theme:** talesrt (custom)
- **Deployment:** Netlify / GitHub Pages
- **Image Optimization:** WebP, lazy loading, blur-up placeholders

## Key Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Clean generated files
npm run clean
```

## Project Structure

```
portfolio/
├── content/           # Markdown content (projects, pages)
├── layouts/          # Hugo templates
├── themes/talesrt/   # Theme files
├── static/           # Static assets (images, favicon)
├── assets/           # Source assets (processed by Hugo)
│   ├── css/          # CSS files
│   └── studies/      # Study images (auto-imported to gallery)
├── public/           # Built site (gitignored)
├── hugo.toml         # Hugo configuration
└── netlify.toml      # Netlify deployment config
```

## Adding Projects

1. Create folder: `content/projects/project-name/`
2. Add `index.md` with front matter
3. Add thumbnail: `thumb.jpg` or `thumb.png`
4. Reference images in content
5. Run `npm run build`

### Front Matter Template
```yaml
---
title: "Project Name"
date: 2026-01-01
type: projects
description: "Brief description"
tags: ["zbrush", "character"]
importance: 3
---
```

## Current Status

- Site is built in `public/` folder
- Can be served locally via HTTP server on port 1314
- Accessible on LAN at http://192.168.0.5:1314

## For AI Agents

If you're working on this portfolio:
1. Check this file for context
2. Look at `hugo.toml` for site config
3. Check `content/projects/` for existing projects
4. Look at `themes/talesrt/` for customizations

## Deployment

To deploy:
1. Push to GitHub
2. Connect repo to Netlify (or enable GitHub Pages)
3. Build command: `npm run build`
4. Publish directory: `public`
