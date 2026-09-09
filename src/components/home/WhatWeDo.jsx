import SectionHeading from '../common/SectionHeading'
import ProgramCard from '../cards/ProgramCard'
import { programs } from '../../data/mockData'

export default function WhatWeDo() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Where talent meets opportunity."
          description="We help young people move from raw potential to practical action through leadership, innovation, enterprise, and community impact."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
