export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, as: Tag = 'h2' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${alignCls}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-accent' : 'text-accent-dark'}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`font-display text-4xl font-bold uppercase sm:text-5xl ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </Tag>
      <span className={`mt-4 block h-1 w-16 bg-accent ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden="true" />
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-navy-100' : 'text-slate-soft'}`}>{text}</p>}
    </div>
  )
}
