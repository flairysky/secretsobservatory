# References and Footnotes Guide

## Overview

The Secrets Observatory blog now supports **ScienceDirect-style references and footnotes** with interactive popups. This guide explains how to use this feature.

## Features

✨ **Click any reference or footnote number** → Popup appears on the right (desktop) or bottom (mobile)  
📚 **BibTeX Support** → Store references in `.bib` files  
🎨 **Dark Mode** → Fully themed for light and dark modes  
📱 **Mobile Responsive** → Optimized for all screen sizes  
🔗 **Auto-formatting** → References automatically formatted in journal style  

---

## Quick Start

### 1. Add References to Your Post

**Option A: External BibTeX File (Recommended for multiple references)**

Create a file: `posts/references/{slug}.bib`

```bibtex
@article{smith2023,
  author = {Smith, John and Doe, Jane},
  title = {An Important Discovery},
  journal = {Nature},
  year = {2023},
  volume = {500},
  pages = {123-145},
  doi = {10.1038/nature12345}
}
```

**Option B: Inline in Markdown (Quick posts with 1-2 references)**

```markdown
<!-- REFERENCES
@article{jones2024,
  author = {Jones, Alice},
  title = {Another Study},
  journal = {Science},
  year = {2024}
}
-->
```

### 2. Cite in Your Text

Use `[ref:key]` syntax:

```markdown
Recent studies[ref:smith2023] have shown remarkable results.
```

This renders as: Recent studies<sup><a>1</a></sup> have shown...

### 3. Add Footnotes (Optional)

Define footnotes in your markdown:

```markdown
<!-- FOOTNOTES
[1]: This is a clarifying note about methodology.
[2]: Additional context about the experimental setup.
-->
```

Then reference them:

```markdown
The experiment[#1] was conducted under controlled conditions[#2].
```

---

## Detailed Examples

### Example 1: Simple Citation

**Markdown:**
```markdown
The theory of relativity[ref:einstein1905] revolutionized physics.
```

**BibTeX file** (`posts/references/my-post.bib`):
```bibtex
@article{einstein1905,
  author = {Einstein, Albert},
  title = {On the Electrodynamics of Moving Bodies},
  journal = {Annalen der Physik},
  year = {1905},
  volume = {17},
  pages = {891-921}
}
```

**Result:** Interactive superscript number that opens a popup with formatted citation.

### Example 2: Multiple Citations

```markdown
Several studies[ref:smith2023][ref:jones2024][ref:brown2022] support this hypothesis.
```

### Example 3: Mixing References and Footnotes

```markdown
The PARP enzyme family[ref:vyas2014] plays a crucial role in DNA repair[#1].
```

### Example 4: Long Reference Lists

For posts with many references, use an external `.bib` file:

**File:** `posts/references/literature-review.bib`
```bibtex
@article{ref1,
  author = {...},
  ...
}

@article{ref2,
  author = {...},
  ...
}

@book{ref3,
  author = {...},
  ...
}
```

Then cite: `[ref:ref1]`, `[ref:ref2]`, `[ref:ref3]`

---

## BibTeX Entry Types

### Article (Journal Paper)
```bibtex
@article{key,
  author = {Last, First and Last, First},
  title = {Article Title},
  journal = {Journal Name},
  year = {2024},
  volume = {10},
  pages = {123-145},
  doi = {10.1234/journal.2024.123}
}
```

### Book
```bibtex
@book{key,
  author = {Author Name},
  title = {Book Title},
  publisher = {Publisher Name},
  year = {2024},
  volume = {1}
}
```

### Conference Paper
```bibtex
@inproceedings{key,
  author = {Author Name},
  title = {Paper Title},
  booktitle = {Conference Name},
  year = {2024},
  pages = {100-110},
  publisher = {Publisher}
}
```

### Thesis
```bibtex
@phdthesis{key,
  author = {Student Name},
  title = {Thesis Title},
  school = {University Name},
  year = {2024}
}
```

### Website/Online Resource
```bibtex
@misc{key,
  author = {Author Name},
  title = {Page Title},
  year = {2024},
  url = {https://example.com},
  note = {Accessed: 2024-10-20}
}
```

---

## Footnotes Format

Define footnotes in a single HTML comment block:

```markdown
<!-- FOOTNOTES
[1]: First footnote text here.
[2]: Second footnote with more detail.
[3]: You can include multiple sentences and even **markdown formatting**.
-->
```

