import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Truck,
  Landmark,
  Factory,
  HardHat,
  UtensilsCrossed,
  Store,
  ShieldHalf,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const industries = [
  { icon: ShoppingCart, label: 'E-commerce & Retail' },
  { icon: HeartPulse, label: 'Healthcare & Medical' },
  { icon: Factory, label: 'Manufacturing & Textile' },
  { icon: Truck, label: 'Logistics & Transport' },
  { icon: Building2, label: 'Real Estate' },
  { icon: GraduationCap, label: 'Education' },
  { icon: UtensilsCrossed, label: 'Food & Restaurants' },
  { icon: Store, label: 'Wholesale & Trading' },
  { icon: HardHat, label: 'Construction' },
  { icon: Landmark, label: 'Corporate Sectors' },
]

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions for every sector"
          description="Domain expertise that lets us hit the ground running, whatever your industry."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {industries.map((item, i) => (
            <Reveal key={item.label} delay={(i % 6) * 60}>
              <div className="glass group flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-blue">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="font-heading font-semibold text-foreground">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
