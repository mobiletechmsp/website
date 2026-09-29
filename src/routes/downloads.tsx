import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { Download, MonitorDown, Search, ShieldCheck, TriangleAlert } from 'lucide-react'
import { Eyebrow } from '@/components/Eyebrow'
import { company, customers, extraDownloads, img, links } from '@/data/site'

export const Route = createFileRoute('/downloads')({
  head: () => ({
    meta: [
      { title: 'Customer Downloads | MobileTech MSP' },
      { name: 'description', content: 'Remote monitoring & maintenance agent downloads for MobileTech MSP customers.' },
    ],
  }),
  component: Downloads,
})

const entries = [...customers, ...extraDownloads]
  .filter((c) => c.rmmAgent)
  .sort((a, b) => a.name.localeCompare(b.name))

function Downloads() {
  const [q, setQ] = useState('')
  const results = useMemo(
    () => entries.filter((e) => e.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  )

  return (
    <section className="relative overflow-hidden pb-28">
      <div className="grid-bg absolute inset-x-0 top-0 h-96 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:pt-24">
        <Eyebrow>Customer download portal</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h1 className="font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
            Get connected to
            <span className="block text-volt">MobileTech support.</span>
          </h1>
          <p className="text-lg text-mist">
            Remote monitoring & maintenance agents for our customers. Find your business, download the installer and run
            it on each Windows computer we manage.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Step icon={Search} n="1" text="Find your business below." />
          <Step icon={MonitorDown} n="2" text="Download the RMM agent and run it as an administrator." />
          <Step icon={ShieldCheck} n="3" text="Install the patch agent so updates stay current." />
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <span className="sr-only">Search for your business</span>
            <Search className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-mist" size={18} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search for your business…"
              className="w-full border border-line bg-deep py-3.5 pr-4 pl-12 text-white outline-none placeholder:text-mist/60 focus:border-volt focus:ring-2 focus:ring-volt/30"
            />
          </label>
          <a
            href={links.action1Agent}
            className="cut flex items-center justify-center gap-2 border border-volt/60 bg-volt/10 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition hover:bg-volt"
          >
            <Download size={16} /> Patch agent (all customers)
          </a>
        </div>

        {results.length ? (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((e) => (
              <li key={e.name} className="group flex flex-col border border-line bg-deep/60 transition hover:border-volt/60">
                <div className="flex items-center gap-4 p-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden bg-white p-1.5">
                    {e.logo ? (
                      <img src={img(`/img/clients/${e.logo}`, 120)} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
                    ) : (
                      <span className="font-display text-lg font-bold text-ink">{initials(e.name)}</span>
                    )}
                  </span>
                  <span className="font-display text-lg leading-tight font-bold uppercase">{e.name}</span>
                </div>
                <div className="mt-auto grid grid-cols-2 border-t border-line">
                  <a
                    href={e.rmmAgent}
                    className="flex items-center justify-center gap-2 bg-lime/0 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-lime transition hover:bg-lime hover:text-ink"
                  >
                    <Download size={14} /> RMM agent
                  </a>
                  <a
                    href={links.action1Agent}
                    className="flex items-center justify-center gap-2 border-l border-line py-3.5 font-display text-xs font-bold uppercase tracking-wider text-mist transition hover:bg-volt hover:text-white"
                  >
                    <Download size={14} /> Patch agent
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 flex flex-col items-center gap-4 border border-dashed border-line px-6 py-16 text-center">
            <Search className="text-mist" size={32} />
            <p className="font-display text-xl font-bold uppercase">No match for “{q}”</p>
            <p className="max-w-md text-mist">
              Your business may not have a dedicated installer yet. Call us at{' '}
              <a href={company.phoneHref} className="text-white underline decoration-lime underline-offset-4">{company.phone}</a>{' '}
              and we’ll get you set up.
            </p>
          </div>
        )}

        <div className="mt-14 flex items-start gap-4 border-l-2 border-lime bg-deep/60 p-6 text-sm text-mist">
          <TriangleAlert className="mt-0.5 shrink-0 text-lime" size={20} />
          <p>
            Only install the agent for <strong className="text-white">your own</strong> organization. Not a customer yet?{' '}
            <Link to="/contact" className="text-white underline decoration-lime underline-offset-4">
              Get in touch
            </Link>{' '}
            and we’ll create your installer during onboarding.
          </p>
        </div>
      </div>
    </section>
  )
}

function Step({ icon: Icon, n, text }: { icon: React.ComponentType<{ size?: number; className?: string }>; n: string; text: string }) {
  return (
    <div className="flex items-center gap-4 border border-line bg-night/80 p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center bg-volt font-display font-bold">{n}</span>
      <span className="text-sm">{text}</span>
      <Icon size={20} className="ml-auto shrink-0 text-mist" />
    </div>
  )
}

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9+ ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}
