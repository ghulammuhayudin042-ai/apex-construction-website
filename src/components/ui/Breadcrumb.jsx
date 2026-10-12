import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items, light = true }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={`flex flex-wrap items-center gap-1 text-sm ${light ? 'text-navy-100' : 'text-slate-soft'}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1">
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined} className="font-semibold text-white">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="underline-offset-4 hover:text-accent hover:underline">
                  {item.label}
                </Link>
              )}
              {!last && <ChevronRight className="h-4 w-4 opacity-60" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
