import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function JoinCta() {
  return (
    <section className="bg-lime py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl text-forest-dark leading-[1.05] tracking-tight"
        >
          Your voice is the one more we're waiting for.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10"
        >
          <Button to="/join" variant="darkOutline" icon="arrowRight">
            Join the Movement
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
