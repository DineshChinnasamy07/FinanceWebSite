const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const notFoundFile = path.join(distDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('copy-404: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);
console.log('copy-404: created dist/404.html for GitHub Pages deep links');
