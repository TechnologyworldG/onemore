import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'

function formatDeadline(deadline) {
  if (!deadline || deadline === 'Ongoing') return 'Ongoing'
  return new Date(deadline).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function OpportunityCard({ opportunity, onSelect }) {
  return (
    <motion.button
      onClick={() => onSelect(opportunity)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group text-left bg-white border border-forest/10 p-6 flex flex-col gap-4 h-full hover:border-forest/30 transition-colors"
    >
      <span className="text-xs font-medium tracking-wide px-2.5 py-1 bg-forest text-cream w-fit">{opportunity.category}</span>
      <h3 className="font-heading text-xl leading-snug text-forest">{opportunity.title}</h3>
      <p className="text-muted text-sm leading-relaxed line-clamp-2">{opportunity.description}</p>
      <div className="mt-auto pt-4 border-t border-forest/10 flex flex-col gap-1.5 text-sm text-muted">
        <span className="flex items-center gap-2">
          <MapPin size={14} /> {opportunity.location}
        </span>
        <span className="flex items-center gap-2">
          <Calendar size={14} /> {formatDeadline(opportunity.deadline)}
        </span>
      </div>
      <span className="text-forest font-medium text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
        View opportunity <ArrowUpRight size={15} />
      </span>
    </motion.button>
  )
}
