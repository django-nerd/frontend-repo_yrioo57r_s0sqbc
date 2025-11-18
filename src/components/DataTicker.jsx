import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const messages = [
  'Accepting only 3 new projects this quarter',
  'Average 127% performance and conversion lift',
  '10+ premium websites delivered',
]

export default function DataTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-6 overflow-hidden select-none" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-['Space_Mono',monospace] text-[14px] text-[#1E4E3D] tracking-tight"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
