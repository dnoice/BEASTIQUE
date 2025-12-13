import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-beastique-black via-beastique-black/90 to-beastique-black" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="text-gradient-gold">BEASTIQUE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-beastique-bone/80 max-w-3xl mx-auto mb-8 font-display italic">
            Visual Evidence from the Sixth Mass Extinction
          </p>
          
          <p className="text-lg text-beastique-bone/60 max-w-2xl mx-auto mb-12">
            A documentation of endangered species transformed into the materials 
            we valued more than the lives that carried them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-primary">
              Enter Gallery
            </Link>
            <Link href="/about/manifesto" className="btn-outline">
              Read Manifesto
            </Link>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-beastique-gold" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>
      
      {/* Featured Collections */}
      <section className="section-padding bg-beastique-charcoal">
        <div className="container-beastique">
          <h2 className="text-4xl font-display text-center mb-16">
            <span className="text-beastique-gold">Collections</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Collection cards will be dynamically generated */}
            <div className="card-beastique p-6 text-center">
              <span className="text-4xl mb-4 block">⚠️</span>
              <h3 className="text-xl font-display text-beastique-gold mb-2">
                Endangered Beasts
              </h3>
              <p className="text-beastique-bone/60 text-sm">
                The most critical of the critical
              </p>
            </div>
            
            <div className="card-beastique p-6 text-center">
              <span className="text-4xl mb-4 block">🦁</span>
              <h3 className="text-xl font-display text-beastique-gold mb-2">
                Mammalian Beasts
              </h3>
              <p className="text-beastique-bone/60 text-sm">
                Warm-blooded vertebrates
              </p>
            </div>
            
            <div className="card-beastique p-6 text-center">
              <span className="text-4xl mb-4 block">🦅</span>
              <h3 className="text-xl font-display text-beastique-gold mb-2">
                Avian Beasts
              </h3>
              <p className="text-beastique-bone/60 text-sm">
                Feathered vertebrates
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Signature Footer */}
      <footer className="py-8 text-center text-beastique-bone/40">
        <p className="font-mono text-sm">
          ︻デ═—··· 🎯 = Aim Twice, Shoot Once!
        </p>
      </footer>
    </main>
  )
}
