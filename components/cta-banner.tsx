import { CalendarClock, MessageSquare } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="zoom">
          <div className="glass relative overflow-hidden rounded-4xl px-6 py-14 text-center md:px-16 md:py-20">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/25 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Ready when you are
              </span>
              <h2 className="max-w-2xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                Ready to build your next project?
              </h2>
              <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Book a free consultation and let\u2019s turn your vision into a product your users
                will love.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <CtaButton href="#contact">
                  <MessageSquare className="h-4 w-4" />
                  Let&apos;s Talk
                </CtaButton>
                <CtaButton href="#contact" variant="secondary">
                  <CalendarClock className="h-4 w-4" />
                  Schedule Meeting
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
