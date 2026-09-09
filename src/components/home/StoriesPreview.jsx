import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import StoryCard from '../cards/StoryCard'
import { stories } from '../../data/mockData'

export default function StoriesPreview() {
  const featured = stories.slice(0, 3)
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading title="People of ONE MORE." />
          <Button to="/stories" variant="outline" icon="arrowRight" className="shrink-0">
            Read more stories
          </Button>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {featured.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
