'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedBackground } from './animated-background'
import { AnimatedProwaveText } from './animated-prowave-text'
import { AnimatedStats } from './animated-stats'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CtaButton } from './cta-button'

export function Hero() {
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLElement>(null)
  
  // Minimal scroll effects for static hero elements (like stats)
  const parallaxY = useTransform(scrollY, [0, 600], [0, 40])

  return (
    <section ref={heroRef} id="home" className="sticky top-0 min-h-screen flex flex-col items-center justify-center pt-36 pb-24 z-10">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/icon.svg"
            alt="Prowave Logo"
            width={48}
            height={48}
            className="opacity-90"
            priority
          />
        </motion.div>

        {/* Dynamic Prowave Text & Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full"
        >
          <AnimatedProwaveText heroRef={heroRef} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          style={{ y: parallaxY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-20 mt-4 relative z-20 pointer-events-auto"
        >
          <CtaButton href="#contact" variant="primary">
            Get Free Consultation
          </CtaButton>
          <CtaButton href="#portfolio" variant="secondary">
            View Portfolio
          </CtaButton>
        </motion.div>

        {/* Client Statistics */}
        <div className="w-full">
          <AnimatedStats />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll to Explore</span>
        <div className="flex h-[42px] w-[26px] justify-center rounded-full border border-muted-foreground/30 p-1">
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
