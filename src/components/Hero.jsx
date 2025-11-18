import { useEffect, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import DataTicker from './DataTicker'
import GradientMesh from './GradientMesh'
import ScrollIndicator from './ScrollIndicator'

const lines = [
  'We Craft',
  'Luxury Digital',
  'Experiences',
  'That Perform.',
]

export default function Hero() {
  // Scroll-linked effects
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = window.innerHeight
      const p = Math.min(1, y / h)
      document.documentElement.style.setProperty('--hero-3d-scale', String(1 - p * 0.3))
      document.documentElement.style.setProperty('--hero-3d-translate', `${-150 * p}px`)
      document.documentElement.style.setProperty('--hero-head-opacity', String(1 - p * 0.7))
      document.documentElement.style.setProperty('--hero-head-scale', String(1 - p * 0.15))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lineVariants = useMemo(() => ({
    hidden: { opacity: 0, filter: 'blur(8px)', y: 8 },
    show: (i) => ({ opacity: 1, filter: 'blur(0px)', y: 0, transition: { delay: 0.2 + i * 0.4, duration: 0.8, ease: 'easeOut' } }),
  }), [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0F] text-white">
      <GradientMesh />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-5">
            <div
              style={{
                opacity: 'var(--hero-head-opacity, 1)',
                transform: 'scale(var(--hero-head-scale, 1))',
                transformOrigin: 'left center',
              }}
            >
              <div className="space-y-1">
                {lines.map((l, i) => (
                  <motion.h1
                    key={l}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={lineVariants}
                    className="font-['Playfair_Display',serif] text-[48px] sm:text-[56px] lg:text-[64px] leading-[1.1] -tracking-[0.02em]"
                  >
                    {l}
                  </motion.h1>
                ))}
              </div>

              <p className="mt-6 text-[#A0A0A0] text-[18px] leading-[1.6] max-w-prose">
                High-performance websites engineered for brands that demand premium quality and measurable results.
              </p>

              <div className="mt-6">
                <DataTicker />
              </div>

              <div className="mt-10">
                <a
                  href="#work"
                  className="inline-block bg-[#1E4E3D] text-white text-[16px] font-medium px-9 py-4 rounded-[4px] shadow-[0_8px_24px_rgba(30,78,61,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Our Work →
                </a>
              </div>
            </div>
          </div>

          {/* Right 3D cover */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[85vh]">
            <div
              className="absolute inset-0"
              style={{
                transform: 'translateY(var(--hero-3d-translate, 0)) scale(var(--hero-3d-scale, 1))',
                transformOrigin: 'center',
                transition: 'transform 0.2s ease-out',
              }}
            >
              <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
