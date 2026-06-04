import { motion } from 'framer-motion'

const words = [
  'skincare',
  'bridal makeover',
  'lifestyle',
  'bengali rituals',
  'travel diaries',
  'gen-z voice',
  'honest reviews',
  'kolkata stories',
]

export default function Marquee() {
  return (
    <section className="relative border-y border-ink/10 bg-cream/50 py-4 sm:py-5 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap gap-6 sm:gap-10"
      >
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-6 sm:gap-10 text-xl sm:text-2xl md:text-3xl font-display italic text-ink/80"
          >
            {w}
            <span className="text-gold text-base sm:text-xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
