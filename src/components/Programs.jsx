import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiCheck, HiArrowRight } from 'react-icons/hi';

/* ========================================
   PROGRAMS SECTION — Training plans grid
   Features: plan cards with features list, popular badge, hover effects
   ======================================== */

// --- PLACEHOLDER: Update pricing and features with actual data ---
const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Ravi%2C%20I%27m%20interested%20in%20the%20';

const programs = [
  {
    title: 'Weight Loss',
    description: 'Burn fat, build confidence. A structured program combining cardio, strength training, and nutrition planning.',
    price: '₹1,500',
    period: '/month',
    features: [
      'Custom meal plan',
      'Daily cardio sessions',
      'Strength training',
      'Weekly progress tracking',
      'Diet consultation',
    ],
    accent: 'neon-red',
    gradient: 'from-neon-red/20 to-transparent',
    popular: false,
  },
  {
    title: 'Muscle Gain',
    description: 'Pack on lean muscle with progressive overload training and high-protein nutrition guidance.',
    price: '₹2,000',
    period: '/month',
    features: [
      'Hypertrophy program',
      'Progressive overload plan',
      'Supplement guidance',
      'Form correction',
      'Bulk/cut cycles',
      'Weekly measurements',
    ],
    accent: 'neon-red',
    gradient: 'from-neon-red/20 to-neon-pink/10',
    popular: true,
  },
  {
    title: 'General Fitness',
    description: 'Stay healthy, active, and energized. Perfect for beginners and those maintaining a fit lifestyle.',
    price: '₹1,000',
    period: '/month',
    features: [
      'Full gym access',
      'Basic workout plan',
      'Warm-up routines',
      'Flexibility training',
      'Group sessions',
    ],
    accent: 'electric-blue',
    gradient: 'from-electric-blue/20 to-transparent',
    popular: false,
  },
  {
    title: 'Personal Training',
    description: 'One-on-one training with Ravi. Maximum results with fully customized programs and constant guidance.',
    price: '₹3,500',
    period: '/month',
    features: [
      '1-on-1 with Ravi',
      'Custom workout plan',
      'Nutrition coaching',
      'Daily form correction',
      'Priority scheduling',
      'WhatsApp support',
    ],
    accent: 'electric-blue',
    gradient: 'from-electric-blue/20 to-electric-blue-light/10',
    popular: false,
  },
];

export default function Programs() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="programs" className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />

      <div ref={sectionRef} className="relative layout-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full text-center lg:mb-16"
        >
          <span className="text-neon-red font-semibold tracking-[0.2em] uppercase text-sm">
            Our Programs
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Choose Your{' '}
            <span className="text-gradient-red">Path</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            Every fitness journey is unique. Pick the program that matches your goals.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`relative bg-gradient-card rounded-2xl p-7 neon-border group hover:-translate-y-2 transition-all duration-500 flex flex-col ${
                program.popular ? 'ring-2 ring-neon-red/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-red to-neon-pink text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-white mb-2 mt-2">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm mb-5 leading-relaxed">
                {program.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-heading font-black text-3xl text-${program.accent}`}>
                  {program.price}
                </span>
                <span className="text-text-muted text-sm">{program.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {program.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-text-secondary">
                    <HiCheck className={`text-${program.accent} mt-0.5 flex-shrink-0`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WHATSAPP_URL}${encodeURIComponent(program.title)}%20program`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  program.popular
                    ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white hover:shadow-lg hover:shadow-neon-red/30'
                    : 'border border-dark-300 text-white hover:border-neon-red hover:bg-neon-red/10'
                }`}
              >
                Get Started
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Background glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
