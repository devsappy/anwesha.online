import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Play } from 'lucide-react'

const revealUp = {
  hidden: { y: '110%' },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.9, delay: 2.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[92vh] md:min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden"
    >
      {/* decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-14 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-ink/60"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse flex-shrink-0" />
            <span className="whitespace-nowrap">available · 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>kolkata · india</span>
            <span>·</span>
            <span>eng / bangla / hindi</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          {/* Left column: heading */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-forest/80 font-mono">
              <span className="inline-block w-6 sm:w-8 h-px bg-forest/40" />
              <span className="truncate">lifestyle · skincare · storytelling</span>
            </div>

            <h1 className="font-display leading-[0.88] tracking-tightest text-ink">
              <span className="block overflow-hidden">
                <motion.span
                  variants={revealUp}
                  initial="hidden"
                  animate="show"
                  custom={0}
                  className="block text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
                >
                  Anwesha
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={revealUp}
                  initial="hidden"
                  animate="show"
                  custom={1}
                  className="block text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw] italic text-forest"
                >
                  Ghosh<span className="text-gold not-italic">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.9 }}
              className="mt-6 sm:mt-8 max-w-xl text-ink/70 text-base sm:text-lg md:text-xl font-serif italic leading-snug text-balance"
            >
              A Kolkata-based creator documenting skincare rituals, bridal makeovers, and
              the quiet poetry of everyday Bengali lifestyle &mdash; for a community of
              <span className="text-forest font-medium not-italic"> 31.7k </span>
              readers & watchers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.05, duration: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                data-cursor="hover"
                className="group relative overflow-hidden bg-forest text-ivory pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full flex items-center gap-3 sm:gap-4"
              >
                <span className="text-xs sm:text-sm tracking-wider">Work with me</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold text-forest flex items-center justify-center transition-transform group-hover:rotate-[-25deg]">
                  <ArrowDown size={14} className="-rotate-90" />
                </span>
              </a>
              <a
                href="https://youtube.com/@thestylefile08"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-ink/70 hover:text-forest transition-colors"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-forest group-hover:bg-forest group-hover:text-ivory transition-all">
                  <Play size={12} fill="currentColor" />
                </span>
                <span className="text-xs sm:text-sm tracking-wide">Watch the reel</span>
              </a>
            </motion.div>
          </div>

          {/* Right column: portrait card */}
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-sm mx-auto lg:mx-0 lg:max-w-none"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-[3/4] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-gradient-to-br from-burgundy via-forest to-ink shadow-2xl shadow-forest/20 grain"
              >
                <img
                  src="/IMG_4909.jpg"
                  alt="Anwesha Ghosh"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5 sm:p-6">
                  <div className="w-full">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ivory/70 font-mono mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" /> featured
                    </div>
                    <div className="font-display italic text-ivory text-2xl sm:text-3xl leading-tight">
                      The Style<br />File
                    </div>
                  </div>
                </div>
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ivory/40 flex items-center justify-center">
                  <span className="font-display italic text-ivory text-lg sm:text-xl">A</span>
                </div>
                <div className="absolute top-1/3 left-1/4 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gold/30 blur-2xl" />
                <div className="absolute bottom-1/3 right-1/4 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-blush/40 blur-2xl" />
              </motion.div>

              {/* floating sticker */}
              <motion.div
                initial={{ rotate: -12, opacity: 0 }}
                animate={{ rotate: -12, opacity: 1 }}
                transition={{ delay: 3.3, duration: 0.8 }}
                className="absolute -top-4 sm:-top-6 -left-2 sm:-left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold text-forest flex items-center justify-center text-center p-3 shadow-lg"
              >
                <div>
                  <div className="font-display italic text-base sm:text-lg leading-none">31.7k</div>
                  <div className="text-[9px] tracking-[0.2em] uppercase font-mono mt-1">followers</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                className="mt-4 sm:mt-5 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-wider text-ink/60"
              >
                <span>@thestylefile008</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                  active daily
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="mt-12 sm:mt-16 md:mt-20 flex items-end justify-between"
        >
          <div className="hidden md:block text-[11px] tracking-[0.3em] uppercase font-mono text-ink/50 max-w-xs">
            Scroll to explore a curated archive of brand partnerships, travel logs, and creative rituals.
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-mono text-ink/50 ml-auto">
            <span>scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
