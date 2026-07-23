import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const techs = [
  'Laravel',
  'PHP',
  'React',
  'Vue',
  'Next.js',
  'Node.js',
  'Flutter',
  '.NET',
  'C#',
  'Python',
  'Java',
  'AWS',
  'Docker',
  'Kubernetes',
  'MySQL',
  'MongoDB',
  'Firebase',
  'OpenAI',
]

export function Technologies() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Stack"
          title="Technologies we master"
          description="We choose the right tool for the job from a deep, battle-tested toolbox."
        />

        <Reveal delay={100} className="mt-14">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {techs.map((tech) => (
              <div
                key={tech}
                className="glass group flex items-center justify-center rounded-2xl px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-blue"
              >
                <span className="font-heading text-base font-bold text-muted-foreground transition-colors group-hover:text-foreground">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
