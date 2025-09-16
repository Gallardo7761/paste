import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Building from '@/pages/Building.jsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="fill d-flex flex-column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:paste_key" element={<Home />} />
          <Route path="/*" element={<Building />} />
        </Routes>
      </div>
    </>
  )
}

export default App
