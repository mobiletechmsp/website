/* Testimonials — drop-in quote cards for the homepage "Our customers" section.
 *
 * INSTALL:
 * 1. Save this file as src/components/Testimonials.tsx in your repo.
 * 2. In your homepage route (src/routes/index.tsx), add:
 *        import { Testimonials } from '@/components/Testimonials'
 * 3. Place <Testimonials /> inside the "Our customers" section,
 *    directly below its heading ("Proud to support local, national
 *    and small businesses — and their amazing teams.").
 *
 * All quotes are verbatim excerpts from Will's LinkedIn recommendations.
 */

const testimonials = [
  {
    quote:
      'No one is better than Will Sanchez MobileTech at customer care. He is capable, responsive, knowledgeable, and a pleasure to know and work with. I could not run my consulting business without him.',
    name: 'Patricia Brock, PhD',
    role: 'Client · Certified Life Care Planner',
  },
  {
    quote:
      'His professional installations were flawless, and he provided outstanding service. William continues to maintain our systems with proactive troubleshooting, swiftly resolving any service interruptions.',
    name: 'Manny De La Vega',
    role: 'Client · Business Owner',
  },
  {
    quote:
      'Will consistently stood out as a top performer — bringing high energy, initiative, and a strong sense of ownership to every challenge. I would gladly work with Will again and recommend him without hesitation.',
    name: 'Carl Owen',
    role: 'Former Manager, Brown & Brown · Tech Advisor',
  },
  {
    quote:
      'His customer service acumen is truly exceptional. His dedication, positive demeanor, and proactive communication earned frequent praise from both internal stakeholders and end users. I recommend him without reservation.',
    name: 'William Hansen',
    role: 'Former Manager, Brown & Brown · Service Delivery Manager',
  },
  {
    quote:
      "Will's patience and persistence in solving problems and improving efficiency are only exceeded by his technical knowledge and strategic sense of the digital ecosystem. He's the best!",
    name: 'Bob Lloyd',
    role: 'Executive Leader · Board Member',
  },
  {
    quote:
      'During the time William was professional, and prompt to complete IT projects.',
    name: 'Mark Christenson',
    role: 'Former Teammate · Technical Program Manager',
  },
]

export function Testimonials() {
  return (
    <div className="mx-auto mt-12 max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div aria-hidden="true" className="text-5xl font-bold leading-none text-amber-400">
              &ldquo;
            </div>
            <blockquote className="flex-1 text-slate-700">{t.quote}</blockquote>
            <figcaption className="mt-5 border-t border-slate-100 pt-4">
              <div className="font-semibold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">
        Recommendations from{' '}
        <a
          href="https://www.linkedin.com/in/will-sancheze"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-700 underline underline-offset-2"
        >
          Will&rsquo;s LinkedIn profile
        </a>
      </p>
    </div>
  )
}
