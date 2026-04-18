import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiAcademicCap, HiStar, HiUsers, HiClock } from 'react-icons/hi';
import trainerImg from '../assets/trainer-ravi.png';

/* ========================================
   ABOUT SECTION — Trainer Ravi branding
   Features: split layout, achievements, scroll animations
   ======================================== */

const achievements = [
  { icon: HiAcademicCap, value: 'State Champion', label: 'Bodybuilding Title' },
  { icon: HiClock, value: '10+ Years', label: 'Training Experience' },
  { icon: HiUsers, value: '500+', label: 'Members Trained' },
  { icon: HiStar, value: '50+', label: 'Transformations' },
];

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      {/* Inner column: centered, matches navbar and other sections */}
      <div ref={sectionRef} className="relative layout-container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-neon-red font-semibold tracking-[0.2em] uppercase text-sm">
            Meet Your Trainer
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Trained by a{' '}
            <span className="text-gradient-red">Champion</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        {/* Stack on small screens; two balanced columns from lg up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Trainer Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={trainerImg}
                alt="Trainer Ravi — Champion Bodybuilder and Fitness Coach"
                className="w-full h-[min(70vh,420px)] sm:h-[480px] lg:h-[560px] xl:h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-6 py-4">
                  <h3 className="font-heading font-bold text-xl text-white">Ravi</h3>
                  <p className="text-neon-red text-sm font-medium">
                    Former State Champion · Head Trainer
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-red/20 to-electric-blue/20 -z-10 blur-sm" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-7 sm:mb-8">
              A Passion Forged in{' '}
              <span className="text-electric-blue">Discipline</span>
            </h3>
            {/* --- PLACEHOLDER: Update with Ravi's real story --- */}
            <div className="space-y-5 sm:space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                Ravi isn&apos;t just a trainer — he&apos;s a former state-level bodybuilding 
                champion who has dedicated over a decade to transforming lives through fitness. 
                His journey from a small-town athlete to a championship-winning bodybuilder 
                is a testament to what discipline and hard work can achieve.
              </p>
              <p>
                With a deep understanding of sports science, nutrition, and individualized 
                training programs, Ravi has helped over 500 members achieve their fitness 
                goals — from dramatic weight loss transformations to competitive bodybuilding 
                preparation.
              </p>
              <p>
                At Ravi Fitness, every member gets the personal attention and expert guidance 
                that only a champion-level trainer can provide. Whether you&apos;re a beginner 
                or an advanced athlete, Ravi will design a program tailored to your body and goals.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mt-11 sm:mt-12">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="bg-gradient-card rounded-xl p-5 neon-border group"
                >
                  <ach.icon className="text-neon-red text-2xl mb-3 group-hover:text-electric-blue transition-colors" />
                  <div className="font-heading font-bold text-lg text-white">{ach.value}</div>
                  <div className="text-text-muted text-sm">{ach.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
