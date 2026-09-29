# AGENTS.md

The marketing website for MobileTech MSP, a managed IT provider in Daytona Beach, FL. It is built with TanStack Start and deployed on Netlify.

## Architecture

- `src/routes/__root.tsx`: the HTML shell, SEO meta and Google Fonts. It wraps every page in `<Header />` and `<Footer />`.
- `src/routes/index.tsx`: the home page. Each section is its own local component (Hero, QuickActions, Services, Cabling, WhyUs, Customers, Process, ContactSection). Section anchors are `#services`, `#why`, `#customers` and `#contact`.
- `src/routes/downloads.tsx`: the customer RMM agent portal with a client-side search.
- `src/routes/contact.tsx`: the contact page.
- `src/components/`: Header, Footer, Logo (an inline SVG "MT" mark), ContactForm, ServiceIcon (maps service icon keys to lucide icons) and Eyebrow (the section label).
- `src/data/site.ts`: the **single source of truth** for business copy, links, services, customers and download URLs. Edit content here, not in the JSX.
- `public/img/`: the AI-generated hero and cabling photos, plus customer logos in `clients/`.
- `public/__forms.html`: a hidden static skeleton so Netlify registers the `contact` form at build time.

## Conventions and non-obvious decisions

- **Images:** always load them through the Netlify Image CDN with the `img(path, width)` helper from `src/data/site.ts`. Never reference raw files directly.
- **Contact form:** `ContactForm` POSTs URL-encoded data to `/__forms.html`, not `/`, because the SSR function would otherwise intercept it. If you add fields, add them to `public/__forms.html` too. The honeypot field is `bot-field`.
- **Brand:** navy/ink backgrounds, electric blue (`volt`) and lime accents. The colors come from the company's existing flyer. Theme tokens are defined in `@theme` in `src/styles.css`. The slanted `.cut` and `.cut-corner` clip-paths echo the brand graphics.
- **External systems:** bookings use Microsoft Bookings, tickets are emailed to the Odoo helpdesk, invoices are paid through a Stripe payment link, and RMM runs on Syncro plus Action1. The site only links to these systems.
- The site has no database or auth. It is a static-content marketing site.
