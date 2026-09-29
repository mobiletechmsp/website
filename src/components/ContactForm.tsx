import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { company, services } from '@/data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const empty = { name: '', company: '', email: '', phone: '', service: '', message: '' }

const field =
  'w-full border border-line bg-ink/60 px-4 py-3 text-white placeholder:text-mist/50 outline-none transition focus:border-volt focus:ring-2 focus:ring-volt/30'

export function ContactForm() {
  const [fields, setFields] = useState(empty)
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      // Posts to the static skeleton so Netlify Forms (not the SSR function) handles it.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setFields(empty)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="cut-corner flex flex-col items-start gap-4 border border-lime/40 bg-deep p-10">
        <CheckCircle2 className="text-lime" size={40} />
        <h3 className="font-display text-2xl font-bold uppercase">Message received.</h3>
        <p className="text-mist">
          Thanks for reaching out — a real person from our team will get back to you shortly. Need us sooner? Call{' '}
          <a href={company.phoneHref} className="font-semibold text-white underline decoration-lime underline-offset-4">
            {company.phone}
          </a>
          .
        </p>
        <button onClick={() => setStatus('idle')} className="text-sm font-semibold text-volt-soft hover:text-white">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={onSubmit}
      className="cut-corner grid gap-4 border border-line bg-deep/80 p-6 sm:grid-cols-2 sm:p-10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <Label text="Your name">
        <input required name="name" value={fields.name} onChange={onChange} className={field} placeholder="Jane Smith" />
      </Label>
      <Label text="Business">
        <input name="company" value={fields.company} onChange={onChange} className={field} placeholder="Company name" />
      </Label>
      <Label text="Email">
        <input required type="email" name="email" value={fields.email} onChange={onChange} className={field} placeholder="you@business.com" />
      </Label>
      <Label text="Phone">
        <input type="tel" name="phone" value={fields.phone} onChange={onChange} className={field} placeholder="(386) 555-0100" />
      </Label>
      <Label text="What can we help with?" wide>
        <select name="service" value={fields.service} onChange={onChange} className={field}>
          <option value="">Choose a service (optional)</option>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </Label>
      <Label text="Tell us a little about it" wide>
        <textarea
          required
          name="message"
          rows={5}
          value={fields.message}
          onChange={onChange}
          className={field}
          placeholder="How many people, what's not working, what you'd like to improve…"
        />
      </Label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        {status === 'error' ? (
          <p className="text-sm text-red-300" role="alert">
            Something went wrong sending your message. Please try again or call {company.phone}.
          </p>
        ) : (
          <p className="text-sm text-mist">We typically reply within one business day.</p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="cut group flex items-center justify-center gap-2 bg-lime px-8 py-3.5 font-display font-bold uppercase tracking-wider text-ink transition hover:bg-white disabled:opacity-60"
        >
          {status === 'sending' ? <Loader2 className="animate-spin" size={18} /> : null}
          {status === 'sending' ? 'Sending' : 'Send message'}
          {status !== 'sending' && <ArrowRight size={18} className="transition group-hover:translate-x-1" />}
        </button>
      </div>
    </form>
  )
}

function Label({ text, wide, children }: { text: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={`grid gap-2 ${wide ? 'sm:col-span-2' : ''}`}>
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-mist">{text}</span>
      {children}
    </label>
  )
}
