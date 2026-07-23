import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    image: '/portfolio-fintech.png',
    title: 'NovaPay Mobile Banking',
    category: 'Fintech',
    country: 'United Kingdom',
    tech: 'React Native · Node.js',
  },
  {
    image: '/portfolio-health.png',
    title: 'MediTrack Analytics',
    category: 'Healthcare',
    country: 'Germany',
    tech: 'Next.js · Python',
  },
  {
    image: '/portfolio-ecommerce.png',
    title: 'Marketa Storefront',
    category: 'E-commerce',
    country: 'UAE',
    tech: 'Next.js · Laravel',
  },
  {
    image: '/portfolio-ai.png',
    title: 'Synthia AI Assistant',
    category: 'AI SaaS',
    country: 'United States',
    tech: 'OpenAI · AWS',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent work our clients are proud of"
          description="A snapshot of products we\u2019ve shipped across industries and continents."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="glass group relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.title} case study preview`}
                    width={720}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.country} · {p.tech}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
