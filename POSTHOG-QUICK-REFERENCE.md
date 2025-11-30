# PostHog Analytics - Quick Reference

## 🚀 Quick Start Testing

1. **Start local server:**
   ```powershell
   python -m http.server 8000
   ```

2. **Open in browser:**
   http://localhost:8000

3. **Enable debug mode in console:**
   ```javascript
   posthog.debug()
   ```

4. **Test the tracking:**
   - Visit home page → Check for `$pageview` event
   - Open a post → Check for `post_view` event
   - Scroll down → Check for `scroll_depth` events at 25%, 50%, 75%, 100%
   - Leave page → Check for `time_on_page` event

---

## 📊 PostHog Dashboard

**URL:** https://eu.posthog.com
**Region:** EU (Frankfurt)

### Quick Insights to Create

**1. Most Viewed Posts:**
```
Event: post_view
Breakdown by: post_slug
Show: Top 10
```

**2. Average Reading Time:**
```
Event: time_on_page
Filter: page_type = "post"
Aggregation: Average of time_minutes
```

**3. Scroll Depth Distribution:**
```
Event: scroll_depth
Breakdown by: depth_percent
Chart: Bar chart
```

**4. Daily Unique Visitors:**
```
Event: $pageview
Aggregation: Unique users
Interval: Day
```

---

## 🎯 Your Analytics Goals

| Goal | How to Track | PostHog Query |
|------|-------------|---------------|
| **Unique visitors/week** | Event: `$pageview` | Aggregation: Unique users, Interval: Week |
| **Time on page: 2-4 min** | Event: `time_on_page` | Aggregation: Average of `time_minutes` |
| **Scroll depth: 60-80%** | Event: `scroll_depth` | Calculate % reaching 75%+ |
| **Returning readers: 15-20%** | Retention insight | First: `$pageview`, Returning: `$pageview` |

---

## 🔧 Events Reference

### `$pageview`
- Automatic on all pages
- Enhanced with post metadata on post pages

### `post_view` (Custom)
**Fires:** When post loads successfully
**Properties:**
- `post_slug` - Post identifier
- `post_title` - Full title
- `post_categories` - Array of categories
- `post_date` - Publication date
- `post_url` - Full URL

### `scroll_depth` (Custom)
**Fires:** At 25%, 50%, 75%, 100% scroll
**Properties:**
- `depth_percent` - Milestone reached
- `page_type` - Page type
- `post_slug` - If on post page
- `page_url` - Current URL

### `time_on_page` (Custom)
**Fires:** On page leave (beforeunload)
**Properties:**
- `page_type` - Page type
- `time_seconds` - Duration in seconds
- `time_minutes` - Duration in minutes
- `page_url` - Current URL
**Note:** Only counts active time (uses Visibility API)

---

## 🔒 Privacy & GDPR

### Configuration
```javascript
posthog.init('YOUR_API_KEY', {
  api_host: 'https://eu.i.posthog.com',
  person_profiles: 'identified_only',
  cookieless_mode: 'always'
})
```

### What This Means
- ✅ No cookies or localStorage
- ✅ No personal data collection
- ✅ EU data residency
- ✅ Privacy-preserving hash
- ✅ No cookie banner needed
- ✅ GDPR compliant

### Privacy-Preserving Hash
```
hash(team_id, daily_salt, ip_address, user_agent, hostname)
```
- Irreversible (cannot get personal data from hash)
- Daily salt deleted after processing
- Not considered Personal Data under GDPR

---

## 🐛 Debugging

### Check PostHog is Loaded
```javascript
console.log(typeof posthog); // Should be "object"
console.log(posthog.__loaded); // Should be true
```

### Enable Debug Mode
```javascript
posthog.debug(); // Log all events to console
```

### Manually Fire Test Event
```javascript
posthog.capture('test_event', { 
  test_property: 'test_value' 
});
```

### Check Network Requests
1. Open DevTools → Network tab
2. Filter by "posthog"
3. Should see requests to `eu.i.posthog.com`

### Common Issues

**Events not appearing in dashboard:**
- Wait 2-3 minutes (processing delay)
- Check correct time range in dashboard
- Use "Live Events" for real-time debugging

**Scroll depth not tracking:**
- Only works on post pages
- Each milestone fires once per page load
- Must scroll far enough to reach milestones

**Time on page = 0:**
- Check Preserve Log in DevTools
- Event fires on beforeunload (may be blocked)
- Try refreshing or navigating away

---

## 📁 Files Modified

### HTML Files (6 files)
- `index.html`
- `post.html`
- `archive.html`
- `feedback.html`
- `about.html`
- `privacy.html`

**Change:** Replaced Umami script with PostHog

### JavaScript Files (1 file)
- `site.js`

**Changes:**
- Added analytics tracking variables
- Added `initAnalytics()` function
- Added `trackPostView()` function
- Added `trackScrollDepth()` function
- Added `trackPageLeave()` function
- Added `handleVisibilityChange()` function

### Privacy Policy
- `privacy.html`

**Changes:**
- Complete rewrite of Analytics section
- Updated Cookies section
- Enhanced Legal Basis (GDPR) section
- Updated last modified date

---

## 📚 Documentation

1. **POSTHOG-TESTING-GUIDE.md** - Detailed testing instructions
2. **POSTHOG-INTEGRATION-SUMMARY.md** - Complete change summary
3. **POSTHOG-QUICK-REFERENCE.md** - This document

---

## 🎓 Learning Resources

- [PostHog Docs](https://posthog.com/docs)
- [Cookieless Tracking Tutorial](https://posthog.com/tutorials/cookieless-tracking)
- [GDPR Compliance](https://posthog.com/docs/integrate/gdpr)
- [Event Capture Guide](https://posthog.com/docs/product-analytics/capture-events)

---

## ⚡ Next Steps

1. ✅ Test locally (follow POSTHOG-TESTING-GUIDE.md)
2. ⬜ Deploy to production
3. ⬜ Monitor PostHog dashboard for 24 hours
4. ⬜ Create custom dashboards for your goals
5. ⬜ Set up alerts for anomalies (optional)

---

**Need Help?**
- Check POSTHOG-TESTING-GUIDE.md for detailed instructions
- Review POSTHOG-INTEGRATION-SUMMARY.md for technical details
- Consult PostHog documentation
- Check PostHog Community (community.posthog.com)
