import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-40 bg-cream overflow-hidden">
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-blush/40 blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-forest mb-8 sm:mb-12">
          <span className="w-6 sm:w-8 h-px bg-forest" />
          <span>01 — about</span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tightest text-ink text-balance"
            >
              Told softly,<br />
              <span className="italic text-forest">lived loudly.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl"
            >
              <p className="text-sm sm:text-base text-ink/75 leading-relaxed text-pretty">
                I&rsquo;m Anwesha &mdash; a blogger from the alleys and markets of Kolkata.
                I make content that feels like a conversation with a friend over adda: part
                beauty ritual, part saree haul, part recipe vlog, part travel notebook.
              </p>
              <p className="text-sm sm:text-base text-ink/75 leading-relaxed text-pretty">
                For five years I&rsquo;ve been building <em className="font-serif text-forest">The Style File</em> &mdash;
                a space where Bengali heritage meets modern skincare, and where every brand
                I partner with earns it the slow way: with honesty, taste, and my audience&rsquo;s trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-wrap gap-2"
            >
              {[
                'Skincare routines',
                'Bridal GRWM',
                'Saree lookbooks',
                'Market vlogs',
                'Honest reviews',
                'Bengali cuisine',
                'Festive rituals',
                'Travel diaries',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs tracking-wider uppercase font-mono border border-ink/15 rounded-full text-ink/70 hover:bg-forest hover:text-ivory hover:border-forest transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* right side card */}
          <div className="col-span-12 lg:col-span-5 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative border border-ink/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-ivory/60 backdrop-blur">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-ink/60">press kit</span>
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                </div>

                <dl className="divide-y divide-ink/10">
                  {[
                    ['Real name', 'Anwesha Ghosh'],
                    ['Handle', '@thestylefile008'],
                    ['Location', 'Kolkata, West Bengal'],
                    ['Niches', 'Beauty · Lifestyle · Travel'],
                    ['Audience', '35K Instagram · YouTube'],
                    ['Primary age', '18–34 · 72% women'],
                    ['Languages', 'Bangla · English · Hindi'],
                  ].map(([k, v]) => (
                    <div key={k} className="py-2.5 sm:py-3 flex items-start justify-between gap-3 sm:gap-4">
                      <dt className="text-ink/50 font-mono text-[10px] sm:text-xs tracking-wider uppercase pt-1 flex-shrink-0">{k}</dt>
                      <dd className="text-ink font-serif text-sm sm:text-lg text-right leading-tight">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 sm:mt-6 p-4 rounded-2xl bg-forest text-ivory">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2 font-mono">signature reel</div>
                  <div className="font-display italic text-lg sm:text-xl leading-tight">
                    &ldquo;Kolkata Chandni Market Scam&rdquo;
                  </div>
                  <div className="mt-2 text-xs text-ivory/70">
                    One of 2025&rsquo;s most shared exposé vlogs from my feed.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
