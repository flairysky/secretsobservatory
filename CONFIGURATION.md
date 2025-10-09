# Blog Configuration Guide

This file contains instructions for customizing your Secrets Observatory blog.

## Basic Site Configuration

Edit `posts.json` to update:

- Site title and tagline
- Author name  
- Base URL (when deploying)
- Post metadata

## Adding New Posts

1. Create a new `.md` file in the `posts/` directory
2. Use this front matter format:

```yaml
---
title: "Your Post Title"
date: "2025-10-09"
categories: ["Category1", "Category2"]
excerpt: "Brief description for the home page listing"
cover_image: "assets/covers/image.jpg"  # optional
---
```

3. Add the post entry to `posts.json`
4. Write your content using Markdown and LaTeX math

## Math Formatting

- Inline math: `\( x = y \)` or `$x = y$`
- Display math: `\[ E = mc^2 \]` or `$$E = mc^2$$`
- MathJax will automatically render all mathematical expressions

## Customizing Appearance

### Colors and Styling
Edit `assets/css/styles.css` to customize:
- Typography and fonts
- Color schemes for light/dark modes
- Spacing and layout
- Component styles (cards, chips, etc.)

### Dark Mode
The blog automatically detects system preference and allows manual toggle.
Dark mode preferences are saved in localStorage.

## Setting Up Feedback Form

1. Sign up for a Formspree account at https://formspree.io/
2. Create a new form and get your endpoint URL
3. In `site.js`, replace the TODO comment with your actual endpoint:

```javascript
const response = await fetch('https://formspree.io/f/your-actual-id', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

## Adding Cover Images

1. Add image files to `assets/covers/`
2. Reference them in post front matter: `cover_image: "assets/covers/filename.jpg"`
3. Recommended size: 800x400px or similar 2:1 aspect ratio
4. Supported formats: JPG, PNG, WebP

## SEO Optimization

### Update Meta Tags
Edit the `<head>` sections in HTML files to update:
- Site description
- Open Graph tags
- Twitter Card data

### Update Sitemap
Edit `sitemap.xml` to:
- Replace "yoursite.com" with your actual domain
- Add new posts as you create them
- Update lastmod dates

### Analytics
Add your analytics code before the closing `</head>` tag in all HTML files.

## Deployment

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source: main branch / root
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Build settings: 
   - Build command: (leave empty)
   - Publish directory: `/` (root)
3. Deploy automatically on push

### Custom Domain
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update `posts.json` baseUrl and all XML files with your domain

## Performance Tips

1. **Optimize Images**: Compress cover images before uploading
2. **Minimize Plugins**: The blog is designed to be lightweight
3. **CDN**: Consider using a CDN for faster global loading
4. **Caching**: Set up appropriate cache headers on your server

## Backup and Migration

- All content is in Markdown files and JSON
- Easy to backup, version control, and migrate
- No database required
- Export/import friendly format

## Troubleshooting

### Posts Not Appearing
- Check `posts.json` syntax
- Verify Markdown file names match slugs
- Ensure front matter is properly formatted

### Math Not Rendering
- Check MathJax CDN availability
- Verify math syntax (use `\(` and `\)` for inline)
- Look for JavaScript console errors

### Dark Mode Issues
- Clear localStorage and refresh
- Check browser developer tools for errors
- Verify Tailwind CSS is loading properly

### Images Not Loading
- Check file paths are correct
- Verify image files exist in `assets/covers/`
- Check browser network tab for 404 errors