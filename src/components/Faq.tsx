/* FAQ — drop-in accordion for the homepage.
 *
 * INSTALL:
 * 1. Save this file as src/components/Faq.tsx in your repo.
 * 2. In your homepage route (src/routes/index.tsx), add:
 *        import { Faq } from '@/components/Faq'
 * 3. Place <Faq /> just above the contact section
 *    ("Stronger technology. Stronger business. Stronger community.").
 */

import { useState } from 'react'

const BOOKING_URL =
  'https://outlook.office365.com/owa/calendar/MobileTechMSP@mobiletechonsite.com/bookings/'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What areas do you serve?',
    a: "We're based in Daytona Beach and serve all of Volusia County. On-site visits are by appointment, and remote support is available to existing customers whenever they need it.",
  },
  {
    q: 'What exactly does a managed IT provider do?',
    a: 'Instead of calling someone only when things break, you get a partner watching your systems around the clock — monitoring, updates, backups, and security handled proactively, with real people to call when you need us.',
  },
  {
    q: 'Do you offer a free IT assessment?',
    a: (
      <>
        Yes. We review your systems, security, and backups, then give you a plain-English report on
        what&rsquo;s working, what&rsquo;s not, and what to fix first.{' '}
        <a href={BOOKING_URL} className="font-medium text-slate-900 underline underline-offset-2">
          Book yours online
        </a>{' '}
        or call 386-401-9691.
      </>
    ),
  },
  {
    q: 'Can you fix problems remotely, or do you have to come on-site?',
    a: 'Both. We securely connect and fix most issues remotely, often the same day — and when hands-on work is needed, we come to you anywhere in Volusia County.',
  },
  {
    q: 'How do I get help when something breaks?',
    a: 'Call 386-401-9691 — we answer the phone. Existing customers get priority remote support, and you can also create a support ticket or chat with Mobi right on this site.',
  },
  {
    q: 'How much does it cost?',
    a: "It depends on your systems and what you need — there's no one-size-fits-all price. That's exactly why the IT assessment is free: you'll know what you need (and what it'll cost) before you commit to anything.",
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. We proudly support local, national, and small businesses — with 29+ years of IT experience behind every recommendation.',
  },
  {
    q: 'How do we get started?',
    a: (
      <>
        <a href={BOOKING_URL} className="font-medium text-slate-900 underline underline-offset-2">
          Book a free IT assessment online
        </a>
        , call 386-401-9691, or chat with Mobi in the corner of this page. We&rsquo;ll take it
        from there.
      </>
    ),
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16" aria-labelledby="faq-heading">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">FAQ</p>
      <h2 id="faq-heading" className="mt-2 text-3xl font-bold text-slate-900">
        Questions, answered.
      </h2>
      <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-medium text-slate-600"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && <div className="px-6 pb-6 text-slate-700">{item.a}</div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
