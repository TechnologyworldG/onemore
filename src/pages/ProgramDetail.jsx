import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/common/PageTransition'
import Button from '../components/common/Button'
import OpportunityCard from '../components/cards/OpportunityCard'
import OpportunityModal from '../components/OpportunityModal'
import { programs, opportunities, images } from '../data/mockData'
import { programIcons } from '../utils/programIcons'

export default function ProgramDetail() {
  const { slug } = useParams()
  const [selected, setSelected] = useState(null)
  const program = programs.find((p) => p.id === slug)

  if (!program) return <Navigate to="/programs" replace />

  const Icon = programIcons[program.icon]
  const relatedOpportunities = opportunities.filter((o) => o.programId === program.id)
  const image = images.programs[program.id]

  return (
    <PageTransition>
      <section className="relative bg-forest-dark text-cream pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        {image && <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-forest-dark/40" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <Link to="/programs" className="inline-flex items-center gap-2 text-cream/60 hover:text-lime text-sm mb-8">
            <ArrowLeft size={15} /> All programs
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="grid place-items-center w-12 h-12 border border-lime/40 text-lime">
              <Icon size={22} />
            </span>
            <span className="font-heading text-lime/80">{program.number}</span>
          </div>
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">{program.title}</h1>
          <p className="mt-6 text-cream/70 text-lg max-w-2xl">{program.tagline}</p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <p className="text-forest/80 text-lg leading-relaxed">{program.description}</p>
          <div>
            <p className="text-sm text-forest/50 mb-4">Who it's for</p>
            <p className="text-forest/80 leading-relaxed">{program.whoItsFor}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-y border-forest/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-forest/50 mb-5">Objectives</p>
            <ul className="space-y-3">
              {program.objectives.map((o) => (
                <li key={o} className="text-forest/80 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:bg-lime">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-forest/50 mb-5">Activities</p>
            <ul className="space-y-3">
              {program.activities.map((a) => (
                <li key={a} className="text-forest/80 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:bg-lime">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedOpportunities.length > 0 && (
        <section className="bg-cream py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="text-sm text-forest/50 mb-5">Current opportunities</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedOpportunities.map((o) => (
                <OpportunityCard key={o.id} opportunity={o} onSelect={setSelected} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-forest text-cream py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl">Ready to get involved with {program.title}?</h2>
          <div className="mt-8">
            <Button to="/join" variant="primary" icon="arrowRight">
              Join the Movement
            </Button>
          </div>
        </div>
      </section>

      <OpportunityModal opportunity={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
