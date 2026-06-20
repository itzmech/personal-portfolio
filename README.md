# Personal Portfolio — Dark Terminal Theme

A cybersecurity-flavored developer portfolio built with **Next.js 14**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Your Content

All placeholder content lives in the `data/` folder:

| File | What to edit |
|------|----------------|
| `data/site.ts` | Name, bio, social links, email, resume URL, nav |
| `data/skills.ts` | Skill categories and items |
| `data/projects.ts` | Project cards (remove `placeholder: true` when real) |
| `data/certifications.ts` | Certs timeline (or delete section from `app/page.tsx`) |

Also update `metadataBase` in `app/layout.tsx` with your production URL.

## Contact Form

The form uses a **mailto:** fallback. To use [Formspree](https://formspree.io) or [Resend](https://resend.com), see comments in `components/sections/Contact.tsx`.

## Deploy to Vercel

```bash
npm run build
```

Push to GitHub and import the repo in [Vercel](https://vercel.com). No extra config required.

## Project Structure

```
app/              → Layout, page, global styles
components/
  layout/         → Navbar, Footer
  sections/       → Hero, About, Skills, Projects, etc.
  ui/             → Reusable UI primitives
data/             → Editable content (no code changes needed)
lib/              → Utilities
```

## Optional: Remove Certifications

Delete the `<Certifications />` line and its import in `app/page.tsx`, and remove the Certs nav item from `data/site.ts`.
