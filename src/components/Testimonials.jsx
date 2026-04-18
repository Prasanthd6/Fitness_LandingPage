import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

/* ========================================
   TESTIMONIALS SECTION — Member reviews
   Features: review cards, star ratings, carousel navigation
   ======================================== */

// --- PLACEHOLDER: Replace with real member testimonials ---
const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Member since 2022',
    rating: 5,
    text: 'Ravi sir completely changed my fitness journey. I lost 20 kgs in 5 months and now I feel more energetic than ever. The gym has all the equipment you need and the AC makes such a difference!',
    initials: 'RK',
  },
  {
    name: 'Sneha Reddy',
    role: 'Member since 2023',
    rating: 5,
    text: "As a woman, I was hesitant to join a gym, but Ravi Fitness is incredibly welcoming. The separate training zones and Ravi sir's professional approach made all the difference. Best gym in Akividu!",
    initials: 'SR',
  },
  {
    name: 'Venkat Rao',
    role: 'Member since 2021',
    rating: 5,
    text: "I've tried many gyms before but nothing comes close to this. The personal training with Ravi sir is worth every rupee. He really understands body mechanics and gives tailored advice.",
    initials: 'VR',
  },
  {
    name: 'Divya Sai',
    role: 'Member since 2023',
    rating: 4,
    text: "Great equipment, clean environment, and a trainer who genuinely cares about your progress. I've been going for 8 months and the results speak for themselves. Highly recommend!",
    initials: 'DS',
  },
  {
    name: 'Anil Babu',
    role: 'Member since 2022',
    rating: 5,
    text: "Ravi sir's dedication is unmatched. He remembers every member's goals and progress. The gym atmosphere motivates you to push harder every day. Proud to be a member!",
    initials: 'AB',
  },
  {
    name: 'Lakshmi Prasanna',
    role: 'Member since 2024',
    rating: 5,
    text: "From day one, I felt like family here. The training programs are scientific and well-planned. I've gained 8 kg of lean muscle in just 4 months. Amazing results!",
    initials: 'LP',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <HiStar
          key={star}
          className={`text-lg ${star <= rating ? 'star-filled' : 'star-empty'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative layout-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full text-center lg:mb-16"
        >
          <span className="text-electric-blue font-semibold tracking-[0.2em] uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            What Our Members{' '}
            <span className="text-gradient-blue">Say</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            Don&apos;t take our word for it — hear from the people who transformed their lives with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        {/* Cards stay single column on phones; 2-up on tablet; 3-up on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {currentTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-gradient-card rounded-2xl p-7 neon-border group hover:-translate-y-1 transition-all duration-400 flex flex-col"
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-400">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-red to-neon-pink flex items-center justify-center font-heading font-bold text-sm text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-dark-400 text-text-muted hover:text-white hover:border-neon-red disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <HiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? 'bg-neon-red w-8'
                      : 'bg-dark-400 hover:bg-dark-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-dark-400 text-text-muted hover:text-white hover:border-neon-red disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
