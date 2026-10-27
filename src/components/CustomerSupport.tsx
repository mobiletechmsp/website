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
 * FIX 2026-10-27: Syncro's includr.js embeds use document.write, which
 * does not render when the script is appended after page load in React
 * (the first live deploy showed blank widget cards). The widgets below
 * therefore load as direct iframes to the same Syncro tenant URLs
 * (check_ins and bookings) instead of via the includr scripts.
 */

const PORTAL_URL = 'https://mobiletechonsite.shield.syncromsp.com/my_profile'
const CHECKIN_URL = 'https://mobiletechonsite.shield.syncromsp.com/check_ins'
const BOOKING_URL = 'https://mobiletechonsite.shield.syncromsp.com/bookings'

export function CustomerSupport() {
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
        <iframe
          src={CHECKIN_URL}
          title="Syncro check-in: start a ticket or check ticket status"
          width="100%"
          height="800"
          scrolling="no"
          className="mt-4 w-full border-0"
        />
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
          <iframe src={BOOKING_URL} title="Syncro appointment booking" className="border-0" />
        </div>
      </div>
    </section>
  )
}
