import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add smooth scroll behavior to the whole document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-nature-50 selection:bg-nature-200 selection:text-nature-900 overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={loading ? 'hidden' : 'block'}>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
