import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Blog() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased">
      <SEO
        title="Recursos — IA Generativa y Marketing Digital | Exponential Grow AI"
        description="Próximamente: artículos, guías y recursos sobre IA generativa, prompt engineering y automatización de marketing."
        canonicalPath="/recursos"
      />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 flex items-center justify-center pt-24 px-6">
          <div className="max-w-[640px] text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">construction</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Estamos mudando nuestro blog
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Nos mudamos a <strong className="text-primary">Dev.to</strong> para ofrecerte mejor contenido. 
              En unos días tendrás aquí artículos, guías y recursos sobre IA generativa, 
              prompt engineering y automatización de marketing.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-gray-400">Próximamente</span>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
