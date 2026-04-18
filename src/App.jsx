import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import FitnessGoals from './components/FitnessGoals';
import Workshops from './components/Workshops';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ========================================
   APP — Main application shell
   Features: loading screen, section assembly, scroll-to-top
   ======================================== */

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex w-full min-h-[100dvh] flex-col items-center justify-center bg-dark-900 px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Inner column: items-center keeps RF + copy horizontally centered */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-full max-w-sm flex-col items-center text-center"
      >
        <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-red to-neon-pink font-heading text-3xl font-black text-white loading-pulse">
          RF
        </div>
        <h2 className="mb-2 font-heading text-2xl font-bold text-white">RAVI FITNESS</h2>
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Loading...</p>
        {/* Animated bar */}
        <div className="mt-6 h-1 w-48 max-w-full overflow-hidden rounded-full bg-dark-600">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-red to-neon-pink rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-neon-red to-neon-pink text-white flex items-center justify-center shadow-lg shadow-neon-red/30 hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          {/* Full-width column so each section can center its own inner layout-container */}
          <main className="w-full min-w-0 flex flex-col">
            <Hero />
            <About />
            <Features />
            <Programs />
            <Transformations />
            <Testimonials />
            <FitnessGoals />
            <Workshops />
            <CTA />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}
