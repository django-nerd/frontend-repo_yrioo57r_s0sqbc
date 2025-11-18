import { useEffect, useRef } from 'react'

export default function GradientMesh() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let t = 0
    let raf

    const animate = () => {
      t += 0.002
      const p = (Math.sin(t) + 1) / 2
      // Radial center drift
      const cx = 50 + Math.sin(t * 0.7) * 10
      const cy = 50 + Math.cos(t * 0.9) * 8
      el.style.background = `radial-gradient(80% 80% at ${cx}% ${cy}%, rgba(30,78,61,0.35), rgba(15,15,15,0.6) 40%, rgba(15,15,15,1) 70%)`
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ filter: 'contrast(105%) saturate(110%)', transition: 'background 1s ease' }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}
