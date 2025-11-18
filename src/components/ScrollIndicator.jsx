import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000)
    const onScroll = () => setVisible(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-3"
        >
          <div className="text-xs text-[#A0A0A0]">Scroll to see MASRICO’s precision at work</div>
          <div className="relative h-16">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-14 bg-[#1E4E3D]" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 rounded-full bg-[#1E4E3D]"
              animate={{ y: [0, -12, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
