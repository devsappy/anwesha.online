import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 md:px-10 max-w-[1600px] mx-auto"
      >
        <div className="flex items-end justify-between gap-4 sm:gap-8 mb-10 sm:mb-16 flex-wrap">
          <div className="font-display leading-[0.82] tracking-tightest">
            <div className="text-[22vw] sm:text-[18vw] md:text-[15vw] italic">
              anwesha
            </div>
          </div>
          <a
            href="#top"
            className="group flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm font-mono tracking-[0.2em] uppercase text-ivory/70 hover:text-gold transition-colors"
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-ivory/30 flex items-center justify-center group-hover:-translate-y-1 group-hover:border-gold transition-all">
              <ArrowUp size={14} className="sm:w-4 sm:h-4" />
            </span>
            <span className="hidden sm:inline">back to top</span>
          </a>
        </div>

        <div className="border-t border-ivory/10 pt-6 sm:pt-8 flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-ivory/50">
          <div>© 2026 Anwesha Ghosh · The Style File</div>
          <div className="hidden md:flex items-center gap-4 sm:gap-6">
            <span>made in kolkata</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>framer motion × react</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://instagram.com/thestylefile008" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">instagram</a>
            <a href="https://youtube.com/@thestylefile08" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">youtube</a>
            <a href="mailto:anweshaghosh8dec2000@gmail.com" className="hover:text-gold transition-colors">email</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
