import { MapPin, Calendar } from 'lucide-react'
import Modal from './common/Modal'
import Button from './common/Button'

function formatDeadline(deadline) {
  if (!deadline || deadline === 'Ongoing') return 'Ongoing'
  return new Date(deadline).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function OpportunityModal({ opportunity, onClose }) {
  return (
    <Modal isOpen={!!opportunity} onClose={onClose} labelledBy="opportunity-modal-title">
      {opportunity && (
        <div className="p-8 md:p-10 pt-16">
          <span className="text-xs font-medium tracking-wide px-2.5 py-1 bg-forest text-cream inline-block">{opportunity.category}</span>
          <h2 id="opportunity-modal-title" className="mt-5 font-heading text-3xl md:text-4xl text-forest leading-snug">
            {opportunity.title}
          </h2>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={15} /> {opportunity.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} /> {formatDeadline(opportunity.deadline)}
            </span>
          </div>
          <p className="mt-6 text-forest/80 leading-relaxed">{opportunity.fullDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/join" variant="primary" icon="arrowRight">
              Apply through Join
            </Button>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  )
}
