# GitHub Pages Deployment Guide

Complete guide for deploying arashnejad.com to GitHub Pages.

## Pre-Deployment Checklist

### 1. Form Configuration

Before deploying, you **MUST** configure the forms:

- [ ] Open `/pages/Contact.tsx`
- [ ] Find `action="https://formsubmit.co/PLACEHOLDER_EMAIL"`
- [ ] Replace `PLACEHOLDER_EMAIL` with your actual email address
- [ ] Repeat for `/pages/Quotes.tsx`
- [ ] Verify all hidden fields are present (`_subject`, `_template`, `_captcha`, `_next`, `_honey`)

See `/FORM_SETUP.md` for detailed form configuration instructions.

### 2. Production URL Verification

Ensure all `_next` redirect URLs match your production domain:

- [ ] Current setting: `https://www.arashnejad.com/thank-you.html`
- [ ] Update if using a different domain
- [ ] Verify in both Contact and Quotes forms

### 3. Image Verification

All images should use local references or confirmed external URLs:

- [ ] Check that no broken image links exist
- [ ] Verify Unsplash images are loading
- [ ] Test on different devices/browsers

### 4. SEO & Metadata

Verify all pages have proper SEO configuration:

- [ ] All pages have unique `<SEOHead>` titles
- [ ] Meta descriptions are keyword-rich and unique
- [ ] Canonical URLs point to production domain
- [ ] No duplicate content issues

## GitHub Pages Setup

### Option 1: Deploy via GitHub Web Interface

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - arashnejad.com"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/arashnejad.com.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

3. **Wait for deployment:**
   - GitHub will build and deploy your site
   - Usually takes 1-3 minutes
   - Check the green checkmark on the Pages settings

4. **Access your site:**
   - Your site will be at: `https://YOUR_USERNAME.github.io/arashnejad.com/`
   - Or your custom domain if configured

### Option 2: Deploy with GitHub Actions (Recommended)

GitHub Actions provides automated deployment with build optimization.

1. **Create workflow file:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. **Enable GitHub Actions in repository settings**

3. **Push to trigger deployment:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

## Custom Domain Setup

### Configure Custom Domain (www.arashnejad.com)

1. **Add CNAME file:**

Create `/public/CNAME` with:
```
www.arashnejad.com
```

2. **Configure DNS at your domain registrar:**

Add these DNS records:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. **Enable HTTPS in GitHub Pages settings:**
   - Go to Settings → Pages
   - Check "Enforce HTTPS"
   - Wait for SSL certificate to provision (can take up to 24 hours)

## Post-Deployment Tasks

### 1. Test All Forms

- [ ] Submit Contact form
- [ ] Submit Quote form
- [ ] Verify email delivery
- [ ] Check thank-you page redirect
- [ ] Test spam protection (CAPTCHA)

### 2. Verify FormSubmit Email

When you submit your first form:

1. Check your email for FormSubmit verification
2. Click the verification link
3. Submit another test to confirm delivery

### 3. Cross-Browser Testing

Test on:
- [ ] Chrome/Edge (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop & Mobile)
- [ ] Chrome (Mobile)

### 4. Performance Check

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test page load speed
- [ ] Verify mobile responsiveness

### 5. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Check all meta tags are rendering
- [ ] Test social media sharing previews

## Troubleshooting

### Forms Not Working

**Problem:** Forms submit but no email received

**Solutions:**
1. Check that you replaced `PLACEHOLDER_EMAIL`
2. Verify your email with FormSubmit
3. Check spam folder
4. Ensure `_captcha` is set to `"true"` (string, not boolean)

### Thank You Page Not Found

**Problem:** 404 error after form submission

**Solutions:**
1. Verify `/public/thank-you.html` exists
2. Check `_next` URL matches your domain
3. Ensure file is included in build output (`dist` folder)

### Images Not Loading

**Problem:** Broken images on deployed site

**Solutions:**
1. Check image paths are correct
2. Verify external URLs are accessible
3. Ensure images are in `/public` directory
4. Check browser console for 404 errors

### Custom Domain Not Working

**Problem:** Site not accessible at custom domain

**Solutions:**
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check CNAME file exists in `/public`
4. Ensure GitHub Pages is configured for custom domain

## Maintenance

### Updating Content

1. Make changes to source files
2. Commit and push to main branch
3. GitHub will automatically rebuild and deploy
4. Changes typically live within 2-3 minutes

### Monitoring

- **Google Analytics** - Track visitor behavior (if configured)
- **Google Search Console** - Monitor SEO performance
- **FormSubmit** - Email delivery logs in your inbox
- **GitHub Actions** - View deployment status and logs

## Security Best Practices

- [ ] Never commit real email addresses to public repos
- [ ] Keep dependencies updated
- [ ] Monitor for security vulnerabilities
- [ ] Use HTTPS (enforce in GitHub Pages settings)
- [ ] Review Privacy Policy annually

## Support Resources

- **Figma Make Documentation** - For development questions
- **GitHub Pages Docs** - https://docs.github.com/pages
- **FormSubmit Docs** - https://formsubmit.co/
- **React Router** - https://reactrouter.com/

---

**Last Updated:** December 23, 2025  
**Maintained by:** Aria Developments Inc.

## Quick Command Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (after setup)
git add .
git commit -m "Update website"
git push origin main
```
