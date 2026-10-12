import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill={light ? '#f59e0b' : '#0b1f3a'} />
        <path d="M12 50 32 12l20 38h-9L32 28 21 50z" fill={light ? '#0b1f3a' : '#f59e0b'} />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-2xl font-bold uppercase tracking-wide ${light ? 'text-white' : 'text-navy-900'}`}>
          {site.shortName}
        </span>
        <span className={`hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] min-[400px]:block ${light ? 'text-accent' : 'text-slate-soft'}`}>
          {site.tagline}
        </span>
      </span>
    </Link>
  )
}
