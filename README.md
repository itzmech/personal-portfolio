# Personal Portfolio — Ansh

Dark terminal-themed portfolio for **Ansh** — B.Tech CSE student at VIT-AP University (Class of 2029), building web apps with React/Next.js while learning cybersecurity hands-on (TryHackMe, Hack The Box, CTFs).

Built with **Next.js 14**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All content lives in `data/` — no component edits needed:

| File | What it holds |
|------|----------------|
| `data/site.ts` | Name, bio, education, socials, email, nav, resume flag |
| `data/skills.ts` | Skills split into "used" vs "learning" |
| `data/projects.ts` | Real projects (The Atlas, HireHub) |
| `data/socials.ts` | Social links (GitHub, LinkedIn, TryHackMe) |
| `data/certifications.ts` | Empty by design — add entries only when a credential is earned |

### Adding a resume

1. Drop the PDF at `public/resume.pdf`
2. In `data/site.ts`, set `resume.available` to `true`

The hero button stays a disabled "Resume coming soon" placeholder until then.

### Adding certifications

Add entries to `data/certifications.ts`. The section renders an honest empty state while the array is empty — do not pre-fill with planned certs.

## Contact Form

The form posts to `POST /api/contact` with client + server validation, loading/success/error states, and accessible error messages.

Email delivery uses **Resend** (not yet connected):

```bash
npm install resend
cp .env.example .env.local   # fill in RESEND_API_KEY + CONTACT_TO_EMAIL
```

Then uncomment the marked block in `app/api/contact/route.ts`. Until configured, the API honestly returns "not connected" — nothing is faked.

## Accessibility & Motion

- Semantic landmarks, skip link, single `h1`, labeled forms with `aria-invalid`/`aria-describedby`
- Visible focus states; Escape closes the mobile menu
- `prefers-reduced-motion` fully respected (Framer `MotionConfig` + CSS kill-switch); the terminal types once on view and static content is server-rendered

## Project Structure

```
app/              → Layout, page, api/contact
components/
  layout/         → Navbar, Footer
  sections/       → Hero, About, Skills, Projects, Certifications, Contact
  ui/             → Reveal, GlowCard, Badge, SectionWrapper, SocialLinks, MotionProvider
data/             → Editable content (see table above)
lib/              → utils, hooks (useReducedMotion), contact validation
```

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com). When the production URL is known, add it as `metadataBase` in `app/layout.tsx` (intentionally not set today).
