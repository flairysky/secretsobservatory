# PostHog Analytics Testing Guide

## Overview
This guide will help you verify that PostHog analytics is correctly integrated into Secrets Observatory with cookieless tracking.

## What Was Implemented

### 1. **Cookieless Tracking Configuration**
- PostHog initialized with `cookieless_mode: 'always'`
- `person_profiles: 'identified_only'` (no personal data collection)
- EU data residency: `api_host: 'https://eu.i.posthog.com'`
- No cookies or localStorage used for analytics

### 2. **Events Being Tracked**

#### **Page View Events**
- Automatic `$pageview` events on all pages
- Custom `post_view` events for individual posts with properties:
  - `post_slug`: The slug of the post
  - `post_title`: The title of the post
  - `post_categories`: Array of categories
  - `post_date`: Publication date
  - `post_url`: Full URL of the post

#### **Scroll Depth Tracking**
- Event: `scroll_depth`
- Tracked milestones: 25%, 50%, 75%, 100%
- Properties:
  - `depth_percent`: The milestone reached
  - `page_type`: Type of page (post, index, etc.)
  - `post_slug`: If on a post page
  - `page_url`: Current URL

#### **Time on Page Tracking**
- Event: `time_on_page`
- Sent when user leaves the page (beforeunload)
- Uses Visibility API to track only active time
- Properties:
  - `page_type`: Type of page
  - `time_seconds`: Total time in seconds
  - `time_minutes`: Total time in minutes (decimal)
  - `page_url`: Current URL

### 3. **Privacy Compliance**
- Updated privacy policy with comprehensive GDPR information
- Explains cookieless tracking mechanism
- Documents what data is collected and how
- No cookie banner required

## How to Test

### Step 1: Enable PostHog Debug Mode
Open your browser's developer console and run:
```javascript
posthog.debug()
```
This will log all PostHog events to the console for testing.

### Step 2: Test Basic Page Views

1. **Home Page**
   - Open http://localhost:8000
   - Check console for `$pageview` event
   - Should see PostHog initialization message

2. **Navigation**
   - Click through different pages (About, Archive, Feedback)
   - Each page should trigger a `$pageview` event

### Step 3: Test Post View Tracking

