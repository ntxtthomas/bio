# Architecture Overview

Reference architecture for both hosting targets. This document doubles as a study reference for the GitHub Foundations (GH-200) and AWS SAA-C03 certifications.

---

## GitHub Pages (GH-200 Reference)

### Architecture diagram

```
Developer pushes to main
        │
        ▼
┌─────────────────────────┐
│   GitHub Actions        │  (.github/workflows/deploy.yml)
│   ubuntu-latest runner  │
│                         │
│   npm ci                │
│   vite build --base /bio│
│   → dist/               │
└────────────┬────────────┘
             │  peaceiris/actions-gh-pages
             ▼
     gh-pages branch (dist/ contents)
             │
             ▼
  GitHub Pages CDN (global edge)
             │
             ▼
  https://ntxtthomas.github.io/bio/
```

### Key concepts (GH-200 aligned)

| Concept | Detail |
|---|---|
| **Pages branch model** | `main` = source code. `gh-pages` = built output only. Never manually edit `gh-pages`. |
| **Actions CI/CD** | Workflow triggers on push to `main`. Uses `actions/checkout`, `actions/setup-node`, and `peaceiris/actions-gh-pages`. |
| **`GITHUB_TOKEN`** | Auto-injected secret. Granted `contents: write` permission to push to `gh-pages`. No manual secret setup required. |
| **Concurrency** | `cancel-in-progress: true` ensures only one deploy runs at a time — prevents race conditions on rapid pushes. |
| **Project site vs user site** | User site: `<user>.github.io` — served from root `/`. Project site: `<user>.github.io/<repo>` — must set `--base /<repo>/` at build time. This project uses `/bio/`. |
| **HTTPS** | Automatically provisioned by GitHub via Let's Encrypt for `*.github.io` domains. No configuration needed. |
| **Custom domain (optional)** | Add a `CNAME` file to `public/` containing `terrythomas.com`. Add A records in Route 53 pointing to GitHub Pages IPs (`185.199.108-111.153`). GitHub auto-provisions HTTPS via ACM once DNS propagates. **Note:** This project reserves `terrythomas.com` for AWS — this is informational only. |
| **Base path behavior** | `vite build --base /bio/` rewrites all asset URLs in the HTML output. Without this, JS/CSS 404s on a project site. Production (AWS) uses base `/`. |

### Workflow file explained

```yaml
on:
  push:
    branches: [main]        # triggers only on main — not feature branches
concurrency:
  group: pages
  cancel-in-progress: true  # no parallel deploys
permissions:
  contents: write           # allows pushing to gh-pages branch
```

---

## AWS S3 + CloudFront (SAA-C03 Reference)

*This section will be completed during Phase 3.*
