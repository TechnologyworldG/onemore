import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ImpactCounter({ value, suffix = '', label }) {
  const { ref, isInView } = useScrollAnimation({ amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-heading text-5xl sm:text-6xl md:text-7xl text-lime tabular-nums">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-cream/70 text-sm md:text-base">{label}</p>
    </div>
  )
}
