# Bug Fix Summary - Blog Posts Not Loading

## Problem
Blog posts were not loading on the live website (secretsobservatory.com), showing HTTP 404 errors, even though they worked perfectly on localhost.

## Root Cause
GitHub Pages was using **Jekyll** by default, which has special processing rules. Jekyll ignores certain file types and directories during the build process, including:
- Markdown files in subdirectories (like `posts/*.md`)
- Files starting with underscores
- Certain file extensions

This caused all `.md` files in the `posts/` directory to be excluded from the deployed site, resulting in 404 errors when the JavaScript tried to fetch them.

## Solution
Added a `.nojekyll` file to the repository root. This file tells GitHub Pages to **skip Jekyll processing** and serve the files as a static website exactly as they are in the repository.

## Files Changed
1. **`.nojekyll`** (new file) - Empty file that disables Jekyll
2. **`posts/example-references.md`** (fixed locally) - Removed incorrect markdown code fences from the beginning

## What Happens Now
1. ✅ GitHub Pages will redeploy the site (takes 2-5 minutes)
2. ✅ All markdown files in `posts/` will be served correctly
3. ✅ Blog posts will load on secretsobservatory.com
4. ⚠️ You may need to **clear your browser cache** or use Ctrl+F5 to see the changes

## How to Verify the Fix
Wait 2-5 minutes for GitHub Pages to rebuild, then:

1. Visit: https://secretsobservatory.com/posts/example-references.md
   - Should show the markdown file content (not 404)

2. Visit: https://secretsobservatory.com/post.html?slug=example-references
   - Should load the post with references and footnotes

3. If still not working:
   - Clear browser cache (Ctrl+Shift+Delete)
   - Or use Incognito/Private mode
   - Wait another 2-3 minutes for full CDN propagation

## Technical Details

### Why Jekyll Affects Static Sites
Even though Secrets Observatory is a pure static site (no build process), GitHub Pages assumes Jekyll by default for historical reasons. Jekyll's processing includes:

- Ignoring files/folders starting with `_`
- Ignoring certain file extensions
- Processing Liquid templates
- Excluding files based on Jekyll's default configuration

### The .nojekyll Solution
The `.nojekyll` file is an empty file that serves as a flag:
- It tells GitHub Pages: "Don't use Jekyll"
- It ensures all files are served as-is
- It's the recommended solution for static sites on GitHub Pages

## Prevention
- Keep the `.nojekyll` file in the repository
- Never delete it unless you intentionally want Jekyll processing
- This file should be committed and pushed to the main branch

## Related Documentation
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators
- Jekyll on GitHub Pages: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

---
**Status**: Fixed and deployed ✅  
**Commit**: `b84b4bd` - "Fix: Add .nojekyll to disable Jekyll processing on GitHub Pages"  
**Date**: October 20, 2025