1. **Open a Post**
   - Navigate to any post (e.g., http://localhost:8000/post.html?slug=on-learning)
   - Check console for two events:
     - `post_view` with post metadata
     - `$pageview` with post properties

2. **Verify Event Properties**
   In the console, you should see something like:
   ```javascript
   {
     event: "post_view",
     properties: {
       post_slug: "on-learning",
       post_title: "On Learning",
       post_categories: ["Philosophy", "Education"],
       post_date: "2025-10-15",
       post_url: "/post.html?slug=on-learning"
     }
   }
   ```

### Step 4: Test Scroll Depth Tracking

1. **Open a Post**
2. **Scroll Down Slowly**
   - At 25% scroll: Check console for `scroll_depth` event with `depth_percent: 25`
   - At 50% scroll: Should see `depth_percent: 50`
   - Continue to 75% and 100%
3. **Verify Each Milestone**
   - Each milestone should only fire once per page load
   - Events should include `post_slug` if on a post page

### Step 5: Test Time on Page Tracking

1. **Open a Page**
2. **Wait 10-15 seconds**
3. **Navigate Away or Close Tab**
   - The `beforeunload` event should fire
   - Check console (may need to enable "Preserve log" in DevTools)
   - Should see `time_on_page` event with time data

4. **Test Visibility Tracking**
   - Open a page
   - Switch to another tab for 5 seconds
   - Switch back
   - Navigate away
   - Time should only count active time (not background time)

### Step 6: Verify in PostHog Dashboard

1. **Log in to PostHog**
   - Go to https://eu.posthog.com
   - Log in with your account

2. **Check Events**
   - Navigate to "Events" in the sidebar
   - You should see:
     - `$pageview` (automatic)
     - `post_view` (custom)
     - `scroll_depth` (custom)
     - `time_on_page` (custom)

3. **View Event Details**
   - Click on any event to see properties
   - Verify all custom properties are being captured

4. **Create Insights**
   - Go to "Insights" → "New Insight"
   - Try these queries:

   **Unique Visitors per Week:**
   ```
   Event: $pageview
   Aggregation: Unique users
   Interval: Week
   ```

   **Average Time on Page:**
   ```
   Event: time_on_page
   Aggregation: Average of time_minutes
   ```

   **Scroll Depth Distribution:**
   ```
   Event: scroll_depth
   Breakdown by: depth_percent
   ```

   **Most Viewed Posts:**
   ```
   Event: post_view
   Breakdown by: post_slug
   Aggregation: Total count
   ```

   **Returning Readers:**
   ```
   Use "Retention" insight type
   First event: $pageview
   Returning event: $pageview
   ```

## Expected Analytics Metrics

Based on your goals, here's how to track them in PostHog:

### 1. **Unique Visitors per Week**
- **Insight Type:** Trends
- **Event:** `$pageview`
- **Aggregation:** Unique users
- **Interval:** Week
- **Note:** Due to cookieless tracking, daily unique users are more accurate than longer periods

### 2. **Time on Page (Goal: 2-4 minutes minimum)**
- **Insight Type:** Trends
- **Event:** `time_on_page`
- **Aggregation:** Average of `time_minutes`
- **Filter:** Can filter by `page_type: post` for posts only

### 3. **Scroll Depth (Goal: 60-80%)**
- **Insight Type:** Trends or Bar Chart
- **Event:** `scroll_depth`
- **Breakdown:** `depth_percent`
- **Analysis:** Calculate % of users reaching 75% or 100%

### 4. **Returning Readers (Goal: 15-20%)**
- **Insight Type:** Retention
- **First Event:** `$pageview`
- **Returning Event:** `$pageview`
- **Interval:** Weekly
- **Note:** Cookieless tracking means returning visitors are counted daily, not across longer periods

## Troubleshooting

### PostHog Not Loading
**Check:**
- Browser console for errors
- Network tab in DevTools - should see requests to `eu.i.posthog.com`
- Verify PostHog script is in HTML files

**Solution:**
```html
<!-- Should be in all HTML files before site.js -->
<script>
  posthog.init('phc_epG7xfY1UDuEkkr0f5EXKHTpSNZHapXwmc3FJwehDwQ', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    cookieless_mode: 'always'
  })
</script>
```

### Events Not Appearing in Dashboard
**Check:**
- Events may take a few minutes to appear
- Verify you're looking at the correct time range
- Check "Live Events" for real-time debugging
- Ensure you're logged into the EU instance (eu.posthog.com)

### Scroll Depth Not Tracking
**Check:**
- Only works on post pages (pages with scroll progress bar)
- Requires scrolling far enough to reach milestones
- Each milestone only fires once per page load

### Time Tracking Seems Inaccurate
**Check:**
- Uses Visibility API - only counts active time
- Sent on `beforeunload` (may not fire in all browsers/situations)
- Check browser console logs for "Tracked time on page" messages

## Limitations of Cookieless Tracking

As documented in the privacy policy, cookieless tracking has some trade-offs:

1. **Higher Unique User Counts:** Users appear as different visitors each day due to the daily salt change
2. **No Cross-Session Tracking:** Cannot track the same user across multiple days
3. **Weekly/Monthly Metrics Less Accurate:** Daily unique users are accurate, but aggregating over longer periods inflates numbers
4. **No User Identification:** Cannot use `identify()` or track logged-in users
5. **Hash Collisions Possible:** Rare, but two users with same IP + user agent might be counted as one

**These are intentional privacy features, not bugs!**

## GDPR Compliance Checklist

✅ **No cookies used for analytics**
✅ **No local storage for analytics**
✅ **No personal data collected**
✅ **Privacy-preserving hash (irreversible)**
✅ **EU data residency**
✅ **Updated privacy policy**
✅ **No cookie banner required**
✅ **Data retention documented (12 months)**
✅ **User rights explained**

## Next Steps

1. **Test Locally:** Follow this guide to verify everything works
2. **Deploy:** Push changes to production
3. **Monitor:** Check PostHog dashboard daily for first week
4. **Create Dashboards:** Set up custom dashboards for your goals
5. **Adjust:** Tweak tracking based on what's useful

## Resources

- **PostHog Docs:** https://posthog.com/docs
- **Cookieless Tracking:** https://posthog.com/tutorials/cookieless-tracking
- **GDPR Compliance:** https://posthog.com/docs/integrate/gdpr
- **Event Tracking:** https://posthog.com/docs/product-analytics/capture-events
- **Insights & Dashboards:** https://posthog.com/docs/product-analytics/insights

## Support

If you encounter issues:
1. Check browser console for errors
2. Review this testing guide
3. Consult PostHog documentation
4. Check PostHog Community Slack

---

**Happy Tracking! 📊**
