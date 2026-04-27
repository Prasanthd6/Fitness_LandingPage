import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

/* ========================================
   NAVBAR — Sticky glassmorphism navigation
   Features: smooth scroll links, mobile hamburger menu, CTA button
   ======================================== */

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Programs', href: '#programs' },
  { name: 'Transformations', href: '#transformations' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// Primary CTA link for "Join Now" buttons in desktop and mobile nav
const JOIN_NOW_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScqs25ZzWAyguWHhq2hgvcZDo01gurl375K4e2K2Vug_PT-tg/viewform?usp=header';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Same horizontal bounds as page sections for top-to-bottom alignment */}
      <div className="layout-container">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-red to-neon-pink flex items-center justify-center font-heading font-black text-sm leading-tight text-center px-0.5">
              RCF
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-neon-red transition-colors">
                RAVI CLASSIC FITNESS
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-text-muted font-body">
                Unisex · AC
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={JOIN_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-neon-red to-neon-pink text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-red/30 transition-all duration-300 hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="layout-container py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-lg font-medium text-text-secondary hover:text-neon-red transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href={JOIN_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-neon-red to-neon-pink text-white font-semibold rounded-lg"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
