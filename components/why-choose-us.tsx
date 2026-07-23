import {
  Users,
  Cpu,
  GitBranch,
  BadgeDollarSign,
  Headphones,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team',
    text: 'Senior engineers, designers, and product managers with a track record across industries.',
  },
  {
    icon: Cpu,
    title: 'Modern Technologies',
    text: 'We build on today\u2019s most reliable, future-proof stacks — never legacy shortcuts.',
  },
  {
    icon: GitBranch,
    title: 'Agile Development',
    text: 'Iterative delivery with weekly demos so you always see progress and stay in control.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing',
    text: 'Clear scopes and honest estimates. No hidden fees, no surprises on your invoice.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    text: 'A dedicated team and responsive support channels for the entire product lifecycle.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Solutions',
    text: 'Security-first architecture with best practices baked into every layer we ship.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built to be the partner you can rely on"
          description="We combine the reliability of an enterprise vendor with the speed and care of a boutique studio."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:glow-blue">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
