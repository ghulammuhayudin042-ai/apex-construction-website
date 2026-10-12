import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { footerLegal, nav, site } from '../../data/site'
import { services } from '../../data/services'
import { isEmail } from '../../utils/validators'
import Logo from './Logo'
import SocialIcon from '../ui/SocialIcon'

const YEAR = new Date().getFullYear()

function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState({ status: 'idle', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isEmail(email)) {
      setState({ status: 'error', message: 'Please enter a valid email address.' })
      return
    }
    // DEMO: connect to your newsletter provider / API here.
    setState({ status: 'success', message: 'Thanks — you are on the list (demo).' })
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-invalid={state.status === 'error'}
          aria-describedby="newsletter-msg"
          className="min-w-0 flex-1 rounded-md border border-navy-700 bg-navy-900 px-3 py-2.5 text-white placeholder:text-navy-100/60"
        />
        <button type="submit" className="rounded-md bg-accent px-4 py-2.5 font-semibold text-navy-950 hover:bg-accent-dark hover:text-white">
          Join
        </button>
      </div>
      <p id="newsletter-msg" role="status" className={`mt-2 min-h-5 text-sm ${state.status === 'error' ? 'text-red-300' : 'text-green-300'}`}>
        {state.message}
      </p>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 [&>div]:min-w-0">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">{site.description}</p>
          <ul className="mt-5 flex gap-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.shortName} on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-700 hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent">{n.label}</Link></li>
            ))}
            <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-accent">{s.title}</Link></li>
            ))}
            <li><Link to="/services" className="font-semibold text-accent hover:underline">All services →</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{site.contact.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /><a href={site.contact.phoneHref} className="hover:text-accent">{site.contact.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /><a href={`mailto:${site.contact.email}`} className="break-all hover:text-accent">{site.contact.email}</a></li>
          </ul>
          <p className="mt-5 text-sm font-semibold text-white">Project updates &amp; insights</p>
          <Newsletter />
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {YEAR} {site.name}. All rights reserved. Demo content for portfolio purposes.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
