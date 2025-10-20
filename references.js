// Reference and Footnote Management System
// Inspired by ScienceDirect/Elsevier journal style

class ReferenceManager {
  constructor() {
    this.references = new Map();
    this.footnotes = new Map();
    this.currentPopup = null;
  }

  /**
   * Parse BibTeX string into structured reference object
   */
  parseBibTeX(bibtexString) {
    const entries = [];
    const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;
    
    let match;
    while ((match = entryRegex.exec(bibtexString)) !== null) {
      const [, type, key, content] = match;
      const fields = {};
      
      // Parse fields
      const fieldRegex = /(\w+)\s*=\s*\{([^}]+)\}|(\w+)\s*=\s*"([^"]+)"/g;
      let fieldMatch;
      while ((fieldMatch = fieldRegex.exec(content)) !== null) {
        const fieldName = fieldMatch[1] || fieldMatch[3];
        const fieldValue = fieldMatch[2] || fieldMatch[4];
        fields[fieldName] = fieldValue;
      }
      
      entries.push({
        type: type.toLowerCase(),
        key: key.trim(),
        ...fields
      });
    }
    
    return entries;
  }

  /**
   * Format reference for display (APA-like style)
   */
  formatReference(ref) {
    const { type, author, title, journal, year, volume, pages, doi, url, publisher, booktitle } = ref;
    
    let formatted = '';
    
    // Authors
    if (author) {
      const authors = author.split(' and ').map(a => a.trim());
      if (authors.length > 6) {
        formatted += authors.slice(0, 6).join(', ') + ', et al. ';
      } else {
        formatted += authors.join(', ') + '. ';
      }
    }
    
    // Year
    if (year) {
      formatted += `(${year}). `;
    }
    
    // Title
    if (title) {
      formatted += `${title}. `;
    }
    
    // Journal/Conference/Book - keep on same line with non-breaking spaces
    if (journal) {
      formatted += `<em>${journal}</em>`;
      if (volume) formatted += `,&nbsp;${volume}`;
      if (pages) formatted += `,&nbsp;${pages}`;
      formatted += '. ';
    } else if (booktitle) {
      formatted += `In <em>${booktitle}</em>. `;
      if (publisher) formatted += `${publisher}. `;
    } else if (publisher) {
      formatted += `${publisher}. `;
    }
    
    // DOI or URL
    if (doi) {
      formatted += `<a href="https://doi.org/${doi}" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline break-all">https://doi.org/${doi}</a>`;
    } else if (url) {
      formatted += `<a href="${url}" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline break-all">${url}</a>`;
    }
    
    return formatted;
  }

  /**
   * Load references from a separate file or front matter
   */
  async loadReferences(slug) {
    try {
      // Try to load references from posts/references/{slug}.bib
      const response = await fetch(`posts/references/${slug}.bib`);
      if (response.ok) {
        const bibtexContent = await response.text();
        const parsedRefs = this.parseBibTeX(bibtexContent);
        
        parsedRefs.forEach((ref, index) => {
          this.references.set(ref.key, {
            ...ref,
            number: index + 1
          });
        });
        
        return true;
      }
    } catch (error) {
      console.log('No separate references file found, checking inline...');
    }
    
    return false;
  }

  /**
   * Parse inline references from markdown content
   * Format: <!-- REFERENCES
   * @article{key1, ...}
   * @book{key2, ...}
   * -->
   */
  parseInlineReferences(markdown) {
    const refBlockRegex = /<!--\s*REFERENCES\s*([\s\S]*?)-->/i;
    const match = markdown.match(refBlockRegex);
    
    if (match) {
      const bibtexContent = match[1];
      const parsedRefs = this.parseBibTeX(bibtexContent);
      
      parsedRefs.forEach((ref, index) => {
        this.references.set(ref.key, {
          ...ref,
          number: index + 1
        });
      });
      
      // Remove the references block from markdown
      return markdown.replace(refBlockRegex, '');
    }
    
    return markdown;
  }

  /**
   * Parse inline footnotes from markdown content
   * Format: <!-- FOOTNOTES
   * [1]: Footnote text here
   * [2]: Another footnote
   * -->
   */
  parseInlineFootnotes(markdown) {
    const footBlockRegex = /<!--\s*FOOTNOTES\s*([\s\S]*?)-->/i;
    const match = markdown.match(footBlockRegex);
    
    if (match) {
      const footnotesContent = match[1];
      const footnoteRegex = /\[(\d+)\]:\s*(.+?)(?=\n\[|\n*$)/gs;
      
      let footnoteMatch;
      while ((footnoteMatch = footnoteRegex.exec(footnotesContent)) !== null) {
        const [, number, text] = footnoteMatch;
        this.footnotes.set(number, text.trim());
      }
      
      // Remove the footnotes block from markdown
      return markdown.replace(footBlockRegex, '');
    }
    
    return markdown;
  }

  /**
   * Generate citation key from reference (e.g., [La02] for Lang 2002)
   */
  generateCitationKey(ref) {
    if (!ref.author || !ref.year) return `[${ref.number}]`;
    
    // Get first author's last name
    const authors = ref.author.split(' and ');
    const firstAuthor = authors[0].trim();
    
    // Extract last name (assume format: "Last, First" or "First Last")
    let lastName;
    if (firstAuthor.includes(',')) {
      lastName = firstAuthor.split(',')[0].trim();
    } else {
      const nameParts = firstAuthor.split(' ');
      lastName = nameParts[nameParts.length - 1];
    }
    
    // Get first 2-3 letters of last name (capitalize first letter)
    const namePrefix = lastName.substring(0, Math.min(3, lastName.length));
    const capitalizedPrefix = namePrefix.charAt(0).toUpperCase() + namePrefix.slice(1).toLowerCase();
    
    // Get last 2 digits of year
    const yearSuffix = ref.year.toString().slice(-2);
    
    return `[${capitalizedPrefix}${yearSuffix}]`;
  }

  /**
   * Process markdown to add reference links
   * Syntax: [ref:key] for references (shows as [La02]) or [#1] for footnotes (shows as superscript)
   */
  processReferenceSyntax(html) {
    // Process references [ref:key] - show as inline citation like [La02]
    html = html.replace(/\[ref:(\w+)\]/g, (match, key) => {
      const ref = this.references.get(key);
      if (ref) {
        const citationKey = this.generateCitationKey(ref);
        return `<a href="#ref-${key}" class="reference-link inline-citation" data-ref="${key}" data-type="reference">${citationKey}</a>`;
      }
      return match;
    });
    
    // Process footnotes [#1] - show as superscript number
    html = html.replace(/\[#(\d+)\]/g, (match, number) => {
      if (this.footnotes.has(number)) {
        return `<sup><a href="#footnote-${number}" class="footnote-link" data-footnote="${number}" data-type="footnote">${number}</a></sup>`;
      }
      return match;
    });
    
    return html;
  }

  /**
   * Generate references section HTML
   */
  generateReferencesSection() {
    if (this.references.size === 0) return '';
    
    const sortedRefs = Array.from(this.references.entries())
      .sort((a, b) => a[1].number - b[1].number);
    
    let html = `
      <div class="references-section mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <h2 class="text-xl font-semibold mb-4">References</h2>
        <div class="reference-list space-y-3">
    `;
    
    sortedRefs.forEach(([key, ref]) => {
      const citationKey = this.generateCitationKey(ref);
      html += `
        <div id="ref-${key}" class="reference-item text-sm leading-relaxed">
          <span class="citation-key font-medium">${citationKey}</span>
          <div class="reference-content">${this.formatReference(ref)}</div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    return html;
  }

  /**
   * Generate footnotes section HTML
   */
  generateFootnotesSection() {
    if (this.footnotes.size === 0) return '';
    
    const sortedFootnotes = Array.from(this.footnotes.entries())
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    
    let html = `
      <div class="footnotes-section mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-semibold mb-3">Footnotes</h3>
        <ol class="footnote-list space-y-2">
    `;
    
    sortedFootnotes.forEach(([number, text]) => {
      html += `
        <li id="footnote-${number}" class="footnote-item text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <span class="font-medium">${number}.</span> ${text}
        </li>
      `;
    });
    
    html += `
        </ol>
      </div>
    `;
    
    return html;
  }

  /**
   * Show popup for reference or footnote (ScienceDirect style)
   */
  showPopup(element, type) {
    // Remove existing popup
    this.hidePopup();
    
    const popup = document.createElement('div');
    popup.className = 'reference-popup';
    popup.id = 'referencePopup';
    
    let content = '';
    
    if (type === 'reference') {
      const key = element.getAttribute('data-ref');
      const ref = this.references.get(key);
      if (ref) {
        const citationKey = this.generateCitationKey(ref);
        content = `
          <div class="popup-header">
            <span class="popup-number">${citationKey}</span>
            <button class="popup-close" onclick="window.refManager.hidePopup()">&times;</button>
          </div>
          <div class="popup-content">
            ${this.formatReference(ref)}
          </div>
        `;
      }
    } else if (type === 'footnote') {
      const number = element.getAttribute('data-footnote');
      const text = this.footnotes.get(number);
      if (text) {
        content = `
          <div class="popup-header">
            <span class="popup-number">Footnote ${number}</span>
            <button class="popup-close" onclick="window.refManager.hidePopup()">&times;</button>
          </div>
          <div class="popup-content">
            ${text}
          </div>
        `;
      }
    }
    
    popup.innerHTML = content;
    document.body.appendChild(popup);
    
    // Position the popup
    this.positionPopup(popup, element);
    
    // Show with animation
    setTimeout(() => popup.classList.add('show'), 10);
    
    this.currentPopup = popup;
  }

  /**
   * Position popup on the right side (desktop) or below (mobile)
   */
  positionPopup(popup, trigger) {
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
      // Bottom of screen on mobile
      popup.style.position = 'fixed';
      popup.style.bottom = '0';
      popup.style.left = '0';
      popup.style.right = '0';
      popup.style.top = 'auto';
    } else {
      // Right side on desktop
      const triggerRect = trigger.getBoundingClientRect();
      const mainContent = document.querySelector('main');
      const mainRect = mainContent ? mainContent.getBoundingClientRect() : null;
      
      popup.style.position = 'fixed';
      popup.style.top = `${Math.max(100, triggerRect.top)}px`;
      
      // Position to the right of main content
      if (mainRect) {
        popup.style.left = `${mainRect.right + 20}px`;
      } else {
        popup.style.right = '20px';
      }
    }
  }

  /**
   * Hide popup
   */
  hidePopup() {
    if (this.currentPopup) {
      this.currentPopup.classList.remove('show');
      setTimeout(() => {
        if (this.currentPopup && this.currentPopup.parentNode) {
          this.currentPopup.parentNode.removeChild(this.currentPopup);
        }
        this.currentPopup = null;
      }, 200);
    }
  }

  /**
   * Initialize event listeners
   */
  initializeEventListeners() {
    // Delegate event handling for reference links
    document.addEventListener('click', (e) => {
      const refLink = e.target.closest('.reference-link, .footnote-link');
      if (refLink) {
        e.preventDefault();
        const type = refLink.getAttribute('data-type');
        this.showPopup(refLink, type);
      } else if (!e.target.closest('.reference-popup')) {
        // Click outside popup - close it
        this.hidePopup();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hidePopup();
      }
    });
    
    // Reposition on scroll/resize
    window.addEventListener('scroll', () => {
      if (this.currentPopup) {
        this.hidePopup();
      }
    });
    
    window.addEventListener('resize', () => {
      if (this.currentPopup) {
        this.hidePopup();
      }
    });
  }
}

// Global instance
window.refManager = new ReferenceManager();
