# Customization Guide

This guide covers how to customize the portfolio site's appearance and configuration.

## Configuration

Main configuration file: `hugo.toml`

### Site Settings

```toml
baseURL = 'https://moltonclaw-tech.github.io/portfolio/'
canonifyURLs = false
languageCode = 'en-us'
title = 'talesrt - Character Artist'
theme = 'talesrt'
```

### Parameters

```toml
[params]
  author = "talesrt"
  subtitle = """Lead Character Artist
3D | ZBrush | Blender | Unreal | Unity"""
  description = "Portfolio of talesrt - Lead Character Artist based in Curitiba, Brazil"
  avatar = "/portfolio/images/avatar.png"
  favicon = "/portfolio/talesrt_logo.svg"
  heroTagline = "Crafting characters that tell stories"
  cdnUrl = ""  # Optional CDN URL
```

## Contact Information

Edit `data/contact.yaml` to update:

- Email addresses
- Page headlines
- Call-to-action text
- Social media links (name, URL, icon)

## Theme Files

The custom theme is in `themes/talesrt/`. Key files:

### Templates
- `layouts/_default/baseof.html` - Main page template
- `layouts/_default/single.html` - Single content page
- `layouts/_default/list.html` - List pages
- `layouts/projects/single.html` - Project detail page

### Partials
- `_partials/head.html` - HTML head section
- `_partials/header.html` - Site header
- `_partials/footer.html` - Site footer
- `_partials/menu.html` - Navigation menu

### Assets
- `assets/css/main.css` - Main stylesheet
- `assets/js/main.js` - JavaScript

## Custom CSS

To add custom CSS without modifying the theme:

1. Create `assets/css/custom.css`
2. Add your styles
3. Reference in `layouts/_partials/head.html`

## Changing Colors

Edit `themes/talesrt/assets/css/main.css` to change:

- Primary colors
- Background colors
- Typography
- Spacing
- Responsive breakpoints

## Adding New Pages

1. Create folder in `content/`: `content/new-page/`
2. Create `index.md` with frontmatter:

```yaml
---
title: "Page Title"
date: 2026-03-07
type: page
draft: false
---

Page content...
```

3. Create or copy template in `layouts/`

## SEO Configuration

The site includes Open Graph meta tags. To customize:

- `title` in frontmatter - Page title
- `description` in frontmatter - Meta description
- `avatar` in hugo.toml - Social share image

## Environment Variables

For production, consider setting:

- `HUGO_ENV = "production"` - Enables minification
- `HUGO_NUMBER_OF_WORDS` - Word count for reading time

## Performance

To optimize:

1. Use optimized images (WebP format)
2. Enable minification: `hugo --minify`
3. Use CDN for static assets (set `cdnUrl` in config)
4. Enable Hugo cache: `hugo --gc`

## Backup

Before major changes, backup:

- `hugo.toml` - Configuration
- `data/contact.yaml` - Contact data
- `content/` - All content
- `themes/talesrt/` - Theme files
