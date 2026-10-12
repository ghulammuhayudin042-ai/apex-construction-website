import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Hero from '../components/sections/Hero'
import StatsBar from '../components/sections/StatsBar'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import CTABanner from '../components/sections/CTABanner'
import FeatureGrid from '../components/sections/FeatureGrid'
import IndustriesGrid from '../components/sections/IndustriesGrid'
import ServiceCard from '../components/cards/ServiceCard'
import ProjectCard from '../components/cards/ProjectCard'
import TestimonialCard from '../components/cards/TestimonialCard'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Img from '../components/ui/Img'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { homeProcess, testimonials, whyChoose } from '../data/content'

export default function Home() {
  useDocumentTitle('')
  return (
    <>
      <Hero />
      <StatsBar />

      {/* About preview */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Img src="/images/about.svg" alt="Building site at dawn with a tower crane" ratio="aspect-[4/3]" className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-5 right-4 rounded-md bg-accent px-6 py-4 text-navy-950 shadow-lg sm:-right-4">
              <p className="font-display text-4xl font-bold leading-none">Safety</p>
              <p className="text-sm font-semibold">is part of every plan</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="About Us" title="A construction partner you can rely on" />
            <p className="-mt-6 text-lg leading-relaxed text-slate-soft">
              We are a full-service construction and engineering company working with homeowners, developers and
              organizations. Our approach is simple: plan carefully, communicate clearly, build safely and finish
              properly.
            </p>
            <ul className="mt-6 space-y-3">
              {['Residential, commercial, industrial and civil expertise', 'Dedicated project management on every job', 'Inspection checkpoints from foundation to handover'].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" className="mt-8" icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What We Do" title="Our services" text="From groundworks to final finishes, we cover the full lifecycle of your project." />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}><ServiceCard service={s} showBenefits={false} /></li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button to="/services" variant="outline">View All Services</Button>
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Portfolio" title="Featured projects" />
            <Link to="/projects" className="mb-10 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-accent-dark sm:mb-14">
              See all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <li key={p.slug}><ProjectCard project={p} /></li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <Container>
          <SectionHeading light eyebrow="Why Choose Us" title="Built on safety, quality and communication" />
          <FeatureGrid items={whyChoose} dark />
        </Container>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Industries" title="Sectors we serve" text="Different sectors have different priorities. We adapt our planning and site practices accordingly." />
          <IndustriesGrid limit={4} />
          <div className="mt-10 text-center">
            <Button to="/industries" variant="outline">Explore All Industries</Button>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How We Work" title="From consultation to handover" align="center" />
          <ProcessTimeline steps={homeProcess} cols={5} />
          <div className="mt-12 text-center">
            <Button to="/industries#process" variant="outline">See the full delivery process</Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What clients say" text="Sample testimonials shown for layout. Replace with verified client feedback." />
          <ul className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={i}><TestimonialCard item={t} /></li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
