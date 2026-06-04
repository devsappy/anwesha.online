import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 40 })
  const springY = useSpring(y, { stiffness: 400, damping: 40 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovering(true)
      else setHovering(false)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed top-0 left-0 z-[90] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 8,
            height: hovering ? 56 : 8,
            backgroundColor: hovering ? 'rgba(184,149,106,0.25)' : '#2D4A3E',
            borderWidth: hovering ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="rounded-full border-gold"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[91] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className="w-1 h-1 rounded-full bg-ink" />
      </motion.div>
    </>
  )
}
