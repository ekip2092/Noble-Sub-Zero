// Link/consistency check for the generated site.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const files = readdirSync(SITE).filter(f => f.endsWith('.html'));
let bad = 0;

for (const f of files) {
  const html = readFileSync(join(SITE, f), 'utf8');
  for (const m of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|tel:|mailto:|#)/.test(u)) continue;
    const target = u.split('#')[0];
    if (target && !existsSync(join(SITE, target))) { console.log(`${f}: broken -> ${u}`); bad++; }
  }
  if (/\(800\) 555-0199|8005550199/.test(html)) { console.log(`${f}: stale placeholder phone`); bad++; }
  if (!html.includes('(747) 444-4849') && f !== 'cities-we-serve.html') { console.log(`${f}: missing brand phone`); bad++; }
  // Copy rule: no dashes/hyphens in visible text except brand names (Sub-Zero).
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/Sub-Zero/g, 'SubZero');
  if (/[—–]/.test(text)) { console.log(`${f}: em/en dash in copy`); bad++; }
  for (const m of text.matchAll(/[A-Za-z]+-[A-Za-z]+/g)) { console.log(`${f}: hyphenated word "${m[0]}"`); bad++; }
  for (const anchor of html.matchAll(/href="[^"#]*#([\w-]+)"/g)) {
    const [full, id] = anchor;
    const targetFile = full.match(/href="([^"#]*)#/)[1] || f;
    const tHtml = targetFile === f ? html : readFileSync(join(SITE, targetFile), 'utf8');
    if (!tHtml.includes(`id="${id}"`)) { console.log(`${f}: missing anchor -> ${full}`); bad++; }
  }
}
console.log(bad === 0 ? `OK: ${files.length} pages, all internal links + anchors resolve, phone present.` : `${bad} problems.`);
