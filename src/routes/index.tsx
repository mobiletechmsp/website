import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  CreditCard,
  Download,
  Gauge,
  HardDrive,
  LifeBuoy,
  Phone,
  PiggyBank,
  Rocket,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { Eyebrow } from '@/components/Eyebrow'
import { ServiceIcon } from '@/components/ServiceIcon'
import { company, customers, differentiators, img, links, pillars, services } from '@/data/site'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Services />
      <Cabling />
      <WhyUs />
      <Customers />
      <Process />
      <ContactSection />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-volt/25 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div>
          <div className="rise">
            <Eyebrow>Daytona Beach · Volusia County · Anywhere you need us</Eyebrow>
          </div>
          <h1 className="rise mt-8 font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl xl:text-7xl [animation-delay:120ms]">
            More than an MSP.
            <span className="mt-2 block">We’re your</span>
            <span className="block italic text-lime">technology power partner.</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-mist [animation-delay:240ms]">
            From the network closet to the cloud, MobileTech MSP delivers the technology, expertise and real-person
            support your business needs to grow, stay secure and thrive.
          </p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:360ms]">
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className="cut group flex items-center justify-center gap-2 bg-lime px-8 py-4 font-display font-bold uppercase tracking-wider text-ink transition hover:bg-white"
            >
              <CalendarCheck size={18} /> Schedule your IT assessment
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={company.phoneHref}
              className="cut flex items-center justify-center gap-2 border border-volt/60 bg-volt/10 px-8 py-4 font-display font-bold uppercase tracking-wider transition hover:bg-volt"
            >
              <Phone size={18} /> {company.phone}
            </a>
          </div>

          <dl className="rise mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8 [animation-delay:480ms]">
            {[
              ['29+', 'Years of IT experience'],
              ['10', 'Service lines, one partner'],
              ['24/7', 'Proactive monitoring'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-white">{n}</dt>
                <dd className="mt-1 text-xs leading-snug text-mist">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative [animation-delay:200ms]">
          <div className="absolute -inset-3 translate-x-4 translate-y-4 border border-volt/40 [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]" />
          <img
            src={img('/img/hero-tech.jpg', 1100)}
            srcSet={`${img('/img/hero-tech.jpg', 700)} 700w, ${img('/img/hero-tech.jpg', 1100)} 1100w, ${img('/img/hero-tech.jpg', 1600)} 1600w`}
            sizes="(min-width: 1024px) 45vw, 100vw"
            alt="A MobileTech MSP technician patching network cables in a client's office"
            className="relative aspect-[4/3] w-full object-cover object-[60%_center] [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]"
            fetchPriority="high"
          />
          <div className="absolute -bottom-6 left-0 w-64 border border-line bg-night/95 p-5 shadow-2xl shadow-black/50 backdrop-blur sm:-left-6">
            <p className="flex items-center gap-2 font-display text-[0.65rem] font-bold uppercase tracking-[0.25em] text-mist">
              <span className="pulse-dot h-2 w-2 rounded-full bg-lime" /> Network status
            </p>
            <p className="mt-2 font-display text-lg font-bold">All systems monitored</p>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className={`h-5 flex-1 ${i === 11 ? 'bg-volt' : 'bg-lime/80'}`} />
              ))}
            </div>
            <p className="mt-2 text-[0.7rem] text-mist">Patched · Backed up · Protected</p>
          </div>
          <div className="absolute -top-5 right-4 cut bg-volt px-4 py-2 font-display text-xs font-bold uppercase tracking-widest">
            We’re everywhere your business needs to be
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickActions() {
  const actions = [
    { icon: CalendarCheck, title: 'Schedule an assessment', body: 'Pick a time that works for you.', href: links.booking, external: true },
    { icon: LifeBuoy, title: 'Create a support ticket', body: 'Email our helpdesk directly.', href: links.ticket },
    { icon: CreditCard, title: 'Pay an invoice', body: 'Secure online payment.', href: links.payInvoice, external: true },
  ]
  return (
    <section className="relative border-y border-line bg-night">
      <div className="mx-auto grid max-w-7xl divide-line sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
        {actions.map((a) => (
          <a
            key={a.title}
            href={a.href}
            {...(a.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="group flex items-center gap-4 px-6 py-7 transition hover:bg-deep"
          >
            <a.icon className="shrink-0 text-volt-soft transition group-hover:text-lime" size={28} />
            <span className="flex-1">
              <span className="block font-display font-bold uppercase tracking-wide">{a.title}</span>
              <span className="text-sm text-mist">{a.body}</span>
            </span>
            <ArrowUpRight size={18} className="text-mist transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
        ))}
        <Link to="/downloads" className="group flex items-center gap-4 px-6 py-7 transition hover:bg-deep">
          <Download className="shrink-0 text-volt-soft transition group-hover:text-lime" size={28} />
          <span className="flex-1">
            <span className="block font-display font-bold uppercase tracking-wide">Customer downloads</span>
            <span className="text-sm text-mist">Install your RMM agent.</span>
          </span>
          <ArrowRight size={18} className="text-mist transition group-hover:translate-x-1 group-hover:text-white" />
        </Link>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
              Complete IT solutions.
              <span className="block text-volt">End-to-end support.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg text-mist lg:justify-self-end">
            One accountable partner for everything that plugs in, logs on or connects — so you can stop juggling
            vendors and get back to running your business.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <article key={s.title} className="group relative bg-ink p-7 transition hover:bg-deep">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <ServiceIcon name={s.icon} size={30} strokeWidth={1.6} className="text-volt-soft transition group-hover:text-lime" />
                <span className="font-display text-xs font-bold text-mist/50">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-8 font-display text-lg font-bold uppercase leading-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cabling() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[340px] lg:min-h-[560px]">
          <img
            src={img('/img/fiber-rack.jpg', 1000)}
            srcSet={`${img('/img/fiber-rack.jpg', 640)} 640w, ${img('/img/fiber-rack.jpg', 1000)} 1000w, ${img('/img/fiber-rack.jpg', 1400)} 1400w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="Fiber optic and blue patch cables neatly dressed into a network switch"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-night/90 max-lg:bg-gradient-to-t" />
        </div>
        <div className="relative px-6 py-20 lg:px-16 lg:py-28">
          <Eyebrow>Fiber optic & structured cabling</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
            High-speed. High-performance.
            <span className="block italic text-lime">Built for the future.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-mist">
            Great IT starts with the physical layer. We design, pull, terminate and certify the network that everything
            else depends on — tidy, labeled and documented so it stays fast for years.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Fiber & Cat6/6A runs', 'Rack builds & cleanup', 'Business-grade Wi-Fi', 'Conference room & AV', 'Security cameras & access', 'Tested & documented'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-5 w-5 place-items-center bg-volt text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-28 py-28">
      <div className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow>What sets us apart</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
            Real people.
            <span className="block text-volt">Real support.</span>
          </h2>
          <ul className="mt-10 space-y-4">
            {differentiators.map((d) => (
              <li key={d} className="flex items-center gap-4 border-b border-line pb-4 font-display text-lg font-semibold uppercase tracking-wide">
                <Check className="shrink-0 text-lime" strokeWidth={3} size={20} />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`cut-corner border border-line bg-deep/70 p-8 backdrop-blur ${i % 2 === 1 ? 'sm:translate-y-10' : ''}`}
            >
              <span className="font-display text-5xl font-bold text-volt/40">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-xl font-bold uppercase text-lime">{p.title}</h3>
              <p className="mt-3 text-mist">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Customers() {
  const row = [...customers, ...customers]
  return (
    <section id="customers" className="scroll-mt-28 border-y border-line bg-night py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Eyebrow center>Our customers</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
          Proud to support local, national and small businesses — and their amazing teams.
        </h2>
      </div>
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee flex w-max gap-5">
          {row.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= customers.length}
              className="grid h-32 w-52 shrink-0 place-items-center rounded-sm bg-white p-5"
            >
              <img src={img(`/img/clients/${c.logo}`, 320)} alt={c.name} loading="lazy" className="max-h-full max-w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', title: 'Assess', body: 'We book a visit, walk your space and review your systems, security and pain points.' },
    { n: '02', title: 'Plan', body: 'You get a clear, jargon-free roadmap and quote tailored to your business — no cookie-cutter bundles.' },
    { n: '03', title: 'Protect & support', body: 'We implement, monitor 24/7 and stay on call on-site or remotely as your team grows.' },
  ]
  const outcomes = [
    { icon: ShieldCheck, label: 'Secure your data' },
    { icon: Gauge, label: 'Maximize uptime' },
    { icon: Rocket, label: 'Boost productivity' },
    { icon: PiggyBank, label: 'Reduce costs' },
    { icon: Target, label: 'Focus on what matters' },
  ]
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
          Let’s build something <span className="italic text-lime">amazing</span> together.
        </h2>
        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative border-t-2 border-volt pt-8">
              <span className="font-display text-sm font-bold tracking-[0.3em] text-volt-soft">STEP {s.n}</span>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase">{s.title}</h3>
              <p className="mt-3 text-mist">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-5">
          {outcomes.map((o) => (
            <div key={o.label} className="flex flex-col items-center gap-3 bg-ink px-4 py-8 text-center">
              <o.icon className="text-lime" size={26} />
              <span className="font-display text-sm font-bold uppercase tracking-wider">{o.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-night py-28">
      <div className="absolute -right-40 -bottom-40 h-[480px] w-[480px] rounded-full bg-volt/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow>Contact us</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
            Stronger technology.
            <span className="block text-volt">Stronger business.</span>
            <span className="block text-lime">Stronger community.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-mist">
            Tell us what’s going on and we’ll get back to you fast. Prefer to talk? We answer the phone.
          </p>
          <div className="mt-10 space-y-6">
            <a href={company.phoneHref} className="group flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center bg-lime text-ink">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-mist">Call us</span>
                <span className="font-display text-2xl font-bold group-hover:text-lime">{company.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center border border-line text-volt-soft">
                <HardDrive size={20} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-mist">Location & hours</span>
                <span className="font-display text-lg font-bold">{company.city} · {company.hours}</span>
              </span>
            </div>
            <p className="max-w-md border-l-2 border-volt pl-4 text-sm text-mist">{company.hoursNote}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
