import { Route, Routes, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import TimePeriod from './pages/TimePeriod.jsx'
import Characteristics from './pages/Characteristics.jsx'
import Discovery from './pages/Discovery.jsx'
import Evolution from './pages/Evolution.jsx'
import Extinction from './pages/Extinction.jsx'
import Sources from './pages/Sources.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-background text-stoneText">
      <ScrollToTop />
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(230,211,163,0.45),transparent_55%)]" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-period" element={<TimePeriod />} />
          <Route path="/characteristics" element={<Characteristics />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/evolution" element={<Evolution />} />
          <Route path="/extinction" element={<Extinction />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
