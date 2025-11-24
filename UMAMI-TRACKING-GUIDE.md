# Umami Analytics - Post Tracking Guide

## Overview
Your blog now tracks individual posts and time spent on each post in Umami Analytics.

## What's Been Implemented

### 1. Individual Post Page Views
Each post is now tracked with a unique virtual path:
- Instead of `/post.html` (generic)
- Now tracks as `/post/slug-name` (specific to each post)
- Example: `/post/poem_first_act`, `/post/on-learning`, etc.

### 2. Time Spent Tracking
Tracks how long users spend reading each post:
- Custom event: `post-time-spent`
- Includes data:
  - `slug`: The post identifier
  - `seconds`: Total time in seconds
  - `minutes`: Time rounded to nearest minute
- Only tracks if user spends more than 0 seconds

## How to View Analytics in Umami

### View Individual Post Traffic

1. **Go to Your Umami Dashboard**
   - https://cloud.umami.is
   - Login with your credentials

2. **Navigate to Pages Section**
   - You should now see individual entries like:
     - `/post/poem_first_act`
     - `/post/poem_second_act`
     - `/post/on-learning`
     - `/post/on-reading`
   - Each entry shows:
     - Number of visitors
     - Number of page views
     - Bounce rate
     - Average visit duration

3. **Sort by Most Viewed**
   - Click on the "Visitors" column header to sort by most visits
   - Or click "Views" to see total page views

### View Time Spent on Posts

1. **Go to Events Section**
   - Click on "Events" in the left sidebar

2. **Look for `post-time-spent` events**
   - You'll see this custom event with data about:
     - Which post (slug)
     - How long users stayed (seconds/minutes)

3. **Filter by Post**
   - Click on the event to see details
   - Filter by specific post slugs to see time spent per post

### View Comparison

You can compare:
- **Most visited posts**: Pages section sorted by visitors
- **Longest read posts**: Events → `post-time-spent` filtered by post
- **Best engagement**: Combine page views with time spent

## Expected Results

After deployment and some traffic, you'll see:
```
Pages:
/post/poem_first_act        → 45 visitors, 52 views, 2m 30s avg
/post/on-learning          → 38 visitors, 41 views, 4m 15s avg
/post/poem_second_act      → 22 visitors, 25 views, 3m 10s avg
...

Events:
post-time-spent
  - poem_first_act: avg 150 seconds (2.5 min)
  - on-learning: avg 255 seconds (4.25 min)
  ...
```

## Technical Implementation Details

### Code Location: `site.js`

**Individual Post Tracking** (lines ~446-457):
```javascript
if (typeof umami !== 'undefined') {
  try {
    umami.track(props => ({ 
      ...props,
      url: `/post/${slug}`,
      title: frontMatter.title 
    }));
  } catch (e) {
    console.log('Umami tracking error:', e);
  }
}
```

**Time Spent Tracking** (lines ~18-30):
```javascript
window.addEventListener('beforeunload', function() {
  if (postPageStartTime && window.umami) {
    const timeSpent = Math.round((Date.now() - postPageStartTime) / 1000);
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (slug && timeSpent > 0) {
      window.umami.track('post-time-spent', {
        slug: slug,
        seconds: timeSpent,
        minutes: Math.round(timeSpent / 60)
      });
    }
  }
});
```

## Troubleshooting

### If posts still show as `/post.html`:
1. Clear your browser cache
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Check browser console for errors
4. Verify Umami script is loading: check Network tab

### If time tracking doesn't work:
- Time is only sent when user leaves the page or switches tabs
- Requires at least 1 second of time spent
- Check browser console for "Umami tracking error" messages

### Testing Locally:
1. Open browser console (F12)
2. Visit a post: `http://localhost:8000/post.html?slug=poem_first_act`
3. You should see: `Umami tracking error:` (if testing locally, this is expected)
4. After deployment, errors should disappear

## Next Steps

1. **Deploy these changes** to your live site
2. **Wait 24-48 hours** for data to accumulate
3. **Check Umami dashboard** to see:
   - Individual post page views
   - Time spent per post
   - Most popular content

4. **Analyze trends**:
   - Which topics get most traffic?
   - Which posts keep readers engaged longest?
   - Are poem posts or learning posts more popular?

## Additional Umami Features to Explore

- **Custom Date Ranges**: View analytics for specific time periods
- **Realtime View**: See current visitors on specific posts
- **Referrers**: See where traffic to each post comes from
- **Devices**: See if readers prefer mobile/desktop for certain posts
- **Countries**: Geographic distribution of your readers

---

**Note**: The tracking code respects user privacy and only collects anonymous usage data. No personal information is tracked or stored.
