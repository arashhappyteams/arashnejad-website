# Form Configuration Guide for GitHub Pages

This website uses **FormSubmit.co** to handle form submissions on GitHub Pages without requiring a backend server.

## Overview

All forms are configured to work on static GitHub Pages hosting by using FormSubmit's free email delivery service.

## Forms on the Website

1. **Contact Form** (`/pages/Contact.tsx`)
2. **Quote Submission Form** (`/pages/Quotes.tsx`)

## Setup Instructions

### Step 1: Replace Placeholder Email

All forms currently use `PLACEHOLDER_EMAIL` in the form action. Before deploying to production, you must replace this with your actual email address.

**Find and replace in the following files:**

- `/pages/Contact.tsx`
- `/pages/Quotes.tsx`

**Replace:**
```html
action="https://formsubmit.co/PLACEHOLDER_EMAIL"
```

**With:**
```html
action="https://formsubmit.co/your.email@example.com"
```

### Step 2: Verify Email Address (First Time Only)

The first time someone submits a form:

1. FormSubmit will send a verification email to your address
2. Click the verification link in that email
3. After verification, all future submissions will be delivered automatically

**Important:** You only need to verify once per email address.

### Step 3: Test Your Forms

After replacing the placeholder email:

1. Deploy your site to GitHub Pages
2. Submit a test form
3. Check your inbox for the verification email (if first time)
4. Verify the email address by clicking the link
5. Submit another test to confirm delivery

## Form Configuration Details

### Hidden Fields

All forms include these FormSubmit configuration fields:

| Field | Value | Purpose |
|-------|-------|---------|
| `_subject` | Form-specific subject line | Identifies which form was submitted |
| `_template` | `table` | Formats the email as a clean table |
| `_captcha` | `true` | Enables reCAPTCHA spam protection |
| `_next` | `https://www.arashnejad.com/thank-you.html` | Redirect URL after submission |
| `_honey` | (hidden field) | Honeypot for spam bots |

### Form Subjects

Each form has a unique subject line to help you identify the source:

- **Contact Form:** "New Contact Form Submission - arashnejad.com"
- **Quote Submission:** "New Quote Submission - arashnejad.com"

## Spam Protection

Multiple layers of spam protection are enabled:

1. **reCAPTCHA** - Users must complete a CAPTCHA before submitting
2. **Honeypot field** - Hidden field that bots typically fill out (legitimate users won't see it)
3. **HTML5 validation** - Required fields and input type validation

## Thank You Page

After successful submission, users are redirected to `/thank-you.html`, which:

- Confirms their message was received
- Sets the expectation for a 48-hour response time
- Provides a link back to the homepage
- Works without JavaScript

## Privacy & Data Handling

- Form data is sent directly to your email via FormSubmit
- No data is stored on the website
- No third-party tracking is used
- Complies with the Privacy Policy at `/privacy-policy`

## Changing Your Email Address

To change the email address that receives submissions:

1. Update the email in all form action URLs
2. Deploy the updated site
3. Submit a test form to trigger verification for the new email
4. Verify the new email address

## Troubleshooting

### Forms not working?

1. Check that you replaced `PLACEHOLDER_EMAIL` with your actual email
2. Ensure you verified your email address with FormSubmit
3. Check your spam folder for FormSubmit emails
4. Verify the `_next` URL matches your deployed site URL

### Not receiving submissions?

1. Check your spam/junk folder
2. Verify your email address was confirmed with FormSubmit
3. Try submitting a test form and check for error messages

### CAPTCHA not showing?

- FormSubmit's CAPTCHA appears after you click the submit button
- It's normal for there to be a brief delay
- Users will see a CAPTCHA challenge before the form submits

## Advanced Configuration (Optional)

### Custom Email Templates

FormSubmit supports custom HTML email templates. To use:

1. Create an HTML email template
2. Host it on a public URL
3. Replace `_template: table` with `_template: box` or your custom template URL

### Auto-response

To send an auto-response to the person submitting the form:

1. Add a hidden field: `<input type="hidden" name="_autoresponse" value="Thank you for contacting us!">`
2. FormSubmit will send an automatic reply to the email they provided

## Support

- **FormSubmit Documentation:** https://formsubmit.co/
- **Privacy Policy:** Ensure your Privacy Policy reflects that form submissions are sent via email
- **Contact:** Use the contact form on the website after it's configured

## Deployment Checklist

Before deploying to production:

- [ ] Replace all `PLACEHOLDER_EMAIL` instances with your real email
- [ ] Update `_next` URLs to match your production domain
- [ ] Test all forms locally (they won't actually send, but should validate)
- [ ] Deploy to GitHub Pages
- [ ] Submit test form for each form type
- [ ] Verify your email address with FormSubmit
- [ ] Check that thank-you page redirects work correctly
- [ ] Submit final test to confirm email delivery

---

**Last Updated:** December 23, 2025  
**Maintained by:** Aria Developments Inc.
