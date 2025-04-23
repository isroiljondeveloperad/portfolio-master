import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/HomePage';
import About from './pages/About/AboutPage';
import Services from './pages/Service/ServicesPage';
import Project from './pages/Project/ProjectPage';

import RouterScrollTop from './components/ScrollToTop/RouterScrollTop';
import Particles from 'react-tsparticles';
// import particlesConfig from './config/particlesConfig';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <RouterScrollTop />
      {/* <Particles className="particles" params={particlesConfig} /> */}

      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>=(Ikramjanov)=</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      )}
    </>
  );
}

export default App;
