import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import heroBg from '../assets/hero-bg.png';

/* ========================================
   HERO SECTION — Full viewport with animated background
   Features: bold heading, subheading, dual CTAs, scroll indicator
   ======================================== */

// --- PLACEHOLDERS: Update with actual URLs ---
const JOIN_NOW_URL = 'https://forms.google.com/your-form-link';
const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Ravi%2C%20I%20want%20to%20book%20a%20free%20trial%20session!';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Gym atmosphere"
          className="img-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900/95" />
        <div className="absolute inset-0 animated-gradient opacity-40" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 ? '#00d4ff' : '#ff2d2d',
            }}
          />
        ))}
      </div>

      {/* Content — flex column + explicit text-center so multi-line copy stays visually centered */}
      <div className="relative z-10 layout-container flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-neon-red/30 bg-neon-red/10 mb-7 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse" />
          <span className="text-sm font-medium text-neon-red-light tracking-wide">
            Ravi Classic Fitness · AC Unisex Gym · Akividu
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-7 sm:mb-8"
        >
          <span className="text-white">Transform Your</span>
          <br />
          <span className="text-gradient-red">Body</span>
          <span className="text-white">. Transform Your </span>
          <span className="text-gradient-red">Life</span>
          <span className="text-white">.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="section-intro-lead mb-11 px-1 font-body text-lg leading-relaxed text-text-secondary text-pretty sm:mb-12 sm:text-xl"
        >
          Train at Ravi Classic Fitness — fully AC, unisex gym on Lakshmi Hospital Road. Cardio,
          strength, bodybuilding, weight maintenance &amp; personal training with expert coaching.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full sm:w-auto"
        >
          <a
            href={JOIN_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-red to-neon-pink text-white font-heading font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 pulse-glow"
          >
            Join Now
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-red to-neon-pink opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-electric-blue/50 text-electric-blue font-heading font-bold text-lg rounded-xl hover:bg-electric-blue/10 hover:border-electric-blue hover:scale-105 transition-all duration-300"
          >
            Book Free Trial
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-14 sm:mt-20 lg:mt-24 flex flex-wrap justify-center gap-10 sm:gap-16"
        >
          {[
            { value: '500+', label: 'Active Members' },
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Transformations' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-black text-3xl sm:text-4xl text-gradient-red">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bounce-slow"
      >
        <a href="#about" className="text-text-muted hover:text-white transition-colors">
          <HiChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
