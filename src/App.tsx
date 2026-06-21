import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
// import Curso from './pages/Curso'  // ocultado temporalmente
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          {/* Ruta /curso oculta temporalmente */}
          <Route path="/recursos" element={<Blog />} />
          <Route path="/aviso-de-privacidad" element={<Privacy />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App

