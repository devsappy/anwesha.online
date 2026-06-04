import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const brands = [
  {
    name: 'Sugar Cosmetics',
    category: 'Beauty',
    year: '2024',
    note: 'Matte lipstick campaign · shade edit for Indian skin tones.',
  },
  {
    name: 'Van Heusen',
    category: 'Fashion',
    year: '2024',
    note: 'Westside summer capsule · styling reels & try-on haul.',
  },
  {
    name: 'Urban Yog',
    category: 'Wellness',
    year: '2024',
    note: 'Foot-peel masks · winter skincare storytelling.',
  },
  {
    name: 'Wish Care',
    category: 'Hair & Skin',
    year: '2024',
    note: 'Shampoo & hair-mask routine with before/after reel.',
  },
  {
    name: 'Alps Goodness',
    category: 'Natural Beauty',
    year: '2024',
    note: '100% natural serum integration · honest long-form review.',
  },
  {
    name: 'Bajaj Finance',
    category: 'Lifestyle · Finance',
    year: '2024',
    note: 'EMI storytelling reel · jewellery-buying explainer.',
  },
]

export default function Brands() {
  return (
    <section id="brands" className="relative py-20 sm:py-28 md:py-40 bg-forest text-ivory overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
      <div className="absolute -top-40 right-0 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-gold/10 blur-3xl" />

      {/* Scrolling marquee header */}
      <div className="mb-14 sm:mb-20 md:mb-28 border-y border-ivory/10 py-4 sm:py-6 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 sm:gap-12 md:gap-16"
        >
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-8 sm:gap-12 md:gap-16 font-display italic text-3xl sm:text-5xl md:text-7xl text-ivory/90"
            >
              {b.name}
              <span className="text-gold text-xl sm:text-2xl md:text-3xl not-italic">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-gold mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-gold" />
              <span>03 — collaborations</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-balance max-w-3xl">
              Trusted by <span className="italic text-gold">the brands</span><br className="hidden sm:block" />
              <span className="sm:hidden"> </span>I actually use.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-ivory/70 font-serif italic text-base sm:text-xl leading-snug">
              A small, deliberate roster of beauty, fashion, wellness and lifestyle partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ivory/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-ivory/10">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: 'rgba(184,149,106,0.12)' }}
              className="group relative bg-forest p-6 sm:p-8 md:p-12 flex items-start justify-between gap-4 sm:gap-6 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-ivory/50 flex-wrap">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-3 sm:w-4 h-px bg-ivory/30" />
                  <span>{b.category}</span>
                  <span className="w-3 sm:w-4 h-px bg-ivory/30" />
                  <span>{b.year}</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tightest group-hover:text-gold transition-colors duration-500 break-words">
                  {b.name}
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-ivory/60 max-w-md leading-relaxed">
                  {b.note}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ivory/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold group-hover:text-forest group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ivory/40"
        >
          <span>paid partnerships · declared</span>
          <span className="hidden sm:inline">long-form + short-form deliverables</span>
          <a href="#contact" className="text-gold hover:text-ivory transition-colors">
            → add your brand
          </a>
        </motion.div>
      </div>
    </section>
  )
}
