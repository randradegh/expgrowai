import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-border-dark">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/expgrowai_logo_01.png" 
            alt="Exponential Grow AI Logo" 
            className="h-10 w-auto"
          />
          <h2 className="text-white text-xl font-bold tracking-tight">
            Exponential <span className="text-primary">Grow AI</span>
          </h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={`text-sm font-medium transition-colors ${
              isActive('/servicios') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Servicios
          </Link>
          <Link
            to="/sobre-mi"
            className={`text-sm font-medium transition-colors ${
              isActive('/sobre-mi') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Sobre mí
          </Link>
          <Link
            to="/recursos"
            className={`text-sm font-medium transition-colors ${
              isActive('/recursos') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Recursos
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 h-10 items-center rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
            Agendar sesión
          </button>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

