import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { nav, site } from '../../data/site'
import Logo from './Logo'
import Button from '../ui/Button'

const linkCls = ({ isActive }) =>
  `relative px-1 py-2 text-[15px] font-semibold transition-colors hover:text-accent-dark ${
    isActive ? 'text-navy-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-accent' : 'text-charcoal'
  }`

export default function Header() {
  const location = useLocation()
  // The menu is "open for" a specific path, so navigating elsewhere closes it automatically.
  const [openFor, setOpenFor] = useState(null)
  const open = openFor === location.pathname
  const setOpen = (v) => setOpenFor((cur) => {
    const isOpen = cur === location.pathname
    const next = typeof v === 'function' ? v(isOpen) : v
    return next ? location.pathname : null
  })
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  // Escape closes, body scroll lock while open, move focus into the menu.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenFor(null)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('a')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-950 text-sm text-navy-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <span>{site.contact.hours[0].days}: {site.contact.hours[0].time}</span>
          <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-accent">
            <Phone className="h-4 w-4" aria-hidden="true" /> {site.contact.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Always visible: short label on phones, full label from 640px up. */}
          <Button to="/contact#quote" size="sm" className="hidden min-[400px]:inline-flex !px-3 sm:!px-4">
            <span className="sm:hidden">Get Quote</span>
            <span className="hidden sm:inline">Request a Quote</span>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-navy-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy-100 bg-white shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-md px-4 py-3 text-lg font-semibold ${
                        isActive ? 'bg-navy-900 text-white' : 'text-navy-900 hover:bg-navy-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button to="/contact#quote" className="mt-4 w-full">
              Request a Quote
            </Button>
            <a href={site.contact.phoneHref} className="mt-4 flex items-center justify-center gap-2 py-2 text-navy-900">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
