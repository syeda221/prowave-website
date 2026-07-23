import {
  Code2,
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Bot,
  Cloud,
  ServerCog,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    text: 'Custom ERP, CRM, desktop apps and internal business systems tailored to your workflows.',
    tags: ['ERP', 'CRM', 'Desktop Apps'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    text: 'High-performance corporate websites and web apps built with modern frameworks.',
    tags: ['React', 'Next.js', 'Laravel', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Native and cross-platform apps that feel fast, polished, and reliable everywhere.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    text: 'Research-driven wireframes, prototypes, and interfaces that convert and delight.',
    tags: ['Wireframes', 'Prototype', 'Brand Identity'],
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    text: 'Branding, logos, and marketing creative that make your business unmistakable.',
    tags: ['Branding', 'Logo', 'Social Media'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    text: 'Chatbots, OpenAI integrations, and workflow automation that save real hours.',
    tags: ['Chatbots', 'OpenAI', 'Workflows'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    text: 'Scalable, resilient cloud infrastructure and migrations across major providers.',
    tags: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    icon: ServerCog,
    title: 'IT Support',
    text: 'Ongoing maintenance, hosting, and security so your systems stay healthy 24/7.',
    tags: ['Maintenance', 'Hosting', 'Security'],
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    text: 'Data-backed SEO, Google Ads, and social campaigns that grow qualified traffic.',
    tags: ['SEO', 'Google Ads', 'Social Media'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to build and scale"
          description="One partner across the full product lifecycle — from first wireframe to global launch and beyond."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:glow-blue">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/10 text-primary transition-transform group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
