import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';

import Marketplace from './pages/Marketplace';
import Services from './pages/Services';
import Connections from './pages/Connections';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/connections" element={<Connections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
