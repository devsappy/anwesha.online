import { motion } from 'framer-motion'
import { Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react'

const channels = [
  {
    label: 'Instagram',
    handle: '@thestylefile008',
    meta: '31.7K followers',
    href: 'https://instagram.com/thestylefile008',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    handle: 'Anwesha Ghosh',
    meta: 'long-form vlogs',
    href: 'https://youtube.com/@thestylefile08',
    icon: Youtube,
  },
  {
    label: 'Threads',
    handle: '@thestylefile008',
    meta: 'daily thoughts',
    href: 'https://threads.net/@thestylefile008',
    icon: ArrowUpRight,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-40 bg-cream overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] sm:w-[700px] h-[420px] sm:h-[700px] rounded-full bg-blush/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-mono text-forest mb-8 sm:mb-10">
          <span className="w-6 sm:w-8 h-px bg-forest" />
          <span>05 — let&rsquo;s collaborate</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-[0.9] tracking-tightest text-balance"
        >
          Have a<br />
          <span className="italic text-forest">story</span> to<br />
          tell?
        </motion.h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 lg:col-span-7">
            <motion.a
              href="mailto:anwesha.collab@thestylefile.in"
              data-cursor="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="group block relative overflow-hidden rounded-2xl sm:rounded-3xl bg-ink text-ivory p-6 sm:p-8 md:p-12"
            >
              <div className="absolute -inset-20 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ivory/50 mb-3 sm:mb-4">
                    brand enquiries & paid collabs
                  </div>
                  <div className="font-display text-2xl sm:text-3xl md:text-5xl italic leading-tight break-all">
                    anwesha.collab<wbr />@thestylefile.in
                  </div>
                  <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-ivory/70">
                    <Mail size={14} />
                    <span>replies within 48 hours</span>
                  </div>
                </div>
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gold text-forest flex items-center justify-center flex-shrink-0 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>
            </motion.a>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-3">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group relative flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-ivory border border-ink/10 hover:border-forest hover:bg-forest hover:text-ivory transition-all duration-500"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cream group-hover:bg-gold flex items-center justify-center transition-colors flex-shrink-0">
                  <c.icon size={18} className="text-forest" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ink/50 group-hover:text-ivory/60 transition-colors">
                    {c.label}
                  </div>
                  <div className="font-serif text-lg sm:text-xl truncate">{c.handle}</div>
                  <div className="text-xs text-ink/50 group-hover:text-ivory/60 transition-colors truncate">
                    {c.meta}
                  </div>
                </div>
                <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ink/50"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            booking Q2 2026
          </div>
          <div>based in kolkata · travels on request</div>
        </motion.div>
      </div>
    </section>
  )
}
