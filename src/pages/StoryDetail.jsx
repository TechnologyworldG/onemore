import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/common/PageTransition'
import Button from '../components/common/Button'
import { stories } from '../data/mockData'

export default function StoryDetail() {
  const { slug } = useParams()
  const story = stories.find((s) => s.id === slug)

  if (!story) return <Navigate to="/stories" replace />

  return (
    <PageTransition>
      <article>
        <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40">
          <Link to="/stories" className="inline-flex items-center gap-2 text-muted hover:text-forest text-sm mb-8">
            <ArrowLeft size={15} /> All stories
          </Link>
          <span className="text-sm text-muted">{story.category}</span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-forest">"{story.headline}"</h1>
          <p className="mt-5 text-muted">
            {story.name}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> — </span>
            {story.role}
          </p>
        </div>

        <div className="mt-10 md:mt-14 aspect-[16/9] max-w-5xl mx-auto px-6 md:px-10">
          <img src={story.image} alt={`Portrait representing ${story.name}'s story`} className="w-full h-full object-cover" />
        </div>

        <div className="max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-20 space-y-6">
          {story.body.map((para, i) => (
            <p key={i} className="text-forest/80 text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="bg-forest text-cream py-20 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl">Your story could be next.</h2>
            <div className="mt-8">
              <Button to="/join" variant="primary" icon="arrowRight">
                Join the Movement
              </Button>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
