import ContactForm from '@/components/ContactForm';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer({ darkMode, toggleDarkMode }) {
  return (
    <section
      id="contact"
      className="relative w-full py-16 flex flex-col items-center backdrop-blur-lg transition-colors duration-300"
        
    >
      {/* Top gradient (only shown in light mode) */}
      <div
        className="absolute top-0 left-0 w-full h-12 pointer-events-none z-20 dark:hidden"
        style={{
          background: 'linear-gradient(to bottom, #F6F7FC, rgba(168, 199, 225, 0.4))',
        }}
      />

      {/* Heading */}
      <h2
        className="mb-8 text-4xl font-serif italic tracking-wide py-3 text-black dark:text-white"
        style={{
          filter: 'blur(0.3px)',
          textShadow: '0 0 8px rgba(100, 100, 100, 0.4)',
          fontWeight: '700',
          fontStretch: 'expanded',
        }}
      >
        Start a Conversation:
      </h2>

      {/* Contact Form */}
      <ContactForm />

      {/* Social Icons */}
<div className="absolute bottom-6 right-6 flex space-x-4 z-30">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-[#a5b4fc] hover:text-[#818cf8] transition text-3xl sm:text-4xl md:text-5xl" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-[#fbcfe8] hover:text-[#f9a8d4] transition text-3xl sm:text-4xl md:text-5xl" />
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-[#cbd5e1] hover:text-white transition text-3xl sm:text-4xl md:text-5xl" />
  </a>
</div>
    </section>
  );
}
