import PageTransition from '../components/common/PageTransition'
import ProgramCard from '../components/cards/ProgramCard'
import { programs } from '../data/mockData'

export default function Programs() {
  return (
    <PageTransition>
      <section className="bg-forest text-cream pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">From ideas to action.</h1>
          <p className="mt-6 text-cream/70 text-lg max-w-xl">
            Four programs, one goal: give young people the room, the skills and the community to turn what they care about into
            something real.
          </p>
        </div>
      </section>
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
