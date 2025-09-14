import Header from '@/components/Header.jsx';
import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom'
import ProtectedRoute from '@/components/Auth/ProtectedRoute.jsx'
import useSessionRenewal from '@/hooks/useSessionRenewal'
import { CONSTANTS } from '@/util/constants'

import Home from '@/pages/Home.jsx'
import Building from '@/pages/Building.jsx'

function App() {
  const routesWithFooter = ["/"];

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Building />} />
      </Routes>
      {routesWithFooter.includes(useLocation().pathname) ? <Footer /> : null}
    </>
  )
}

export default App
