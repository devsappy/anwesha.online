import { motion } from 'framer-motion'
import { Sparkles, Palette, Flower2, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Skincare',
    bangla: 'ত্বকের যত্ন',
    icon: Sparkles,
    copy: 'Product reviews, ingredient deep-dives, and weekly routines for Indian skin — tested before recommended.',
    tone: 'bg-blush text-burgundy',
    accent: 'bg-burgundy text-ivory',
  },
  {
    num: '02',
    title: 'Makeover',
    bangla: 'সাজগোজ',
    icon: Palette,
    copy: 'Bengali bridal GRWMs, festive looks, and everyday makeup tutorials — from alta to highlighter.',
    tone: 'bg-forest text-ivory',
    accent: 'bg-gold text-forest',
  },
  {
    num: '03',
    title: 'Lifestyle',
    bangla: 'জীবনযাপন',
    icon: Flower2,
    copy: 'Market vlogs, saree hauls, recipe mini-vlogs, pujo rituals, and travel diaries across India.',
    tone: 'bg-gold/30 text-forest',
    accent: 'bg-forest text-ivory',
  },
]

const reels = [
  { title: 'Chandni Market Scam', kind: 'exposé', hot: true },
  { title: 'Ashtami GRWM', kind: 'festive' },
  { title: 'Khasir Mangsher Recipe', kind: 'food' },
  { title: 'Poyla Boishakh Saree Haul', kind: 'shopping' },
  { title: 'Westside Summer Try-On', kind: 'fashion' },
  { title: 'Aiburo Bhaat Ritual', kind: 'wedding' },
  { title: 'Winter Foot Peel', kind: 'skincare' },
  { title: 'Biyebari Mini Mua', kind: 'bridal' },
]

export default function Content() {
  return (
    <section id="content" className="relative py-20 sm:py-28 md:py-40 bg-ivory">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-forest mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-forest" />
              <span>02 — the content</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-balance max-w-3xl">
              Three pillars, <span className="italic text-forest">one voice.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base sm:text-xl text-ink/70 font-serif italic leading-snug">
            What I make, week after week — slow, honest, rooted in Bengali sensibility.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden ${p.tone} min-h-[320px] sm:min-h-[380px] flex flex-col justify-between ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${p.accent} flex items-center justify-center`}>
                  <p.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] opacity-70">{p.num}</span>
              </div>

              <div>
                <div className="font-display text-lg sm:text-xl italic opacity-70 mb-1">{p.bangla}</div>
                <div className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tightest">
                  {p.title}
                </div>
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm opacity-80 leading-relaxed max-w-xs">
                  {p.copy}
                </p>
              </div>

              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-current/30 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reels strip */}
        <div className="mt-14 sm:mt-20">
          <div className="flex items-center justify-between mb-5 sm:mb-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ink/50 flex-wrap gap-2">
            <span>recent archive</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              updated weekly
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {reels.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-sand border border-ink/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                {r.hot && (
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-terracotta text-ivory text-[9px] sm:text-[10px] font-mono tracking-wider uppercase px-1.5 sm:px-2 py-0.5 rounded-full">
                    viral
                  </div>
                )}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ivory/15 backdrop-blur flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] sm:border-l-[7px] border-l-ivory border-y-[4px] sm:border-y-[5px] border-y-transparent ml-0.5" />
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-ivory/70 mb-1">
                    {r.kind}
                  </div>
                  <div className="font-display italic text-ivory text-sm sm:text-lg leading-tight">
                    {r.title}
                  </div>
                </div>
                <div className="absolute -inset-8 bg-forest/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
