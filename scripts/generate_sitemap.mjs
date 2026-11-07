// scripts/generate_sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const baseUrl = 'https://cine4k.com.br';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/politica-privacidade/', priority: '0.3', changefreq: 'monthly' },
  { url: '/termos-uso/', priority: '0.3', changefreq: 'monthly' }
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${baseUrl}${r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('✅ sitemap.xml gerado com sucesso');
