// Post-build prerender: generates a static index.html per route with
// route-specific <title>, meta description, canonical, Open Graph tags,
// and JSON-LD. Scrapers (LinkedIn, Google, AI engines) see correct
// per-page metadata without executing JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.arashnejad.com';
const DIST = path.resolve('dist');
const template = readFileSync(path.join(DIST, 'index.html'), 'utf8');

// --- Static routes (titles/descriptions mirror each page's SEOHead) ---
const staticRoutes = [
  {
    route: '/about',
    title: 'About Arash Nejad | Growth & Leadership Executive',
    description: 'Learn about Arash Nejad, an executive focused on scaling organizations through aligned strategy, disciplined execution, and human-centric leadership.',
  },
  {
    route: '/insights',
    title: 'Leadership and Growth Insights by Arash Nejad',
    description: 'Practical insights on leadership, culture, execution, and human-centric growth strategies from Arash Nejad. Learn how to build high-performing teams and scale organizations.',
  },
  {
    route: '/speaking-coaching',
    title: 'Executive Dialogue & Speaking | Arash Nejad',
    description: 'Talks, panels, and peer dialogue with executives and operators on growth, culture, and human-centric leadership.',
  },
  {
    route: '/books',
    title: 'Recommended Books by Arash Nejad | Leadership & Growth',
    description: "Explore Arash Nejad's curated list of essential books on leadership, organizational culture, growth strategies, and human-centric management.",
  },
  {
    route: '/quotes',
    title: 'Quotes I Love | Arash Nejad',
    description: 'The ideas and words that guide Arash Nejad\'s approach to growth, culture, and happiness.',
  },
  {
    route: '/contact',
    title: 'Contact Arash Nejad',
    description: 'Get in touch with Arash Nejad for executive dialogue, speaking, or thoughtful exchange on leadership and growth.',
  },
  {
    route: '/privacy-policy',
    title: 'Privacy Policy - Arash Nejad',
    description: 'Privacy Policy for arashnejad.com. Learn how Arash Shoari Nejad collects, uses, and protects your personal information.',
  },
];

// --- Articles: parsed from src/data/articles.tsx ---
const articlesSrc = readFileSync(path.resolve('src/data/articles.tsx'), 'utf8');
const articleRegex = /slug:\s*'((?:[^'\\]|\\.)*)',\s*title:\s*'((?:[^'\\]|\\.)*)',\s*description:\s*'((?:[^'\\]|\\.)*)',\s*date:\s*'((?:[^'\\]|\\.)*)'/g;
const articles = [];
let m;
while ((m = articleRegex.exec(articlesSrc)) !== null) {
  const unesc = (s) => s.replace(/\\'/g, "'");
  articles.push({ slug: unesc(m[1]), title: unesc(m[2]), description: unesc(m[3]), date: unesc(m[4]) });
}
if (articles.length === 0) {
  console.warn('prerender: WARNING - no articles parsed from articles.tsx');
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderPage({ url, title, description, ogType = 'website', extraJsonLd = null }) {
  let html = template;
  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  // meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${esc(description)}" />`
  );
  // canonical
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${url}" />`
  );
  // OG tags
  html = html.replace(
    /<meta property="og:type" content="[\s\S]*?" \/>/,
    `<meta property="og:type" content="${ogType}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${esc(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${esc(description)}" />`
  );
  // Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[\s\S]*?" \/>/,
    `<meta name="twitter:title" content="${esc(title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${esc(description)}" />`
  );
  if (extraJsonLd) {
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">\n${JSON.stringify(extraJsonLd, null, 2)}\n  </script>\n</head>`
    );
  }
  return html;
}

function writeRoute(route, html) {
  const dir = path.join(DIST, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), html);
}

let count = 0;
for (const r of staticRoutes) {
  writeRoute(r.route, renderPage({ url: `${SITE}${r.route}`, title: r.title, description: r.description }));
  count++;
}

for (const a of articles) {
  const url = `${SITE}/insights/${a.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url,
    image: `${SITE}/images/seo/og-image.jpg`,
    author: {
      '@type': 'Person',
      name: 'Arash Shoari Nejad',
      alternateName: 'Arash Nejad',
      url: SITE,
    },
    publisher: { '@type': 'Person', name: 'Arash Shoari Nejad', url: SITE },
  };
  writeRoute(`/insights/${a.slug}`, renderPage({
    url,
    title: `${a.title} | Arash Nejad`,
    description: a.description,
    ogType: 'article',
    extraJsonLd: jsonLd,
  }));
  count++;
}

console.log(`prerender: wrote ${count} routes (${articles.length} articles)`);
