import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Time Period', to: '/time-period' },
  { label: 'Characteristics', to: '/characteristics' },
  { label: 'Discovery', to: '/discovery' },
  { label: 'Evolution', to: '/evolution' },
  { label: 'Extinction', to: '/extinction' },
  { label: 'Sources', to: '/sources' },
]

function linkClasses({ isActive }) {
  return [
    'rounded-full px-4 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-forest text-white shadow-md'
      : 'text-forest hover:bg-sand/50 hover:text-forest',
  ].join(' ')
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/70">
            Historical Geology
          </p>
          <NavLink
            to="/"
            className="font-serif text-xl font-semibold text-forest transition hover:text-forest/80"
          >
            Ankylosaurus
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-forest/10 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    isActive
                      ? 'bg-forest text-white'
                      : 'text-forest hover:bg-sand/40',
                  ].join(' ')
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
