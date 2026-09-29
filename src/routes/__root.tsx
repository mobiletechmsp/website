import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '../styles.css'

const siteName = 'MobileTech MSP | Managed IT Services in Daytona Beach & Volusia County'
const siteDescription =
  'MobileTech MSP delivers managed IT, cybersecurity, cloud, backup, structured cabling, AV and on-site support for businesses in Daytona Beach and across Volusia County. Call 386-401-9691.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,600;0,700;1,700&family=Figtree:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

/* Mobi floating chat widget — replaces the old full-width iframe */
function MobiWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '24px',
            zIndex: 10000,
            width: 'min(400px, calc(100vw - 48px))',
            height: 'min(640px, calc(100vh - 160px))',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 2,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontSize: '15px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <iframe
            src="/mobi-chatbot.html"
            title="Chat with Mobi"
            style={{ width: '100%', height: '100%', border: 0 }}
          />
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Mobi chat' : 'Chat with Mobi'}
        title="Chat with Mobi"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 10000,
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          border: 'none',
          background: '#6d28d9',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(109,40,217,0.45)',
        }}
      >
        {open ? (
          <span style={{ fontSize: '22px', lineHeight: 1 }}>✕</span>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        <Header />
<main>{children}</main>
<Footer />
<MobiWidget />
<Scripts />

      </body>
    </html>
  )
}
