import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [showMouseFollower, setShowMouseFollower] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isNonTouchDevice = window.matchMedia('(hover: hover)').matches;
    setShowMouseFollower(isNonTouchDevice);
    
    // Update page title
    document.title = 'Dhruv Dutkar | Full Stack Developer';
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        {showMouseFollower && <MouseFollower />}
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;