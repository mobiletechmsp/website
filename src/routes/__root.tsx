import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


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
<iframe
  src="/mobi-chatbot.html"
  title="Chat with Mobi"
  style={{ width: '100%', height: '640px', border: 0, borderRadius: '16px' }}
/>
<Scripts />

      </body>
    </html>
  )
}
