import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import transformation1 from '../assets/transformation-1.png';
import transformation2 from '../assets/transformation-2.png';

/* ========================================
   TRANSFORMATIONS SECTION — Before/After reveals
   Features: comparison cards, animated entrance, overlay details
   ======================================== */

// --- PLACEHOLDER: Replace with real member transformations ---
const transformations = [
  {
    image: transformation1,
    name: 'Suresh K.',
    duration: '6 Months',
    weightLost: '25 kg',
    description: 'From 95 kg to 70 kg in just 6 months with dedicated training and diet.',
  },
  {
    image: transformation2,
    name: 'Priya M.',
    duration: '4 Months',
    weightLost: '15 kg',
    description: 'Lost 15 kg and gained confidence with a personalized fitness plan.',
  },
];

export default function Transformations() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="transformations" className="py-20 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative layout-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full text-center lg:mb-16"
        >
          <span className="text-neon-red font-semibold tracking-[0.2em] uppercase text-sm">
            Real Results
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Incredible{' '}
            <span className="text-gradient-red">Transformations</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            Our members don&apos;t just train — they transform. See the real results achieved at Ravi Classic Fitness.
          </p>
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {transformations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden neon-border"
            >
              {/* Image */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} transformation — Before and After`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-dark-900/80 text-text-muted text-xs font-bold uppercase rounded-full tracking-wider">
                  Before → After
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-xl text-white">{item.name}</h3>
                  <span className="text-neon-red font-semibold text-sm">{item.duration}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-red/10 border border-neon-red/20">
                    <span className="text-neon-red font-bold text-sm">-{item.weightLost}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20">
                    <span className="text-electric-blue font-bold text-sm">Verified Result</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
