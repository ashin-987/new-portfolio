import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Uses', href: '#' },
        { name: 'Resume', href: '/resume.pdf' },
      ]
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: personalInfo.social.twitter || '#', label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="relative bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-4">
                {personalInfo.name || 'Your Name'}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md leading-relaxed">
                Full Stack Developer passionate about building beautiful and functional web applications. 
                Let's create something amazing together!
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:shadow-md"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-neutral-100 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-accent-primary dark:hover:text-accent-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
              © {currentYear} {personalInfo.name || 'Your Name'}. Built with{' '}
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" /> and React
            </p>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50" />
    </footer>
  );
}
