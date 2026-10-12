import { ArrowRight, Phone } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { site } from '../../data/site'

export default function CTABanner({
  title = 'Ready to discuss your project?',
  text = 'Tell us about your site, scope and timeline. We will review it and respond with clear next steps.',
  quoteHref = '/contact#quote',
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <img src="/images/cta-bg.svg" alt="" width="1200" height="800" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 to-navy-900/70" aria-hidden="true" />
      <Container className="flex flex-col items-start justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">{title}</h2>
          <p className="mt-3 text-lg text-navy-100">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button to={quoteHref} size="lg" icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
            Request a Quote
          </Button>
          <Button href={site.contact.phoneHref} size="lg" variant="outlineLight" icon={<Phone className="h-5 w-5" aria-hidden="true" />}>
            Call Us
          </Button>
        </div>
      </Container>
    </section>
  )
}
