import Link from 'next/link'
import { Hexagon, Globe, Send, MessageCircle, Rss } from 'lucide-react'

const columns = [
  {
    title: 'Services',
    links: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'AI Automation', 'Cloud Solutions'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Documentation', 'Pricing', 'Support', 'Privacy Policy'],
  },
]

const socials = [
  { icon: Globe, label: 'Website' },
  { icon: Send, label: 'Newsletter' },
  { icon: MessageCircle, label: 'Community' },
  { icon: Rss, label: 'Blog' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan">
                <Hexagon className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
                Nexoraq
              </span>
            </Link>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              A premium software house building web, mobile, AI, and cloud products for ambitious
              teams around the world.
            </p>
            <form className="flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexoraq. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
