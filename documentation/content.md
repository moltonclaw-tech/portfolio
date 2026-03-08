# Content Guide

This guide explains how to add and edit content on the portfolio site.

## Adding a New Project

### 1. Create Project Folder

Create a new folder in `content/projects/`:

```
content/projects/my-new-project/
```

### 2. Add Project Images

Add your project images to the folder:
- `thumb.jpg` or `thumb.png` - Thumbnail for the project grid (required)
- `*.jpg` or `*.png` - Project showcase images

### 3. Create index.md

Create `content/projects/my-new-project/index.md`:

```yaml
---
title: "My New Project"
date: 2026-03-07
type: projects
description: "Brief description of the project."
tags: ["character", "zbrush", "blender"]
importance: 1

content:
  - type: image
    src: "project-image-1.jpg"
  - type: image
    src: "project-image-2.jpg"

draft: false
---
```

### Frontmatter Fields

| Field | Description |
|-------|-------------|
| `title` | Project name |
| `date` | Publication date (YYYY-MM-DD) |
| `type` | Content type (always `projects`) |
| `description` | Brief description for cards/meta |
| `tags` | Array of tags (character, creature, zbrush, blender, etc.) |
| `importance` | Sort order (higher = appears first) |
| `content` | Array of images to display |
| `draft` | Set to `false` to publish |

### Image Naming

Images in the project folder can have any name. Reference them in frontmatter by filename.

## Editing the About Page

File: `content/about/index.md`

This file contains HTML content. Edit directly to change:
- Bio text
- Shipped titles
- Software list
- Career timeline

## Editing Contact Info

File: `data/contact.yaml`

Update these values:
- `email` - Primary contact email
- `contact_page_email` - Contact page specific email
- `headline` / `subheadline` - Page headers
- `socials` - Social media links

## Adding a Blog Post

Create `content/blog/post-title/index.md`:

```yaml
---
title: "My Blog Post"
date: 2026-03-07
description: "Post description"
tags: ["tutorial", "zbrush"]
categories: ["tutorials"]
draft: false
---

Your blog content here...
```

## Adding a Tutorial

Create `content/tutorials/tutorial-name/index.md`:

Similar to blog posts, but appears in the tutorials section.

## Tips

1. **Always use `draft: false`** to publish content
2. **Thumbnails** are required for projects to appear in the grid
3. **Tags** help categorize and filter projects
4. **Importance** controls display order (higher = first)
5. **Images** should be optimized before uploading (max 2MB each)

## Building and Previewing

```bash
# Preview locally
hugo server

# Build for production
hugo
```

The built site will be in the `public/` directory.
