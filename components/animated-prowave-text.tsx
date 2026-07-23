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
    title: <>Custom Software & <span className="text-primary">ERP Solutions</span></>,
    desc: "We build tailored enterprise software, scalable web applications, and complete ERP systems to automate operations and drive your business growth."
  },
  { // P
    title: <>Powerful <span className="text-primary">ERP Systems</span></>,
    desc: "End-to-end business management solutions including inventory, HR, accounting, and supply chain tailored to your unique requirements."
  },
  { // R
    title: <>Redevelop & <span className="text-primary">Modernize</span></>,
    desc: "Transform your existing legacy software systems into scalable, secure, and user-friendly applications built for the future."
  },
  { // O
    title: <>Optimized <span className="text-primary">Business Workflows</span></>,
    desc: "Streamline operations with custom software that automates complex processes, improves efficiency, and drives digital transformation."
  },
  { // W
    title: <>Web & <span className="text-primary">Mobile Apps</span></>,
    desc: "Developing high-performance custom web applications, e-commerce platforms, and cross-platform Flutter mobile apps for iOS and Android."
  },
  { // A
    title: <>API & <span className="text-primary">System Integrations</span></>,
    desc: "Seamlessly connecting third-party services and optimizing databases to create unified, highly efficient software ecosystems."
  },
  { // V
    title: <>Visionary <span className="text-primary">UI/UX Design</span></>,
    desc: "Crafting intuitive user interfaces and seamless digital experiences that enhance user engagement and improve overall software usability."
  },
  { // E
    title: <>End-to-End <span className="text-primary">Support</span></>,
    desc: "Providing full-time technical support, long-term maintenance, and continuous feature enhancements to ensure reliable, secure performance."
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
      <div className="relative w-full h-[240px] sm:h-[180px] lg:h-[160px] flex justify-center mt-2 sm:mt-4">
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
