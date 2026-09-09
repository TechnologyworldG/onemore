import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import OpportunityCard from '../cards/OpportunityCard'
import OpportunityModal from '../OpportunityModal'
import { opportunities } from '../../data/mockData'

export default function OpportunitiesPreview() {
  const [selected, setSelected] = useState(null)
  const featured = opportunities.slice(0, 3)

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading title="Opportunities for young people." />
          <Button to="/opportunities" variant="outline" icon="arrowRight" className="shrink-0">
            View all
          </Button>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {featured.map((o) => (
            <OpportunityCard key={o.id} opportunity={o} onSelect={setSelected} />
          ))}
        </div>
      </div>
      <OpportunityModal opportunity={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
