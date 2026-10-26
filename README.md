# Martin Dula - Portfolio

Personal portfolio of Martin Lorenz O. Dula, a fourth-year BS IT student at National University - MOA, open to internship, junior developer and IT roles.

Built on [brewed-ops/portfolio-template](https://github.com/brewed-ops/portfolio-template): Vite 6, React 19, TypeScript, Three.js, GSAP, React Router 7, Phosphor icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
```

## Where things live

| What | Where |
|---|---|
| Name, handle, email, socials, headline, phone stats | `src/data/profile.ts` |
| Projects (text, links, screenshots) | `src/data/projects.ts`, images in `public/projects/` |
| Skills page | `src/components/SkillsGrid.tsx` |
| About page (education, experience, orgs, certs) | `src/components/AboutGrid.tsx` |
| FAQs on the Contact page | `src/data/faqs.ts` |
| Home cards | `src/components/HomeBento.tsx` (desktop), `src/components/HomeMobile.tsx` (phone) |
| Tools marquee | `src/components/ToolsMarquee.tsx` (logos in `public/icons/`) |
| Photo | `public/avatar.svg` (initials for now - replace with a square photo and update `avatarSrc`) |
| SEO | `index.html` |
| Colors | `src/styles/tokens.css` |

The contact form opens the visitor's email app addressed to `martinlorenzdula@gmail.com`. To post to a backend instead, set `VITE_CONTACT_ENDPOINT` (see `src/lib/contact.ts`).

## Deploy

It is a static site: `npm run build`, then deploy `dist/` to Vercel, Netlify or Cloudflare Pages. Set the SPA fallback so routes like `/projects` serve `index.html` (Vercel does this for Vite projects automatically).

## Credits

- Template: brewed-ops/portfolio-template, used under its license's personal-portfolio permission (see [LICENSE](LICENSE)).
- Contour background technique inspired by landonorris.com by OFF+BRAND. Simplex noise by Ashima Arts / Ian McEwan (MIT).
- Icons: [Phosphor](https://phosphoricons.com) (MIT) and [Simple Icons](https://simpleicons.org) (CC0). Logos are trademarks of their owners.
- Font: Poppins (SIL Open Font License).
