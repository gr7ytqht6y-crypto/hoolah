import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tools from './pages/Tools'
import About from './pages/About'
import JsonFormatter from './pages/JsonFormatter'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <Router basename="/hoolah">
      <div className="flex flex-col min-h-screen bg-neutral-0">
        <Header />
        <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/json-formatter" element={<JsonFormatter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App