import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../common/Button'

const listVariants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  closed: {},
}
const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  closed: { opacity: 0, y: 24 },
}

export default function MobileMenu({ isOpen, onClose, links }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-forest-dark lg:hidden"
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{ clipPath: 'circle(150% at 100% 0%)' }}
          exit={{ clipPath: 'circle(0% at 100% 0%)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between px-6 h-20">
            <Logo variant="light" />
            <button onClick={onClose} aria-label="Close menu" className="grid place-items-center w-10 h-10 text-cream">
              <X size={26} />
            </button>
          </div>
          <motion.ul variants={listVariants} initial="closed" animate="open" exit="closed" className="flex flex-col gap-1 px-6 mt-8">
            {links.map((link) => (
              <motion.li key={link.to} variants={itemVariants}>
                <NavLink to={link.to} onClick={onClose} className="block py-3 font-heading text-4xl text-cream hover:text-lime transition-colors">
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} className="pt-6">
              <Button to="/join" variant="primary" icon="arrowRight" onClick={onClose}>
                Join the Movement
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
