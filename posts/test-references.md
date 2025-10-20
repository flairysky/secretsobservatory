---
title: "Reference System Test Suite"
date: "2025-10-20"
categories: ["Testing", "Documentation"]
excerpt: "Comprehensive test cases for the reference and footnote system"
---

# Reference System Test Suite

This post contains various test cases to verify the reference and footnote system works correctly.

## Test 1: Basic Reference

Single reference citation[ref:vyas2014family] should work.

**Expected**: Superscript clickable number appears. Click opens popup on right (desktop) or bottom (mobile).

## Test 2: Multiple Sequential References

Multiple citations[ref:vyas2014family][ref:example2023math][ref:knuth1997art] in sequence.

**Expected**: Three sequential superscript numbers, each clickable independently.

## Test 3: Reference in Middle of Sentence

The PARP enzyme family[ref:vyas2014family] plays a crucial role in DNA repair mechanisms.

**Expected**: Reference appears mid-sentence without breaking flow.

## Test 4: Basic Footnote

This statement requires clarification[#1].

**Expected**: Superscript footnote number appears, distinct styling from references.

## Test 5: Multiple Footnotes

First point[#1] and second point[#2] with third consideration[#3].

**Expected**: Three footnotes numbered sequentially.

## Test 6: Mixed References and Footnotes

The research[ref:vyas2014family] demonstrates significant findings[#1], building on previous work[ref:example2023math].

**Expected**: Both reference and footnote numbers appear correctly.

## Test 7: Reference After Punctuation

Several studies support this hypothesis.[ref:example2023math] Additional evidence confirms it.

**Expected**: Reference appears after period.

## Test 8: Reference Before Punctuation

According to recent research[ref:knuth1997art], the methodology is sound.

**Expected**: Reference appears before comma.

## Test 9: Reference in Heading

### Mathematical Foundations[ref:example2023math]

**Expected**: Reference works in heading (though not recommended stylistically).

## Test 10: Reference in List

- First item[ref:vyas2014family]
- Second item[ref:example2023math]  
- Third item[ref:knuth1997art]

**Expected**: References work within list items.

## Test 11: Reference in Blockquote

> This important quote needs citation[ref:vyas2014family] to establish credibility.

**Expected**: Reference works in blockquote.

## Test 12: Reference with Math

The equation $E = mc^2$[ref:example2023math] demonstrates mass-energy equivalence.

**Expected**: Reference appears after inline math without breaking LaTeX rendering.

## Test 13: Reference in Display Math Context

Consider the integral:

$$\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

This result[ref:example2023math] is fundamental in probability theory.

**Expected**: Reference appears after display math block.

## Test 14: Long Footnote

This requires extensive explanation[#4].

**Expected**: Long footnote appears in full in popup and bottom section.

## Test 15: Repeated Reference

First mention[ref:vyas2014family] of the paper. Later mention[ref:vyas2014family] of same paper.

**Expected**: Both instances link to same reference, same number.

## Test 16: Reference in Bold/Italic

**Bold text with reference[ref:example2023math]** and *italic text with reference[ref:knuth1997art]*.

**Expected**: References work within formatted text.

## Test 17: Code Block Context

```python
# This is code
result = calculate()  # But reference is outside
```

The code above[ref:example2023math] demonstrates the algorithm.

**Expected**: Reference works after code block.

## Test 18: Table Context (if supported)

| Column 1 | Column 2 |
|----------|----------|
| Value A  | Data[ref:vyas2014family] |
| Value B  | Data[ref:example2023math] |

**Expected**: References work in table cells (basic markdown table).

## Test 19: Link and Reference

See [example website](https://example.com)[ref:vyas2014family] for more details.

**Expected**: Both link and reference work independently.

## Test 20: Dense Citation Pattern

Multiple studies[ref:vyas2014family][ref:example2023math][ref:knuth1997art] demonstrate consistent findings[#1] across different methodologies[#2] and populations[ref:vyas2014family].

**Expected**: Complex citation pattern renders correctly without overlap.

---

## Dark Mode Test

Toggle dark mode and verify:
- [ ] Popup background changes
- [ ] Text remains readable
- [ ] Links maintain contrast
- [ ] Borders visible
- [ ] Close button visible

## Mobile Test

Resize window < 1024px and verify:
- [ ] Popup appears at bottom
- [ ] Full width on mobile
- [ ] Scrollable if content long
- [ ] Close button accessible
- [ ] Slide-up animation smooth

## Interaction Tests

1. **Click reference** → Popup appears
2. **Click outside** → Popup closes
3. **Press ESC** → Popup closes
4. **Scroll page** → Popup closes
5. **Resize window** → Popup closes
6. **Click close button** → Popup closes
7. **Click different reference** → New popup replaces old

## Performance Test

This section intentionally includes many references to test performance:

Test[ref:vyas2014family][ref:example2023math][ref:knuth1997art] with multiple[ref:vyas2014family] repeated[ref:example2023math] citations[ref:knuth1997art] throughout[ref:vyas2014family] the text[ref:example2023math] to verify[ref:knuth1997art] that performance[ref:vyas2014family] remains acceptable[ref:example2023math] even with dense[ref:knuth1997art] citation patterns[ref:vyas2014family].

**Expected**: No lag when clicking, smooth animations.

---

## Expected Results Summary

### Footnotes Section (appears first)
- Footnote 1-4 listed
- Smaller font
- Clear numbering

### References Section (appears second)
- References 1-3 listed
- Journal formatting (APA-style)
- DOI links clickable
- Proper italics for journal names

---

## Known Issues to Check

- [ ] Reference number sequence correct (1, 2, 3...)
- [ ] No duplicate numbers
- [ ] All popups positioned correctly
- [ ] No JavaScript errors in console
- [ ] MathJax renders without interfering with references
- [ ] Copy-paste maintains reference numbers
- [ ] Print layout acceptable
- [ ] Screen reader accessible (check alt text, ARIA labels)

---

## Pass/Fail Criteria

✅ **PASS** if:
- All 20 test cases render correctly
- Popups appear and close properly
- No console errors
- Mobile and desktop layouts work
- Dark mode fully functional
- References auto-generate at bottom

❌ **FAIL** if:
- Any `[ref:key]` appears as plain text
- Popup doesn't appear
- Popup positioned incorrectly
- Console shows errors
- References section missing
- Dark mode broken

---

**Test Date**: 2025-10-20  
**Tester**: [Your name]  
**Browser**: [Chrome/Firefox/Safari/Edge + version]  
**OS**: [Windows/macOS/Linux]  
**Result**: [PASS/FAIL]  

**Notes**:
- 
- 
-

<!-- FOOTNOTES
[1]: This is a test footnote to verify basic footnote functionality.
[2]: Another test footnote with different content.
[3]: Third footnote to test sequential numbering.
[4]: This is a much longer footnote that spans multiple lines to test how the popup handles longer content. It includes several sentences to ensure the popup scrolls properly if needed and maintains readability with extended text. The formatting should remain consistent even with this increased length, and the popup should adapt gracefully to accommodate the additional content without breaking the layout or becoming difficult to read.
-->
