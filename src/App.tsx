import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
// import Masterclass from './pages/Masterclass'  // oculta hasta nueva fecha
// import Curso from './pages/Curso'  // ocultado temporalmente
// import CursoProfesionistas from './pages/CursoProfesionistas'  // oculta hasta renovar fechas y oferta
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import CursoHermesAgent from './pages/CursoHermesAgent'
// import DiagnosticoAutomatizacion from './pages/DiagnosticoAutomatizacion'  // oculta hasta nueva fecha

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masterclass" element={<Navigate to="/" replace />} /> {/* oculta hasta nueva fecha */}
          <Route path="/diagnostico-automatizacion" element={<Navigate to="/" replace />} /> {/* oculta hasta nueva fecha */}
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/curso-hermes-agent" element={<CursoHermesAgent />} />
          {/* Ruta /curso oculta temporalmente */}
          <Route path="/curso-profesionistas" element={<Navigate to="/" replace />} /> {/* oculta hasta renovar fechas y oferta */}
          <Route path="/recursos" element={<Blog />} />
          <Route path="/aviso-de-privacidad" element={<Privacy />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App

