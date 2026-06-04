import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import About from './components/About'
import Content from './components/Content'
import Brands from './components/Brands'
import Travel from './components/Travel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Intro key="intro" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: loading ? 0 : 0.1 }}
        className="relative overflow-x-hidden"
      >
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Content />
        <Brands />
        <Travel />
        <Contact />
        <Footer />
      </motion.div>
    </>
  )
}
