'use client'

import { useEffect, useRef, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedProwaveTextProps {
  heroRef?: RefObject<HTMLElement>
}

const contentBlocks = [
  { // Default
    title: <>Engineering Digital Products That Drive <span className="text-primary">Business Growth</span></>,
    desc: "We build enterprise software, scalable web applications, mobile apps, cloud platforms, and digital solutions that help businesses innovate and grow."
  },
  { // P
    title: <>Premier <span className="text-primary">Engineering</span></>,
    desc: "Building top-tier digital products with precision, scale, and uncompromising code quality."
  },
  { // R
    title: <>Robust <span className="text-primary">Architecture</span></>,
    desc: "Designing secure, high-performance systems and resilient infrastructure for modern businesses."
  },
  { // O
    title: <>Optimized <span className="text-primary">Cloud Solutions</span></>,
    desc: "Seamless cloud integrations, deployments, and migrations that drive operational efficiency."
  },
  { // W
    title: <>Web & <span className="text-primary">Mobile Apps</span></>,
    desc: "Creating flawless, lightning-fast user experiences across all devices and platforms worldwide."
  },
  { // A
    title: <>Advanced <span className="text-primary">AI Automation</span></>,
    desc: "Leveraging artificial intelligence to automate complex workflows and innovate significantly faster."
  },
  { // V
    title: <>Visionary <span className="text-primary">Design</span></>,
    desc: "Crafting premium user interfaces and experiences that build deep trust and user engagement."
  },
  { // E
    title: <>Enterprise <span className="text-primary">Excellence</span></>,
    desc: "Delivering complete end-to-end software solutions tailored exclusively for growing enterprises."
  }
]

export function AnimatedProwaveText({ heroRef }: AnimatedProwaveTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLSpanElement[]>([])
  const blocksRef = useRef<HTMLDivElement[]>([])
  const gradientOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef?.current) return

    const ctx = gsap.context(() => {
      // Pin the whole hero section.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=3000", 
          scrub: true,
        }
      })

      // Deep, intense premium blue matching the new aesthetic
      const highlightColor = "#2563EB" 
      const glowStyle = "0 0 50px rgba(37, 99, 235, 0.7), 0 0 20px rgba(37, 99, 235, 0.4)"

      // Add the overall upward movement and letter spacing to the wrapper
      tl.to(wrapperRef.current, {
        y: -12,
        letterSpacing: "0px", 
        ease: "none",
        duration: lettersRef.current.length
      }, 0)

      // Light up each letter sequentially and crossfade the text blocks
      lettersRef.current.forEach((letter, i) => {
        // Letter glowing (deep blue)
        tl.to(letter, {
          color: highlightColor,
          textShadow: glowStyle,
          fontWeight: 900,
          duration: 1,
          ease: "power2.out"
        }, i)

        // Fade out previous text block (first half)
        if (blocksRef.current[i]) {
          tl.to(blocksRef.current[i], {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power1.inOut"
          }, i)
        }

        // Fade in new text block (second half)
        if (blocksRef.current[i + 1]) {
          tl.fromTo(blocksRef.current[i + 1], {
            opacity: 0,
            y: 20
          }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, i + 0.4)
        }
      })

      // Hold the final deep blue glowing state for the remaining scroll duration
      tl.to({}, { duration: 2 })

    }, wrapperRef)

    return () => ctx.revert() // Cleanup
  }, [heroRef])

  const letters = "PROWAVE".split("")

  return (
    <div className="w-full flex flex-col items-center">
      {/* Prowave Letters Wrapper */}
      <div 
        ref={wrapperRef}
        className="relative flex justify-center items-center font-heading font-[800] leading-[0.9] text-white mb-8"
        style={{ letterSpacing: '-2px' }}
      >
        {/* Individual White/Blue Glowing Letters */}
        <div className="relative z-10 flex">
          {letters.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) lettersRef.current[i] = el
              }}
              className="text-[54px] md:text-[90px] lg:text-[120px] transition-all duration-300 will-change-transform"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Dynamic Content Blocks */}
      <div className="relative w-full h-[320px] sm:h-[240px] lg:h-[220px] flex justify-center mt-2 sm:mt-6">
        {contentBlocks.map((block, i) => (
          <div 
            key={i} 
            ref={(el) => {
              if (el) blocksRef.current[i] = el
            }}
            className="absolute inset-0 flex flex-col items-center pointer-events-none"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <h1 className="max-w-[800px] text-balance font-heading text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] tracking-tight text-white mb-4">
              {block.title}
            </h1>
            <p className="max-w-[600px] text-pretty text-[16px] sm:text-[18px] leading-[1.6] text-muted-foreground">
              {block.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
