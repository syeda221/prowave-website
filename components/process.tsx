import {
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  { 
    icon: ClipboardList, 
    title: 'MEET & PLAN', 
    text: 'Define project requirement, scope, and business goals.' 
  },
  { 
    icon: PenTool, 
    title: 'DESIGN', 
    text: 'Define brand colours, typography, and wireframes.' 
  },
  { 
    icon: Code2, 
    title: 'DEVELOPMENT', 
    text: 'Software installation, custom coding, and integration.' 
  },
  { 
    icon: Bug, 
    title: 'PRE-LAUNCH', 
    text: 'Rigorous multi-browser and device QA testing.' 
  },
  { 
    icon: Rocket, 
    title: 'LAUNCH', 
    text: 'Smooth deployment. Ongoing support begins.' 
  },
]

export function Process() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven development process"
          description="A transparent, milestone-driven workflow that links every step from kickoff to launch."
        />

        <div className="relative mt-20">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
          
          {/* Vertical Line for Mobile */}
          <div className="block lg:hidden absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                direction="up"
                delay={i * 100}
                className="relative z-10 h-full"
              >
                <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-0 h-full">
                  
                  {/* Icon Node */}
                  <div className="relative flex shrink-0 items-center justify-center lg:mb-8">
                    {/* Pulsing ring behind the icon */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#05070B] border-2 border-primary text-primary shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                      <step.icon className="h-7 w-7" />
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="glass flex-1 flex flex-col h-full rounded-2xl p-5 lg:w-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-blue">
                    <span className="inline-block self-start lg:self-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary mb-3">
                      STEP 0{i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-extrabold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
