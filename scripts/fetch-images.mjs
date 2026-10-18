// Copies the site's images from the old GoHighLevel CDN into this repo, once.
// Files that already exist are skipped, so it is safe to run again.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname } from 'node:path';

const manifest = JSON.parse(await readFile(new URL('./image-manifest.json', import.meta.url), 'utf8'));
let failed = 0;

for (const [path, url] of Object.entries(manifest)) {
  try {
    await access(path);
    console.log(`skip  ${path}`);
    continue;
  } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, buf);
    console.log(`saved ${path} (${Math.round(buf.length / 1024)} KB)`);
  } catch (err) {
    failed++;
    console.error(`FAIL  ${path}: ${err.message}`);
  }
}
if (failed) process.exitCode = 1;
