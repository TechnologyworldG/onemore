import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function EventCard({ event, onSelect }) {
  return (
    <motion.button
      onClick={() => onSelect(event)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group text-left border p-6 flex flex-col gap-4 h-full transition-colors ${
        event.isPast ? 'bg-cream border-forest/10 opacity-75' : 'bg-forest text-cream border-forest hover:bg-forest-dark'
      }`}
    >
      {event.isPast && <span className="text-xs text-muted w-fit">Past event</span>}
      <h3 className={`font-heading text-xl leading-snug ${event.isPast ? 'text-forest' : 'text-cream'}`}>{event.title}</h3>
      <div className={`flex flex-col gap-1.5 text-sm ${event.isPast ? 'text-muted' : 'text-cream/70'}`}>
        <span className="flex items-center gap-2">
          <Calendar size={14} /> {formatDate(event.date)}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={14} /> {event.location}
        </span>
      </div>
      <p className={`text-sm leading-relaxed line-clamp-2 ${event.isPast ? 'text-muted' : 'text-cream/70'}`}>{event.description}</p>
      <span className={`mt-auto text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${event.isPast ? 'text-forest' : 'text-lime'}`}>
        {event.isPast ? 'View recap' : 'Register'} <ArrowUpRight size={15} />
      </span>
    </motion.button>
  )
}
