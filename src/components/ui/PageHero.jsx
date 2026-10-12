import Breadcrumb from './Breadcrumb'
import Container from './Container'

export default function PageHero({ title, text, crumbs, image, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {image && (
        <img
          src={image}
          alt=""
          width="1200"
          height="800"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/50" aria-hidden="true" />
      <Container className="py-14 sm:py-20">
        {crumbs && <Breadcrumb items={crumbs} />}
        <h1 className="font-display text-4xl font-bold uppercase sm:text-6xl">{title}</h1>
        <span className="mt-4 block h-1 w-16 bg-accent" aria-hidden="true" />
        {text && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-100">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </Container>
    </section>
  )
}
