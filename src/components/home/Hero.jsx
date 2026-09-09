import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../common/Button'
import { images } from '../../data/mockData'

const line = {
  hidden: { y: '110%' },
  visible: (i) => ({ y: 0, transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.82])

  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const springX = useSpring(mvX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mvY, { stiffness: 50, damping: 20 })

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    mvX.set((e.clientX / innerWidth - 0.5) * 18)
    mvY.set((e.clientY / innerHeight - 0.5) * 18)
  }

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-forest-dark pt-20 md:pt-24">
      <motion.div className="absolute inset-0" style={{ y: imageY, x: springX, scale: 1.08 }}>
        <img src={images.hero} alt="Young people gathering for leadership and innovation at ONE MORE" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-forest-dark" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/75 to-forest-dark/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/20 to-transparent" />

      <div className="relative h-full section-shell flex flex-col justify-end pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {['Talent scouting', 'Leadership', 'Innovation', 'Community power'].map((tag, index) => (
            <motion.span
              key={tag}
              custom={index}
              variants={line}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-cream/80 backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <p className="overflow-hidden">
          <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="inline-block text-sm font-medium uppercase tracking-[0.32em] text-lime mb-6">
            ONE MORE
          </motion.span>
        </p>
        <h1 className="font-heading font-medium text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[6.2rem] leading-[0.94] tracking-[-0.06em] max-w-5xl">
          <span className="overflow-hidden block">
            <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="inline-block">
              We scout.
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span custom={2} variants={line} initial="hidden" animate="visible" className="inline-block">
              We grow.
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span custom={3} variants={line} initial="hidden" animate="visible" className="inline-block text-lime">
              We empower.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-cream/80"
        >
          ONE MORE is a community of young people discovering their brilliance, building their leadership, and turning bold ideas into real opportunities for themselves and their communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/join" variant="primary" icon="arrowRight">
            Join the Movement
          </Button>
          <Button href="#why" variant="outlineLight" icon="arrowDown">
            Explore our impact
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-cream/60"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
