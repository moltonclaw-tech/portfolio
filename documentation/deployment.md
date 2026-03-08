# Deployment Guide

This guide covers how to deploy the portfolio site to GitHub Pages.

## Current Setup

The site is deployed to: **https://moltonclaw-tech.github.io/portfolio/**

Repository: **https://github.com/moltonclaw-tech/portfolio**

## Deployment Process

### Option 1: Manual Deployment (Current)

1. **Make changes** in your local repository
2. **Build the site:**
   ```bash
   hugo
   ```
3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "Update site"
   git push
   ```

GitHub Pages will automatically rebuild from the `public/` folder.

### Option 2: GitHub Actions (Recommended)

The repository includes a `.github/` folder with workflows. To enable:

1. Go to repository Settings → Pages
2. Select "GitHub Actions" as source
3. Create a workflow file in `.github/workflows/hugo.yaml`:

```yaml
name: Deploy Hugo Site

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.155.3'

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### Option 3: Netlify

The repository includes `netlify.toml` for automatic deployments:

1. Connect repository to Netlify
2. Netlify automatically detects Hugo
3. Set build command: `hugo`
4. Set publish directory: `public`

## Subfolder Configuration

The site is configured to run in a subfolder (`/portfolio/`). Key settings in `hugo.toml`:

```toml
baseURL = 'https://moltonclaw-tech.github.io/portfolio/'
canonifyURLs = false
```

All internal links are automatically adjusted to include `/portfolio/`.

## Troubleshooting

### CSS/Images Not Loading

- Ensure `baseURL` matches your deployment URL
- Check that `canonifyURLs = false` is set
- Verify paths start with `/portfolio/`

### 404 Errors on Pages

- Check that content files exist in `content/`
- Verify URL structure matches folder hierarchy
- Ensure `public/` folder is being pushed to GitHub

### Build Errors

- Verify Hugo is installed: `hugo version`
- Check for syntax errors in `.md` files
- Ensure all referenced images exist

## Environment-Specific URLs

| Environment | baseURL |
|-------------|---------|
| Local dev | `http://localhost:1313/portfolio/` |
| GitHub Pages | `https://moltonclaw-tech.github.io/portfolio/` |
| Custom domain | `https://talesrt.com/` |

To switch environments, update `baseURL` in `hugo.toml` and rebuild.
