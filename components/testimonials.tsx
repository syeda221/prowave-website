'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Sarah Whitfield',
    role: 'CEO, NovaPay',
    country: 'United Kingdom',
    initials: 'SW',
    rating: 5,
    text: 'Pro Wave Technologies delivered our mobile banking app ahead of schedule and the quality was outstanding. Their team felt like a genuine extension of ours from day one.',
  },
  {
    name: 'Daniel Krause',
    role: 'CTO, MediTrack',
    country: 'Germany',
    initials: 'DK',
    rating: 5,
    text: 'The engineering rigor is exceptional. Our analytics platform handles millions of records flawlessly, and their communication was transparent throughout.',
  },
  {
    name: 'Amira Hassan',
    role: 'Founder, Marketa',
    country: 'UAE',
    initials: 'AH',
    rating: 5,
    text: 'They rebuilt our storefront and conversions jumped 40%. Pro Wave Technologies truly understands both design and business outcomes. Highly recommended.',
  },
  {
    name: 'Michael Reyes',
    role: 'VP Product, Synthia',
    country: 'United States',
    initials: 'MR',
    rating: 5,
    text: 'Our AI assistant went from concept to launch in record time. The team\u2019s expertise with OpenAI and cloud infrastructure was invaluable.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams around the world"
          description="Don\u2019t just take our word for it — here\u2019s what our clients have to say."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote className="h-10 w-10 text-primary/40" />
            <div className="mt-4 flex gap-1">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent" fill="currentColor" />
              ))}
            </div>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-foreground md:text-2xl">
              &ldquo;{active.text}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan font-heading text-lg font-bold text-primary-foreground">
                {active.initials}
              </span>
              <div>
                <div className="font-heading text-lg font-bold text-foreground">{active.name}</div>
                <div className="text-sm text-muted-foreground">
                  {active.role} · {active.country}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-primary' : 'w-2.5 bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
