import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'
import { faqs } from '../data/content'

export default function Faq() {
  useDocumentTitle('FAQ')
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        text="Answers to common questions about quotations, timelines, quality, safety and aftercare."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Accordion items={faqs} as="h2" />
          <div className="mt-12 rounded-lg bg-navy-50 p-8 text-center">
            <h2 className="font-display text-3xl font-bold uppercase text-navy-900">Still have questions?</h2>
            <p className="mt-2 text-slate-soft">Send us a message and a team member will get back to you.</p>
            <Button to="/contact" className="mt-5">Contact Us</Button>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  )
}
