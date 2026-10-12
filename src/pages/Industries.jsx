import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Img from '../components/ui/Img'
import Icon from '../components/ui/Icon'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import CTABanner from '../components/sections/CTABanner'
import { industries, processSteps } from '../data/content'

const details = {
  residential: ['Custom homes and villas', 'Townhouse and apartment developments', 'Boundary walls and external works'],
  commercial: ['Office buildings and business parks', 'Retail and showroom spaces', 'Mixed-use developments'],
  industrial: ['Warehouses and distribution hubs', 'Light manufacturing facilities', 'Yards, docks and hardstanding'],
  infrastructure: ['Road and junction upgrades', 'Bridges and overpasses', 'Drainage and utility corridors'],
  renovation: ['Remodeling and extensions', 'Facade and roof upgrades', 'Restoration of older buildings'],
  interiors: ['Office and retail fit-out', 'Joinery, ceilings and flooring', 'Residential interior finishing'],
  institutional: ['Schools and training facilities', 'Clinics and healthcare buildings', 'Hotels and hospitality spaces'],
}

export default function Industries() {
  useDocumentTitle('Industries & Process')
  return (
    <>
      <PageHero
        title="Industries & Process"
        text="Sector experience and a clear delivery process, from first consultation to aftercare."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        image="/images/industry-commercial.svg"
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          <SectionHeading eyebrow="Expertise" title="Industries we serve" text="Each sector has its own priorities, regulations and risks. We adjust planning, supervision and communication accordingly." />
          {industries.map((it, i) => (
            <article key={it.slug} id={it.slug} className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-2 [&>div]:min-w-0">
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <Img src={it.image} alt={`${it.title} sector`} ratio="aspect-[3/2]" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-accent">
                  <Icon name={it.icon} />
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase text-navy-900 sm:text-4xl">{it.title}</h3>
                <p className="mt-2 text-lg text-slate-soft">{it.text}</p>
                <ul className="mt-4 space-y-2">
                  {details[it.slug].map((d) => (
                    <li key={d} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />{d}</li>
                  ))}
                </ul>
                <Link to="/projects" className="mt-5 inline-block font-semibold text-navy-900 underline underline-offset-4 hover:text-accent-dark">
                  Browse related projects
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section id="process" className="scroll-mt-20 bg-navy-900 py-16 sm:py-24">
        <Container>
          <SectionHeading light eyebrow="Delivery Process" title="Eight steps from idea to aftercare" text="Each project is tailored, but this sequence keeps decisions, risks and quality under control." />
          <ProcessTimeline steps={processSteps} cols={4} dark />
        </Container>
      </section>

      <CTABanner title="Tell us about your sector and site" />
    </>
  )
}
