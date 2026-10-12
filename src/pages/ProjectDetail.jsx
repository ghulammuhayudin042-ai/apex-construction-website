import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Building, Calendar, Clock, Flag, MapPin, Ruler, Users } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Img from '../components/ui/Img'
import ProjectCard from '../components/cards/ProjectCard'
import CTABanner from '../components/sections/CTABanner'
import { getProject, projects } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [active, setActive] = useState(0)
  useDocumentTitle(project ? project.title : 'Project not found')
  if (!project) return <NotFound message="That project could not be found." />

  const facts = [
    { icon: Users, label: 'Client / type', value: project.client },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Clock, label: 'Duration', value: project.duration },
    { icon: Calendar, label: 'Year', value: String(project.year) },
    { icon: Flag, label: 'Status', value: project.status },
    { icon: Building, label: 'Category', value: project.category },
  ]

  const story = [
    { n: '01', title: 'Challenge', text: project.challenge },
    { n: '02', title: 'Solution', text: project.solution },
    { n: '03', title: 'Execution', text: project.execution },
    { n: '04', title: 'Result', text: project.result },
  ]

  const related = [
    ...projects.filter((p) => p.slug !== slug && p.category === project.category),
    ...projects.filter((p) => p.slug !== slug && p.category !== project.category),
  ].slice(0, 3)

  return (
    <>
      <PageHero
        title={project.title}
        text={project.summary}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects', to: '/projects' }, { label: project.title }]}
        image={project.image}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <Img src={project.gallery[0]} alt={`${project.title} main view`} ratio="aspect-[16/8]" className="rounded-lg shadow-xl" eager />

          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {facts.map(({ icon: I, label, value }) => (
              <div key={label} className="rounded-lg border border-navy-100 bg-white p-4">
                <I className="h-5 w-5 text-accent-dark" aria-hidden="true" />
                <dt className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-soft">{label}</dt>
                <dd className="mt-0.5 font-semibold text-navy-900">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-navy-900">Project overview</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-soft">{project.description}</p>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase text-navy-900">Scope of work</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-3 rounded-md bg-navy-50 p-3">
                    <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <aside aria-label="Project statistics" className="rounded-lg bg-navy-900 p-6 text-white">
              <h2 className="font-display text-2xl font-bold uppercase">Project statistics</h2>
              <dl className="mt-4 space-y-4">
                {project.stats.map((s) => (
                  <div key={s.label} className="border-b border-navy-700 pb-3 last:border-0">
                    <dd className="font-display text-4xl font-bold text-accent">{s.value}</dd>
                    <dt className="text-sm text-navy-100">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-xs text-navy-100/70">Demo figures for layout purposes.</p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Project Story" title="Challenge to result" />
          <ol className="grid gap-5 md:grid-cols-2">
            {story.map((s) => (
              <li key={s.n} className="rounded-lg border border-navy-100 bg-white p-6 shadow-sm">
                <p className="font-display text-5xl font-bold text-accent-dark" aria-hidden="true">{s.n}</p>
                <h3 className="font-display text-2xl font-bold uppercase text-navy-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Gallery" title="Project images" />
          <Img src={project.gallery[active]} alt={`${project.title} gallery image ${active + 1}`} ratio="aspect-[16/9]" className="rounded-lg shadow-lg" />
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {project.gallery.map((g, i) => (
              <li key={g}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show gallery image ${i + 1}`}
                  aria-pressed={active === i}
                  className={`block w-full overflow-hidden rounded-md border-4 ${active === i ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <Img src={g} alt="" ratio="aspect-[3/2]" />
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="More Work" title="Related projects" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <li key={p.slug}><ProjectCard project={p} compact /></li>)}
          </ul>
        </Container>
      </section>

      <CTABanner
        title="Request a similar project"
        text={`Interested in something like ${project.title}? Tell us about your site and goals.`}
        quoteHref={`/contact?type=${encodeURIComponent(project.category)}#quote`}
      />
    </>
  )
}
