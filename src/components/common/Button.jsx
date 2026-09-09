import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'

const base =
  'inline-flex items-center justify-center gap-2 font-heading font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_12px_30px_rgba(16,38,31,0.12)]'

const variants = {
  primary: 'bg-lime text-forest-dark hover:bg-[#eaff7a] px-6 py-3.5 text-sm md:text-base rounded-full',
  outline: 'border border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-cream px-6 py-3.5 text-sm md:text-base rounded-full',
  outlineLight: 'border border-cream/40 text-cream hover:border-lime hover:text-lime px-6 py-3.5 text-sm md:text-base rounded-full',
  darkOutline: 'border border-forest-dark/40 text-forest-dark hover:bg-forest-dark hover:text-lime px-6 py-3.5 text-sm md:text-base rounded-full',
}

const icons = { arrowRight: ArrowRight, arrowDown: ArrowDown }

export default function Button({
  children,
  variant = 'primary',
  icon,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const Icon = icon ? icons[icon] : null
  const classes = `group ${base} ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  )
}
