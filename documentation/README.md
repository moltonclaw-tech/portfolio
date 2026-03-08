# Portfolio Site Documentation

Welcome to the talesrt portfolio documentation. This site is built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages.

## Quick Links

- [Project Structure](./structure.md) - Understanding the directory layout
- [Content Guide](./content.md) - How to add and edit content
- [Deployment](./deployment.md) - How to deploy to GitHub Pages
- [Customization](./customization.md) - Theme and configuration options

## Overview

This is a personal portfolio website for **Tales da Rocha Trindade** (talesrt), a Lead Character Artist specializing in game character creation.

### Key Features

- **Projects Portfolio** - Showcase character art projects with images
- **About Page** - Professional biography and career timeline
- **Contact Page** - Contact form and social links
- **Blog** - Technical articles and tutorials
- **Tags & Categories** - Organize content by software, style, and type

### Tech Stack

- **Hugo** - Static site generator
- **Theme: talesrt** - Custom Hugo theme
- **GitHub Pages** - Hosting and deployment
- **Netlify** - Alternative deployment option (netlify.toml included)

## Getting Started

### Local Development

```bash
# Install Hugo (if not already installed)
winget install Hugo.Hugo

# Run development server
hugo server

# Build for production
hugo
```

### Editing Content

All content is in Markdown format in the `content/` folder. See [Content Guide](./content.md) for details.

## Configuration

Main configuration file: `hugo.toml`

Key settings:
- `baseURL` - Site URL (currently: https://moltonclaw-tech.github.io/portfolio/)
- `title` - Site title
- `theme` - Hugo theme (talesrt)

## Support

For issues or questions about this portfolio, check the Hugo documentation or the theme documentation.
