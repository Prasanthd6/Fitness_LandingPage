import { HiHeart } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

/* ========================================
   FOOTER — Social links, gym timings, copyright
   ======================================== */

// --- PLACEHOLDER: Update with actual social links ---
const INSTAGRAM_URL = 'https://instagram.com/ravifitness';
const WHATSAPP_URL = 'https://wa.me/919876543210';
const YOUTUBE_URL = 'https://youtube.com/@ravifitness';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Programs', href: '#programs' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaInstagram, href: INSTAGRAM_URL, label: 'Instagram' },
  { icon: FaWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp' },
  { icon: FaYoutube, href: YOUTUBE_URL, label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-400 relative">
      <div className="layout-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-red to-neon-pink flex items-center justify-center font-heading font-black text-lg text-white">
                RF
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">RAVI FITNESS</span>
                <span className="block text-[10px] tracking-[0.3em] uppercase text-text-muted">Unisex Gym</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Akividu&apos;s premium unisex gym. Train with a champion, transform your life.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-lg bg-dark-600 border border-dark-400 flex items-center justify-center text-text-muted hover:text-neon-red hover:border-neon-red/50 transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-text-muted hover:text-neon-red transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gym Timings */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Gym Timings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-text-muted">
                <span>Monday – Friday</span>
                <span className="text-white">5:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Saturday</span>
                <span className="text-white">5:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Sunday</span>
                <span className="text-white">6:00 AM – 12:00 PM</span>
              </div>
              <div className="mt-4 pt-4 border-t border-dark-400">
                <p className="text-text-muted text-xs">
                  Personal training sessions available by appointment. Contact Ravi for scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-400">
        <div className="layout-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Ravi Fitness Unisex Gym. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <HiHeart className="text-neon-red" /> in Akividu
          </p>
        </div>
      </div>
    </footer>
  );
}
