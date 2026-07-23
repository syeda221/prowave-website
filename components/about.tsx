import Image from 'next/image'
import { Target, Eye, Gem } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower businesses with custom software and comprehensive ERP solutions that automate workflows and drive sustainable growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted technology partner, turning complex business ideas into powerful, seamless digital solutions.',
  },
  {
    icon: Gem,
    title: 'Core Values',
    text: 'Innovation, transparency, and a relentless focus on client success guide every project we deliver.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left" className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/about-team.png"
              alt="Pro Wave Technologies software engineering team"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-2 rounded-2xl px-6 py-4 sm:-right-6">
            <div className="font-heading text-3xl font-extrabold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                About Pro Wave
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl">
                Smart Solutions. <span className="text-primary">Stronger Business.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Pro Wave Technologies is a full-service software house dedicated to turning your ideas into powerful digital solutions. From complete custom ERP systems to high-performance web and mobile applications, we provide end-to-end engineering to scale your business.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={200 + i * 100}>
                <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <CtaButton href="#contact" variant="secondary">
              Read More
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
