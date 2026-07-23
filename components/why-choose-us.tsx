import {
  Target,
  ShieldCheck,
  Lightbulb,
  Clock,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Target,
    title: 'Client Focused',
    text: 'We focus entirely on your success, building solutions that perfectly match your business needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    text: 'High quality, bug-free solutions you can trust, backed by rigorous QA and testing.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Approach',
    text: 'We use the latest technologies and smart strategies to build future-proof digital solutions.',
  },
  {
    icon: Clock,
    title: 'On Time Delivery',
    text: 'Strictly committed to deadlines, ensuring your project launches reliably and on schedule.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built to be the partner you can rely on"
          description="We combine enterprise-grade reliability with innovative approaches to deliver your project on time, every time."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
