// scripts/generate_assets.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1. Criar favicon.svg para Cine 4K
const faviconSvg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="cineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <filter id="neonGlow">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#06b6d4" flood-opacity="0.6"/>
    </filter>
  </defs>
  <!-- Fundo Dark Obsidian -->
  <rect width="512" height="512" rx="128" fill="#040711" stroke="url(#cineGlow)" stroke-width="16"/>
  
  <g filter="url(#neonGlow)">
    <!-- Claquete de Cinema / Moldura 4K -->
    <rect x="76" y="90" width="360" height="250" rx="32" fill="#0a1226" stroke="url(#cineGlow)" stroke-width="16"/>
    
    <!-- Topo da Claquete com Listras Cinemáticas -->
    <path d="M 76 150 L 436 150" stroke="url(#cineGlow)" stroke-width="12" stroke-linecap="round"/>
    <line x1="130" y1="90" x2="170" y2="150" stroke="#06b6d4" stroke-width="10"/>
    <line x1="220" y1="90" x2="260" y2="150" stroke="#3b82f6" stroke-width="10"/>
    <line x1="310" y1="90" x2="350" y2="150" stroke="#f59e0b" stroke-width="10"/>

    <!-- Play Arrow Central Neon -->
    <polygon points="225,200 315,245 225,290" fill="url(#goldAcc)"/>

    <!-- Badge 4K Ultra HD -->
    <rect x="156" y="375" width="200" height="65" rx="20" fill="#06b6d4" />
    <text x="256" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="900" fill="#040711" text-anchor="middle" letter-spacing="4">4K CINE</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf-8');
console.log('✅ favicon.svg gerado');

// 2. Gerar suíte completa de Favicons ICO e PNG
async function createIcoFile(svgBuffer, sizes = [16, 32, 48]) {
  const pngBuffers = await Promise.all(
    sizes.map(s => sharp(svgBuffer).resize(s, s).png().toBuffer())
  );

  const count = sizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];

  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const data = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function buildAssets() {
  const svgBuf = Buffer.from(faviconSvg);

  // Favicon.ico multi-resolution
  const icoBuf = await createIcoFile(svgBuf, [16, 32, 48]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  console.log('✅ favicon.ico gerado (16, 32, 48px)');

  // PNG favicons
  const pngFavicons = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 }, // Google Search mandatory
    { name: 'apple-touch-icon.png', size: 180 }, // iOS Safari
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 }
  ];

  for (const item of pngFavicons) {
    const buf = await sharp(svgBuf).resize(item.size, item.size).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, item.name), buf);
  }
  console.log('✅ Favicon PNGs gerados (16, 32, 48, 180, 192, 512px)');

  // Logo 512x512
  await sharp(svgBuf).resize(512, 512).png().toFile(path.join(imagesDir, 'logo-512.png'));
  console.log('✅ logo-512.png gerado');

  // OG Image (1200x630)
  const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#040711"/>
        <stop offset="50%" stop-color="#08142c"/>
        <stop offset="100%" stop-color="#050914"/>
      </linearGradient>
      <linearGradient id="title" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#22d3ee"/>
        <stop offset="50%" stop-color="#38bdf8"/>
        <stop offset="100%" stop-color="#facc15"/>
      </linearGradient>
      <linearGradient id="cyanPill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="40" y="40" width="1120" height="550" rx="40" fill="none" stroke="#06b6d4" stroke-width="4" stroke-opacity="0.4"/>
    
    <!-- Badge CINE 4K -->
    <rect x="500" y="100" width="200" height="50" rx="25" fill="url(#cyanPill)"/>
    <text x="600" y="134" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#040711" text-anchor="middle" letter-spacing="3">CATÁLOGO OFICIAL</text>
    
    <!-- Título Principal -->
    <text x="600" y="250" font-family="system-ui, sans-serif" font-weight="900" font-size="92" fill="url(#title)" text-anchor="middle" letter-spacing="4">CINE 4K</text>
    <text x="600" y="340" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#ffffff" text-anchor="middle" letter-spacing="1">FILMES, SÉRIES E CANAIS AO VIVO EM ULTRA HD</text>
    
    <text x="600" y="420" font-family="system-ui, sans-serif" font-weight="600" font-size="26" fill="#94a3b8" text-anchor="middle">Mais de 100 mil conteúdos atualizados diariamente • Smart TV, TV Box e Celular</text>
    
    <rect x="360" y="475" width="480" height="60" rx="30" fill="#06b6d4"/>
    <text x="600" y="514" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#040711" text-anchor="middle" letter-spacing="1">SOLICITE SEU TESTE GRÁTIS VIA WHATSAPP</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('✅ og-image.jpg (1200x630) gerado');
}

buildAssets().catch(console.error);

