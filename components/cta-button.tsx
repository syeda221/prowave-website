import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-primary text-primary-foreground shadow-[0_0_30px_-6px_rgba(45,140,255,0.6)] hover:shadow-[0_0_45px_-4px_rgba(139,207,38,0.6)] hover:-translate-y-0.5',
  secondary:
    'glass border-primary/40 text-foreground hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5',
}

type Variant = keyof typeof variants

export function CtaButton({
  children,
  variant = 'primary',
  href,
  className,
  ...props
}: {
  children: ReactNode
  variant?: Variant
  href?: string
  className?: string
} & Omit<ComponentProps<'button'>, 'ref'>) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
