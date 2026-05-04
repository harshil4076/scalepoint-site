# Scalepoint

Minimal landing page for Scalepoint — Data & AI Consulting.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages (free)

1. Create a repo called `scalepoint` (or any name) on GitHub
2. Push this code to the `main` branch
3. Go to repo Settings → Pages → Source → select "GitHub Actions"
4. The included `.github/workflows/deploy.yml` handles the rest
5. Your site will be live at `https://harshil4076.github.io/scalepoint`

## Before you deploy

Update these placeholders in `app/page.tsx`:

- `your-email@scalepoint.com` → your actual email
- `YOUR-LINKEDIN` → your LinkedIn profile slug

## Tech

Next.js 14, static export, no dependencies beyond React.
