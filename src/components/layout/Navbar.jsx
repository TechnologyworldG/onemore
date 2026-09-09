import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../common/Button'
import MobileMenu from './MobileMenu'

const links = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'What We Do' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/events', label: 'Events' },
  { to: '/stories', label: 'Stories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          transparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-md border-b border-forest/10'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <Logo variant={transparent ? 'light' : 'dark'} />
          <ul className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors ${
                      transparent ? 'text-cream/90 hover:text-lime' : 'text-forest/80 hover:text-forest'
                    } ${isActive ? (transparent ? 'text-lime' : 'text-forest font-semibold') : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Button to="/join" variant="primary" icon="arrowRight">
              Join the Movement
            </Button>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden grid place-items-center w-10 h-10 ${transparent ? 'text-cream' : 'text-forest'}`}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  )
}
