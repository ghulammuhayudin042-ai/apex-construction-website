import { Eye, Target } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Img from '../components/ui/Img'
import FeatureGrid from '../components/sections/FeatureGrid'
import CTABanner from '../components/sections/CTABanner'
import Icon from '../components/ui/Icon'
import { capabilities, safetyQuality, team, timeline, values, workforce } from '../data/content'

export default function About() {
  useDocumentTitle('About Us')
  return (
    <>
      <PageHero
        title="About Apex Build"
        text="A construction and engineering company focused on safe delivery, dependable quality and long-term client relationships."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        image="/images/about.svg"
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Who we are" />
            <div className="-mt-6 space-y-4 text-lg leading-relaxed text-slate-soft">
              <p>
                Apex Build is a full-service contractor serving residential, commercial, industrial and infrastructure
                clients. We combine engineering coordination, procurement and site management so that clients deal
                with one organized team rather than many separate parties.
              </p>
              <p>
                Our specialties include reinforced concrete and steel-frame buildings, housing developments, civil
                works, renovation and interior fit-out. We work with developers, owners, institutions and families,
                and we adjust our communication and reporting to fit each client.
              </p>
              <p className="text-sm italic">
                Company details on this page are demo placeholders. Replace them with verified information.
              </p>
            </div>
          </div>
          <Img src="/images/about.svg" alt="Apex Build team site with tower crane" ratio="aspect-[4/3]" className="rounded-lg shadow-xl" />
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', text: 'To deliver safe, high-quality construction through careful planning, honest communication and skilled people, so clients can rely on us from first conversation to final handover.' },
            { icon: Eye, title: 'Our Vision', text: 'To be a trusted long-term building partner known for reliability, innovation and responsible practices that benefit clients, communities and our own teams.' },
          ].map(({ icon: I, title, text }) => (
            <div key={title} className="rounded-lg border border-navy-100 bg-white p-8 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-md bg-navy-900 text-accent">
                <I className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold uppercase text-navy-900">{title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-soft">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Journey" title="Company timeline" text="Editable demo milestones." align="center" />
          <ol className="relative mx-auto max-w-3xl border-l-2 border-navy-100 pl-8 sm:pl-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-accent shadow sm:-left-[49px]" aria-hidden="true" />
                <p className="font-display text-3xl font-bold text-accent-dark">{t.year}</p>
                <h3 className="font-display text-2xl font-bold uppercase text-navy-900">{t.title}</h3>
                <p className="mt-1 text-slate-soft">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <Container>
          <SectionHeading light eyebrow="Core Values" title="What guides our work" />
          <FeatureGrid items={values} cols={4} dark />
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Leadership" title="Meet the leadership team" text="Demo profiles. Replace names, roles and biographies with real team information." />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.role} className="overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm">
                <Img src={m.image} alt={`${m.name}, ${m.role} (placeholder portrait)`} ratio="aspect-[4/3]" />
                <div className="p-5">
                  <h3 className="font-display text-2xl font-bold uppercase text-navy-900">{m.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">{m.role}</p>
                  <p className="mt-2 text-slate-soft">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Workforce */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our People" title="Workforce" text="Delivery depends on skilled people in the office and on site." />
          <FeatureGrid items={workforce} cols={4} />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="What we manage in-house" />
          <FeatureGrid items={capabilities} cols={3} />
        </Container>
      </section>

      {/* Safety & Quality */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Safety & Quality" title="How we protect people and standards" />
          <ul className="grid gap-6 md:grid-cols-3">
            {safetyQuality.map((s) => (
              <li key={s.title} className="rounded-lg border-l-4 border-accent bg-white p-6 shadow-sm">
                <Icon name={s.icon} className="h-8 w-8 text-navy-900" />
                <h3 className="mt-3 font-display text-2xl font-bold uppercase text-navy-900">{s.title}</h3>
                <p className="mt-2 text-slate-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner title="Let’s talk about your next build" />
    </>
  )
}
