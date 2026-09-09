import { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import EventCard from '../cards/EventCard'
import EventModal from '../EventModal'
import { events } from '../../data/mockData'

export default function EventsPreview() {
  const [selected, setSelected] = useState(null)
  const upcoming = events.filter((e) => !e.isPast).slice(0, 2)

  return (
    <section className="bg-forest-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading title="Where the movement gathers." light />
          <Button to="/events" variant="outlineLight" icon="arrowRight" className="shrink-0">
            View all events
          </Button>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {upcoming.map((e) => (
            <EventCard key={e.id} event={e} onSelect={setSelected} />
          ))}
        </div>
      </div>
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
