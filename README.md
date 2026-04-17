# terrythomas.com

Personal landing page for Terry Thomas — links, resume download, and certifications.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Building

```bash
# Production build (AWS / default)
npm run build

# GitHub Pages build (sets correct base path)
npx vite build --base /bio/
```

Output goes to `dist/`.

## Project Structure

```
public/
  resume.pdf        <- Drop your resume PDF here
src/
  assets/           <- Headshot and other static images
  components/       <- Hero, Links, ResumeDownload, Certifications
  App.tsx
  main.tsx
  index.css
```

## Deployment

Two deployment targets — see the GitHub Wiki for step-by-step guides.

| Target | URL | Guide |
|---|---|---|
| GitHub Pages | ntxtthomas.github.io/bio/ | Deployment Guide (wiki) |
| AWS S3 + CloudFront | https://terrythomas.com | Architecture Overview (wiki) |

## Adding Assets

- **Resume**: Replace `public/resume.pdf` with your actual PDF. It will be served at `/resume.pdf`.
- **Headshot**: Add your photo to `src/assets/` (jpg, png, or webp). The `Hero` component imports it directly.
