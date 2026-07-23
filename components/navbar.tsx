'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#industries' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center p-4 lg:p-6 transition-all duration-500">
      <header
        className={cn(
          'relative flex h-[88px] w-full max-w-7xl items-center justify-between px-6 transition-all duration-500',
          scrolled 
            ? 'rounded-[18px] bg-[#05070B]/70 backdrop-blur-[22px] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent border border-transparent'
        )}
      >
        <Link href="#home" className="flex items-center gap-3 z-10" onClick={() => setOpen(false)}>
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
          <span className="font-heading text-xl font-extrabold tracking-tight text-white">
            PROWAVE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center absolute inset-0 pointer-events-none">
          <ul className="flex items-center gap-8 pointer-events-auto">
            {links.map((link) => (
              <li key={link.href} className="relative group flex flex-col justify-center h-[88px]">
                <Link
                  href={link.href}
                  className="text-[14px] font-medium font-sans text-gray-400 transition-colors tracking-wide hover:text-white"
                >
                  {link.label}
                </Link>
                {/* Active indicator */}
                {link.active && (
                  <div className="absolute bottom-[28px] left-0 right-0 h-[1px] bg-primary rounded-full" />
                )}
                {/* Hover line indicator */}
                {!link.active && (
                  <div className="absolute bottom-[28px] left-0 w-full h-[1px] bg-white/20 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center z-10">
          <Link 
            href="#contact"
            className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-medium text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 shadow-sm"
          >
            Get Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-70" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden z-10"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {open ? (
        <div className="absolute top-[100px] inset-x-4 rounded-[18px] bg-[#081222]/90 backdrop-blur-[22px] border border-white/10 p-6 lg:hidden shadow-2xl">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-lg font-medium font-sans tracking-[0.3px]",
                    link.active ? "text-accent" : "text-gray-300"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
