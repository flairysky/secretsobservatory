# Secrets Observatory - AI Coding Agent Instructions

## Project Overview
**Secrets Observatory** is a minimal static blog focused on academic content (mathematics, ethics, physics, law) with LaTeX support. It's a **pure static site** with no build process—HTML, CSS (Tailwind via CDN), and vanilla JavaScript only.

**Critical**: This blog MUST be served via a local web server, NOT opened directly in the browser (file:// protocol breaks fetch API and CORS).

## Architecture & Key Files

### Core Data Flow
1. **`posts.json`** - Single source of truth for site metadata and post index
2. **`posts/*.md`** - Markdown files with YAML front matter (title, date, categories, excerpt, cover_image)
3. **`site.js`** - Central JavaScript controller that:
   - Detects current page (`index`, `post`, `archive`, `feedback`) via URL
   - Fetches `posts.json` on every page load
   - Routes to page-specific initialization functions
   - Handles dark mode via localStorage + system preference detection

### Post Rendering Pipeline (post.html)
```javascript
// 1. Extract slug from URL params: ?slug=first-post
// 2. Find post in posts.json by slug
// 3. Fetch posts/{slug}.md via fetch() - THIS REQUIRES A WEB SERVER
// 4. Parse YAML front matter (custom parser in site.js)
// 5. Convert markdown to HTML via marked.js
// 6. Render with MathJax v3 for LaTeX equations
```

**Common pitfall**: Direct file:// access fails at step 3. Always use `start-server.ps1` (Windows) or `python -m http.server 8000`.

### Theme System (Dark Mode)
- Pre-rendered script in HTML `<head>` applies dark mode BEFORE page render (prevents flash)
- Uses Tailwind's `class` strategy: adds/removes `dark` class on `<html>`
- Toggle persists to `localStorage.theme`
- Falls back to `prefers-color-scheme: dark` media query

## Project-Specific Conventions

### Content Management
- **Adding a post requires TWO steps** (both are mandatory):
  1. Create `posts/new-post.md` with front matter
  2. Add entry to `posts.json` posts array
- **CRITICAL**: Slug in posts.json MUST match filename exactly (without .md extension)
  - Mismatched slugs cause 404 errors that are hard to debug
  - Example: `first-post.md` requires `"slug": "first-post"` in posts.json
  - Case-sensitive on Linux servers (use lowercase with hyphens)
- Front matter format is strict YAML:
  ```yaml
  ---
  title: "Post Title"
  date: "YYYY-MM-DD"
  categories: ["Cat1", "Cat2"]
  excerpt: "Short description"
  cover_image: "assets/covers/image.jpg"  # optional
  ---
  ```
- Posts array in posts.json determines display order and navigation (prev/next links)

### LaTeX Math Rendering
- Uses MathJax v3 with dual syntax:
  - Inline: `\(x = y\)` or `$x = y$`
  - Display: `$$E = mc^2$$` or `\[...\]`
- Math placeholders protect LaTeX from marked.js parser (see `initPostPage()`)
- MathJax renders AFTER markdown HTML is injected into DOM

### References & Footnotes System (ScienceDirect-style)
- **BibTeX support**: Store references in `posts/references/{slug}.bib`
  - **CRITICAL**: BibTeX filename MUST match post slug exactly
  - Example: `first-post.md` requires `posts/references/first-post.bib`
- **Two distinct citation types**:
  1. **References** `[ref:key]` → Academic citations (shows as `[La02]` inline)
     - For citing papers, books, external sources
     - Generates clickable popup with full citation details
  2. **Footnotes** `[#1]` → Explanatory notes (shows as superscript `¹`)
     - For clarifications, additional context, side notes
     - Defined in `<!-- FOOTNOTES -->` HTML comment blocks
- **Interactive popups**: Click citation → popup appears (right side desktop, bottom mobile)
  - Implemented via `ReferenceManager` class in `references.js`
  - Popup closes on: outside click, ESC key, scroll, or close button
- **Auto-formatting**: 
  - Citation keys auto-generated: First 2-3 letters of author + last 2 digits of year (e.g., `[Smi23]`)
  - References render in APA-like style with DOI/URL links
  - Non-breaking spaces between journal, volume, and pages (prevents awkward line breaks)
- **Three-file system** (all required for references to work):
  1. `references.js` - BibTeX parser, citation key generator, popup manager
  2. `assets/css/styles.css` - `.reference-popup`, `.inline-citation`, `.footnote-link` classes
  3. `site.js` - `initPostPage()` calls `refManager.loadReferences()`, then `processReferenceSyntax()`
- **Two input methods**:
  - External BibTeX: `posts/references/{slug}.bib` (preferred for reusability)
  - Inline: `<!-- REFERENCES -->` and `<!-- FOOTNOTES -->` HTML comments in markdown
- **Rendering order**: Footnotes section appears before References section at post bottom

### Styling Philosophy
- **Tailwind utility-first** via CDN (no build, no purge)
- **`assets/css/styles.css` supplements** Tailwind for:
  - Dark mode refinements (form inputs, code blocks)
  - Typography (.prose class styles - line-height, margins, font-feature-settings)
  - Custom components (.chip, .card, .citation-box, .reference-popup)
  - Reference/footnote styling (popups, inline citations, hover effects)
  - Layout fundamentals (flexbox body/footer, full-height)
- Never inline styles in HTML—use Tailwind classes or extend styles.css
- Reference popups use fixed positioning with responsive breakpoints (desktop: right side, mobile: bottom sheet)

### Navigation & Filtering (index.html)
- Category chips are clickable filters (multi-select)
- Search input filters by title/excerpt/categories
- Both filters work together (AND logic)
- Posts auto-sort by date descending
- Archive page groups by year → month

## Critical Developer Workflows

### Local Development
**ALWAYS start with a local server**:
```powershell
# Windows
.\start-server.ps1  # Tries Python, then Node.js automatically

# Or manually
python -m http.server 8000
```
Then open `http://localhost:8000` (NOT file://index.html)

### Testing a New Post
1. Create `posts/test-post.md` with proper front matter
2. Add to `posts.json`:
   ```json
   {
     "slug": "test-post",
     "title": "Test Post",
     "date": "2025-10-20",
     "categories": ["Test"],
     "excerpt": "Testing..."
   }
   ```
3. Navigate to `http://localhost:8000/post.html?slug=test-post`
4. Check browser console for fetch errors or MathJax issues

### Deployment Preparation
Run `deploy.sh` (bash) to:
- Validate all required files exist
- Update domain in sitemap.xml, robots.txt, feed.xml, posts.json
- Check for large images (>1MB)
- Create CNAME for GitHub Pages

### Common Debugging Patterns
- **Post not loading**: Check browser Network tab—if 404 on .md file, verify slug matches filename exactly (case-sensitive on Linux servers)
- **Math not rendering**: Open console, look for MathJax errors. Ensure `<script>` tag loads before site.js
- **Dark mode stuck**: Clear localStorage in DevTools → Application → Local Storage
- **Categories not updating**: Regenerated from posts.json on page load—refresh after editing
- **References not showing**: 
  1. Verify `posts/references/{slug}.bib` exists with matching slug
  2. Check browser console for BibTeX parsing errors
  3. Ensure `references.js` loads before `site.js` initializes post
  4. Test with local server (file:// protocol breaks fetch API)
- **Popups not working**: Check syntax has no spaces (`[ref:key]` not `[ref: key]`), verify click event listeners initialized

### Post Features
- **Share & Cite Modals**: Each post has share and citation buttons
  - Share modal: Copy URL or share to social media
  - Cite modal: Multiple citation formats (BibTeX, AMS Refs)
  - Initialized in `initShareAndCite()` function in site.js
  - Modal HTML must exist in post.html with IDs: `shareModal`, `citeModal`, `shareBtn`, `citeBtn`
  - Generates citation metadata from post front matter and URL
- **Auto-generated citation section**: Added at post bottom with APA, MLA, Chicago, BibTeX formats
  - Implemented in `addCitationSection()` function
  - Includes copy buttons with visual feedback
  - Citation data stored in `window.citationData` global

## External Dependencies (CDN-loaded)
- **Tailwind CSS 3.x** - Utility framework (configured for dark mode with `class` strategy)
- **MathJax 3.x** - LaTeX rendering (tex-svg output)
- **Marked.js** - Markdown parser
- **Formspree** - Contact form backend (requires endpoint configuration in site.js)

## Integration Points
- **Analytics**: Umami script in HTML (already configured with site ID)
- **Forms**: Formspree endpoint in `handleFeedbackSubmit()` - currently has TODO comment
- **RSS/Atom**: `feed.xml` manually updated (not auto-generated from posts.json)
- **SEO**: Meta tags in HTML, sitemap.xml, robots.txt all require manual domain updates

## File Organization Quirks
- `posts_backup/` contains sample posts but is NOT used by the site
- `start-server.bat` and `start-server.ps1` serve the same purpose (Windows batch vs PowerShell)
- `deploy.sh` is bash-only (for macOS/Linux/Git Bash on Windows)
- `CNAME` file is for GitHub Pages custom domain (auto-created by deploy.sh)

## Do NOT
- Add a build step or bundler—this is intentionally build-free
- Use ES modules (no module support, vanilla scripts only)
- Modify Tailwind config beyond inline `<script>` tag
- Auto-generate posts.json from files (manual curation is intentional)
- Use server-side rendering or Node.js at runtime (static only)

## When Adding Features
- Check if Tailwind utility class exists before adding to styles.css
- Test in both light and dark mode (toggle button in header)
- Ensure mobile responsiveness (<640px breakpoint)
- Validate with local server, not file:// protocol
- Consider impact on site.js page detection logic if adding new HTML pages
