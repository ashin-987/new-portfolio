import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // TODO: Implement your form submission logic here
    // For now, just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'text-red-500'
    },
    {
      icon: FaLinkedin,
      href: personalInfo.social.linkedin,
      label: 'LinkedIn',
      color: 'text-blue-500'
    },
    {
      icon: FaGithub,
      href: personalInfo.social.github,
      label: 'GitHub',
      color: 'text-neutral-900 dark:text-white'
    },
    {
      icon: FaTwitter,
      href: personalInfo.social.twitter || '#',
      label: 'Twitter',
      color: 'text-blue-400'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-accent-primary dark:focus:border-accent-primary transition-colors outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-accent-primary dark:focus:border-accent-primary transition-colors outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-accent-primary dark:focus:border-accent-primary transition-colors outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            
            {/* Contact Info */}
            <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-semibold hover:text-accent-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Location</p>
                    <p className="font-semibold">{personalInfo.location || 'Remote'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:shadow-lg group"
                  >
                    <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-semibold text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="p-6 rounded-2xl border border-accent-primary/20 bg-accent-primary/5">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                💡 <strong>Fun fact:</strong> I typically respond within 24 hours. If you don't hear back, check your spam folder or feel free to ping me on LinkedIn!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
