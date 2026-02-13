import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Curso from './pages/Curso'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/recursos" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App

