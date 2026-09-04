#!/usr/bin/env node
// -----------------------------------------------------------------------------
// prerender-articles.mjs — Node-only, build-time step. Runs AFTER `vite build`.
//
// The site is a client-rendered SPA, so dist/index.html has no per-article
// <head> content — link unfurlers (LinkedIn, Reddit, etc.) don't execute JS,
// so they'd only ever see the generic site title/description.
//
// This script writes a static dist/articles/<slug>/index.html per article —
// a copy of the built index.html with per-article <title>/meta tags injected
// into the <head> — while leaving the root dist/index.html untouched as the
// generic fallback for every other route.
// -----------------------------------------------------------------------------

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const SITE_URL = 'https://terrythomas.com';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// src/content/articles.ts is the single source of truth for which articles
// exist. It's plain TS, not something this Node script can import directly,
// so pull the slug list out of the array literal with a small regex instead
// of duplicating it here.
async function getArticleSlugs() {
  const manifestPath = path.join(rootDir, 'src/content/articles.ts');
  const source = await readFile(manifestPath, 'utf8');
  const arrayMatch = source.match(/articleSlugs[^=]*=\s*\[([\s\S]*?)\]/);
  if (!arrayMatch) {
    throw new Error(`Could not find articleSlugs array in ${manifestPath}`);
  }
  return [...arrayMatch[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
}

function buildHead(frontmatter, slug) {
  const title = escapeHtml(frontmatter.title);
  const dek = escapeHtml(frontmatter.dek);
  const heroUrl = new URL(frontmatter.hero, SITE_URL).toString();
  const pageUrl = `${SITE_URL}/articles/${slug}`;

  return `<title>${title} — Terry Thomas</title>
    <meta name="description" content="${dek}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${dek}" />
    <meta property="og:image" content="${heroUrl}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />`;
}

async function main() {
  const slugs = await getArticleSlugs();
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

  for (const slug of slugs) {
    const mdPath = path.join(rootDir, 'public/articles', slug, `${slug}.md`);
    const raw = await readFile(mdPath, 'utf8');
    const { data: frontmatter } = matter(raw);

    const head = buildHead(frontmatter, slug);
    const html = template.replace(/<title>.*<\/title>/, () => head);

    const outDir = path.join(distDir, 'articles', slug);
    await mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, 'index.html');
    await writeFile(outPath, html, 'utf8');

    console.log(`✓ prerendered /articles/${slug} → ${path.relative(rootDir, outPath)}`);
  }

  console.log(`\nPrerendered ${slugs.length} article page${slugs.length === 1 ? '' : 's'}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
