import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound({ message = 'The page you are looking for does not exist or has moved.' }) {
  useDocumentTitle('Page not found')
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="font-display text-8xl font-bold text-accent">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold uppercase text-navy-900 sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-soft">{message}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </Container>
    </section>
  )
}
