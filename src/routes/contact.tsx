import { createFileRoute } from '@tanstack/react-router'
import { CalendarCheck, CreditCard, LifeBuoy, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { Eyebrow } from '@/components/Eyebrow'
import { company, links } from '@/data/site'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact MobileTech MSP | Daytona Beach IT Support' },
      { name: 'description', content: `Call ${company.phone}, book an IT assessment or send us a message.` },
    ],
  }),
  component: Contact,
})

function Contact() {
  const cards = [
    { icon: Phone, label: 'Call us', value: company.phone, href: company.phoneHref },
    { icon: CalendarCheck, label: 'Book an assessment', value: 'Pick a time online', href: links.booking, external: true },
    { icon: LifeBuoy, label: 'Existing customer?', value: 'Create a support ticket', href: links.ticket },
    { icon: CreditCard, label: 'Billing', value: 'Pay an invoice', href: links.payInvoice, external: true },
  ]

  return (
    <section className="relative overflow-hidden pb-28">
      <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-volt/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:pt-24">
        <Eyebrow>Contact us</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
          Let’s talk about your <span className="italic text-lime">technology.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-mist">
          Whether something’s broken today or you’re planning what’s next, a real person from MobileTech MSP will help.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group bg-ink p-6 transition hover:bg-deep"
            >
              <c.icon className="text-volt-soft transition group-hover:text-lime" size={24} />
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-mist">{c.label}</span>
              <span className="mt-1 block font-display text-xl font-bold">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside className="space-y-8">
            <div className="border border-line bg-deep/60 p-8">
              <h2 className="flex items-center gap-3 font-display text-lg font-bold uppercase">
                <MapPin className="text-lime" size={20} /> Where we work
              </h2>
              <p className="mt-3 text-mist">
                Based in {company.city}, we serve anyone in need — anywhere, anytime — on-site across Volusia County and
                remotely everywhere else.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {company.serviceArea.map((a) => (
                  <li key={a} className="border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mist">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line bg-deep/60 p-8">
              <h2 className="font-display text-lg font-bold uppercase">Hours: {company.hours}</h2>
              <p className="mt-3 text-mist">{company.hoursNote}</p>
            </div>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-mist hover:text-white">
              <Mail size={18} className="text-volt-soft" /> {company.email}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
