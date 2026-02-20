---
title: "{{ replace .Name "-" " " | title }}"
date: {{ now.Format "2006-01-02" }}
type: projects
description: ""
tags: []
importance: 3

# Note: Add thumb.jpg or thumb.png to the project folder
# Hugo will automatically detect it as the thumbnail

content:
  - type: image
    src: ""

year: {{ now.Format "2006" }}
tools: []
---

Description here...
