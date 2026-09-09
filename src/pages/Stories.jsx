import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/common/PageTransition'
import StoryCard from '../components/cards/StoryCard'
import { getStories } from '../services/api'

export default function Stories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getStories().then((data) => {
      setStories(data)
      setLoading(false)
    })
  }, [])

  const categories = useMemo(() => ['All', ...new Set(stories.map((s) => s.category))], [stories])
  const featured = stories[0]
  const rest = stories.slice(1)

  const filtered = useMemo(() => {
    return rest.filter((s) => {
      const matchesCategory = category === 'All' || s.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery = !q || s.headline.toLowerCase().includes(q) || s.excerpt.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [rest, category, query])

  return (
    <PageTransition>
      <section className="bg-cream pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl text-forest">People of ONE MORE.</h1>
        </div>
      </section>

      {!loading && featured && (
        <section className="bg-cream pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <Link to={`/stories/${featured.id}`} className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={featured.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <span className="text-sm text-muted">{featured.category} · Featured</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl leading-snug text-forest">"{featured.headline}"</h2>
                <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>
                <span className="mt-5 inline-block text-forest font-medium">Read story</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
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
                placeholder="Search stories"
                aria-label="Search stories"
                className="w-full border border-forest/20 bg-white pl-11 pr-4 py-3 text-sm focus:border-forest outline-none"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-forest/5 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-heading text-2xl text-forest">No stories match your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
