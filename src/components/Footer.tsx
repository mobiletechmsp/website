import { Link } from '@tanstack/react-router'
import { company, links } from '@/data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            Stronger technology. Stronger business. Stronger community. Managed IT, security, cabling and
            support for businesses across Volusia County and beyond.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-lime">Get help</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist">
            <li><a className="hover:text-white" href={links.booking} target="_blank" rel="noreferrer">Schedule an IT assessment</a></li>
            <li><a className="hover:text-white" href={links.ticket}>Create a support ticket</a></li>
            <li><a className="hover:text-white" href={links.payInvoice} target="_blank" rel="noreferrer">Pay an invoice</a></li>
            <li><Link className="hover:text-white" to="/downloads">Customer downloads</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-lime">Service area</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist">
            {company.serviceArea.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-lime">Reach us</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist">
            <li>
              <a href={company.phoneHref} className="font-display text-xl font-bold text-white hover:text-lime">
                {company.phone}
              </a>
            </li>
            <li><a className="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a></li>
            <li>{company.city}</li>
            <li>Hours: {company.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-mist/70 sm:flex-row">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Proud member of the DeLand & Greater West Volusia Chamber of Commerce</span>
        </div>
      </div>
    </footer>
  )
}
