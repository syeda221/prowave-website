'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '120+', label: 'Happy Clients' },
  { value: '15+', label: 'Countries' },
  { value: '8+', label: 'Years Experience' },
]

export function AnimatedStats() {
  return (
    <div className="flex flex-wrap justify-center gap-12 sm:gap-16 pt-12 border-t border-border/40 max-w-4xl mx-auto w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 + 2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="font-heading text-4xl font-extrabold text-foreground drop-shadow-md">
            {stat.value}
          </div>
          <div className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
