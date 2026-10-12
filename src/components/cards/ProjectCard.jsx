import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'
import Img from '../ui/Img'

export default function ProjectCard({ project, compact = false, as: Heading = 'h3' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/projects/${project.slug}`} className="relative block" aria-hidden="true" tabIndex={-1}>
        <Img src={project.image} alt={`${project.title} — ${project.category} project in ${project.location}`} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className="absolute left-4 top-4 rounded bg-navy-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {project.category}
        </span>
        {project.status !== 'Completed' && (
          <span className="absolute right-4 top-4 rounded bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
            {project.status}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Heading className="font-display text-2xl font-bold uppercase text-navy-900">
          <Link to={`/projects/${project.slug}`} className="hover:text-accent-dark">{project.title}</Link>
        </Heading>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-soft">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{project.location}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" />{project.year}</span>
        </p>
        {!compact && <p className="mt-3 text-slate-soft">{project.summary}</p>}
      </div>
    </article>
  )
}
