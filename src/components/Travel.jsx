import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const places = [
  {
    name: 'Kalpa',
    state: 'Himachal Pradesh',
    height: '2,960m',
    note: 'Apple orchards & monastery mornings.',
    hue: 'from-forest to-moss',
  },
  {
    name: 'Shimla',
    state: 'Himachal Pradesh',
    height: '2,276m',
    note: 'The Mall Road diaries, colonial wood cafés.',
    hue: 'from-burgundy to-terracotta',
  },
  {
    name: 'Chandratal',
    state: 'Spiti Valley',
    height: '4,300m',
    note: 'The moon-lake camp under the milky way.',
    hue: 'from-ink to-forest',
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    height: '2,050m',
    note: 'Snow reels & old Manali café crawls.',
    hue: 'from-moss to-gold',
  },
  {
    name: 'Sikkim',
    state: 'North-East India',
    height: 'varied',
    note: 'Monasteries, momos, and the Nathula frontier.',
    hue: 'from-forest to-burgundy',
  },
]

export default function Travel() {
  return (
    <section id="travel" className="relative py-20 sm:py-28 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-forest mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-forest" />
              <span>04 — the travel log</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-balance max-w-3xl">
              Off the feed, <span className="italic text-forest">on the road.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base sm:text-xl text-ink/70 font-serif italic leading-snug">
            A slow archive of Himalayan detours and north-east wanderings, documented as I go.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {places.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-ink/10 last:border-b py-5 sm:py-6 md:py-8 flex items-center gap-4 sm:gap-6 md:gap-12"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ink/40 w-6 sm:w-8 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0 flex items-baseline gap-3 sm:gap-4 md:gap-8 flex-wrap">
                <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest text-ink group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-500">
                  {p.name}
                </h3>
                <span className="font-serif italic text-base sm:text-xl md:text-2xl text-forest/70 leading-tight">
                  — {p.note}
                </span>
              </div>

              <div className="hidden md:flex flex-col items-end text-right flex-shrink-0">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink/40">
                  {p.state}
                </span>
                <span className="font-mono text-sm text-ink/60 mt-1">{p.height}</span>
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-ink/15 flex items-center justify-center group-hover:bg-forest group-hover:border-forest group-hover:text-ivory transition-all duration-500">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
              </div>

              {/* Hover backdrop */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-r ${p.hue} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
