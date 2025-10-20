# Citation Style Update

## 🎯 Two Types of Citations

### 1. References (Sources) - `[ref:key]`
**Style**: Inline citation like `[La02]`, `[Smi23]`  
**Use for**: Academic papers, books, articles  
**Appearance**: `[AuthorYear]` format

**Example:**
```markdown
Lang's work on algebra[ref:lang2002] is foundational.
```
**Renders as:** Lang's work on algebra[La02] is foundational.

**In References Section:**
```
[La02] Lang, S. (2002). Algebra. Springer-Verlag.
```

---

### 2. Footnotes (Notes) - `[#1]`
**Style**: Superscript number `¹²³`  
**Use for**: Clarifications, side notes, explanations  
**Appearance**: Small superscript number

**Example:**
```markdown
This methodology[#1] was carefully designed.

<!-- FOOTNOTES
[1]: The ethics committee approved this approach in March 2024.
-->
```
**Renders as:** This methodology¹ was carefully designed.

---

## 🔤 Citation Key Format

The system automatically generates citation keys from author and year:

| Author | Year | Generated Key |
|--------|------|---------------|
| Lang | 2002 | `[La02]` |
| Smith | 2023 | `[Smi23]` |
| Mueller | 2024 | `[Mue24]` |
| Einstein | 1905 | `[Ein05]` |

**Rules:**
- First 2-3 letters of first author's last name
- Last 2 digits of year
- Capitalized first letter

---

## 💡 When to Use Each

### Use References `[ref:key]` for:
✅ Academic papers and articles  
✅ Books and textbooks  
✅ Published research  
✅ External sources  
✅ Citations that need DOI/URL  

### Use Footnotes `[#1]` for:
✅ Clarifications and explanations  
✅ Methodological notes  
✅ Historical context  
✅ Side comments  
✅ Additional information that doesn't fit in main text  

---

## 📝 Complete Example

```markdown
---
title: "Research on DNA Repair"
date: "2025-10-20"
categories: ["Biology"]
---

# DNA Repair Mechanisms

The PARP enzyme family[ref:vyas2014] plays a crucial role in DNA 
repair mechanisms. This discovery[#1] has led to new cancer 
treatments[ref:lord2015].

Recent work by Lang[ref:lang2002] provides the mathematical 
framework[#2] for understanding these processes.

<!-- FOOTNOTES
[1]: This was recognized with the Nobel Prize in Chemistry 2015.
[2]: While primarily an algebra textbook, it contains relevant group theory.
-->
```

**BibTeX file** (`posts/references/research-dna.bib`):
```bibtex
@article{vyas2014,
  author = {Vyas, S. and Chang, P.},
  title = {PARP Analysis},
  journal = {Nature Communications},
  year = {2014}
}

@article{lord2015,
  author = {Lord, C. and Ashworth, A.},
  title = {PARP Inhibitors},
  journal = {Nature},
  year = {2015}
}

@book{lang2002,
  author = {Lang, Serge},
  title = {Algebra},
  publisher = {Springer-Verlag},
  year = {2002}
}
```

**Renders as:**

---
The PARP enzyme family[Vya14] plays a crucial role in DNA repair mechanisms. This discovery¹ has led to new cancer treatments[Lor15].

Recent work by Lang[La02] provides the mathematical framework² for understanding these processes.

---

**Footnotes:**
1. This was recognized with the Nobel Prize in Chemistry 2015.
2. While primarily an algebra textbook, it contains relevant group theory.

**References:**
[Vya14] Vyas, S., Chang, P. (2014). PARP Analysis. *Nature Communications*.  
[Lor15] Lord, C., Ashworth, A. (2015). PARP Inhibitors. *Nature*.  
[La02] Lang, S. (2002). Algebra. Springer-Verlag.

---

## 🎨 Visual Differences

### References
- **In text**: `[La02]` (monospace font, subtle background)
- **Popup header**: Shows `[La02]`
- **Popup content**: Full formatted citation
- **Bottom section**: "References" with citation keys

### Footnotes  
- **In text**: `¹` (superscript number)
- **Popup header**: Shows "Footnote 1"
- **Popup content**: Footnote text
- **Bottom section**: "Footnotes" appears before References

---

## ✨ Benefits of This System

1. **Clear distinction** between sources and notes
2. **Compact references** - `[La02]` takes less space than `¹`
3. **Recognizable format** - Author-year is standard in many fields
4. **Both clickable** - Same interactive popup experience
5. **Auto-generated keys** - No manual citation key creation needed

---

## 🔄 Migration from Old Style

**Old way** (both as superscript numbers):
```markdown
The study¹ shows² results.
```
Hard to tell: Is `¹` a source or a note?

**New way** (clear distinction):
```markdown
The study[Smi23] shows² results.
```
Clear: `[Smi23]` is a source, `²` is a note.

---

**Updated**: October 2025  
**Version**: 2.0 (Citation style update)
