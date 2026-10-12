import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import ProjectCard from '../components/cards/ProjectCard'
import CTABanner from '../components/sections/CTABanner'
import { projectCategories, projects } from '../data/projects'

const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a)
const locations = [...new Set(projects.map((p) => p.location))].sort()

export default function Projects() {
  useDocumentTitle('Projects')
  const [params, setParams] = useSearchParams()
  const initial = projectCategories.includes(params.get('category')) ? params.get('category') : 'All'
  const [category, setCategory] = useState(initial)
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')
  const [location, setLocation] = useState('')

  const counts = useMemo(() => {
    const c = { All: projects.length }
    projectCategories.forEach((k) => { c[k] = projects.filter((p) => p.category === k).length })
    return c
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) =>
      (category === 'All' || p.category === category) &&
      (!year || String(p.year) === year) &&
      (!location || p.location === location) &&
      (!q || [p.title, p.location, p.category, p.summary].join(' ').toLowerCase().includes(q)),
    )
  }, [category, query, year, location])

  const pick = (c) => {
    setCategory(c)
    if (c === 'All') setParams({}, { replace: true })
    else setParams({ category: c }, { replace: true })
  }
  const clear = () => { pick('All'); setQuery(''); setYear(''); setLocation('') }
  const filtersActive = category !== 'All' || query || year || location

  const selectCls = 'w-full rounded-md border border-navy-100 bg-white px-3 py-2.5 text-charcoal'

  return (
    <>
      <PageHero
        title="Our Projects"
        text="A selection of residential, commercial, industrial, infrastructure, renovation and interior projects. Project details are demo content."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        image="/images/project-harbor-view-towers.svg"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {['All', ...projectCategories].map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => pick(c)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c ? 'border-navy-900 bg-navy-900 text-white' : 'border-navy-100 bg-white text-navy-900 hover:border-navy-700'
                }`}
              >
                {c} <span className={category === c ? 'text-accent' : 'text-slate-soft'}>({counts[c]})</span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto]">
            <div className="relative">
              <label htmlFor="project-search" className="sr-only">Search projects</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-soft" aria-hidden="true" />
              <input
                id="project-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, location or keyword"
                className={`${selectCls} pl-10`}
              />
            </div>
            <div>
              <label htmlFor="project-year" className="sr-only">Filter by year</label>
              <select id="project-year" value={year} onChange={(e) => setYear(e.target.value)} className={selectCls}>
                <option value="">All years</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="project-location" className="sr-only">Filter by location</label>
              <select id="project-location" value={location} onChange={(e) => setLocation(e.target.value)} className={selectCls}>
                <option value="">All locations</option>
                {locations.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <button
              type="button"
              onClick={clear}
              disabled={!filtersActive}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy-100 px-4 py-2.5 font-semibold text-navy-900 hover:border-navy-700 disabled:opacity-40"
            >
              <X className="h-4 w-4" aria-hidden="true" /> Reset
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-soft" role="status" aria-live="polite">
            Showing {filtered.length} of {projects.length} projects
          </p>

          {filtered.length > 0 ? (
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <li key={p.slug}><ProjectCard project={p} as="h2" /></li>)}
            </ul>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-navy-100 bg-navy-50 p-12 text-center">
              <p className="font-display text-3xl font-bold uppercase text-navy-900">No projects match</p>
              <p className="mt-2 text-slate-soft">Try a different category or clear your filters.</p>
              <button type="button" onClick={clear} className="mt-5 rounded-md bg-navy-900 px-5 py-2.5 font-semibold text-white hover:bg-navy-700">Clear filters</button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner title="Have a similar project in mind?" text="Share your scope and timeline and we will come back with next steps." />
    </>
  )
}
