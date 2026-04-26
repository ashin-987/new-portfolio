import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, GitHub, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ isDark }) {
  return (
    <section id="contact" className={`py-32 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            LET'S BUILD
            <span className="text-gradient block">SOMETHING GREAT</span>
          </h2>
          <p className="text-2xl text-neutral-400 mb-12 font-medium">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all inline-flex items-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Send Email
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-10 py-5 font-bold text-xl rounded-lg border-2 transition-all inline-flex items-center gap-3 ${
                isDark 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-all"
            >
              <GitHub className="w-6 h-6" />
              <span className="font-bold">GitHub</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-all"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-bold">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}