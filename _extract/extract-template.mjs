import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { resolve, dirname } from 'node:path';

const SRC = resolve(process.argv[2] || '../Mongma Studio.html');
const OUT_DIR = resolve('out');
mkdirSync(OUT_DIR, { recursive: true });

const html = readFileSync(SRC, 'utf8');

function extractScriptContent(type) {
  const re = new RegExp(`<script type="${type}">([\\s\\S]*?)</script>`);
  const m = html.match(re);
  if (!m) throw new Error(`script type="${type}" not found`);
  return m[1].trim();
}

console.log('Extracting template...');
const templateJson = extractScriptContent('__bundler/template');
const template = JSON.parse(templateJson);
writeFileSync(resolve(OUT_DIR, 'template.html'), template, 'utf8');
console.log(`  template.html written (${template.length} chars)`);

console.log('Extracting manifest...');
const manifestJson = extractScriptContent('__bundler/manifest');
const manifest = JSON.parse(manifestJson);
const uuids = Object.keys(manifest);
console.log(`  manifest has ${uuids.length} assets`);

const summary = [];
for (const uuid of uuids) {
  const entry = manifest[uuid];
  const bin = Buffer.from(entry.data, 'base64');
  const finalBytes = entry.compressed ? gunzipSync(bin) : bin;
  summary.push({
    uuid,
    mime: entry.mime,
    compressed: !!entry.compressed,
    bytesBase64: bin.length,
    bytesFinal: finalBytes.length,
  });
  const safe = uuid.replace(/[^a-zA-Z0-9._-]/g, '_');
  const extGuess = (entry.mime || '').split('/')[1] || 'bin';
  writeFileSync(resolve(OUT_DIR, `asset_${safe}.${extGuess}`), finalBytes);
}
writeFileSync(resolve(OUT_DIR, 'manifest-summary.json'), JSON.stringify(summary, null, 2), 'utf8');
console.log(`  ${summary.length} assets written to out/`);

console.log('Done.');
