import Icon from '../ui/Icon'

// Reusable icon + title + text grid (Why Choose Us, Values, Capabilities, Workforce, etc.)
export default function FeatureGrid({ items, cols = 3, dark = false }) {
  const colCls = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[cols]
  return (
    <ul className={`grid gap-5 ${colCls}`}>
      {items.map((it) => (
        <li
          key={it.title}
          className={`rounded-lg border p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${
            dark ? 'border-navy-700 bg-navy-800' : 'border-navy-100 bg-white'
          }`}
        >
          <span className={`flex h-12 w-12 items-center justify-center rounded-md ${dark ? 'bg-accent text-navy-950' : 'bg-navy-900 text-accent'}`}>
            <Icon name={it.icon} />
          </span>
          <h3 className={`mt-4 font-display text-2xl font-bold uppercase ${dark ? 'text-white' : 'text-navy-900'}`}>{it.title}</h3>
          <p className={`mt-2 leading-relaxed ${dark ? 'text-navy-100' : 'text-slate-soft'}`}>{it.text}</p>
        </li>
      ))}
    </ul>
  )
}
