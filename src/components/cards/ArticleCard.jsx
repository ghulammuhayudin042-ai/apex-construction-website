import { Link } from 'react-router-dom'
import { User, Calendar } from 'lucide-react'
import Img from '../ui/Img'
import { formatDate } from '../../utils/validators'

export default function ArticleCard({ article, as: Heading = 'h3' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/insights/${article.slug}`} aria-hidden="true" tabIndex={-1}>
        <Img src={article.image} alt={`Cover image for ${article.title}`} className="transition-transform duration-500 group-hover:scale-[1.04]" ratio="aspect-[16/9]" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded bg-navy-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
          {article.category}
        </span>
        <Heading className="mt-3 font-display text-2xl font-bold leading-tight text-navy-900">
          <Link to={`/insights/${article.slug}`} className="hover:text-accent-dark">{article.title}</Link>
        </Heading>
        <p className="mt-2 text-slate-soft">{article.excerpt}</p>
        <p className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-sm text-slate-soft">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" />{article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /><time dateTime={article.date}>{formatDate(article.date)}</time></span>
        </p>
      </div>
    </article>
  )
}
