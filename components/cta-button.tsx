import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-primary/90',
  secondary:
    'bg-white/5 border border-white/10 text-foreground shadow-sm hover:bg-white/10 hover:border-white/20',
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
