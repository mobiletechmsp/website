# MobileTech MSP — mobiletechmsp.com

The website for **MobileTech MSP**, a managed IT service provider based in Daytona Beach, FL, serving businesses across Volusia County and beyond.

## What's on the site

- **Home (`/`)**: the hero section, quick actions (book an assessment, create a support ticket, pay an invoice, customer downloads), all 10 service lines, a structured-cabling feature, what sets MobileTech apart, a scrolling customer logo wall, a "how we work" section and a contact form.
- **Customer Downloads (`/downloads`)**: a searchable portal where customers download their Syncro RMM agent and the Action1 patch agent.
- **Contact (`/contact`)**: contact channels, service area, appointment-only hours and the contact form.

Contact form submissions go through **Netlify Forms** and appear in the Netlify dashboard under *Forms → contact*. You can set up email notifications there.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- Tailwind CSS 4, with theme tokens in `src/styles.css`
- Netlify Forms for the contact form
- Netlify Image CDN for responsive WebP images
- Fonts: Chakra Petch (display) and Figtree (body), both from Google Fonts

## Run locally

```bash
pnpm install
netlify dev        # or: pnpm dev (Netlify Forms only work on a deploy)
```

## Updating content

Business details live in **`src/data/site.ts`**: phone, email, service area, booking, ticket and payment links, services, differentiators, customers and RMM agent download links.

- **Add a customer logo:** put a PNG in `public/img/clients/`, then add an entry to `customers`.
- **Add a download-only customer:** add an entry to `extraDownloads` with its Syncro link.
