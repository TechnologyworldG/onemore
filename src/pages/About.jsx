import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import { aboutContent, images } from '../data/mockData'

export default function About() {
  return (
    <PageTransition>
      <section className="bg-forest text-cream pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            A movement built by the young people it serves.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <SectionHeading title="How ONE MORE started." />
          <p className="text-forest/80 text-lg leading-relaxed pt-2 md:pt-24">{aboutContent.story}</p>
        </div>
      </section>

      <section className="overflow-hidden">
        <img src={images.about} alt="Young people collaborating at a ONE MORE community session" className="w-full h-[50vh] md:h-[60vh] object-cover" />
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-forest/50 mb-4">Our Mission</p>
            <p className="font-heading text-2xl md:text-3xl leading-snug text-forest">{aboutContent.mission}</p>
          </div>
          <div>
            <p className="text-sm text-forest/50 mb-4">Our Vision</p>
            <p className="font-heading text-2xl md:text-3xl leading-snug text-forest">{aboutContent.vision}</p>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionHeading title="What we hold onto." light />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-lime/40 pt-6"
              >
                <h3 className="font-heading text-xl text-cream">{v.title}</h3>
                <p className="mt-2 text-cream/65 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeading title="How we work." />
          <p className="mt-8 text-forest/80 text-lg leading-relaxed max-w-3xl">{aboutContent.approach}</p>
        </div>
      </section>

      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeading title="Who runs the movement." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.leadership.map((person) => (
              <div key={person.name} className="border-t border-forest/15 pt-5">
                <p className="font-heading text-lg text-forest">{person.name}</p>
                <p className="text-muted text-sm mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-dark text-cream py-24 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl">Ready to be part of it?</h2>
          <div className="mt-8">
            <Button to="/join" variant="primary" icon="arrowRight">
              Join the Movement
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
