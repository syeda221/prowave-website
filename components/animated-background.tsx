'use client'

import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Generate very small, faint particles (floating slowly)
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: `particle-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 40 + 30, // Extremely slow
    delay: Math.random() * 10,
  }))

  // Generate little sparkles (twinkling dots) like THRIVE reference
  const sparkles = Array.from({ length: 80 }).map((_, i) => ({
    id: `sparkle-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() < 0.2 ? 2 : 1, // Mostly 1px, some 2px
    duration: Math.random() * 4 + 2, // Twinkle speed
    delay: Math.random() * 5,
    color: Math.random() < 0.4 ? 'bg-primary' : 'bg-white', // 40% blue, 60% white
  }))

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#05070B] pointer-events-none">
      {/* Extremely subtle moving grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          animation: 'slide-bg 120s linear infinite',
        }}
      />
      <style>{`
        @keyframes slide-bg {
          0% { transform: translateY(0px); }
          100% { transform: translateY(64px); }
        }
      `}</style>

      {/* Faint elegant glow in the center */}
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-[60vw] w-[60vw] rounded-full bg-primary/[0.03] blur-[120px]" />

      {/* Little Twinkling Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className={`absolute rounded-full ${s.color}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>

      {/* Elegant, slow-moving minimal particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px); opacity: 0.05; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100px); opacity: 0.05; }
        }
      `}</style>
    </div>
  )
}
