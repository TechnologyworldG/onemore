import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'Scout talent',
    text: 'We look beyond the noise and help young people see their own potential before the world does.',
  },
  {
    number: '02',
    title: 'Grow leadership',
    text: 'We turn confidence into action through mentoring, skill-building, and guided practice.',
  },
  {
    number: '03',
    title: 'Create opportunity',
    text: 'We connect emerging talent to community, funding, networks, and space to build what comes next.',
  },
]

export default function WhySection() {
  return (
    <section id="why" className="bg-cream py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-forest/60">Why ONE MORE</p>
          <h2 className="mt-5 font-heading font-medium text-3xl sm:text-4xl md:text-5xl leading-tight text-forest">
            We create room for young people to rise, lead, and build the future they want.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="soft-panel p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl sm:text-4xl text-lime">{pillar.number}</span>
                <span className="h-10 w-10 rounded-full bg-forest text-cream grid place-items-center text-xs font-semibold">+</span>
              </div>
              <h3 className="mt-8 font-heading text-2xl md:text-3xl leading-tight text-forest">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{pillar.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-4xl font-heading text-2xl sm:text-3xl md:text-5xl leading-tight text-forest"
        >
          When young people are backed by community, talent becomes <span className="text-lime">leadership</span>, and leadership becomes <span className="text-lime">impact</span>.
        </motion.p>
      </div>
    </section>
  )
}
