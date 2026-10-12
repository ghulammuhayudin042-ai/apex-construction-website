import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <img
        src="/images/hero.svg"
        alt=""
        width="1200"
        height="800"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" aria-hidden="true" />
      <Container className="flex min-h-[560px] flex-col justify-center py-16 sm:min-h-[640px] lg:min-h-[700px]">
        <p className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Construction &amp; Engineering
        </p>
        <h1 className="reveal max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
          Building with precision. <span className="text-accent">Delivering with trust.</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
          Residential, commercial, industrial and infrastructure projects planned carefully, built safely and
          handed over with clear documentation.
        </p>
        <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row">
          <Button to="/contact#quote" size="lg" icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
            Request a Quote
          </Button>
          <Button to="/projects" size="lg" variant="outlineLight">
            View Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}
