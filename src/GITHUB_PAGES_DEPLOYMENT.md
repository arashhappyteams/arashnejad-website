# GitHub Pages Deployment Guide for arashnejad.com

## ✅ Pre-Deployment Checklist

Your website is **READY** for GitHub Pages deployment! Here's what's already configured:

### Files Created:
- ✅ `/public/404.html` - Handles React Router client-side routing
- ✅ `/public/CNAME` - Custom domain configuration (www.arashnejad.com)
- ✅ `/public/index.html` - SPA redirect script for routing
- ✅ `/public/thank-you.html` - Form submission success page
- ✅ All 7 pages with proper SEO and routing
- ✅ All 3 forms configured with FormSubmit

### Forms Configuration:
All forms redirect to: `https://www.arashnejad.com/thank-you.html`
1. Contact Form (`/contact`)
2. Quote Submission Form (`/quotes`)
3. Book Recommendation Form (`/books`)

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub Repository

1. Create a new repository on GitHub (if not already created):
   - Repository name: `arashnejad-website` (or any name you prefer)
   - Set to **Public** or **Private** (both work with GitHub Pages)

2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/arashnejad-website.git
   git push -u origin main
   ```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. GitHub will automatically detect your React/Vite app

### Step 3: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
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
        uses: actions/deploy-pages@v4
```

### Step 4: Configure Custom Domain (DNS Settings)

1. **In Your Domain Registrar** (where you bought arashnejad.com):
   
   Add these DNS records:
   
   **For www.arashnejad.com:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 3600
   ```
   
   **For root domain (arashnejad.com) - Optional:**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

2. **In GitHub Pages Settings:**
   - Under **Custom domain**, enter: `www.arashnejad.com`
   - Check **Enforce HTTPS** (after DNS propagates)

### Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check status at: https://dnschecker.org

---

## 🧪 Testing Before Going Live

After deployment, test these critical features:

### Navigation & Routing:
- [ ] All 7 pages load correctly
- [ ] Navigation menu works
- [ ] Direct URL access works (e.g., `/about`, `/insights`)
- [ ] Browser back/forward buttons work

### Forms:
- [ ] Contact form submits and redirects to thank-you.html
- [ ] Quote submission form works
- [ ] Book recommendation form works
- [ ] CAPTCHA appears
- [ ] Email arrives at ArashShn@gmail.com
- [ ] Thank you page countdown timer works
- [ ] Auto-redirect to home after 5 seconds

### SEO & Meta:
- [ ] Page titles correct in browser tabs
- [ ] Meta descriptions present
- [ ] Canonical URLs correct
- [ ] Open Graph tags work (test with https://opengraph.xyz)

### Visual & Performance:
- [ ] All images load
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Desktop layout correct
- [ ] Fast load times

---

## 🔧 Build Configuration

Your `vite.config.ts` should include:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

---

## 📧 FormSubmit First-Time Setup

**IMPORTANT**: The first time someone submits a form:

1. FormSubmit will email you a **confirmation link**
2. You **MUST click that link** to activate the form
3. After activation, all future submissions work automatically
4. Do this for the first submission from each form

---

## 🛠 Troubleshooting

### Issue: 404 on page refresh
**Solution**: The 404.html file handles this automatically. If still occurs, check that the file is in the `dist` folder after build.

### Issue: Forms don't redirect
**Solution**: Ensure all forms use `https://www.arashnejad.com/thank-you.html` (with .html extension)

### Issue: Custom domain not working
**Solution**: 
- Verify CNAME file contains: `www.arashnejad.com`
- Check DNS settings in domain registrar
- Wait 24-48 hours for DNS propagation
- Clear browser cache

### Issue: Images not loading
**Solution**: All images use absolute paths or Unsplash URLs, should work automatically

---

## 📋 Post-Deployment Checklist

After your site is live:

- [ ] Test all forms by submitting real test data
- [ ] Click the FormSubmit activation link in your email
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Monitor for broken links

---

## 🎉 Your Site is Ready!

Once deployed, your site will be live at:
- **Primary**: https://www.arashnejad.com
- **GitHub Pages default**: https://YOUR_USERNAME.github.io/REPO_NAME

**Questions?** Check the GitHub Actions logs if build fails, or review this guide.

Good luck! 🚀
