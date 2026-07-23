import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaButton } from '@/components/cta-button'

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    cadence: '/ project',
    description: 'For small businesses and MVPs that need to launch fast.',
    features: [
      'Landing page or MVP',
      'Responsive design',
      'Up to 5 pages',
      'Basic SEO setup',
      '30 days support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$7,900',
    cadence: '/ project',
    description: 'For growing companies building a full digital product.',
    features: [
      'Custom web or mobile app',
      'UI/UX design system',
      'API & database integration',
      'Advanced SEO & analytics',
      '90 days priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'For enterprises needing scale, security, and dedicated teams.',
    features: [
      'Dedicated engineering team',
      'Cloud architecture & DevOps',
      'AI & automation solutions',
      'SLA & security compliance',
      '24/7 premium support',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Flexible engagement models that scale with your ambitions. Every plan is fully customizable."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`glass relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-primary/60 glow-blue lg:-translate-y-4'
                    : 'hover:-translate-y-1.5 hover:border-primary/40'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-primary px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-heading text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">{plan.cadence}</span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CtaButton
                    href="#contact"
                    variant={plan.featured ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Request Quote
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
