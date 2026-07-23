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
    icon: ServerCog,
    title: 'Complete ERP Solutions',
    text: 'Comprehensive business management systems including inventory, HR, accounting, and supply chain.',
    tags: ['Inventory', 'HRM', 'Accounting', 'CRM'],
  },
  {
    icon: Code2,
    title: 'Software Development',
    text: 'Custom software solutions designed and tailored specifically to your unique business needs.',
    tags: ['Custom Software', 'Business Systems'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    text: 'Modern, responsive, and high-performance corporate websites and e-commerce platforms.',
    tags: ['React', 'Next.js', 'WordPress'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Engaging Android & iOS applications built with Flutter to grow your brand and audience.',
    tags: ['iOS', 'Android', 'Flutter'],
  },
  {
    icon: Palette,
    title: 'Graphics & UI/UX Design',
    text: 'Creative designs and intuitive interfaces that communicate your brand identity perfectly.',
    tags: ['Branding', 'Logos', 'UI/UX'],
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    text: 'Grow your brand online with smart marketing strategies, SEO, and digital campaigns.',
    tags: ['SMM', 'SEO', 'Digital Marketing'],
  },
  {
    icon: ServerCog,
    title: 'IT Support & Maintenance',
    text: 'Reliable full-time support and maintenance to keep your systems running smoothly 24/7.',
    tags: ['Maintenance', 'Bug Fixing', 'AMC'],
  },
  {
    icon: Code2,
    title: 'API & System Integration',
    text: 'Seamlessly connecting third-party services and optimizing databases for unified workflows.',
    tags: ['REST APIs', 'Database Optimization'],
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    text: 'Secure, scalable cloud hosting support and deployments to ensure your business never goes down.',
    tags: ['AWS', 'Hosting', 'Security'],
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
