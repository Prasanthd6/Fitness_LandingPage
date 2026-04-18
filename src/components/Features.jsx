import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiSparkles, HiLightningBolt, HiUserGroup, HiCog } from 'react-icons/hi';

/* ========================================
   FEATURES SECTION — Gym amenities cards
   Features: 4 cards with icons, hover neon glow, staggered entrance
   ======================================== */

const features = [
  {
    icon: HiSparkles,
    title: 'Fully AC Gym',
    description:
      'Train in comfort all year round in our fully air-conditioned facility. No more excuses about the heat — stay cool while you crush your workouts.',
    accent: 'from-neon-red to-neon-pink',
  },
  {
    icon: HiCog,
    title: 'Modern Equipment',
    description:
      'Imported, commercial-grade machines and free weights. From squat racks to cable machines, we have everything you need for a complete workout.',
    accent: 'from-electric-blue to-electric-blue-light',
  },
  {
    icon: HiLightningBolt,
    title: 'Personal Training',
    description:
      'Get one-on-one guidance from champion trainer Ravi. Custom workout plans, form correction, and nutrition advice tailored to your specific goals.',
    accent: 'from-neon-red to-neon-pink',
  },
  {
    icon: HiUserGroup,
    title: 'Unisex Friendly',
    description:
      'A welcoming space for everyone. Dedicated zones, flexible timings for women, and a respectful, professional training environment for all.',
    accent: 'from-electric-blue to-electric-blue-light',
  },
];

export default function Features() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="py-20 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-red/3 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative layout-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full text-center lg:mb-16"
        >
          <span className="text-electric-blue font-semibold tracking-[0.2em] uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            World-Class{' '}
            <span className="text-gradient-blue">Facilities</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            Experience the difference of training in a premium gym built for results.
          </p>
        </motion.div>

        {/* Features Grid */}
        {/* 1 col phone → 2 col tablet → 4 col large desktop so cards stay readable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative bg-gradient-card rounded-2xl p-8 neon-border hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="text-white text-2xl" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover glow accent */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
