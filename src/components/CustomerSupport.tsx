/* CustomerSupport — Syncro customer widgets for mobiletechmsp.com.
 * Chosen by Will Oct 23, 2026: ALL THREE — Check-In, Client Portal, Booking.
 * Embed codes copied verbatim from Syncro → Settings → Website Integrations
 * (mobiletechonsite.shield.syncromsp.com/settings/website). See
 * syncro-widgets-embed-codes.md in this folder for the source notes.
 *
 * INSTALL:
 * 1. Save this file as src/components/CustomerSupport.tsx in your repo.
 * 2. Add a Support section/page: import { CustomerSupport } from
 *    '@/components/CustomerSupport' and render <CustomerSupport /> —
 *    either on the homepage below the services section or on a /support route.
 * 3. ALSO add a "Client Portal" link in the site header/nav pointing to
 *    PORTAL_URL below (https://mobiletechonsite.shield.syncromsp.com/my_profile).
 *
 * The Check-In and Booking widgets load via Syncro's includr.js scripts,
 * which inject an iframe. Scripts are appended once via useEffect.
 */

import { useEffect, useRef, type RefObject } from 'react'

const PORTAL_URL = 'https://mobiletechonsite.shield.syncromsp.com/my_profile'
const CHECKIN_SCRIPT =
  'https://mobiletechonsite.shield.syncromsp.com/check_ins/includr.js?height=800&width=1000&scrolling=no'
const BOOKING_SCRIPT =
  'https://mobiletechonsite.shield.syncromsp.com/bookings/includr.js?scrolling=no&height=800'

function useSyncroScript(ref: RefObject<HTMLDivElement | null>, src: string) {
  useEffect(() => {
    const el = ref.current
    if (!el || el.dataset.syncroLoaded) return
    el.dataset.syncroLoaded = 'true'
    const script = document.createElement('script')
    script.src = src
    script.async = true
    el.appendChild(script)
  }, [ref, src])
}

export function CustomerSupport() {
  const checkinRef = useRef<HTMLDivElement>(null)
  const bookingRef = useRef<HTMLDivElement>(null)

  useSyncroScript(checkinRef, CHECKIN_SCRIPT)
  useSyncroScript(bookingRef, BOOKING_SCRIPT)

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="support-heading">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
        Existing customers
      </p>
      <h2 id="support-heading" className="mt-2 text-3xl font-bold text-slate-900">
        Get support, fast.
      </h2>
      <p className="mt-3 max-w-2xl text-slate-700">
        Start a new service ticket, check the status of an existing one, book an appointment, or
        sign in to your client portal — right here.
      </p>

      {/* Client Portal */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Client Portal</h3>
        <p className="mt-2 text-slate-700">
          View your tickets, invoices, and account details in your MobileTech MSP client portal.
        </p>
        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2.5 font-medium text-white"
        >
          Sign in to the Client Portal
        </a>
      </div>

      {/* Check-In: new ticket + existing ticket lookup (Syncro embed) */}
      <div id="check-in" className="mt-8 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Start a Ticket or Check Status</h3>
        <p className="mt-2 text-slate-700">
          Begin a check-in to open a new request, or look up an existing ticket with your ticket
          number and last name.
        </p>
        <div ref={checkinRef} className="mt-4" />
      </div>

      {/* Appointment Booking (Syncro embed) */}
      <div id="booking" className="mt-8 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Book an Appointment</h3>
        <p className="mt-2 text-slate-700">Pick a time that works for you.</p>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .rs-widget-container { position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 100%; }
              .rs-widget-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
            `,
          }}
        />
        <div className="rs-widget-container mt-4">
          <div ref={bookingRef} />
        </div>
      </div>
    </section>
  )
}
