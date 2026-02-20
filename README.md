# TalesRT Portfolio

Character artist portfolio built with Hugo, featuring optimized images, lazy loading, and modern web practices.

## Quick Start

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Available Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Hugo dev server with live reload |
| `npm run build` | Build optimized production site |
| `npm run clean` | Remove generated files (public/, resources/_gen/) |
| `npm run check` | Lint CSS and build |

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
├── hugo.toml         # Hugo configuration
├── netlify.toml      # Netlify deployment config
└── package.json      # NPM scripts
```

## Adding Projects

### Method 1: Using Archetype
```bash
hugo new projects/my-new-project
```

### Method 2: Manual
1. Create folder: `content/projects/my-project/`
2. Add `index.md` with front matter
3. Add images (thumb.jpg, project images)
4. Hugo auto-detects thumbnail

### Front Matter Template
```yaml
---
title: "Project Name"
date: 2026-01-01
type: projects
description: "Brief description"
tags: ["zbrush", "character"]
importance: 3  # 1=WIP, 2-6=work quality
---

Description content...
```

### Image Requirements
- **Thumbnail**: `thumb.jpg` or `thumb.png` in project folder
- **Project images**: Reference in `content:` section
- **Studies**: Drop PNG/JPG in `assets/studies/`

## Image Optimization

The site automatically generates:
- WebP versions of all images
- Multiple sizes (300w, 600w, 1200w)
- Blur-up placeholders (LQIP)
- Lazy loading

## Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `public`
4. Security headers are auto-configured via `netlify.toml`

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Build from `main` branch
3. Run: `npm run build`
4. Commit `public/` folder

## CDN Setup (Optional)

To use a CDN for images:

1. Get CDN URL from your provider (Cloudflare, Netlify, Vercel)
2. Add to `hugo.toml`:
   ```toml
   [params]
     cdnUrl = "https://cdn.yourdomain.com"
   ```

## Security

- Content Security Policy (CSP) configured in `netlify.toml`
- SRI hashes for external CDN resources
- HTML sanitization enabled (`unsafe = false`)

## Performance Features

- ✅ WebP image format
- ✅ Lazy loading
- ✅ Responsive images (srcset)
- ✅ Blur-up LQIP placeholders
- ✅ Preload critical images
- ✅ Minified CSS/JS
- ✅ Security headers

## Troubleshooting

### Images not showing?
1. Check `thumb.jpg/png` exists in project folder
2. Run `npm run build` to regenerate
3. Clear browser cache

### Build errors?
```bash
npm run clean
npm run build
```

## License

MIT
