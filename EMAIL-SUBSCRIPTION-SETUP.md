# Email Subscription Setup Guide

## Current Status

The email subscription form is now live on the About page (`about.html`), but it needs to be connected to an email service provider to actually send emails.

## What's Already Done

✅ Email subscription form with validation
✅ Privacy policy agreement checkbox
✅ Privacy Policy page (`privacy.html`)
✅ Privacy Policy link in all page footers
✅ Form handling JavaScript in `site.js`

## What You Need to Do

Choose an email service provider and configure the endpoint. Here are recommended options:

### Option 1: Buttondown (Recommended - Simple & Privacy-Focused)

**Why:** Simple, markdown-based, privacy-focused, great for technical blogs.

**Setup:**
1. Sign up at https://buttondown.email/
2. Get your API endpoint from settings
3. In `site.js`, find the `handleEmailSubscription` function and replace the TODO section with:

```javascript
const response = await fetch('https://api.buttondown.email/v1/subscribers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token YOUR_BUTTONDOWN_API_KEY'
  },
  body: JSON.stringify({
    email: emailInput.value,
    tags: ['website-subscription']
  })
});

if (!response.ok) {
  throw new Error('Subscription failed');
}
```

### Option 2: Mailchimp (Most Popular)

**Why:** Industry standard, lots of features, free tier available.

**Setup:**
1. Sign up at https://mailchimp.com/
2. Create an audience/list
3. Get embedded form code or API key
4. Use their JavaScript API or form endpoint

### Option 3: Formspree (Easiest)

**Why:** Dead simple, no backend needed, free tier.

**Setup:**
1. Sign up at https://formspree.io/
2. Create a new form
3. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
4. In `site.js`, replace the TODO section with:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: emailInput.value })
});

if (!response.ok) {
  throw new Error('Subscription failed');
}
```

### Option 4: ConvertKit

**Why:** Great for creators, powerful automation, designed for newsletters.

**Setup:**
1. Sign up at https://convertkit.com/
2. Create a form
3. Use their API or embedded form

## After Setup

Once you configure an email provider:

1. Test the subscription form thoroughly
2. Send a test email to yourself
3. Update the Privacy Policy if needed with your email provider's name
4. Consider adding:
   - Welcome email for new subscribers
   - Unsubscribe link in emails (required by law)
   - Preference center for email frequency

## RSS vs Email

Remember: Users can also subscribe via RSS (`feed.xml`) without any email setup. RSS is:
- Completely private
- No backend needed
- No email service costs
- Already working on your site

Many technical users prefer RSS, so the current dual-option approach is ideal!

## Questions?

If you need help setting up any specific email service, let me know which one you prefer and I can provide detailed integration code.
