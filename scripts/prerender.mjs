/**
 * Build-time prerendering script for strali.solutions
 *
 * Renders each route to static HTML using Puppeteer so that bots, LLMs,
 * and curl get real content instead of an empty <div id="root"></div>.
 *
 * German-only: the primary audience is Austrian businesses. English loads
 * via client-side JS hydration.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');

// Routes to prerender  →  output file (relative to dist/)
const ROUTES = [
  { path: '/',            output: 'index.html' },
  { path: '/impressum',   output: 'impressum/index.html' },
  { path: '/datenschutz', output: 'datenschutz/index.html' },
  { path: '/assessment',  output: 'assessment/index.html' },
];

// Also generate a 404 page from a non-existent route
const NOT_FOUND_ROUTE = { path: '/this-page-does-not-exist-404', output: '404.html' };

/**
 * Start a minimal static file server for the dist/ folder.
 */
function startServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      // Resolve file path – try exact file first, then directory index.html, then fallback to root index.html
      let filePath = path.join(DIST, req.url === '/' ? 'index.html' : req.url);

      // If path has no extension, try as directory with index.html
      if (!path.extname(filePath)) {
        const dirIndex = path.join(filePath, 'index.html');
        if (fs.existsSync(dirIndex)) {
          filePath = dirIndex;
        } else {
          // SPA fallback: serve root index.html
          filePath = path.join(DIST, 'index.html');
        }
      }

      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST, 'index.html');
      }

      const ext = path.extname(filePath);
      const contentTypes = {
        '.html': 'text/html',
        '.js':   'application/javascript',
        '.css':  'text/css',
        '.json': 'application/json',
        '.png':  'image/png',
        '.svg':  'image/svg+xml',
        '.ico':  'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
      };

      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const PORT = 45678;

  // 1. Copy dist/index.html → dist/200.html (SPA shell backup)
  const shellSrc = path.join(DIST, 'index.html');
  const shellDst = path.join(DIST, '200.html');
  fs.copyFileSync(shellSrc, shellDst);
  console.log('✓ Copied index.html → 200.html (SPA shell)');

  // 2. Start local static server
  const server = await startServer(PORT);
  console.log(`✓ Static server listening on port ${PORT}`);

  // 3. Launch Puppeteer
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium-browser';
  console.log(`  Using browser: ${executablePath}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  const allRoutes = [...ROUTES, NOT_FOUND_ROUTE];

  for (const route of allRoutes) {
    const page = await browser.newPage();

    // Set German locale so LanguageContext picks German
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', { get: () => 'de' });
      Object.defineProperty(navigator, 'languages', { get: () => ['de', 'de-AT'] });
      // Suppress cookie consent banner
      localStorage.setItem('cookie-consent', JSON.stringify({
        essential: true,
        analytics: false,
        timestamp: new Date().toISOString(),
      }));
    });

    await page.setViewport({ width: 1280, height: 800 });

    const url = `http://localhost:${PORT}${route.path}`;
    console.log(`  Rendering ${route.path} ...`);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to render content into #root
    await page.waitForFunction(
      () => document.querySelector('#root')?.children.length > 0,
      { timeout: 15000 }
    );

    // Small extra wait for animations/lazy content to settle
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();
    await page.close();

    // Write output file
    const outPath = path.join(DIST, route.output);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(outPath, html);
    console.log(`  ✓ ${route.path} → dist/${route.output} (${(html.length / 1024).toFixed(1)} KB)`);
  }

  await browser.close();
  server.close();
  console.log(`\n✓ Prerendered ${allRoutes.length} pages successfully`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
