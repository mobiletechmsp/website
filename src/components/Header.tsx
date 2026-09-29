import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CalendarCheck, CreditCard, LifeBuoy, Menu, Phone, X } from 'lucide-react'
import { company, links } from '@/data/site'
import { Logo } from './Logo'

const nav = [
  { label: 'Services', to: '/', hash: 'services' },
  { label: 'Why Us', to: '/', hash: 'why' },
  { label: 'Customers', to: '/', hash: 'customers' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line/70 bg-ink text-xs text-mist md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />
            Serving Daytona Beach & all of Volusia County · {company.hours}
          </span>
          <span className="flex items-center gap-6">
            <a href={links.ticket} className="flex items-center gap-1.5 hover:text-white">
              <LifeBuoy size={13} /> Create a support ticket
            </a>
            <a href={links.payInvoice} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <CreditCard size={13} /> Pay an invoice
            </a>
            <a href={company.phoneHref} className="flex items-center gap-1.5 font-semibold text-white">
              <Phone size={13} className="text-lime" /> {company.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-line/70 bg-night/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" aria-label="MobileTech MSP home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={'hash' in item ? item.hash : undefined}
                className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-mist transition-colors hover:text-white"
                activeProps={'hash' in item ? {} : { className: '!text-lime' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className="cut hidden items-center gap-2 bg-lime px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-white sm:flex"
            >
              <CalendarCheck size={16} /> Book an assessment
            </a>
            <button
              className="rounded-md p-2 text-white hover:bg-deep lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-night px-6 pb-6 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={'hash' in item ? item.hash : undefined}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-4 font-display text-lg font-semibold uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 grid gap-3">
              <a href={links.booking} target="_blank" rel="noreferrer" className="cut bg-lime px-5 py-3 text-center font-display font-bold uppercase text-ink">
                Book an assessment
              </a>
              <a href={company.phoneHref} className="cut border border-line px-5 py-3 text-center font-display font-bold uppercase">
                Call {company.phone}
              </a>
              <div className="flex justify-between pt-2 text-sm text-mist">
                <a href={links.ticket}>Support ticket</a>
                <a href={links.payInvoice} target="_blank" rel="noreferrer">Pay invoice</a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
