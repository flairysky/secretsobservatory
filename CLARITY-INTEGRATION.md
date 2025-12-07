# Microsoft Clarity Integration Summary

## Overview
Replaced PostHog analytics with Microsoft Clarity for GDPR-compliant, transparent user behavior tracking.

## Integration Date
December 7, 2025

## Clarity Project ID
`uhy4jujwdi`

## Key Features

### 1. Consent-Based Tracking
- Clarity only loads AFTER user explicitly accepts cookies
- No tracking if user rejects cookies
- Consent preference stored in `localStorage.cookieConsent`

### 2. What Clarity Tracks
- **Page views**: Which pages and posts are visited
- **Scroll depth**: 25%, 50%, 75%, 100% milestones
- **Time on page**: Tracked periodically (every 30 seconds) and on page leave
- **Session replays**: Visual recordings with automatic sensitive data masking
- **Heatmaps**: Aggregate click and scroll patterns
- **Click behavior**: Where users interact with the site
- **Device/browser info**: Technical information for optimization

### 3. Blog Post Differentiation
Custom tags are set for each post visit using `clarity('set', 'key', 'value')`:
- `page_type`: 'post', 'index', 'archive', 'about', 'feedback', 'privacy'
- `page_name`: Full descriptive name (e.g., "Post: On Learning")
- `post_slug`: Unique identifier for the post
- `post_title`: Human-readable post title
- `post_categories`: Categories the post belongs to
- `post_date`: Publication date
- `scroll_depth_X`: Tracks 25/50/75/100% milestones
- `time_seconds` / `time_minutes`: Reading time metrics

### 4. Privacy & GDPR Compliance
- **Consent required**: Explicit opt-in via cookie banner
- **Automatic masking**: Sensitive data (emails, passwords, personal info) automatically masked in session replays
- **Microsoft Privacy Statement**: Full disclosure linking to Microsoft's privacy policy
- **Transparent disclosure**: Footer notice on all pages
- **Data retention**: 90 days per Microsoft Clarity policies
- **No advertising cookies**: Analytics only, no marketing/ads

## Implementation Details

### Files Modified
1. **HTML Files** (all pages):
   - `index.html`
   - `post.html`
   - `archive.html`
   - `about.html`
   - `feedback.html`
   - `privacy.html`
   
   Changed: Removed PostHog stub script, added Clarity placeholder comment

2. **site.js**:
   - Replaced `initPostHog()` with `initClarity()`
   - Updated all tracking functions to use Clarity's API
   - Changed from `posthog.capture()` events to `clarity('set', ...)` custom tags
   - Analytics functions: `initAnalytics()`, `trackPageLeave()`, `trackScrollDepth()`, `trackPostView()`

3. **privacy.html**:
   - Replaced all PostHog references with Microsoft Clarity
   - Added Microsoft Privacy Statement link
   - Updated with recommended disclosure text from Microsoft
   - Changed last updated date to December 7, 2025

4. **index.html** (footer):
   - Added site disclosure: "We improve our products and services by using Microsoft Clarity..."

### Key JavaScript Functions

#### `initClarity()`
```javascript
// Loads Clarity script after consent
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "uhy4jujwdi");
```

#### Custom Tag Pattern
```javascript
// Set post-specific data
clarity('set', 'post_slug', slug);
clarity('set', 'post_title', postTitle);
clarity('set', 'page_type', currentPage);
```

## Clarity Dashboard
Access analytics at: https://clarity.microsoft.com/

### What You'll See
- **Session Replays**: Watch user sessions (with sensitive data masked)
- **Heatmaps**: See where users click and scroll
- **Custom Tags**: Filter sessions by post, page type, scroll depth, etc.
- **Insights**: Rage clicks, dead clicks, quick backs, excessive scrolling

### Useful Filters
- Filter by `post_slug` to see all sessions for a specific post
- Filter by `page_type=post` to see all blog post visits
- Filter by `scroll_depth_100=reached` to find users who read entire posts
- Filter by `time_minutes` ranges to understand engagement

## Testing

### How to Test
1. **Clear consent**: `localStorage.removeItem('cookieConsent')`
2. **Refresh page**: Cookie banner should appear
3. **Accept cookies**: Clarity should load
4. **Check console**: Look for "Clarity loaded and ready"
5. **Navigate site**: Custom tags should be set
6. **Check Clarity dashboard**: Sessions should appear within minutes

### Verification Checklist
- [ ] Cookie banner appears on first visit
- [ ] Clarity doesn't load if cookies rejected
- [ ] Clarity loads after accepting cookies
- [ ] Custom tags appear in Clarity dashboard
- [ ] Different posts have different `post_slug` values
- [ ] Scroll depth milestones are tracked
- [ ] Time on page is recorded
- [ ] Session replays show masked sensitive data

## Migration from PostHog

### What Changed
| PostHog | Clarity |
|---------|---------|
| `posthog.capture('event', {...})` | `clarity('set', 'key', 'value')` |
| Event-based tracking | Tag-based tracking |
| Custom events | Custom tags (key-value pairs) |
| `$pageview` events | Automatic pageview tracking |
| Session recording opt-in | Session recording default (with masking) |
| EU data residency | Global Microsoft infrastructure |

### What's the Same
- Consent-based activation
- Cookie consent banner
- Privacy policy disclosure requirements
- GDPR compliance approach
- Local storage for preferences

## Known Limitations
1. **No custom events**: Clarity uses tags, not events. We track milestones via custom tags.
2. **Tag limits**: Be mindful of the number of custom tags (Clarity has limits)
3. **No real-time**: Dashboard updates within a few minutes, not instant
4. **Session replay storage**: Limited to 90 days

## Future Improvements
- [ ] Add more granular tags for post categories
- [ ] Track specific interactions (share button clicks, cite button clicks)
- [ ] Add tags for referrer sources
- [ ] Track dark mode preference
- [ ] Monitor scroll patterns per post category

## Support & Documentation
- Clarity Docs: https://learn.microsoft.com/en-us/clarity/
- Privacy Disclosure Guide: https://learn.microsoft.com/en-us/clarity/setup-and-installation/privacy-disclosure
- API Reference: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api

## Contact
For questions about this integration, refer to the Feedback page or check the privacy policy.
