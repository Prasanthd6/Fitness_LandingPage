import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiCalendar, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

/* ========================================
   WORKSHOPS SECTION — Events & bootcamps
   ======================================== */

// --- PLACEHOLDER: Update with real events ---
const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Ravi%2C%20I%20want%20to%20register%20for%20';

const events = [
  {
    title: 'Summer Shred Bootcamp',
    date: 'June 1–30, 2026',
    location: 'Ravi Classic Fitness, Akividu',
    description: '30-day intensive fat-burning bootcamp. Daily 6 AM sessions combining HIIT, strength, and endurance.',
    spots: '15 spots left',
    accent: 'neon-red',
  },
  {
    title: 'Strength Foundations Workshop',
    date: 'July 15, 2026',
    location: 'Ravi Classic Fitness, Akividu',
    description: 'Learn proper form for all major compound lifts. Perfect for beginners wanting to build a strong base.',
    spots: '20 spots left',
    accent: 'electric-blue',
  },
  {
    title: 'Women\'s Fitness Special',
    date: 'Every Saturday',
    location: 'Ravi Classic Fitness, Akividu',
    description: 'Dedicated women-only sessions focused on toning, strength, and flexibility. All fitness levels welcome.',
    spots: 'Open enrollment',
    accent: 'neon-red',
  },
];

export default function Workshops() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />

      <div ref={sectionRef} className="relative layout-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12 w-full text-center lg:mb-16">
          <span className="text-electric-blue font-semibold tracking-[0.2em] uppercase text-sm">Events</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Workshops & <span className="text-gradient-blue">Bootcamps</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            Special training events to take your fitness to the next level.
          </p>
        </motion.div>

        {/* Three events: 1 col → 2 col → 3 col; grid stays full width of the container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {events.map((event, i) => (
            <motion.div key={event.title} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }} className="bg-gradient-card rounded-2xl p-7 neon-border group hover:-translate-y-1 transition-all duration-400 flex flex-col">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${event.accent}/10 border border-${event.accent}/20 w-fit mb-5`}>
                <span className={`w-2 h-2 rounded-full bg-${event.accent} animate-pulse`} />
                <span className={`text-${event.accent} text-xs font-semibold`}>{event.spots}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">{event.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{event.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <HiCalendar className={`text-${event.accent}`} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <HiLocationMarker className={`text-${event.accent}`} />
                  <span>{event.location}</span>
                </div>
              </div>
              <a href={`${WHATSAPP_URL}${encodeURIComponent(event.title)}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-dark-300 text-white font-semibold text-sm hover:border-neon-red hover:bg-neon-red/10 transition-all duration-300">
                Register Now <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
