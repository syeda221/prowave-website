'use client'

import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface NextSectionWrapperProps {
  children: ReactNode
}

export function NextSectionWrapper({ children }: NextSectionWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const ctx = gsap.context(() => {
      const heroEl = document.getElementById('home')

      // We only animate the Hero fading slightly as the next section covers it.
      // The Next Section itself just scrolls normally as a solid block over the Hero!
      if (heroEl) {
        gsap.to(heroEl, {
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom", // when the top of the solid wrapper enters the bottom of the screen
            end: "top top",      // when the wrapper fully covers the screen
            scrub: true,
          },
          opacity: 0.2, // Fade hero into darkness
          scale: 0.98, // Very subtle parallax pushback
          ease: "none"
        })
      }
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={wrapperRef}
      className="relative z-20 bg-background" 
      style={{ 
        marginTop: "3000px", // The 3000px scroll track for the hero animation
        boxShadow: "0 -30px 60px rgba(0,0,0,0.8)" // Strong shadow to emphasize the overlap
      }}
    >
      {/* Top border highlight to make the overlapping edge sharp and premium */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/10 z-30" />
      
      <div className="relative pt-24">
        {children}
      </div>
    </div>
  )
}
