import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageTransition from '../components/common/PageTransition'
import OpportunityCard from '../components/cards/OpportunityCard'
import OpportunityModal from '../components/OpportunityModal'
import { getOpportunities } from '../services/api'

const CATEGORIES = ['All', 'Jobs', 'Training', 'Events', 'Volunteer', 'Funding', 'Scholarships']

export default function Opportunities() {
  const [all, setAll] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let active = true
    getOpportunities().then((data) => {
      if (active) {
        setAll(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [])

  const filtered = useMemo(() => {
    return all.filter((o) => {
      const matchesCategory = category === 'All' || o.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery = !q || o.title.toLowerCase().includes(q) || o.location.toLowerCase().includes(q) || o.description.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [all, category, query])

  return (
    <PageTransition>
      <section className="bg-forest text-cream pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">Opportunities for young people.</h1>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    category === c ? 'bg-forest border-forest text-cream' : 'border-forest/20 text-forest/70 hover:border-forest'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search opportunities"
                aria-label="Search opportunities"
                className="w-full border border-forest/20 bg-white pl-11 pr-4 py-3 text-sm focus:border-forest outline-none"
              />
            </div>
          </div>

          <div className="mt-12">
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-56 bg-forest/5 animate-pulse" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-heading text-2xl text-forest">No opportunities match your search.</p>
                <p className="mt-2 text-muted">Try a different category or search term.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((o) => (
                  <OpportunityCard key={o.id} opportunity={o} onSelect={setSelected} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <OpportunityModal opportunity={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
