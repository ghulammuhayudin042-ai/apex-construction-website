import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SocialIcon from '../components/ui/SocialIcon'
import Img from '../components/ui/Img'
import QuoteForm from '../components/forms/QuoteForm'
import { preparationChecklist } from '../data/content'
import { site } from '../data/site'

export default function Contact() {
  useDocumentTitle('Contact & Request a Quote')
  const { contact } = site
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

  const cards = [
    { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Office', value: contact.address },
  ]

  return (
    <>
      <PageHero
        title="Let’s discuss your project"
        text="Call, email or send us a quotation request. We will review your details and reply with clear next steps."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image="/images/contact.svg"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {cards.map(({ icon: I, label, value, href }) => (
              <li key={label} className="flex gap-4 rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-900 text-accent">
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-bold uppercase text-navy-900">{label}</h2>
                  {href ? <a href={href} className="break-words text-slate-soft hover:text-accent-dark">{value}</a> : <p className="text-slate-soft">{value}</p>}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div id="quote" className="scroll-mt-28 rounded-lg border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-4xl font-bold uppercase text-navy-900">Request a quote</h2>
              <span className="mb-6 mt-3 block h-1 w-16 bg-accent" aria-hidden="true" />
              <QuoteForm />
            </div>

            <aside className="space-y-6" aria-label="Contact information">
              <div className="rounded-lg bg-navy-900 p-6 text-white">
                <h2 className="flex items-center gap-2 font-display text-2xl font-bold uppercase"><Clock className="h-5 w-5 text-accent" aria-hidden="true" /> Working hours</h2>
                <dl className="mt-4 space-y-2 text-sm">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 border-b border-navy-700 pb-2 last:border-0">
                      <dt className="text-navy-100">{h.days}</dt>
                      <dd className="font-semibold">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-lg border border-navy-100 p-6">
                <h2 className="font-display text-2xl font-bold uppercase text-navy-900">Helpful to prepare</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-soft">
                  {preparationChecklist.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>

              <div className="rounded-lg border border-navy-100 p-6">
                <h2 className="font-display text-2xl font-bold uppercase text-navy-900">Follow us</h2>
                <ul className="mt-3 flex gap-3">
                  {site.social.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${site.shortName} on ${s.label}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-900 hover:bg-accent">
                        <SocialIcon name={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Map placeholder: swap for a Google Maps / Mapbox embed using your real address. */}
      <section className="pb-16 sm:pb-24" aria-label="Office location">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-navy-100 shadow-sm">
            <Img src="/images/map-placeholder.svg" alt="Map placeholder showing the office area" ratio="aspect-[16/7]" />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-950/40 p-4">
              <div className="max-w-sm rounded-lg bg-white p-5 text-center shadow-xl">
                <MapPin className="mx-auto h-8 w-8 text-accent-dark" aria-hidden="true" />
                <p className="mt-2 font-display text-2xl font-bold uppercase text-navy-900">{site.name} Office</p>
                <p className="mt-1 text-sm text-slate-soft">{contact.address}</p>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-accent-dark">
                  Open in Maps <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
