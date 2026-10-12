import useDocumentTitle from '../../hooks/useDocumentTitle'
import PageHero from './PageHero'
import Container from './Container'

export default function LegalPage({ title, updated, intro, sections }) {
  useDocumentTitle(title)
  return (
    <>
      <PageHero title={title} text={`Last updated: ${updated}`} crumbs={[{ label: 'Home', to: '/' }, { label: title }]} />
      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <p className="rounded-md border-l-4 border-accent bg-navy-50 p-4 text-sm text-slate-soft">{intro}</p>
          {sections.map((s) => (
            <div key={s.title} className="mt-8">
              <h2 className="font-display text-3xl font-bold text-navy-900">{s.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-slate-soft">{s.text}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
