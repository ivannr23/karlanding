import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
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
import AnalyticsDashboard from './components/Admin/AnalyticsDashboard';
import Chatbot from './components/Chatbot';
import { trackPageView, trackEvent } from './utils/analytics';


import { useRef } from 'react';

// Component to handle tracking on route change
function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    // Prevent double tracking in Strict Mode or rapid updates
    if (lastTrackedPath.current === location.pathname + location.search) return;

    lastTrackedPath.current = location.pathname + location.search;
    trackPageView();
  }, [location]);

  return null;
}


function MainSite() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('view_section', { section: entry.target.id });
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['hero', 'about', 'education', 'expertise', 'experience', 'skills', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Expertise />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      {location.pathname === '/' && !loading && (
        <motion.div
          id="scroll-progress"
          style={{ scaleX }}
        />
      )}
      <AnalyticsTracker />
      {location.pathname !== '/admin' && <Chatbot />}


      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={loading ? 'hidden' : 'block'}>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/admin" element={<AnalyticsDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;

