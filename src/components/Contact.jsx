import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiPhone, HiLocationMarker, HiClock, HiMail } from 'react-icons/hi';

/* ========================================
   CONTACT SECTION — Phone, address, Google Maps
   ======================================== */

// --- Phone/email: flyer had no official contact — update when you have real details ---
const contactInfo = [
  { icon: HiPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: HiMail, label: 'Email', value: 'ravifitness@gmail.com', href: 'mailto:ravifitness@gmail.com' },
  {
    icon: HiLocationMarker,
    label: 'Address',
    value:
      'Ravi Classic Fitness, Siva Rama Raju Complex, Kakarla Vari Veedhi, Lakshmi Hospital Road, S-turning — Akividu.',
    href: null,
  },
  {
    icon: HiClock,
    label: 'Timings',
    value:
      'Men & women — Morning: 5 AM–9 AM · Evening: 5 PM–9 PM.\nWomen only — Morning: 9 AM–10 AM · Evening: 4 PM–5 PM.',
    href: null,
  },
];

// Map search near landmark address (replace with your exact Google Maps embed if you have one)
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Siva+Rama+Raju+Complex%2C+Kakarla+Vari+Veedhi%2C+Lakshmi+Hospital+Road%2C+Akividu%2C+Andhra+Pradesh&hl=en&z=16&output=embed';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />

      <div ref={sectionRef} className="relative layout-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12 w-full text-center lg:mb-16">
          <span className="text-neon-red font-semibold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mt-4 sm:mt-5">
            Visit <span className="text-gradient-red">Ravi Classic Fitness</span>
          </h2>
          <p className="section-intro-lead text-pretty px-2 text-lg text-text-muted mt-4 sm:mt-5">
            AC unisex gym on Lakshmi Hospital Road — meet the team and see the floor.
          </p>
        </motion.div>

        {/* Two columns: cards are content-height; map uses a modest fixed height so the row stays compact */}
        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact cards — tight vertical rhythm, no flex stretching */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full min-w-0 flex-col gap-3 sm:gap-3.5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="neon-border group rounded-lg bg-gradient-card px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 sm:rounded-xl sm:px-5 sm:py-4"
              >
                {/* Icon left, label + value right — keeps long address/timings readable */}
                <div className="flex flex-row items-start gap-3 text-left sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neon-red/20 bg-neon-red/10 transition-colors group-hover:bg-neon-red/20 sm:h-11 sm:w-11">
                    <item.icon className="text-lg text-neon-red sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="mb-1 text-xs text-text-muted sm:text-sm">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="block text-white font-medium text-pretty hover:text-neon-red transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`text-white font-medium text-pretty leading-relaxed ${
                          item.label === 'Timings' ? 'whitespace-pre-line' : ''
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Maps — shorter frame so it pairs visually with the compact card stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="neon-border h-[15rem] w-full overflow-hidden rounded-xl sm:h-[17rem] sm:rounded-2xl lg:h-[18.5rem] xl:h-[20rem]"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ravi Classic Fitness — Akividu, Andhra Pradesh"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
