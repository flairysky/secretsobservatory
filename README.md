# Secrets Observatory

A minimal static blog for mathematical notes, ethical reflections, and work in progress. Inspired by academic blogs like Terence Tao's, with a focus on clean typography, excellent readability, and mathematical content.

## ✨ Features

- **Clean, minimal design** with excellent typography and readability
- **Dark mode toggle** with persistent localStorage preferences and system detection
- **LaTeX/MathJax v3 support** for mathematical equations and expressions
- **ScienceDirect-style references** with interactive popups and BibTeX support
- **Footnote system** with clickable superscript numbers and popup display
- **Markdown posts** with YAML front matter for easy content management
- **Category filtering** and real-time text search on the home page
- **Responsive design** that works perfectly on mobile devices
- **Static files only** - no build step required, GitHub Pages friendly
- **RSS/Atom feed** for syndication and feed readers
- **SEO optimized** with proper meta tags, sitemap, and Open Graph support
- **Accessibility focused** with proper ARIA labels and keyboard navigation
- **Performance optimized** with lazy loading and efficient CSS

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Start a local web server** (required for proper functionality):
   
   **Windows Users:**
   - Double-click `start-server.bat` or `start-server.ps1`
   - Or run: `python -m http.server 8000`
   
   **macOS/Linux Users:**
   ```bash
   # Using Python (recommended)
   python3 -m http.server 8000
   
   # Or using Node.js
   npx serve -l 8000
   ```

3. **Open your browser** and go to `http://localhost:8000`
4. **Edit `posts.json`** to update site metadata and add your posts
5. **Add Markdown files** to the `posts/` directory with proper front matter
6. **Customize styling** in `assets/css/styles.css` if desired
7. **Deploy** to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

### ⚠️ Important Note

**Don't open `index.html` directly in your browser!** Modern browsers block loading local files for security reasons, which will prevent the blog from working properly. Always use a local web server as described above.

## 📝 Writing Posts

Create Markdown files in the `posts/` directory with YAML front matter:

```markdown
---
title: "Your Post Title"
date: "2025-10-09"
categories: ["Mathematics", "Category2"]
excerpt: "Brief description for the home page listing"
cover_image: "assets/covers/image.jpg"  # optional
---

Your post content here with **Markdown** formatting and $\LaTeX$ math.

Display equations work beautifully:
$$E = mc^2$$

Inline math like \( \alpha + \beta = \gamma \) renders perfectly.

### Adding References and Footnotes

**Quick method** - inline in markdown:
```markdown
<!-- REFERENCES
@article{smith2023,
  author = {Smith, J.},
  title = {Important Paper},
  journal = {Nature},
  year = {2023}
}
-->

This finding[ref:smith2023] is significant.
```

**Better method** - separate BibTeX file at `posts/references/{slug}.bib`:
```bibtex
@article{smith2023,
  author = {Smith, J.},
  title = {Important Paper},
  journal = {Nature},
  year = {2023},
  doi = {10.1038/nature12345}
}
```

Then cite: `[ref:smith2023]` or add footnotes: `[#1]`

**See:** `REFERENCES-GUIDE.md` for complete documentation
```

Then add an entry to `posts.json` to include it in the site navigation and feeds.

## 🎨 Customization

### Site Configuration
Edit `posts.json` to update:
- Site title, tagline, and author information
- Base URL for deployment
- Post metadata and organization

### Styling
Modify `assets/css/styles.css` for:
- Typography and font choices
- Color schemes for light/dark modes
- Layout and spacing adjustments
- Component styling (cards, buttons, etc.)

### Feedback Form
Set up the contact form by:
1. Creating a [Formspree](https://formspree.io/) account
2. Updating the endpoint URL in `site.js`
3. Customizing form fields as needed

### Cover Images
Add images to `assets/covers/` and reference them in post front matter. Recommended size: 800x400px (2:1 aspect ratio).

## 🛠️ Technology Stack

- **[Tailwind CSS](https://tailwindcss.com/)** (via CDN) for utility-first styling with dark mode
- **[MathJax v3](https://www.mathjax.org/)** for beautiful LaTeX math rendering
- **[Marked.js](https://marked.js.org/)** for fast Markdown parsing
- **Vanilla JavaScript** for lightweight interactivity
- **[Formspree](https://formspree.io/)** (optional) for contact form handling

## 📂 Project Structure

```
blog/
├── index.html              # Home page with post listings
├── post.html               # Individual post template
├── about.html              # About page
├── archive.html            # Chronological archive
├── feedback.html           # Contact/feedback form
├── posts.json              # Site configuration and post metadata
├── site.js                 # Main JavaScript functionality
├── feed.xml                # RSS/Atom feed
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles and improvements
│   └── covers/             # Post cover images
├── posts/
│   ├── sample-algebra.md   # Example math post
│   ├── sample-ethics.md    # Example humanities post
│   └── sample-notes.md     # Example technical post
├── CONFIGURATION.md        # Detailed setup guide
├── deploy.sh              # Deployment helper script
├── LICENSE.txt            # License information
└── README.md              # This file
```

## 🚢 Deployment

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
Use the included `deploy.sh` script to easily configure your domain:

```bash
chmod +x deploy.sh
./deploy.sh
```

Or manually:
1. Update `posts.json`, `sitemap.xml`, `robots.txt`, and `feed.xml` with your domain
2. Add a `CNAME` file with your domain name (for GitHub Pages)
3. Configure DNS settings with your domain provider

## 🔧 Advanced Features

### Search Engine Optimization
- Proper HTML5 semantic structure
- Meta tags for description, Open Graph, and Twitter Cards
- XML sitemap for search engine indexing
- Structured data ready for enhancement

### Performance
- Lazy loading for images
- Efficient CSS with Tailwind's utility classes
- Minimal JavaScript footprint
- CDN-served dependencies

### Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📚 Example Content

The blog comes with three sample posts demonstrating different content types:

1. **Mathematical Content** (`sample-algebra.md`) - Demonstrates LaTeX rendering and mathematical exposition
2. **Humanities Content** (`sample-ethics.md`) - Shows academic writing and citation style
3. **Technical Notes** (`sample-notes.md`) - Example of technical documentation with equations

## 🐛 Troubleshooting

### Common Issues

**Posts not appearing?**
- Check `posts.json` syntax and structure
- Verify Markdown file names match slugs exactly
- Ensure front matter is properly formatted with `---` delimiters

**Math not rendering?**
- Verify MathJax CDN is loading (check browser dev tools)
- Use proper LaTeX syntax: `\(` and `\)` for inline, `$$` for display
- Check JavaScript console for errors

**Images not loading?**
- Verify file paths are correct and case-sensitive
- Check that image files exist in `assets/covers/`
- Look for 404 errors in browser network tab

See `CONFIGURATION.md` for detailed troubleshooting and setup guidance.

## 📄 License

Content is shared under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) unless otherwise noted.
Code is available under the [MIT License](https://opensource.org/licenses/MIT).

See `LICENSE.txt` for complete details.

## 🤝 Contributing

This is a template project designed for personal academic blogs. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs or improvements  
- Share your own blog implementations
- Suggest new features or enhancements

---

**Happy blogging!** 📝✨