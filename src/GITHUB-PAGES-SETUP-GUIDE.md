# GitHub Pages Setup Guide

## Summary

I've prepared your code for GitHub Pages deployment by:
1. ✅ Created the `/public/images/` directory structure
2. ✅ Updated several files to use local image paths
3. ✅ Created a comprehensive image manifest (`/IMAGE-MANIFEST.md`)
4. ⚠️ **Remaining**: Need to complete updating a few more files (listed below)

---

## What's Been Done

### Files Updated:
- ✅ `/pages/Home.tsx` - Portrait image now uses `/images/hero/arash-nejad-portrait.jpg`
- ✅ `/components/SEOHead.tsx` - OG image default changed to `/images/seo/og-image.jpg`
- ✅ `/pages/About.tsx` - Portrait + 2 education logos updated (Harvard, Wharton)

### Documents Created:
- ✅ `/IMAGE-MANIFEST.md` - Complete list of all 29 images with descriptions, sizes, resolutions
- ✅ `/public/images/README.md` - Directory structure guide
- ✅ `/CODE-UPDATES-NEEDED.md` - Quick reference for remaining updates

---

## Remaining Code Updates

Due to message length limits, I couldn't complete all file updates. Here are the exact changes still needed:

### 1. `/pages/About.tsx` - 6 remaining image updates

**Education logos (2):**
```tsx
// Line ~218 - GE Logo
src="/images/about/education/general-electric.svg"

// Line ~239 - University of Calgary
src="/images/about/education/university-of-calgary.png"
```

**Hobby photos (4):**
```tsx
// Line ~529 - Skiing
src="/images/about/hobbies/skiing-mountain.jpg"

// Line ~551 - Marathon
src="/images/about/hobbies/marathon-running.jpg"

// Line ~573 - Rock Climbing
src="/images/about/hobbies/rock-climbing.jpg"

// Line ~595 - Family
src="/images/about/hobbies/family-time.jpg"
```

### 2. `/pages/Books.tsx` - Book covers array

Replace lines ~152-163 with:
```tsx
const bookCovers = [
  '/images/books/book-cover-01-business.jpg',
  '/images/books/book-cover-02-leadership.jpg',
  '/images/books/book-cover-03-hardcover.jpg',
  '/images/books/book-cover-04-corporate.jpg',
  '/images/books/book-cover-05-strategy.jpg',
  '/images/books/book-cover-06-professional.jpg',
  '/images/books/book-cover-07-textbook.jpg',
  '/images/books/book-cover-08-blue.jpg',
  '/images/books/book-cover-09-red.jpg',
  '/images/books/book-cover-10-green.jpg',
  '/images/books/book-cover-11-yellow.jpg',
  '/images/books/book-cover-12-black.jpg',
];
```

### 3. `/pages/Quotes.tsx` - 6 headshot updates

```tsx
// ID 2 (line ~39)
headshot: '/images/quotes/quote-author-01-truman.jpg',

// ID 5 (line ~55)
headshot: '/images/quotes/quote-author-02-sinek.jpg',

// ID 6 (line ~63)
headshot: '/images/quotes/quote-author-03-einstein.jpg',

// ID 8 (line ~79)
headshot: '/images/quotes/quote-author-04-collins.jpg',

// ID 10 (line ~95)
headshot: '/images/quotes/quote-author-05-seligman.jpg',

// ID 13 (line ~119)
headshot: '/images/quotes/quote-author-06-conant.jpg',
```

---

## Next Steps

### Step 1: Complete Code Updates
Finish updating the 3 files above with local image paths.

### Step 2: Obtain Images
Use the `/IMAGE-MANIFEST.md` file to gather all 29 images:

**Education Logos (4) - Can download directly:**
- Harvard: https://upload.wikimedia.org/wikipedia/en/1/18/Harvard_shield-Business.png
- Wharton: https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Wharton_School_of_the_University_of_Pennsylvania_logo.svg
- GE: https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg
- University of Calgary: https://upload.wikimedia.org/wikipedia/en/thumb/3/30/UniversityOfCalgary.svg/1200px-UniversityOfCalgary.svg.png

**Other Images (25) - Need stock photos or personal photos:**
- 1 professional portrait (you)
- 4 hobby photos
- 12 book covers
- 6 quote author headshots
- 2 SEO/social images

### Step 3: Place Images
Follow this directory structure:
```
/public/images/
├── hero/
│   └── arash-nejad-portrait.jpg
├── about/
│   ├── education/
│   │   ├── harvard-business-school.png
│   │   ├── wharton-school.svg
│   │   ├── general-electric.svg
│   │   └── university-of-calgary.png
│   └── hobbies/
│       ├── skiing-mountain.jpg
│       ├── marathon-running.jpg
│       ├── rock-climbing.jpg
│       └── family-time.jpg
├── books/
│   ├── book-cover-01-business.jpg
│   ├── ... (02-11)
│   └── book-cover-12-black.jpg
├── quotes/
│   ├── quote-author-01-truman.jpg
│   ├── ... (02-05)
│   └── quote-author-06-conant.jpg
└── seo/
    ├── og-image.jpg
    └── video-thumbnail.jpg
```

### Step 4: Optimize Images
Before deployment, optimize all images:
- Use tools like ImageOptim, TinyPNG, or Squoosh
- Consider creating WebP versions for better performance
- Ensure appropriate file sizes (hero images < 500KB, logos < 100KB, etc.)

### Step 5: Deploy to GitHub Pages
Standard deployment process will now work with local images.

---

## Quick Image Specifications

See `/IMAGE-MANIFEST.md` for complete details. Quick reference:

- **Main Portrait**: 1080x1440px (3:4 ratio)
- **Hobby Photos**: 1080x810px (4:3 ratio)  
- **Education Logos**: 256x256px+ (PNG/SVG)
- **Book Covers**: 600x900px (2:3 ratio)
- **Quote Headshots**: 200x200px (square)
- **OG Image**: 1200x630px (for social sharing)
- **Video Thumbnail**: 1280x720px (16:9 ratio)

---

## Notes

- All external URLs to actual content (LinkedIn, Amazon, etc.) remain unchanged
- Only image assets have been converted to local paths
- Wikipedia logo links are preserved as-is for education logos (you can download them)
- The code is now GitHub Pages ready once images are in place

