import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Icon from '../ui/Icon'
import Img from '../ui/Img'

export default function ServiceCard({ service, showBenefits = true, as: Heading = 'h3' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Img src={service.image} alt={`${service.title} illustration`} className="transition-transform duration-500 group-hover:scale-[1.03]" ratio="aspect-[16/9]" />
        <span className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent text-navy-950 shadow-md">
          <Icon name={service.icon} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-9">
        <Heading className="font-display text-2xl font-bold uppercase text-navy-900">{service.title}</Heading>
        <p className="mt-2 text-slate-soft">{service.short}</p>
        {showBenefits && (
          <ul className="mt-4 space-y-1.5 text-sm text-charcoal">
            {service.benefits.slice(0, 2).map((b) => (
              <li key={b} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <Link
          to={`/services/${service.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-navy-900 hover:text-accent-dark"
          aria-label={`View service: ${service.title}`}
        >
          View Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
