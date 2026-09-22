# terrythomas.com

Personal landing page and blog for Terry Thomas — intro video/headshot, professional story, links, resume download, certifications, and a lightweight article system.

## Features

- **Hero** — intro video (or headshot poster fallback) driven by `VITE_MEET_TERRY_VIDEO_URL` / `VITE_MEET_TERRY_VIDEO_POSTER_URL` env vars
- **Professional Story / About** — career narrative and trait panels (see `src/types/career.ts`)
- **Links & Certifications** — quick links and credential badges
- **Resume** — inline viewer (`ResumeViewer`) and download button, served from `public/resume.pdf`
- **Articles** — Markdown-based blog (`react-markdown`) with a slug manifest in `src/content/articles.ts`; each article lives at `public/articles/<slug>/<slug>.md`
- **Build-time prerendering** — `scripts/prerender-articles.mjs` generates a static `dist/articles/<slug>/index.html` per article with per-article `<title>`/OpenGraph/Twitter meta tags, so link unfurlers see real content even though the site is a client-rendered SPA
- **Analytics** — PostHog event tracking (`src/utils/posthog.ts`)
- **Lenses project page** — standalone route at `/lenses` outside the main layout

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — routing
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [react-markdown](https://github.com/remarkjs/react-markdown) + [gray-matter](https://github.com/jonschlinkert/gray-matter) — article rendering and frontmatter parsing
- [PostHog](https://posthog.com/) — product analytics

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Building

```bash
# Production build (AWS / default) — runs tsc, vite build, then prerenders article meta tags
npm run build

# GitHub Pages build (sets correct base path)
npx vite build --base /bio/
```

Output goes to `dist/`.

## Linting

```bash
npm run lint
```

## Project Structure

```
public/
  resume.pdf              <- Resume PDF, served at /resume.pdf
  articles/<slug>/         <- Article markdown + hero images
src/
  assets/                  <- Headshot and other static images
  components/              <- Hero, About, Links, ResumeDownload, Certifications, etc.
  content/articles.ts      <- Source of truth for published article slugs
  pages/                   <- Articles index, Article detail, Lenses project page
  types/career.ts          <- Career/trait data types
  utils/                   <- Article loading, asset paths, PostHog, resume helpers
  App.tsx
  main.tsx
  index.css
scripts/
  prerender-articles.mjs  <- Post-build step that injects per-article meta tags
```

## Adding an Article

1. Add `public/articles/<slug>/<slug>.md` with frontmatter (`title`, `dek`, `hero`, etc.).
2. Append `<slug>` to `articleSlugs` in `src/content/articles.ts`.

Both the Articles index page and the build-time prerender step read from that slug list.

## Deployment

Two deployment targets — see the GitHub Wiki for step-by-step guides.

| Target              | URL                       | Guide                        |
| ------------------- | ------------------------- | ---------------------------- |
| GitHub Pages        | ntxtthomas.github.io/bio/ | Deployment Guide (wiki)      |
| AWS S3 + CloudFront | https://terrythomas.com   | Architecture Overview (wiki) |

## Adding Assets

- **Resume**: Replace `public/resume.pdf` with your actual PDF. It will be served at `/resume.pdf`.
- **Headshot**: Add your photo to `src/assets/` (webp preferred for size; jpg/png also work). The `Hero` component imports it directly.
