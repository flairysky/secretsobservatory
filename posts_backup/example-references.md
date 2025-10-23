---
title: "Example Post with References and Footnotes"
date: "2025-10-20"
categories: ["Examples", "Documentation"]
excerpt: "A demonstration of the ScienceDirect-style reference and footnote system"
---

# Using References and Footnotes

This post demonstrates how to use the new reference and footnote system, inspired by ScienceDirect/Elsevier journals.

## Two Ways to Add References

### Method 1: External BibTeX File (Recommended)

Create a file `posts/references/{slug}.bib` with your BibTeX entries. Then reference them in your text using `[ref:key]` syntax.

For example, the study by Vyas et al.[ref:vyas2014family] shows important findings about PARP activity.

### Method 2: Inline References

You can also include references directly in your markdown file using HTML comments:

```markdown
<!-- REFERENCES
@article{key1,
  author = {Author Name},
  title = {Article Title},
  journal = {Journal Name},
  year = {2024}
}
-->
```

## Adding Footnotes

Footnotes work similarly. First, define them in an HTML comment block:

<!-- FOOTNOTES
[1]: This is an important clarification that doesn't fit in the main text but provides valuable context for readers.
[2]: Another footnote with additional information about methodological considerations.
[3]: You can include multiple sentences. They can be as long as needed to provide the necessary context.
-->

Then reference them in your text using `[#1]`, `[#2]`, etc.[#1]

## How It Works

When you click on a reference number (like this[ref:example2023math]) or a footnote[#2], a popup panel appears on the right side (desktop) or bottom (mobile), just like in ScienceDirect journals.

The popup shows the full citation or footnote text without requiring you to scroll down to the references section.[#3]

## Mathematical Content with References

You can combine LaTeX math with references. For instance, the equation:

$$E = mc^2$$

is derived from special relativity, as explained in numerous physics textbooks.[ref:knuth1997art]

## Multiple References

You can cite multiple sources in sequence[ref:vyas2014family][ref:example2023math] or mix references with footnotes[ref:knuth1997art][#1].

## Features

- ✅ Click reference numbers to see popup
- ✅ Mobile-responsive design
- ✅ Dark mode support
- ✅ BibTeX parsing
- ✅ Automatic reference list generation
- ✅ Separate footnotes section
- ✅ ScienceDirect-style UI

## Best Practices

1. **Use external .bib files** for posts with many references
2. **Use inline references** for quick posts with 1-2 citations
3. **Footnotes** are great for clarifications and side notes
4. **References** are for academic citations
5. Keep reference keys short and memorable (e.g., `smith2024` not `smith_long_title_2024_v2`)

---

**Note**: All references and footnotes will appear at the bottom of this post automatically. The reference list is numbered and formatted in a journal-style format.
