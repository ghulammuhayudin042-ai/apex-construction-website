import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Img from '../ui/Img'
import { industries } from '../../data/content'

export default function IndustriesGrid({ limit }) {
  const items = limit ? industries.slice(0, limit) : industries
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <li key={it.slug} className="group overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:shadow-xl">
          <Link to={`/industries#${it.slug}`} className="block">
            <Img src={it.image} alt={`${it.title} sector`} ratio="aspect-[4/3]" className="transition-transform duration-500 group-hover:scale-105" />
            <div className="flex items-start gap-3 p-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-navy-900 text-accent">
                <Icon name={it.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-navy-900">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-soft">{it.text}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
