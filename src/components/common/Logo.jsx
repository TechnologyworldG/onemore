import { Link } from 'react-router-dom'

// Placeholder wordmark: a "1" mark plus the ONE MORE name. Swap this
// component's contents for a real logo/SVG when one exists — every
// place the logo appears (navbar, mobile menu, footer) imports this
// single file.
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'
  return (
    <Link
      to="/"
      aria-label="ONE MORE — home"
      className={`inline-flex items-center gap-2 font-heading font-semibold tracking-tight ${className}`}
    >
      <span
        className={`grid place-items-center w-8 h-8 text-base ${
          isLight ? 'bg-lime text-forest-dark' : 'bg-forest text-lime'
        }`}
      >
        1
      </span>
      <span className={`text-lg ${isLight ? 'text-cream' : 'text-forest'}`}>ONE MORE</span>
    </Link>
  )
}
