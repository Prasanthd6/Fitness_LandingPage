import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiCheck, HiArrowRight } from 'react-icons/hi';

/* ========================================
   PROGRAMS SECTION — Membership & personal training (flyer pricing)
   ======================================== */

const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Ravi%2C%20I%27m%20interested%20in%20';

// --- General membership & PT packages (Ravi Classic Fitness flyer) ---
const programs = [
  {
    title: 'General membership',
    durationLabel: '1 month',
    description: 'Full gym access during men & women timings. Cardio, strength, bodybuilding & weight programs.',
    price: '₹1,499',
    period: '',
    features: [
      'Men & women: 5 AM–9 AM, 5 PM–9 PM',
      'Women-only: 9–10 AM, 4–5 PM',
      'AC unisex gym · all equipment',
    ],
    priceClass: 'text-neon-red',
    checkClass: 'text-neon-red',
    gradient: 'from-neon-red/20 to-transparent',
    popular: false,
    waSlug: 'General%20membership%20(1%20month)',
  },
  {
    title: 'General membership',
    durationLabel: '3 months',
    description: 'Same full access — better value for members training consistently.',
    price: '₹3,999',
    period: '',
    features: [
      'Men & women: 5 AM–9 AM, 5 PM–9 PM',
      'Women-only: 9–10 AM, 4–5 PM',
      'AC unisex gym · all equipment',
    ],
    priceClass: 'text-neon-red',
    checkClass: 'text-neon-red',
    gradient: 'from-neon-red/20 to-neon-pink/10',
    popular: false,
    waSlug: 'General%20membership%20(3%20months)',
  },
  {
    title: 'General membership',
    durationLabel: '6 months',
    description: 'Best value for long-term goals — stay accountable and save.',
    price: '₹6,999',
    period: '',
    features: [
      'Men & women: 5 AM–9 AM, 5 PM–9 PM',
      'Women-only: 9–10 AM, 4–5 PM',
      'AC unisex gym · all equipment',
    ],
    priceClass: 'text-neon-red',
    checkClass: 'text-neon-red',
    gradient: 'from-neon-red/20 to-transparent',
    popular: true,
    waSlug: 'General%20membership%20(6%20months)',
  },
  {
    title: 'Personal training',
    durationLabel: '1 month',
    description: 'One-on-one coaching with tailored workouts and close form guidance.',
    price: '₹3,499',
    period: '',
    features: [
      'Custom workout plan',
      '1-on-1 sessions with trainer',
      'Priority scheduling (by appointment)',
    ],
    priceClass: 'text-electric-blue',
    checkClass: 'text-electric-blue',
    gradient: 'from-electric-blue/20 to-transparent',
    popular: false,
    waSlug: 'Personal%20training%20(1%20month)',
  },
  {
    title: 'Personal training',
    durationLabel: '3 months',
    description: 'Build habits and strength with structured progression over the quarter.',
    price: '₹8,999',
    period: '',
    features: [
      'Custom workout plan',
      '1-on-1 sessions with trainer',
      'Progress tracking & adjustments',
    ],
    priceClass: 'text-electric-blue',
    checkClass: 'text-electric-blue',
    gradient: 'from-electric-blue/20 to-electric-blue-light/10',
    popular: false,
    waSlug: 'Personal%20training%20(3%20months)',
  },
  {
    title: 'Personal training',
    durationLabel: '6 months',
    description: 'Maximum support for competition prep, transformations, or advanced goals.',
    price: '₹15,999',
    period: '',
    features: [
      'Custom workout plan',
      '1-on-1 sessions with trainer',
      'Long-term programming & accountability',
    ],
    priceClass: 'text-electric-blue',
    checkClass: 'text-electric-blue',
    gradient: 'from-electric-blue/20 to-transparent',
    popular: false,
    waSlug: 'Personal%20training%20(6%20months)',
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
            Membership &amp; training
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Transparent{' '}
            <span className="text-gradient-red">Pricing</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            General gym membership and personal training packages at Ravi Classic Fitness, Akividu.
          </p>
        </motion.div>

        {/* Tier cards: 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={`${program.title}-${program.durationLabel}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`relative bg-gradient-card rounded-2xl p-7 neon-border group hover:-translate-y-2 transition-all duration-500 flex flex-col ${
                program.popular ? 'ring-2 ring-neon-red/50' : ''
              }`}
            >
              {/* Popular badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-red to-neon-pink text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Best value
                </div>
              )}

              {/* Title + duration */}
              <h3 className="font-heading font-bold text-xl text-white mb-1 mt-2">
                {program.title}
              </h3>
              <p className="text-neon-red/90 text-xs font-semibold uppercase tracking-wider mb-2">
                {program.durationLabel}
              </p>

              <p className="text-text-muted text-sm mb-5 leading-relaxed">{program.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-heading font-black text-3xl ${program.priceClass}`}>
                  {program.price}
                </span>
                {program.period ? (
                  <span className="text-text-muted text-sm">{program.period}</span>
                ) : null}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {program.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-text-secondary">
                    <HiCheck className={`${program.checkClass} mt-0.5 flex-shrink-0`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP_URL}${program.waSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  program.popular
                    ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white hover:shadow-lg hover:shadow-neon-red/30'
                    : 'border border-dark-300 text-white hover:border-neon-red hover:bg-neon-red/10'
                }`}
              >
                Enquire on WhatsApp
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
