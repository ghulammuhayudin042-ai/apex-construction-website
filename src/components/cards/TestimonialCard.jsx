import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ item }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-navy-100 bg-white p-6 shadow-sm">
      <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
      <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars" role="img">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-charcoal">“{item.quote}”</blockquote>
      <figcaption className="mt-5 border-t border-navy-100 pt-4">
        <span className="block font-semibold text-navy-900">{item.name}</span>
        <span className="text-sm text-slate-soft">{item.role}</span>
      </figcaption>
    </figure>
  )
}
