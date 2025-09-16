import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Building from '@/pages/Building.jsx'

function App() {
  const routesWithFooter = [];

  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <div className="flex-fill overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:paste_key" element={<Home />} />
          <Route path="/*" element={<Building />} />
        </Routes>
      </div>
      {routesWithFooter.includes(useLocation().pathname) && <Footer />}
    </div>
  )
}

export default App
