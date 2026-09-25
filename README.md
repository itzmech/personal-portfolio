# Ansh's Portfolio

Personal portfolio for **Ansh** — B.Tech CS student at VIT-AP University building web applications and learning cybersecurity.

**Live:** https://personal-portfolio-kappa-five-50.vercel.app

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project Structure

```
app/                  Layout, page, sitemap, robots
components/
  layout/             Navbar, Footer
  sections/           Hero, About, Skills, Projects, Learning, Interests, Contact
  ui/                 Reveal, StarField, SectionHeader, Badge, MotionProvider
data/                 All editable content (site, skills, projects, socials, interests)
lib/                  utils, hooks, site URL
public/images/        Night-city skyline + OG image
```

Content lives in `data/` — edit there without touching components.

## Notes

- Dark-only theme, night-city visual identity (see `public/images/night-city.png`)
- Contact section links email and socials directly; no form backend
- SEO: canonical URL, Open Graph, sitemap, and robots are wired in `app/` (`SITE_URL` in `lib/site.ts` — update for a custom domain)
