import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import SectionHeading from './common/SectionHeading'
import Button from './common/Button'
import { findYourPlace, interestRecommendations, opportunities } from '../data/mockData'

function OptionPill({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`px-5 py-3 border text-sm md:text-base font-medium transition-colors ${
        selected ? 'bg-lime border-lime text-forest-dark' : 'border-cream/25 text-cream/80 hover:border-lime hover:text-lime'
      }`}
    >
      {label}
    </button>
  )
}

export default function FindYourPlace() {
  const [identity, setIdentity] = useState(null)
  const [interest, setInterest] = useState(null)

  const recommendation = interest ? interestRecommendations[interest] : null
  const recommendedOpportunities = recommendation
    ? opportunities.filter((o) => recommendation.picks.includes(o.title))
    : []

  const reset = () => {
    setIdentity(null)
    setInterest(null)
  }

  return (
    <section className="bg-forest text-cream py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading title="Where do you fit?" light className="mx-auto text-center" />

        <div className="mt-16">
          <fieldset>
            <legend className="w-full text-center text-lime text-sm mb-5">I am a...</legend>
            <div className="flex flex-wrap justify-center gap-3">
              {findYourPlace.identities.map((id) => (
                <OptionPill key={id} label={id} selected={identity === id} onClick={() => setIdentity(id)} />
              ))}
            </div>
          </fieldset>
        </div>

        <AnimatePresence>
          {identity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 overflow-hidden"
            >
              <fieldset>
                <legend className="w-full text-center text-lime text-sm mb-5">I'm interested in...</legend>
                <div className="flex flex-wrap justify-center gap-3">
                  {findYourPlace.interests.map((int) => (
                    <OptionPill key={int} label={int} selected={interest === int} onClick={() => setInterest(int)} />
                  ))}
                </div>
              </fieldset>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {identity && interest && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-14 bg-forest-dark border border-cream/10 p-8 md:p-10"
            >
              <p className="text-cream/60 text-sm">You might belong in...</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {recommendedOpportunities.map((o) => (
                  <div key={o.id} className="border border-cream/10 p-5">
                    <p className="font-heading text-lg text-cream">{o.title}</p>
                    <p className="mt-1 text-cream/60 text-sm">
                      {o.category} in {o.location}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/join" variant="primary" icon="arrowRight">
                  Join the Movement
                </Button>
                <button onClick={reset} className="inline-flex items-center gap-2 text-cream/60 hover:text-lime text-sm">
                  <RotateCcw size={14} /> Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
