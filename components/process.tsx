import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Search, title: 'Discovery', text: 'We learn your goals, users, and constraints.' },
  { icon: ClipboardList, title: 'Planning', text: 'Scope, roadmap, and architecture defined.' },
  { icon: PenTool, title: 'Design', text: 'Wireframes and polished UI prototypes.' },
  { icon: Code2, title: 'Development', text: 'Clean, tested code shipped in sprints.' },
  { icon: Bug, title: 'Testing', text: 'QA, performance, and security hardening.' },
  { icon: Rocket, title: 'Launch', text: 'Smooth deployment to production.' },
  { icon: LifeBuoy, title: 'Support', text: 'Ongoing maintenance and iteration.' },
]

export function Process() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven development process"
          description="A transparent, milestone-driven workflow that keeps you informed from kickoff to launch."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ol className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 60}
              >
                <li
                  className={`relative flex items-start gap-6 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:flex-row-reverse md:pl-12 md:text-right'
                  }`}
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan text-primary-foreground glow-blue">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
