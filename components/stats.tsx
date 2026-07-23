'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-heading text-4xl font-extrabold text-gradient md:text-5xl">
      {display}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