**Rules:**
- Number sequentially: `[1]:`, `[2]:`, `[3]:`...
- Text can span multiple lines
- Basic markdown is supported (bold, italic, links)
- Keep concise - footnotes should supplement, not duplicate content

---

## Best Practices

### ✅ Do's

1. **Use descriptive keys**: `smith2023neural` not `ref1`
2. **Include DOIs** when available for academic papers
3. **Separate files** for posts with 5+ references
4. **Number footnotes** sequentially in order of appearance
5. **Test locally** before deploying

### ❌ Don'ts

1. Don't use spaces in BibTeX keys: `smith 2023` ❌ → `smith2023` ✅
2. Don't forget closing braces in BibTeX entries
3. Don't mix inline and external references for the same post
4. Don't use special characters in keys: `smith&jones` ❌
5. Don't reference undefined keys: `[ref:missing]` will display as-is

---

## Styling and Appearance

### Reference Numbers in Text
- Appear as superscript links
- Blue color (customizable in CSS)
- Hover effect
- Click to open popup

### Popup Panel
- **Desktop:** Appears on right side of content
- **Mobile:** Slides up from bottom
- **Close:** Click outside, press Escape, or click X button
- **Auto-close:** On scroll or window resize

### Reference List
- Automatically generated at post bottom
- Numbered sequentially
- Journal-style formatting (APA-like)
- Includes DOI/URL links

### Footnotes List
- Appears before references section
- Smaller text size
- Distinct from references

---

## Troubleshooting

### References not appearing?

1. **Check file location:** Must be `posts/references/{slug}.bib`
2. **Verify slug matches:** Filename in `posts.json` must match `.bib` filename
3. **Check BibTeX syntax:** Use online validator if needed
4. **Browser console:** Open DevTools and look for errors

### Popup not showing?

1. **Check JavaScript:** Ensure `references.js` loads before `site.js`
2. **Verify syntax:** Use `[ref:key]` not `[ref: key]` (no space)
3. **Test locally:** Use `start-server.ps1`, not file:// protocol

### Formatting issues?

1. **Check braces:** All BibTeX fields must be wrapped in `{}`
2. **Special characters:** Use LaTeX escapes: `{\"o}` for ö
3. **Long URLs:** BibTeX breaks long URLs - use DOI instead

### Dark mode problems?

1. All styles are already dark-mode compatible
2. Clear browser cache if styles don't update
3. Check CSS loaded: View page source → verify `styles.css` link

---

## Advanced Usage

### Custom Reference Formatting

Edit `references.js` → `formatReference()` function to customize citation style.

### Multiple Authors

```bibtex
author = {Last1, First1 and Last2, First2 and Last3, First3}
```

More than 6 authors? Automatically displays as "First1 et al."

### Non-English Characters

```bibtex
author = {M{\"u}ller, Hans}
title = {Die Bedeutung der Schr{\"o}dinger-Gleichung}
```

### Year Ranges

```bibtex
year = {2023--2024}  # En-dash for ranges
```

---

## File Structure

```
posts/
├── my-post.md                    # Your markdown file
└── references/
    └── my-post.bib              # Matching BibTeX file

posts.json                        # Add post entry here
```

**Example posts.json entry:**
```json
{
  "slug": "my-post",
  "title": "My Research Post",
  "date": "2025-10-20",
  "categories": ["Research"],
  "excerpt": "A post with references"
}
```

---

## Examples in Action

See `posts/example-references.md` for a complete working example with:
- External BibTeX file
- Multiple reference types
- Footnotes
- Mixed citations
- Math + references

---

## Migration Guide

### Converting Existing Posts

**Old style (manual):**
```markdown
According to Smith (2023), the results show...

## References
1. Smith, J. (2023). Title. Journal.
```

**New style (automatic):**
```markdown
According to Smith[ref:smith2023], the results show...

<!-- References auto-generated from .bib file -->
```

### Bulk Conversion

1. Extract citations to `.bib` files
2. Replace manual references with `[ref:key]` syntax
3. Remove manual reference sections
4. Test each post individually

---

## Need Help?

- Check `posts/example-references.md` for working examples
- View browser console for error messages
- Validate BibTeX at: https://www.bibtex.com/c/bibtex-validator/
- Test locally before deploying

---

**Created:** October 2025  
**Last Updated:** October 2025  
**Version:** 1.0
