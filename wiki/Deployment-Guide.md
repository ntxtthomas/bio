# Deployment Guide

Step-by-step instructions for deploying the site to both targets.

---

## GitHub Pages (Phase 2)

**Live URL:** `https://ntxtthomas.github.io/bio/`

### Prerequisites

- The `ntxtthomas/bio` repo exists on GitHub
- GitHub Pages is enabled: **Settings → Pages → Source → Deploy from branch → `gh-pages`**
- The `GITHUB_TOKEN` secret is automatically available (no setup needed)

### How it works

Pushing to `main` triggers the **Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`), which:

1. Checks out the repo
2. Installs dependencies via `npm ci`
3. Runs `npx vite build --base /bio/` — sets the asset base path for a project site
4. Deploys the `dist/` output to the `gh-pages` branch via `peaceiris/actions-gh-pages`

GitHub Pages serves the `gh-pages` branch automatically.

### Manual trigger

You can re-run the workflow from **Actions → Deploy to GitHub Pages → Re-run jobs** without pushing new code.

### Base path gotcha

Because this is a **project site** (not a user/org site), assets must be requested relative to `/bio/`. The `--base /bio/` flag handles this at build time. The production AWS build uses the default base `/` — do not add `--base` there.

### Enabling Pages (first time only)

1. Go to **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Branch: `gh-pages` / folder: `/ (root)`
4. Save — GitHub will provision the site within ~1 minute

---

## AWS S3 + CloudFront (Phase 3)

*Steps will be added here during Phase 3.*
