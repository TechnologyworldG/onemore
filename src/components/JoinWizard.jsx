import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowLeft } from 'lucide-react'
import Button from './common/Button'
import { submitMembership } from '../services/api'

const AGE_RANGES = ['15–18', '19–24', '25–29', '30+']
const SKILL_OPTIONS = ['Leadership', 'Business', 'Design', 'Development', 'Writing', 'Public speaking', 'Organizing', 'Other']
const LOOKING_FOR_OPTIONS = ['Opportunities', 'Training', 'Networking', 'Volunteering', 'Leadership', 'Mentorship']
const steps = ['About you', 'What you bring', "What you're looking for", 'Welcome']

function ToggleGroup({ options, selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const isSelected = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            aria-pressed={isSelected}
            className={`px-4 py-2.5 border text-sm font-medium transition-colors ${
              isSelected ? 'bg-forest border-forest text-cream' : 'border-forest/20 text-forest/70 hover:border-forest'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  ageRange: '',
  location: '',
  skills: [],
  interests: '',
  experience: '',
  lookingFor: [],
}

export default function JoinWizard() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }))

  const toggleSkill = (skill) =>
    setForm((f) => ({ ...f, skills: f.skills.includes(skill) ? f.skills.filter((s) => s !== skill) : [...f.skills, skill] }))

  const toggleLookingFor = (item) =>
    setForm((f) => ({
      ...f,
      lookingFor: f.lookingFor.includes(item) ? f.lookingFor.filter((s) => s !== item) : [...f.lookingFor, item],
    }))

  const validateStep0 = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Please enter a phone number'
    if (!form.ageRange) e.ageRange = 'Select an age range'
    if (!form.location.trim()) e.location = 'Please enter your county or location'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goNext = async () => {
    if (step === 0 && !validateStep0()) return
    if (step === 2) {
      setSubmitting(true)
      try {
        await submitMembership({ ...form })
        setSubmitted(true)
        setStep(3)
      } catch {
        setErrors({ submit: 'Something went wrong. Please try again.' })
      } finally {
        setSubmitting(false)
      }
      return
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="max-w-2xl mx-auto">
      {step < 3 && (
        <div className="flex items-center gap-2 mb-12">
          {steps.slice(0, 3).map((label, i) => (
            <div key={label} className="flex-1">
              <div className={`h-1 ${i <= step ? 'bg-lime' : 'bg-forest/10'}`} />
              <p className={`mt-2 text-xs hidden sm:block ${i <= step ? 'text-forest' : 'text-muted'}`}>
                {String(i + 1).padStart(2, '0')} — {label}
              </p>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
            <h2 className="font-heading text-3xl md:text-4xl text-forest">Tell us about yourself</h2>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
              <fieldset>
                <legend className="block text-sm font-medium text-forest mb-2">Age range</legend>
                <div className="flex flex-wrap gap-3">
                  {AGE_RANGES.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => update('ageRange', range)}
                      className={`px-4 py-2.5 border text-sm font-medium transition-colors ${
                        form.ageRange === range ? 'bg-forest border-forest text-cream' : 'border-forest/20 text-forest/70 hover:border-forest'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                {errors.ageRange && <p className="mt-1 text-sm text-red-600">{errors.ageRange}</p>}
              </fieldset>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-forest mb-2">
                  County / location
                </label>
                <input
                  id="location"
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                  placeholder="e.g. Kilifi County"
                  className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none placeholder:text-muted/60"
                />
                {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
              </div>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
            <h2 className="font-heading text-3xl md:text-4xl text-forest">What do you bring?</h2>
            <div className="mt-8 space-y-8">
              <fieldset>
                <legend className="block text-sm font-medium text-forest mb-3">Skills</legend>
                <ToggleGroup options={SKILL_OPTIONS} selected={form.skills} onToggle={toggleSkill} />
              </fieldset>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-forest mb-2">
                  Interests
                </label>
                <input
                  id="interests"
                  value={form.interests}
                  onChange={(e) => update('interests', e.target.value)}
                  placeholder="e.g. filmmaking, entrepreneurship, football"
                  className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none placeholder:text-muted/60"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-forest mb-2">
                  Experience
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  value={form.experience}
                  onChange={(e) => update('experience', e.target.value)}
                  placeholder="Tell us a little about what you've done so far — school, work, projects, volunteering."
                  className="w-full border border-forest/20 bg-white px-4 py-3 focus:border-forest outline-none placeholder:text-muted/60"
                />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
            <h2 className="font-heading text-3xl md:text-4xl text-forest">What are you looking for?</h2>
            <div className="mt-8">
              <fieldset>
                <legend className="sr-only">What are you looking for</legend>
                <ToggleGroup options={LOOKING_FOR_OPTIONS} selected={form.lookingFor} onToggle={toggleLookingFor} />
              </fieldset>
              {errors.submit && <p className="mt-4 text-sm text-red-600">{errors.submit}</p>}
            </div>
          </motion.div>
        )}

        {step === 3 && submitted && (
          <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center py-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
              className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-lime text-forest-dark mb-8"
            >
              <Check size={28} />
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl text-forest">Welcome to ONE MORE.</h2>
            <p className="mt-5 text-muted text-lg max-w-md mx-auto">
              Your voice matters. Your ideas matter. Your community needs people like you.
            </p>
            <div className="mt-10">
              <Button to="/" variant="primary">
                Back to home
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {step < 3 && (
        <div className="mt-12 flex items-center justify-between">
          <button onClick={goBack} disabled={step === 0} className="inline-flex items-center gap-2 text-forest/70 hover:text-forest disabled:opacity-0 text-sm font-medium">
            <ArrowLeft size={16} /> Back
          </button>
          <Button onClick={goNext} variant="primary" icon="arrowRight" disabled={submitting}>
            {step === 2 ? (submitting ? 'Submitting…' : 'Submit') : 'Continue'}
          </Button>
        </div>
      )}
    </div>
  )
}
