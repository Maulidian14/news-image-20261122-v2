// Renders index.html to entry.png (1024x1024) with the local Chromium
// through Playwright. Run with NODE_PATH pointing at a playwright-core
// install, e.g.:
//   NODE_PATH=<playwright-core node_modules> node generate.cjs
// Exits non-zero if the page reports any console error or page error.
const { chromium } = require('playwright-core');
const path = require('path');

(async () => {
  const dir = __dirname;
  const errors = [];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push('console: ' + msg.text()); });
  page.on('pageerror', (err) => errors.push('pageerror: ' + String(err)));
  await page.goto('file://' + path.join(dir, 'index.html'), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(dir, 'entry.png') });
  await browser.close();
  if (errors.length) {
    for (const e of errors) console.error(e);
    process.exit(1);
  }
  console.log('entry.png rendered, 0 console errors');
})().catch((err) => { console.error(err); process.exit(1); });
