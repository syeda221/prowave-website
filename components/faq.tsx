'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on scope, but most MVPs launch in 6–10 weeks and larger platforms in 3–6 months. After discovery we give you a clear, milestone-based schedule.',
  },
  {
    q: 'Do you work with startups as well as enterprises?',
    a: 'Absolutely. We tailor our engagement model to your stage — from lean MVP builds for startups to dedicated teams and compliance-ready systems for enterprises.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer fixed-price projects, monthly retainers, and dedicated team models. Every quote is transparent with no hidden fees, agreed before work begins.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes a support window, and we offer ongoing maintenance, hosting, and monitoring plans to keep your product healthy long-term.',
  },
  {
    q: 'Can you take over an existing codebase?',
    a: 'We regularly audit, refactor, and modernize existing applications. We\u2019ll assess the code, document a plan, and improve stability before adding new features.',
  },
  {
    q: 'Who owns the intellectual property?',
    a: 'You do. On final payment, all source code, designs, and assets are fully transferred to you with complete ownership rights.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before starting a project with us."
        />

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="glass overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-bold text-foreground md:text-lg">
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
