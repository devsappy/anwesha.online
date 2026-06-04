import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram, Menu, X, Youtube, Mail } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Brands', href: '#brands' },
  { label: 'Travel', href: '#travel' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 md:py-4 backdrop-blur-md bg-ivory/75 border-b border-ink/5' : 'py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-9 h-9 rounded-full bg-forest text-ivory flex items-center justify-center font-display italic text-lg flex-shrink-0 transition-transform group-hover:rotate-[-8deg]">
              A
            </div>
            <div className="hidden sm:block leading-tight min-w-0">
              <div className="font-display italic text-base md:text-lg truncate">Anwesha Ghosh</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink/60 font-mono">
                the style file
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1 bg-cream/60 backdrop-blur rounded-full px-2 py-1.5 border border-ink/5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-1.5 text-sm text-ink/80 hover:text-forest transition-colors rounded-full hover:bg-ivory"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/thestylefile008"
              target="_blank"
              rel="noreferrer"
              className="group hidden sm:flex items-center gap-2 text-sm bg-forest text-ivory pl-4 md:pl-5 pr-1 py-1 rounded-full hover:bg-ink transition-colors"
            >
              <span className="font-mono text-[11px] md:text-xs tracking-wider">@thestylefile008</span>
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gold flex items-center justify-center text-forest transition-transform group-hover:rotate-[20deg]">
                <Instagram size={14} strokeWidth={2.2} />
              </span>
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-11 h-11 rounded-full bg-forest text-ivory flex items-center justify-center flex-shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-forest text-ivory"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full flex flex-col pt-24 pb-10 px-6 sm:px-10"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-ivory/50 mb-8">
                menu
              </div>
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-b border-ivory/10"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 font-display text-4xl sm:text-5xl italic"
                    >
                      <span className="group-hover:text-gold transition-colors">{l.label}</span>
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ivory/40">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-ivory/50 mb-4">
                  follow along
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/thestylefile008"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-ivory/10 text-sm"
                  >
                    <Instagram size={14} /> @thestylefile008
                  </a>
                  <a
                    href="https://youtube.com/@thestylefile08"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-ivory/10 text-sm"
                  >
                    <Youtube size={14} /> YouTube
                  </a>
                  <a
                    href="mailto:anweshaghosh8dec2000@gmail.com"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold text-forest text-sm font-medium"
                  >
                    <Mail size={14} /> Collab
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
