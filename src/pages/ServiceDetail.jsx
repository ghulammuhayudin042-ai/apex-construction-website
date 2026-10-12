import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Img from '../components/ui/Img'
import Accordion from '../components/ui/Accordion'
import ProjectCard from '../components/cards/ProjectCard'
import CTABanner from '../components/sections/CTABanner'
import Icon from '../components/ui/Icon'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'
import NotFound from './NotFound'

// Which project categories relate to which service (used for "Related projects").
const relatedCategories = {
  'general-construction': ['Commercial', 'Residential', 'Industrial'],
  residential: ['Residential'],
  commercial: ['Commercial'],
  industrial: ['Industrial'],
  'civil-engineering': ['Infrastructure'],
  renovation: ['Renovation'],
  'interior-finishing': ['Interior', 'Renovation'],
  'project-management': ['Commercial', 'Infrastructure'],
  infrastructure: ['Infrastructure'],
  maintenance: ['Renovation', 'Commercial'],
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  useDocumentTitle(service ? service.title : 'Service not found')
  if (!service) return <NotFound message="That service could not be found." />

  const cats = relatedCategories[slug] || []
  const related = projects.filter((p) => cats.includes(p.category)).slice(0, 3)
  const others = services.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <>
      <PageHero
        title={service.title}
        text={service.short}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <Img src={service.image} alt={`${service.title} service`} ratio="aspect-[16/9]" className="rounded-lg shadow-lg" eager />
            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy-900">Overview</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-soft">{service.description}</p>

            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy-900">Scope &amp; deliverables</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.scope.map((s) => (
                <li key={s} className="flex gap-3 rounded-md bg-navy-50 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy-900">Key benefits</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-md border border-navy-100 p-4">
                  <Icon name="BadgeCheck" className="h-5 w-5 shrink-0 text-navy-700" />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy-900">Typical project stages</h2>
            <ol className="mt-4 space-y-3">
              {service.stages.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-md border border-navy-100 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xl font-bold text-accent">{i + 1}</span>
                  <span className="font-semibold text-navy-900">{s}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 font-display text-3xl font-bold uppercase text-navy-900">Team, materials &amp; equipment</h2>
            <ul className="mt-4 space-y-2 text-slate-soft">
              {service.capabilities.map((c) => (
                <li key={c} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />{c}</li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Service sidebar">
            <div className="rounded-lg bg-navy-900 p-6 text-white">
              <h2 className="font-display text-3xl font-bold uppercase">Request a quote</h2>
              <p className="mt-2 text-navy-100">Tell us about your {service.title.toLowerCase()} project and get a clear response.</p>
              <Link
                to={`/contact?type=${encodeURIComponent(service.title)}#quote`}
                className="mt-5 flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-navy-950 hover:bg-accent-dark hover:text-white"
              >
                Request a Quote
              </Link>
            </div>
            <nav className="rounded-lg border border-navy-100 p-6" aria-label="Other services">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-900">Other services</h2>
              <ul className="mt-3 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}><Link to={`/services/${o.slug}`} className="font-medium text-navy-700 hover:text-accent-dark">{o.title}</Link></li>
                ))}
                <li><Link to="/services" className="font-semibold text-accent-dark hover:underline">All services →</Link></li>
              </ul>
            </nav>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-navy-50 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related Projects" title="See this service in action" />
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}><ProjectCard project={p} compact /></li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title={`${service.title} questions`} />
          <Accordion items={service.faqs} />
        </Container>
      </section>

      <CTABanner title={`Planning ${service.title.toLowerCase()}?`} quoteHref={`/contact?type=${encodeURIComponent(service.title)}#quote`} />
    </>
  )
}
