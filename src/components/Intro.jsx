import { motion } from 'framer-motion'

export default function Intro() {
  const word = 'anwesha'

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-forest text-ivory flex items-center justify-center px-4"
    >
      <div className="absolute top-6 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ivory/60">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        loading the style file
      </div>

      <div className="overflow-hidden max-w-full">
        <div className="flex">
          {word.split('').map((l, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display italic text-[15vw] sm:text-[14vw] leading-[0.85] inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
      />
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ivory/60 font-mono">
        est. 2020 · kolkata
      </div>
    </motion.div>
  )
}
