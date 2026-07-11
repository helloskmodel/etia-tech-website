const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.etia-tech.com';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// 静态页面
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about/', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact/', changefreq: 'monthly', priority: 0.7 },
  { url: '/service/', changefreq: 'monthly', priority: 0.6 },
  { url: '/labels/', changefreq: 'weekly', priority: 0.9 },
  { url: '/labels/applications/', changefreq: 'daily', priority: 0.8 },
  { url: '/labels/sample-request/', changefreq: 'monthly', priority: 0.5 },
  { url: '/uv-curing/', changefreq: 'weekly', priority: 0.9 },
  { url: '/uv-curing/applications/', changefreq: 'daily', priority: 0.8 },
  { url: '/uv-curing/test-request/', changefreq: 'monthly', priority: 0.5 },
];

// 读取标签应用
function getLabelPages() {
  const dir = path.join(__dirname, '../content/labels');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''))
    .map(slug => ({
      url: `/labels/applications/${slug}/`,
      changefreq: 'monthly',
      priority: 0.7,
    }));
}

// 读取UV应用
function getUVPages() {
  const dir = path.join(__dirname, '../content/uv-curing');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''))
    .map(slug => ({
      url: `/uv-curing/applications/${slug}/`,
      changefreq: 'monthly',
      priority: 0.7,
    }));
}

function generateSitemap() {
  const allPages = [
    ...staticPages,
    ...getLabelPages(),
    ...getUVPages(),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
  console.log(`✅ Sitemap生成成功，共${allPages.length}个URL，保存至 public/sitemap.xml`);
}

generateSitemap();
