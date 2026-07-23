import { Reveal } from '@/components/reveal'

const companies = ['Vertex', 'Nimbus', 'Quanta', 'Stratos', 'Lumina', 'Orbital']

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-secondary/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by fast-growing startups and global enterprises
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((name) => (
            <span
              key={name}
              className="font-heading text-2xl font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
