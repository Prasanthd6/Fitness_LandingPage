import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* ========================================
   CTA SECTION — Full-width call-to-action banner
   ======================================== */

// --- PLACEHOLDER: Update with actual URLs ---
const JOIN_NOW_URL = 'https://forms.google.com/your-form-link';
const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Ravi%2C%20I%20want%20to%20start%20my%20fitness%20journey!';

export default function CTA() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      {/* Symmetric tint so the block feels centered (no heavy glow on one side only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-red/[0.07] via-transparent to-electric-blue/[0.07]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[min(22rem,70vw)] w-[min(42rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-neon-red/10 via-transparent to-electric-blue/10 blur-3xl" />

      {/* Same outer column as other sections; inner column is flex-centered for badge + copy */}
      <div ref={sectionRef} className="relative layout-container flex flex-col items-center text-center">
        {/* Narrower prose block — badge row is full-width flex so the pill sits dead center */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 flex w-full justify-center sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-red/30 bg-neon-red/10">
              <span className="h-2 w-2 shrink-0 rounded-full bg-neon-red animate-pulse" />
              <span className="text-sm font-medium text-neon-red-light tracking-wide">Limited Time Offer</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-8"
          >
            Start Your Fitness <br />
            <span className="text-gradient-red">Journey Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-intro-lead mb-10 px-1 text-lg leading-relaxed text-text-secondary text-pretty sm:mb-12 sm:text-xl"
          >
            Stop waiting for the &ldquo;perfect time.&rdquo; Your transformation starts with a single step. Join Ravi Fitness today and get your first week free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-full max-w-2xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5"
          >
            <a href={JOIN_NOW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-10 py-4 text-center bg-gradient-to-r from-neon-red to-neon-pink text-white font-heading font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
              Join Now — It&apos;s Free to Start
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-10 py-4 text-center border-2 border-electric-blue/50 text-electric-blue font-heading font-bold text-lg rounded-xl hover:bg-electric-blue/10 hover:border-electric-blue hover:scale-105 transition-all duration-300">
              Talk to Ravi on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
