import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Building from '@/pages/Building.jsx'

function App() {
  const routesWithFooter = [];

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/*" element={<Building />} />
      </Routes>
      {routesWithFooter.includes(useLocation().pathname) ? <Footer /> : null}
    </>
  )
}

export default App
