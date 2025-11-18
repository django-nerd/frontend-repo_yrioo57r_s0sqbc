import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Hero />
      <section id="work" className="min-h-[120vh] bg-[#0F0F0F] text-white border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-['Playfair_Display',serif] text-4xl tracking-tight mb-6">Selected Work</h2>
          <p className="text-[#A0A0A0] max-w-2xl">This is a placeholder section to continue the narrative flow as you scroll. We can populate this with real case studies next.</p>
        </div>
      </section>
    </div>
  )
}

export default App
