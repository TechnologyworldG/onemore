import { Link } from 'react-router-dom'
import { InstagramIcon, FacebookIcon, LinkedinIcon, TiktokIcon } from '../common/SocialIcons'
import Logo from '../common/Logo'

const links = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/events', label: 'Events' },
  { to: '/stories', label: 'Stories' },
  { to: '/join', label: 'Join' },
]

const socials = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://facebook.com', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://tiktok.com', label: 'TikTok', Icon: TiktokIcon },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-12 border-b border-cream/10">
          <div>
            <Logo variant="light" />
            <p className="mt-5 font-heading text-2xl md:text-3xl leading-tight max-w-sm">
              Young people. Shared potential. Collective action.
            </p>
          </div>
          <div>
            <p className="text-sm text-cream/50 mb-4">Explore</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cream/80 hover:text-lime transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-cream/50 mb-4">Connect</p>
            <a href="mailto:hello@onemore.org" className="block text-cream/80 hover:text-lime transition-colors mb-4">
              hello@onemore.org
            </a>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 border border-cream/20 rounded-full hover:border-lime hover:text-lime transition-colors"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-cream/50">
          <p>© 2026 ONE MORE. All rights reserved.</p>
          <p>Built for young people, by young people.</p>
        </div>
      </div>
    </footer>
  )
}
