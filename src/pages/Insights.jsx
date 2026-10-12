import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import ArticleCard from '../components/cards/ArticleCard'
import CTABanner from '../components/sections/CTABanner'
import { articleCategories, articles } from '../data/articles'

const PAGE = 6

export default function Insights() {
  useDocumentTitle('Insights')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(PAGE)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles
      .filter((a) => (category === 'All' || a.category === category) &&
        (!q || [a.title, a.excerpt, a.category, a.author].join(' ').toLowerCase().includes(q)))
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [category, query])

  const shown = filtered.slice(0, visible)

  return (
    <>
      <PageHero
        title="Insights"
        text="Practical articles on construction, project management, safety, materials and design."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        image="/images/article-site-safety-basics.svg"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
              {['All', ...articleCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => { setCategory(c); setVisible(PAGE) }}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                    category === c ? 'border-navy-900 bg-navy-900 text-white' : 'border-navy-100 bg-white text-navy-900 hover:border-navy-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:max-w-xs">
              <label htmlFor="article-search" className="sr-only">Search articles</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-soft" aria-hidden="true" />
              <input
                id="article-search"
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisible(PAGE) }}
                placeholder="Search articles"
                className="w-full rounded-md border border-navy-100 bg-white py-2.5 pl-10 pr-3"
              />
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-soft" role="status" aria-live="polite">
            Showing {shown.length} of {filtered.length} articles
          </p>

          {shown.length > 0 ? (
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((a) => <li key={a.slug}><ArticleCard article={a} as="h2" /></li>)}
            </ul>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-navy-100 bg-navy-50 p-12 text-center">
              <p className="font-display text-3xl font-bold uppercase text-navy-900">No articles found</p>
              <p className="mt-2 text-slate-soft">Try another category or search term.</p>
            </div>
          )}

          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE)}
                className="rounded-md border-2 border-navy-900 px-8 py-3 font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
              >
                Load more articles
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner title="Have a question about your build?" text="Our team is happy to talk through options, scope and timelines." />
    </>
  )
}
