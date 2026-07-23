import Image from 'next/image'
import { Code2, Smartphone, BrainCircuit, Palette, Cloud, Star } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const floatingIcons = [
  { icon: Code2, label: 'Web Development', className: 'left-0 top-10', delay: '0s' },
  { icon: Smartphone, label: 'Mobile Apps', className: 'right-2 top-24', delay: '1.2s' },
  { icon: BrainCircuit, label: 'AI', className: 'left-4 bottom-28', delay: '0.6s' },
  { icon: Palette, label: 'UI/UX', className: 'right-0 bottom-40', delay: '1.8s' },
  { icon: Cloud, label: 'Cloud', className: 'left-1/2 -translate-x-1/2 bottom-4', delay: '2.4s' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground">
              <span className="flex items-center gap-1 text-accent">
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                5.0
              </span>
              <span className="text-muted-foreground">Trusted by 120+ companies</span>
            </span>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Smart Software Solutions for{' '}
              <span className="text-gradient">Growing Businesses</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Helping startups and enterprises build powerful digital products through web,
              mobile, AI, and cloud technologies — engineered for scale and crafted for impact.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300} className="flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#contact">Get Free Consultation</CtaButton>
            <CtaButton href="#portfolio" variant="secondary">
              View Portfolio
            </CtaButton>
          </Reveal>

          <Reveal
            direction="up"
            delay={400}
            className="mt-4 flex flex-wrap items-center gap-8 border-t border-border pt-8"
          >
            {[
              { value: '250+', label: 'Projects' },
              { value: '120+', label: 'Clients' },
              { value: '15+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={200} className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-square">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-cyan/20 blur-3xl" />
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] border border-border glow-blue">
              <Image
                src="/hero-robot.png"
                alt="Nexoraq 3D AI robot assistant"
                width={640}
                height={640}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {floatingIcons.map(({ icon: Icon, label, className, delay }) => (
              <div
                key={label}
                style={{ animationDelay: delay }}
                className={`animate-float absolute z-20 flex items-center gap-2 rounded-2xl glass px-3 py-2 text-xs font-medium text-foreground shadow-lg ${className}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
