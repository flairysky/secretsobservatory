# Quick Reference: Citations & Footnotes

## 🚀 Quick Start

### 1. Create BibTeX file
`posts/references/my-post.bib`
```bibtex
@article{smith2023,
  author = {Smith, J.},
  title = {My Paper},
  journal = {Nature},
  year = {2023}
}
```

### 2. Cite in markdown
```markdown
Recent work[ref:smith2023] shows...
```

### 3. Add footnotes
```markdown
<!-- FOOTNOTES
[1]: Important clarification here.
-->

This finding[#1] is significant.
```

---

## 📋 Syntax Cheat Sheet

| Type | Syntax | Renders As |
|------|--------|------------|
| Reference (source) | `[ref:key]` | `[La02]` (inline) |
| Footnote (note) | `[#1]` | <sup>1</sup> (superscript) |
| Multiple refs | `[ref:a][ref:b]` | `[La02][Smi23]` |

---

## 📁 File Locations

```
posts/
├── my-post.md              # Your post
└── references/
    └── my-post.bib        # References (slug must match!)
```

---

## ✅ BibTeX Templates

**Journal Article:**
```bibtex
@article{key,
  author = {Last, First},
  title = {Title},
  journal = {Journal},
  year = {2024},
  volume = {10},
  pages = {1-10},
  doi = {10.1234/doi}
}
```

**Book:**
```bibtex
@book{key,
  author = {Author},
  title = {Title},
  publisher = {Publisher},
  year = {2024}
}
```

**Website:**
```bibtex
@misc{key,
  author = {Author},
  title = {Title},
  year = {2024},
  url = {https://example.com}
}
```

---

## 🎯 Common Mistakes

❌ `[ref: key]` (space)  
✅ `[ref:key]` (no space)

❌ `[#1 ]` (space)  
✅ `[#1]` (no space)

❌ File: `my-post.bib`, Slug: `my_post`  
✅ File: `my-post.bib`, Slug: `my-post` (must match exactly!)

---

## 🔍 Debugging

**References not showing?**
1. Check `posts/references/{slug}.bib` exists
2. Open browser console for errors
3. Verify BibTeX syntax

**Popup not working?**
1. Test with local server (not file://)
2. Check `references.js` loads in page source
3. Verify syntax: `[ref:key]` not `[ref:key ]`

---

## 📖 Full Documentation

See `REFERENCES-GUIDE.md` for complete documentation.

---

**Quick Test:** Try `posts/example-references.md` to see it in action!
