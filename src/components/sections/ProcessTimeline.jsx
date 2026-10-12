import Icon from '../ui/Icon'

// Horizontal timeline on desktop, vertical stepper on mobile/tablet.
// cols="4" suits 8 steps (two rows); cols="5" suits 5 steps (one row).
export default function ProcessTimeline({ steps, cols = 4, dark = false }) {
  const grid = cols === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
  // Hide the connector after the last item in every desktop row.
  const rowEnd = cols === 5 ? 'lg:[&:nth-child(5n)]:before:hidden' : 'lg:[&:nth-child(4n)]:before:hidden'

  return (
    <ol className={`grid gap-0 ${grid} lg:gap-y-12`}>
      {steps.map((s) => (
        <li
          key={s.n}
          className={`relative pb-10 pl-20 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-6
            before:absolute before:left-7 before:top-14 before:bottom-0 before:w-0.5 before:content-[''] last:before:hidden
            ${dark ? 'before:bg-navy-700' : 'before:bg-navy-100'}
            lg:before:left-16 lg:before:right-0 lg:before:top-7 lg:before:bottom-auto lg:before:h-0.5 lg:before:w-auto
            ${rowEnd}`}
        >
          <span
            className={`absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 ${
              dark ? 'border-navy-900 bg-accent text-navy-950' : 'border-white bg-navy-900 text-accent'
            } shadow-md lg:static`}
          >
            <Icon name={s.icon} className="h-6 w-6" />
          </span>
          <p className={`mt-0 text-sm font-bold tracking-widest lg:mt-4 ${dark ? 'text-accent' : 'text-accent-dark'}`}>STEP {s.n}</p>
          <h3 className={`mt-1 font-display text-2xl font-bold uppercase ${dark ? 'text-white' : 'text-navy-900'}`}>{s.title}</h3>
          <p className={`mt-2 text-[15px] leading-relaxed ${dark ? 'text-navy-100' : 'text-slate-soft'}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
