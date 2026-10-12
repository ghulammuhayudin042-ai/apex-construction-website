import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import FeatureGrid from '../components/sections/FeatureGrid'
import Accordion from '../components/ui/Accordion'
import CTABanner from '../components/sections/CTABanner'
import { services } from '../data/services'
import { homeProcess } from '../data/content'

const generalFaqs = [
  { q: 'Can I hire you for only part of a project?', a: 'Yes. We can take on specific packages such as structure, finishing or civil works, as well as full-build contracts.' },
  { q: 'Do services overlap?', a: 'Often. A commercial build may include civil works, interior fit-out and project management. We combine services under one plan.' },
  { q: 'How do I choose the right service?', a: 'Describe your goals in the quote form, and our team will recommend the most suitable scope and delivery approach.' },
]

const quality = [
  { icon: 'ClipboardCheck', title: 'Quality', text: 'Hold points, material checks and workmanship inspections at key stages.' },
  { icon: 'ShieldCheck', title: 'Safety', text: 'Site inductions, task planning and routine safety walks on every site.' },
  { icon: 'Handshake', title: 'Communication', text: 'Regular progress updates and one point of contact for decisions.' },
]

export default function Services() {
  useDocumentTitle('Services')
  return (
    <>
      <PageHero
        title="Our Services"
        text="Ten service lines covering construction, engineering, finishing, management and maintenance."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image="/images/service-general-construction.svg"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Services Directory" title="What we can build for you" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}><ServiceCard service={s} /></li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Methodology" title="A consistent delivery method" align="center" text="Whatever the service, we follow the same disciplined sequence." />
          <ProcessTimeline steps={homeProcess} cols={5} />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Quality & Safety" title="Standards that apply to every service" />
          <FeatureGrid items={quality} cols={3} />
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Service questions" align="center" />
          <Accordion items={generalFaqs} />
        </Container>
      </section>

      <CTABanner title="Not sure which service you need?" text="Describe your project and we will recommend a suitable scope and approach." />
    </>
  )
}
