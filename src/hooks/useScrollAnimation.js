import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Thin wrapper around Framer Motion's viewport detection so components
// can trigger an animation, or a side effect like a counter, exactly
// once, the moment they scroll into view.
export function useScrollAnimation({ once = true, amount = 0.4 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })
  return { ref, isInView }
}

export default useScrollAnimation
