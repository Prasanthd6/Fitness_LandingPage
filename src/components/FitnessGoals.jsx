import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiTrendingDown, HiLightningBolt, HiHeart, HiRefresh } from 'react-icons/hi';

/* ========================================
   FITNESS GOALS SECTION — Interactive goal cards
   ======================================== */

const goals = [
  {
    icon: HiTrendingDown, title: 'Weight Loss',
    description: 'Shed extra kilos with targeted cardio and strength training programs for sustainable fat loss.',
    details: 'HIIT, steady-state cardio, resistance training, and custom meal plans to maximize fat burning.',
    color: 'neon-red', gradient: 'from-red-900/40 to-dark-700',
  },
  {
    icon: HiLightningBolt, title: 'Strength & Power',
    description: 'Build raw strength with progressive overload and compound movements for maximum power.',
    details: 'Powerlifting programs, deadlifts, squats, bench press, and advanced periodization.',
    color: 'electric-blue', gradient: 'from-blue-900/40 to-dark-700',
  },
  {
    icon: HiHeart, title: 'Endurance',
    description: 'Improve stamina and cardiovascular health with scientifically designed programs.',
    details: 'Zone-based training, circuit workouts, running programs, and functional fitness.',
    color: 'neon-red', gradient: 'from-red-900/40 to-dark-700',
  },
  {
    icon: HiRefresh, title: 'Flexibility',
    description: 'Enhance mobility, prevent injuries, and speed up recovery with mobility work.',
    details: 'Dynamic stretching, yoga-inspired flows, foam rolling, and active recovery.',
    color: 'electric-blue', gradient: 'from-blue-900/40 to-dark-700',
  },
];

export default function FitnessGoals() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div ref={sectionRef} className="relative layout-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12 w-full text-center lg:mb-16">
          <span className="text-neon-red font-semibold tracking-[0.2em] uppercase text-sm">Your Goals</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            What&apos;s Your <span className="text-gradient-red">Fitness Goal</span>?
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            No matter what you&apos;re aiming for, we have the expertise to help you get there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          {goals.map((goal, i) => (
            <motion.div key={goal.title} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="group relative bg-gradient-card rounded-2xl overflow-hidden neon-border cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-b ${goal.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-7">
                <div className={`w-14 h-14 rounded-xl bg-${goal.color}/10 border border-${goal.color}/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}>
                  <goal.icon className={`text-${goal.color} text-2xl`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{goal.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed group-hover:hidden">{goal.description}</p>
                <p className="text-text-secondary text-sm leading-relaxed hidden group-hover:block">{goal.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
