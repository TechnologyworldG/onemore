import { useEffect, useState } from 'react'
import PageTransition from '../components/common/PageTransition'
import EventCard from '../components/cards/EventCard'
import EventModal from '../components/EventModal'
import { getEvents } from '../services/api'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('upcoming')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data)
      setLoading(false)
    })
  }, [])

  const filtered = events.filter((e) => (tab === 'upcoming' ? !e.isPast : e.isPast))

  return (
    <PageTransition>
      <section className="bg-forest-dark text-cream pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">Where the movement gathers.</h1>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-2 mb-12">
            {['upcoming', 'past'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors capitalize ${
                  tab === t ? 'border-forest text-forest' : 'border-transparent text-muted hover:text-forest'
                }`}
              >
                {t} events
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-56 bg-forest/5 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-heading text-2xl text-forest">No {tab} events right now.</p>
              <p className="mt-2 text-muted">Check back soon — new events are added regularly.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((e) => (
                <EventCard key={e.id} event={e} onSelect={setSelected} />
              ))}
            </div>
          )}
        </div>
      </section>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
