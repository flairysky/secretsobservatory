# PostHog Analytics Integration - Summary of Changes

## Date: November 30, 2025

## Overview
Migrated from Umami Analytics to PostHog with **cookieless tracking** for GDPR compliance without requiring a cookie consent banner.

---

## Files Modified

### 1. HTML Files (Analytics Script Replacement)
All HTML files had Umami script replaced with PostHog:

**Files Changed:**
- `index.html`
- `post.html`
- `archive.html`
- `feedback.html`
- `about.html`
- `privacy.html`

**Before:**
```html
<!-- Umami Analytics -->
<script defer src="https://cloud.umami.is/script.js" data-website-id="6f1380e5-709c-4217-bed4-2572a873996c"></script>
```

**After:**
```html
<!-- PostHog Analytics (Cookieless) -->
<script>
  !function(t,e){/* PostHog initialization code */}(document,window.posthog||[]);
  posthog.init('phc_epG7xfY1UDuEkkr0f5EXKHTpSNZHapXwmc3FJwehDwQ', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    cookieless_mode: 'always'
  })
</script>
```

**Key Configuration:**
- `cookieless_mode: 'always'` - No cookies or localStorage
- `person_profiles: 'identified_only'` - No personal data collection
- `api_host: 'https://eu.i.posthog.com'` - EU data residency

---

### 2. site.js (Analytics Implementation)

#### Global Variables Added
```javascript
// Analytics tracking variables
let pageStartTime = null;
let scrollDepthTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};
let isPageVisible = true;
let timeOnPageAccumulator = 0;
let lastVisibilityChange = null;
```

#### New Functions Added

1. **`initAnalytics()`** - Line ~75
   - Initializes analytics on page load
   - Sets up visibility change listener
   - Attaches beforeunload handler
   - Enables scroll tracking on post pages

2. **`handleVisibilityChange()`** - Line ~95
   - Tracks when user switches tabs
   - Accumulates only active time on page

3. **`trackPageLeave()`** - Line ~110
   - Fires on beforeunload
   - Sends `time_on_page` event with duration

4. **`trackScrollDepth()`** - Line ~130
   - Tracks scroll milestones: 25%, 50%, 75%, 100%
   - Fires `scroll_depth` events
   - Each milestone only tracked once per page

5. **`trackPostView(postInfo, slug)`** - Line ~160
   - Tracks individual post views
   - Sends `post_view` event with metadata
   - Also sends enhanced `$pageview` event

#### Integration Points

**In `initPostPage()` function** - Added line after meta setup:
```javascript
// Track post view with PostHog
trackPostView(postInfo, slug);
```

**In DOMContentLoaded** - Added:
```javascript
initAnalytics();
```

---

### 3. privacy.html (GDPR Compliance Update)

#### Changed Sections

1. **Analytics Section** - Completely rewritten
   - Explains PostHog cookieless tracking
   - Details privacy-preserving hash mechanism
   - Lists what data is tracked
   - Explains technical implementation
   - Documents data retention (12 months)
   - Clarifies user privacy rights

2. **Cookies Section** - Updated
   - Clarified no cookies used for analytics
   - Explained why no cookie banner needed
   - Documented localStorage usage (theme only)

3. **Legal Basis (GDPR)** - Enhanced
   - Added detailed explanation of legitimate interest
   - Referenced GDPR Article 6(1)(f)
   - Explained why analytics is privacy-preserving

4. **Last Updated Date** - Changed
   - From: November 13, 2025
   - To: November 30, 2025

---

## Events Being Tracked

### 1. Page Views
- **Event:** `$pageview` (automatic)
- **Enhanced on posts with:**
  - `post_slug`
  - `post_title`
  - `post_categories`

### 2. Post Views
- **Event:** `post_view` (custom)
- **Properties:**
  - `post_slug`: Post identifier
  - `post_title`: Full title
  - `post_categories`: Array of categories
  - `post_date`: Publication date
  - `post_url`: Full URL
  - `page_type`: "post"

### 3. Scroll Depth
- **Event:** `scroll_depth` (custom)
- **Properties:**
  - `depth_percent`: 25, 50, 75, or 100
  - `page_type`: Page type
  - `post_slug`: If on post page
  - `page_url`: Current URL

### 4. Time on Page
- **Event:** `time_on_page` (custom)
- **Properties:**
  - `page_type`: Page type
  - `time_seconds`: Duration in seconds
  - `time_minutes`: Duration in minutes (decimal)
  - `page_url`: Current URL
- **Note:** Only tracks active time (uses Visibility API)

---

## Analytics Goals & Tracking

