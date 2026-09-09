import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function StoryCard({ story }) {
  return (
    <Link to={`/stories/${story.id}`} className="group block">
      <div className="overflow-hidden aspect-[4/5] bg-forest/10">
        <motion.img
          src={story.image}
          alt=""
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="pt-5">
        <span className="text-sm text-muted">{story.category}</span>
        <h3 className="mt-2 font-heading text-xl md:text-2xl leading-snug text-forest group-hover:text-forest/70 transition-colors">
          "{story.headline}"
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{story.excerpt}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
          Read story <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  )
}
