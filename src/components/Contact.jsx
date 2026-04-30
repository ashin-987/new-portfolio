import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ isDark }) {
  const socialLinks = [
    { icon: FaEnvelope, label: 'Email', href: `mailto:${personalInfo.email}`, color: 'from-orange-500 to-red-500' },
    { icon: FaGithub, label: 'GitHub', href: personalInfo.social.github, color: 'from-gray-700 to-gray-900' },
    { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.social.linkedin, color: 'from-blue-500 to-blue-700' },
    { icon: FaTwitter, label: 'Twitter', href: personalInfo.social.twitter, color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            LET'S <span className="text-gradient">WORK TOGETHER</span>
          </h2>
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8" />
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's create something amazing together. 
            I'm always open to discussing new opportunities and ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg sm:text-xl rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all inline-flex items-center justify-center gap-3"
            >
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Send Email</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 sm:px-10 py-4 sm:py-5 font-bold text-lg sm:text-xl rounded-lg border-2 transition-all inline-flex items-center justify-center gap-3 ${
                isDark 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Connect</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-4 transition-all group ${
                  isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
                } hover:border-orange-500`}
              >
                <link.icon className="w-8 h-8 mx-auto mb-3 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm sm:text-base">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