### Goal 1: Unique Visitors per Week
**PostHog Query:**
- Event: `$pageview`
- Aggregation: Unique users
- Interval: Week
- **Note:** Due to cookieless tracking, daily counts are most accurate

### Goal 2: Time on Page (2-4 minutes minimum)
**PostHog Query:**
- Event: `time_on_page`
- Aggregation: Average of `time_minutes`
- Filter: `page_type: post` for posts only

### Goal 3: Scroll Depth (60-80% goal)
**PostHog Query:**
- Event: `scroll_depth`
- Breakdown: `depth_percent`
- Calculate % reaching 75% or 100%

### Goal 4: Returning Readers (15-20% goal)
**PostHog Query:**
- Insight Type: Retention
- First Event: `$pageview`
- Returning Event: `$pageview`
- **Note:** Daily returning visitors most accurate with cookieless tracking

---

## GDPR Compliance Summary

✅ **No cookie consent banner required**
- Cookieless tracking doesn't use cookies or localStorage
- Theme preference is essential functionality (exempt)

✅ **No personal data collected**
- Server-side hash is irreversible
- Cannot identify individuals
- Daily salt deleted after processing

✅ **EU data residency**
- All data processed in EU (eu.i.posthog.com)
- Complies with data localization requirements

✅ **Transparent privacy policy**
- Comprehensive explanation of tracking
- Clear list of data collected
- User rights documented
- Technical details provided

✅ **Legitimate interest basis**
- Privacy-preserving analytics
- No adverse effect on user rights
- Complies with GDPR Article 6(1)(f)

---

## Privacy-Preserving Hash Mechanism

PostHog generates user identifiers using:
```
hash(team_id, daily_salt, ip_address, user_agent, hostname)
```

**Key Points:**
- Hash is **irreversible** (cannot get personal data from it)
- Daily salt **changes every day** and is **deleted after processing**
- IP address not stored permanently
- Result is **not considered Personal Data** under GDPR
- Users appear as different visitors each day (higher unique counts, but better privacy)

---

## Limitations of Cookieless Tracking

These are **intentional privacy features:**

1. **Higher unique user counts** - Daily salt means users counted as new each day
2. **No cross-session tracking** - Cannot link same user across days
3. **Weekly/monthly metrics less accurate** - Daily metrics most reliable
4. **No user identification** - Cannot use `identify()` function
5. **Possible hash collisions** - Rare, but two users with same IP+UA might collide

**These trade-offs ensure privacy compliance without a cookie banner.**

---

## Testing Checklist

- [ ] Local server running (http://localhost:8000)
- [ ] PostHog script loads without errors
- [ ] `$pageview` events fire on all pages
- [ ] `post_view` events fire on post pages with correct properties
- [ ] Scroll depth tracks at 25%, 50%, 75%, 100%
- [ ] Time on page tracks and respects visibility changes
- [ ] Events appear in PostHog dashboard (eu.posthog.com)
- [ ] Privacy policy updated and accurate
- [ ] No cookies set for analytics (check DevTools → Application → Cookies)
- [ ] No localStorage used for analytics (only theme preference)

---

## Deployment Notes

### Before Deploying:
1. Test all tracking locally (see POSTHOG-TESTING-GUIDE.md)
2. Verify PostHog project API key is correct
3. Confirm EU endpoint if required for compliance

### After Deploying:
1. Monitor PostHog "Live Events" for first hour
2. Check that events are appearing correctly
3. Verify no console errors on production
4. Create custom dashboards for your analytics goals

---

## Documentation Created

1. **POSTHOG-TESTING-GUIDE.md** - Comprehensive testing instructions
2. **POSTHOG-INTEGRATION-SUMMARY.md** - This document

---

## PostHog Dashboard Access

**URL:** https://eu.posthog.com
**Project API Key:** phc_epG7xfY1UDuEkkr0f5EXKHTpSNZHapXwmc3FJwehDwQ
**Region:** EU (Frankfurt)

---

## Support Resources

- **PostHog Documentation:** https://posthog.com/docs
- **Cookieless Tracking Tutorial:** https://posthog.com/tutorials/cookieless-tracking
- **GDPR Compliance:** https://posthog.com/docs/integrate/gdpr
- **Event Capture:** https://posthog.com/docs/product-analytics/capture-events

---

## Summary

✅ Successfully migrated from Umami to PostHog
✅ Implemented cookieless tracking for GDPR compliance
✅ Added comprehensive event tracking (posts, scroll, time)
✅ Updated privacy policy with full disclosure
✅ No cookie banner required
✅ EU data residency configured
✅ All analytics goals trackable
✅ Documentation created for testing and maintenance

**Status:** Ready for testing and deployment
