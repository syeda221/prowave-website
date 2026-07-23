'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const contactMethods = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+1 (555) 019-2837' },
  { icon: Mail, label: 'Email', value: 'hello@nexoraq.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 782-1120' },
  { icon: MapPin, label: 'Office', value: '221 Innovation Ave, Suite 900' },
]

const budgets = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+']

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let\u2019s build something great together"
          description="Tell us about your project and we\u2019ll get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="glass overflow-hidden rounded-3xl">
                <iframe
                  title="Nexoraq office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.75&layer=mapnik"
                  className="h-56 w-full grayscale invert-[0.9]"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactMethods.map((m) => (
                  <div key={m.label} className="glass flex items-start gap-3 rounded-2xl p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="text-sm font-medium text-foreground">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100} className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-accent" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="max-w-sm text-muted-foreground">
                    Your inquiry has been received. Our team will reach out within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                    <Field label="Phone" name="phone" placeholder="+1 (555) 000-0000" />
                    <Field label="Company" name="company" placeholder="Acme Inc." />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b, i) => (
                        <label
                          key={b}
                          className="cursor-pointer rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/15 has-[:checked]:text-foreground"
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={b}
                            defaultChecked={i === 1}
                            className="sr-only"
                          />
                          {b}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_-6px_rgba(45,140,255,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_-4px_rgba(139,207,38,0.6)]"
                  >
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}
