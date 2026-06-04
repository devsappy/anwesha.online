import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 35, suffix: 'K', label: 'Instagram Followers', sub: '@thestylefile008' },
  { value: 1447, suffix: '+', label: 'Posts & Reels', sub: 'since 2020' },
  { value: 6, suffix: '', label: 'Brand Collaborations', sub: 'and counting' },
  { value: 5, suffix: '+', label: 'Travel Destinations', sub: 'documented' },
]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => {
    const formatted = v < 100 ? v.toFixed(1).replace(/\.0$/, '') : Math.floor(v).toLocaleString()
    return `${formatted}${suffix}`
  })

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] })
      return controls.stop
    }
  }, [inView, to, mv])

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </motion.span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-ivory">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ivory p-5 sm:p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-forest translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <div className="relative">
                <div className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tightest text-ink group-hover:text-ivory transition-colors duration-500 leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 sm:mt-4 h-px w-6 sm:w-8 bg-gold" />
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-ink/70 group-hover:text-ivory/80 transition-colors duration-500">
                  {s.label}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs font-mono tracking-wider text-ink/40 group-hover:text-gold transition-colors duration-500 truncate">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
