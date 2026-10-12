import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items, defaultOpen = 0, as: Heading = 'h3' }) {
  const baseId = useId()
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-navy-100 rounded-lg border border-navy-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={item.q}>
            <Heading className="font-sans">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-900 hover:bg-navy-50 sm:text-lg"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent-dark transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-5 pb-5 text-slate-soft leading-relaxed">
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
