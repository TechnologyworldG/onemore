import { programs, opportunities, events, stories, impactStats } from '../data/mockData'

// Simulated network latency so loading states feel real during development.
// Swap the body of each function below for a real fetch() call to a
// Laravel / Firebase / Supabase backend when one is available — the
// pages calling these functions don't need to change at all.
const delay = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getPrograms() {
  await delay()
  return programs
}

export async function getProgram(slug) {
  await delay()
  const program = programs.find((p) => p.id === slug)
  if (!program) throw new Error('Program not found')
  return program
}

export async function getOpportunities({ category, query } = {}) {
  await delay()
  let results = opportunities
  if (category && category !== 'All') {
    results = results.filter((o) => o.category === category)
  }
  if (query) {
    const q = query.toLowerCase()
    results = results.filter(
      (o) =>
        o.title.toLowerCase().includes(q) ||
        o.location.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q),
    )
  }
  return results
}

export async function getOpportunity(id) {
  await delay()
  const opportunity = opportunities.find((o) => o.id === id)
  if (!opportunity) throw new Error('Opportunity not found')
  return opportunity
}

export async function getEvents() {
  await delay()
  return events
}

export async function getEvent(id) {
  await delay()
  const event = events.find((e) => e.id === id)
  if (!event) throw new Error('Event not found')
  return event
}

export async function getStories() {
  await delay()
  return stories
}

export async function getStory(slug) {
  await delay()
  const story = stories.find((s) => s.id === slug)
  if (!story) throw new Error('Story not found')
  return story
}

export async function getImpactStats() {
  await delay(200)
  return impactStats
}

export async function submitMembership(payload) {
  await delay(700)
  // Replace with something like:
  // const res = await fetch('/api/members', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // if (!res.ok) throw new Error('Membership submission failed')
  // return res.json()
  console.info('Membership submission (mock):', payload)
  return { success: true, memberId: `MOCK-${Date.now()}` }
}
