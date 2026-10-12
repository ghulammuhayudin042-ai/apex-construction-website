import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site'
import Container from '../ui/Container'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const skipAnimation =
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  const [n, setN] = useState(skipAnimation ? value : 0)

  useEffect(() => {
    const el = ref.current
    if (!el || skipAnimation) return undefined
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 1200
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur)
          setN(Math.round(value * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, skipAnimation])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section aria-label="Company statistics" className="bg-navy-900 text-white">
      <Container className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="px-2 text-center lg:border-l lg:border-navy-700 lg:first:border-l-0">
            <p className="font-display text-5xl font-bold text-accent sm:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-navy-100 sm:text-base">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
