# Code Updates for Local Images - Quick Reference

This document shows all the image URL replacements needed throughout the codebase.

---

## Files Already Updated
- ✅ `/pages/Home.tsx` - Main portrait updated to `/images/hero/arash-nejad-portrait.jpg`
- ✅ `/components/SEOHead.tsx` - OG image default updated to `/images/seo/og-image.jpg`  
- ✅ `/pages/About.tsx` - Main portrait updated (1 instance)

---

## Files Needing Updates

### `/pages/About.tsx` - Remaining Changes

#### Education Logos (3 remaining):
```tsx
// Line ~197 - Wharton Logo
src="/images/about/education/wharton-school.svg"

// Line ~218 - GE Logo  
src="/images/about/education/general-electric.svg"

// Line ~239 - University of Calgary Logo
src="/images/about/education/university-of-calgary.png"
```

#### Hobby Photos (4 photos):
```tsx
// Line ~529 - Skiing
src="/images/about/hobbies/skiing-mountain.jpg"

// Line ~551 - Marathon
src="/images/about/hobbies/marathon-running.jpg"

// Line ~573 - Rock Climbing
src="/images/about/hobbies/rock-climbing.jpg"

// Line ~595 - Family Time
src="/images/about/hobbies/family-time.jpg"
```

---

### `/pages/Books.tsx` - Book Covers

Replace the bookCovers array (lines ~152-163) with:
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

---

### `/pages/Quotes.tsx` - Quote Author Headshots

Replace 6 headshot URLs with local paths:

```tsx
// Line ~39 - Harry Truman
headshot: '/images/quotes/quote-author-01-truman.jpg',

// Line ~55 - Simon Sinek  
headshot: '/images/quotes/quote-author-02-sinek.jpg',

// Line ~63 - Albert Einstein
headshot: '/images/quotes/quote-author-03-einstein.jpg',

// Line ~79 - Jim Collins
headshot: '/images/quotes/quote-author-04-collins.jpg',

// Line ~95 - Martin Seligman
headshot: '/images/quotes/quote-author-05-seligman.jpg',

// Line ~119 - Doug Conant
headshot: '/images/quotes/quote-author-06-conant.jpg',
```

---

## Summary of All Local Image Paths

### Hero/Portrait (1):
- `/images/hero/arash-nejad-portrait.jpg`

### Education Logos (4):
- `/images/about/education/harvard-business-school.png`
- `/images/about/education/wharton-school.svg`
- `/images/about/education/general-electric.svg`
- `/images/about/education/university-of-calgary.png`

### Hobbies (4):
- `/images/about/hobbies/skiing-mountain.jpg`
- `/images/about/hobbies/marathon-running.jpg`
- `/images/about/hobbies/rock-climbing.jpg`
- `/images/about/hobbies/family-time.jpg`

### Books (12):
- `/images/books/book-cover-01-business.jpg`
- `/images/books/book-cover-02-leadership.jpg`
- `/images/books/book-cover-03-hardcover.jpg`
- `/images/books/book-cover-04-corporate.jpg`
- `/images/books/book-cover-05-strategy.jpg`
- `/images/books/book-cover-06-professional.jpg`
- `/images/books/book-cover-07-textbook.jpg`
- `/images/books/book-cover-08-blue.jpg`
- `/images/books/book-cover-09-red.jpg`
- `/images/books/book-cover-10-green.jpg`
- `/images/books/book-cover-11-yellow.jpg`
- `/images/books/book-cover-12-black.jpg`

### Quotes (6):
- `/images/quotes/quote-author-01-truman.jpg`
- `/images/quotes/quote-author-02-sinek.jpg`
- `/images/quotes/quote-author-03-einstein.jpg`
- `/images/quotes/quote-author-04-collins.jpg`
- `/images/quotes/quote-author-05-seligman.jpg`
- `/images/quotes/quote-author-06-conant.jpg`

### SEO (2):
- `/images/seo/og-image.jpg`
- `/images/seo/video-thumbnail.jpg`

---

## Total: 29 images needed for GitHub Pages deployment
