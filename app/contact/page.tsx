'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <Navigation activePage="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-animated-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-semibold"
            >
              Let's Work Together
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-glow">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              Interested in working together? I'm always open to discussing new projects and opportunities.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you need a full-stack application, a beautiful UI/UX design, or both—I'm here to help bring your vision to life. 
              Let's create something amazing together!
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs md:text-sm text-gray-300">Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-xs md:text-sm text-gray-300">Certificates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">Fast</div>
                <div className="text-xs md:text-sm text-gray-300">Response</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-300">Committed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">∞</div>
                <div className="text-xs md:text-sm text-gray-300">Passion</div>
              </motion.div>
            </div>
            
            {/* Contact Options */}
            <div className="flex justify-center gap-6 flex-wrap mb-12">
              <motion.a
                href="mailto:nduatijeremy7@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.a>
              <motion.a
                href="https://github.com/jeremydev-c"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jeremydev-c"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>

            {/* What I Can Help With */}
              <div className="grid md:grid-cols-4 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-white font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-gray-200 text-sm">Complete web applications from frontend to backend</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-200 text-sm">Beautiful, user-centered interface design</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-white font-semibold mb-2">Payment Integration</h3>
                <p className="text-gray-200 text-sm">Stripe, M-Pesa, and other payment gateways</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 mb-16"
            >
              <ContactForm />
            </motion.div>

            {/* Why Work With Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="card card-hover max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gradient mb-6 text-center">
                  Why Work With Me?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
                    <span>🏆</span> Proven Excellence
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Ranked #50 out of 1,995 participants in 10Alytics Global Data Hackathon 2025, 
                    demonstrating expertise in data science, ML, and full-stack development.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-400 mb-3 flex items-center gap-2">
                    <span>⚡</span> Rapid Development
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    I deliver production-ready applications faster than traditional teams, 
                    without compromising on quality or security.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <span>💰</span> Cost-Effective
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    My AI optimization techniques have reduced operational costs by up to 95% 
                    for clients while maintaining excellent performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <span>🎨</span> Design + Code
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    I handle both design and development, ensuring pixel-perfect execution 
                    and eliminating communication gaps between designers and developers.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                    <span>📊</span> Data Science & ML
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Expertise in machine learning models, data analysis, interactive dashboards, 
                    and transforming complex data into actionable insights.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <span>🔒</span> Production Ready
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Every project includes comprehensive testing, security best practices, 
                    and deployment-ready code that scales with your business.
                  </p>
                </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

