import { useState } from 'react'
import { MapPin, Calendar, Clock, Share2 } from 'lucide-react'
import Modal from './common/Modal'
import Button from './common/Button'

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-KE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

export default function EventModal({ event, onClose }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = `${window.location.origin}/events`
    if (navigator.share) {
      try {
        await navigator.share({ title: event.title, url })
      } catch {
        /* user cancelled the share sheet */
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Modal isOpen={!!event} onClose={onClose} labelledBy="event-modal-title">
      {event && (
        <div>
          <div className="aspect-[16/9] bg-forest/10">
            <img src={event.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            {event.isPast && <span className="text-xs text-muted">Past event</span>}
            <h2 id="event-modal-title" className="mt-2 font-heading text-3xl md:text-4xl text-forest leading-snug">
              {event.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <Calendar size={15} /> {formatDate(event.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} /> {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} /> {event.location}
              </span>
            </div>
            <p className="mt-6 text-forest/80 leading-relaxed">{event.fullDescription}</p>

            {event.speakers?.length > 0 && (
              <div className="mt-8">
                <p className="text-sm text-muted mb-3">Speakers</p>
                <ul className="space-y-2">
                  {event.speakers.map((s) => (
                    <li key={s.name} className="text-forest">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted"> — {s.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {!event.isPast && (
                <Button to="/join" variant="primary" icon="arrowRight">
                  Register
                </Button>
              )}
              <button onClick={handleShare} className="inline-flex items-center gap-2 text-forest/70 hover:text-forest text-sm font-medium">
                <Share2 size={16} /> {copied ? 'Link copied!' : 'Share'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
