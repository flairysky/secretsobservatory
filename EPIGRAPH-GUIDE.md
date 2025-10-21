# Epigraph Quick Reference

## What is an Epigraph?

An epigraph is a short quotation at the beginning of a chapter, essay, or section that suggests its theme. Perfect for academic writing!

## Simple Markdown Syntax

Just use three angle brackets `>>>` followed by your quote, a pipe `|`, and the attribution:

```markdown
>>> Your quote text here | Author Name
```

## Examples

### Basic epigraph:
```markdown
>>> Those who were thirsty for knowledge traveled immense distances. | Lorraine Daston
```

### With reference citation:
```markdown
>>> God created the integers; all else is the work of man. | Leopold Kronecker [Kro87]
```

### With clickable reference link:
```markdown
>>> In mathematics, you don't understand things. You just get used to them. | John von Neumann, as quoted in Zukav[ref:example2023math]
```

**Note:** The `[ref:key]` syntax will be automatically converted to a clickable citation link!

## How It Looks

The epigraph will be automatically styled with:
- ✅ **Centered text** (elegant placement)
- ✅ **Italic quote** (distinguished from body text)
- ✅ **Attribution with em-dash** (proper academic style)
- ✅ **Dark mode support** (works in both themes)
- ✅ **Mobile responsive** (adjusts for small screens)

## Usage Tips

1. **Start of posts** — Best placed at the very beginning, after front matter
2. **Start of major sections** — Can also introduce key sections
3. **Keep it short** — 1-3 sentences maximum for impact
4. **Make it relevant** — Should relate directly to your topic
5. **Don't overuse** — One or two per post is usually enough

## Comparison with Regular Blockquotes

**Epigraph** (centered, elegant):
```markdown
>>> The essence of mathematics is its freedom. | Georg Cantor
```

**Blockquote** (left-aligned, traditional):
```markdown
> The essence of mathematics is its freedom.
> 
> — Georg Cantor
```

Use **epigraphs** for opening quotes that set the tone, and **blockquotes** for longer citations within your text.

## Complete Example

```markdown
---
title: "On Mathematical Beauty"
date: "2025-10-21"
categories: ["Mathematics", "Philosophy"]
excerpt: "Exploring the aesthetic dimension of mathematical thought"
---

>>> The scientist does not study nature because it is useful; he studies it because he delights in it, and he delights in it because it is beautiful. | Henri Poincaré

## Introduction

Mathematics has long been recognized not only for its utility...
```

That's it! Just write in plain markdown with `>>>` and your quotes will look beautiful automatically.
