import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { programIcons } from '../../utils/programIcons'

export default function ProgramCard({ program }) {
  const [open, setOpen] = useState(false)
  const Icon = programIcons[program.icon]

  return (
    <>
      {/* Tablet / desktop: hover-expand card */}
      <motion.div
        className="hidden sm:flex flex-col justify-between h-full bg-forest text-cream p-8 lg:p-10"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div>
          <div className="flex items-start justify-between">
            <span className="font-heading text-sm text-lime/80">{program.number}</span>
            <motion.span
              variants={{ rest: { rotate: 0 }, hover: { rotate: -8, scale: 1.08 } }}
              transition={{ duration: 0.35 }}
              className="grid place-items-center w-11 h-11 border border-cream/20 text-lime"
            >
              <Icon size={20} />
            </motion.span>
          </div>
          <h3 className="mt-8 font-heading text-2xl lg:text-3xl leading-snug">{program.title}</h3>
          <p className="mt-3 text-cream/65 text-sm lg:text-base leading-relaxed">{program.tagline}</p>
        </div>

        <motion.div
          variants={{
            rest: { opacity: 0, height: 0, marginTop: 0 },
            hover: { opacity: 1, height: 'auto', marginTop: 20 },
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-cream/60 text-sm leading-relaxed">{program.whoItsFor}</p>
          <Link
            to={`/programs/${program.id}`}
            className="mt-4 inline-flex items-center gap-1.5 text-lime text-sm font-medium hover:gap-2.5 transition-all"
          >
            Learn more <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile: expandable section */}
      <div className="sm:hidden bg-forest text-cream p-6">
        <button onClick={() => setOpen((o) => !o)} className="w-full flex items-start justify-between text-left" aria-expanded={open}>
          <div className="flex-1">
            <span className="font-heading text-sm text-lime/80">{program.number}</span>
            <h3 className="mt-2 font-heading text-xl leading-snug">{program.title}</h3>
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="mt-1 text-lime shrink-0">
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <p className="mt-3 text-cream/65 text-sm leading-relaxed">{program.tagline}</p>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pt-4 text-cream/60 text-sm leading-relaxed">{program.whoItsFor}</p>
          <Link to={`/programs/${program.id}`} className="mt-4 inline-flex items-center gap-1.5 text-lime text-sm font-medium">
            Learn more <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </>
  )
}
