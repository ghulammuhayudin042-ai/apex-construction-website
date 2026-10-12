import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeading from '../components/ui/SectionHeading'
import Img from '../components/ui/Img'
import ArticleCard from '../components/cards/ArticleCard'
import CTABanner from '../components/sections/CTABanner'
import { articles, getArticle } from '../data/articles'
import { formatDate } from '../utils/validators'
import NotFound from './NotFound'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = getArticle(slug)
  useDocumentTitle(article ? article.title : 'Article not found')
  if (!article) return <NotFound message="That article could not be found." />

  const related = [
    ...articles.filter((a) => a.slug !== slug && a.category === article.category),
    ...articles.filter((a) => a.slug !== slug && a.category !== article.category),
  ].slice(0, 3)

  return (
    <>
      <section className="bg-navy-900 text-white">
        <Container className="max-w-4xl py-12 sm:py-16">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: article.category }]} />
          <span className="rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">{article.category}</span>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">{article.title}</h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-100">
            <span className="inline-flex items-center gap-2"><User className="h-4 w-4" aria-hidden="true" />{article.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" /><time dateTime={article.date}>{formatDate(article.date)}</time></span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />{article.readTime}</span>
          </p>
        </Container>
      </section>

      <article className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Img src={article.image} alt={`Cover image for ${article.title}`} ratio="aspect-[16/9]" className="-mt-20 rounded-lg shadow-xl sm:-mt-24" eager />
          <p className="mt-8 text-xl leading-relaxed text-charcoal">{article.excerpt}</p>
          <div className="mt-6">
            {article.content.map((block, i) =>
              block.type === 'h' ? (
                <h2 key={i} className="mb-3 mt-10 font-display text-3xl font-bold text-navy-900">{block.text}</h2>
              ) : (
                <p key={i} className="mb-4 text-lg leading-relaxed text-slate-soft">{block.text}</p>
              ),
            )}
          </div>
          <p className="mt-10 rounded-md bg-navy-50 p-4 text-sm text-slate-soft">
            General information only. Requirements vary by project and location. Consult qualified professionals before making decisions.
          </p>
          <Link to="/insights" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-accent-dark">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all insights
          </Link>
        </Container>
      </article>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Keep Reading" title="Related articles" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => <li key={a.slug}><ArticleCard article={a} /></li>)}
          </ul>
        </Container>
      </section>

      <CTABanner title="Planning a project?" text="Talk to our team about scope, timeline and budget." />
    </>
  )
}
