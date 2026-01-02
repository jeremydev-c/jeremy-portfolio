'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Sparkles, Zap, Target, TrendingUp, Award, Rocket, Heart, Lightbulb, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <a href="#main-heading" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden"
        aria-label="Hero section"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Photo first on mobile, right side on desktop */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-none"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              aria-label="Portrait"
            >
              <div className="w-full max-w-xs sm:max-w-sm">
                <div className="relative rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[1px] shadow-2xl shadow-purple-500/20">
                  <div className="relative rounded-3xl bg-gray-900/60 overflow-hidden border border-white/10">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src="/me.jpeg"
                        alt="Jeremy Nduati portrait"
                        fill
                        priority
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 420px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        <span className="px-3 py-1.5 rounded-full text-xs bg-black/40 border border-white/15 text-white backdrop-blur">
                          ✅ Available
                        </span>
                        <span className="px-3 py-1.5 rounded-full text-xs bg-black/40 border border-white/15 text-white backdrop-blur">
                          ⚡ 24h reply
                        </span>
                        <span className="px-3 py-1.5 rounded-full text-xs bg-black/40 border border-white/15 text-white backdrop-blur">
                          🌍 Remote-friendly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 sm:mb-6 text-gradient" 
              id="main-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I Build Production Web Apps That Feel Premium
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-Stack • UI/UX • Payments (Stripe + M-Pesa) • AI/ML
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ranked <span className="text-purple-400 font-semibold">#50 out of 1,995</span> globally, I ship fast, secure, and scalable products with
              <span className="text-pink-400 font-semibold"> clean UI/UX</span> and <span className="text-cyan-400 font-semibold">real-world outcomes</span>.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 max-w-4xl mx-auto lg:mx-0 px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                🏆 Top 50 / 1,995 Global Hackathon
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                🚀 4+ Production Applications
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                💼 Portfolio Builder
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                🤖 AI-Powered Development
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                ⚡ Payment Gateway Expert
              </span>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-start gap-4 flex-wrap mb-8" 
              role="group" 
              aria-label="Call to action buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto text-center block"
                  aria-label="Hire me / contact"
                >
                  Hire Me →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/projects" 
                  className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto text-center block"
                  aria-label="View my projects"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              Recruiter note: I can own a feature end-to-end (design → code → deploy) and communicate clearly.
            </motion.p>
            
            {/* Impressive Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto lg:mx-0 mt-10 sm:mt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                  className="card card-hover text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/20"
                >
                  <div className="text-3xl sm:text-4xl mb-2">🚀</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1">4+</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold mb-1">Production Apps</div>
                  <div className="text-xs text-gray-500">Live & Deployed</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card card-hover text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-pink-500/20"
                >
                  <div className="text-3xl sm:text-4xl mb-2">🏆</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-1">#50</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold mb-1">Global Rank</div>
                  <div className="text-xs text-gray-500">Top 2.5% of 1,995</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card card-hover text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/20"
                >
                  <div className="text-3xl sm:text-4xl mb-2">🎖️</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">3rd</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold mb-1">County Winner</div>
                  <div className="text-xs text-gray-500">CS Fair 2025</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card card-hover text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-yellow-500/20"
                >
                  <div className="text-3xl sm:text-4xl mb-2">📜</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">8+</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold mb-1">Certificates</div>
                  <div className="text-xs text-gray-500">Verified & Certified</div>
                </motion.div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-12 sm:py-20 px-4 relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-purple-400 mb-4 uppercase tracking-widest font-semibold"
            >
              My Story
            </motion.p>
            <h2 className="section-title text-5xl md:text-6xl">
              About Me
            </h2>
          </motion.div>

          {/* Legendary About Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            {/* Left: Profile Card (sticky on desktop) */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 h-fit"
            >
              <div className="card card-hover p-6 sm:p-8 overflow-hidden relative">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[1px] shadow-lg shadow-purple-500/25">
                      <div className="w-full h-full rounded-2xl bg-gray-900/70 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">JN</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-xl leading-tight">Jeremy Nduati</h3>
                      <p className="text-gray-400 text-sm leading-tight">
                        Full-Stack Developer • UI/UX • Payments • AI/ML
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-gray-400 mb-1">Global Rank</div>
                      <div className="text-lg font-bold text-pink-200">#50 / 1,995</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-gray-400 mb-1">AI Optimization</div>
                      <div className="text-lg font-bold text-cyan-200">-95% cost</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-gray-400 mb-1">Production</div>
                      <div className="text-lg font-bold text-purple-200">4+ apps</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-gray-400 mb-1">Awards</div>
                      <div className="text-lg font-bold text-yellow-200">3rd place</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary w-full text-center block">
                      Hire Me →
                    </Link>
                    <Link href="/case-studies" className="btn-secondary w-full text-center block">
                      View Case Studies
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                    I can own a feature end-to-end (design → code → deploy) and communicate clearly with technical and non-technical teams.
                  </p>
                </div>
              </div>

              <div className="card card-hover p-6">
                <h4 className="text-lg font-bold text-gradient mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-300" />
                  Signature Strengths
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Sparkles className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-white font-semibold leading-tight">Premium UI/UX</p>
                      <p className="text-gray-400 text-sm">Clean layouts, modern motion, and conversion-focused design.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <Zap className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-white font-semibold leading-tight">Payments & Reliability</p>
                      <p className="text-gray-400 text-sm">Stripe + M-Pesa flows, webhooks, edge cases handled.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20">
                      <Rocket className="w-5 h-5 text-pink-300" />
                    </div>
                    <div>
                      <p className="text-white font-semibold leading-tight">Ship Fast, Ship Right</p>
                      <p className="text-gray-400 text-sm">Production-ready code, not just prototypes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Right: Story + What you get + Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="card card-hover p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10">
                    <Code className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">The story — and the standards</h3>
                    <p className="text-gray-400 text-sm">Why teams trust me with production work.</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I’m a builder who cares about two things: <span className="text-white font-semibold">outcomes</span> and
                  <span className="text-white font-semibold"> craft</span>. I design clean experiences, then engineer them with the mindset of
                  security, scalability, and real users.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  My edge is simple: I can move from idea → design → implementation without losing quality. That means faster delivery,
                  fewer handoff mistakes, and pixel-perfect execution.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card card-hover p-6">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-300" />
                    Recruiter-friendly communication
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Clear updates, clean documentation, and professional collaboration.
                  </p>
                </div>
                <div className="card card-hover p-6">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-300" />
                    Production mindset
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Auth, validation, error handling, performance, and deploy readiness.
                  </p>
                </div>
                <div className="card card-hover p-6">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    Speed without sloppiness
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I use AI tools to accelerate delivery while keeping code quality high.
                  </p>
                </div>
                <div className="card card-hover p-6">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    Measurable impact
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Projects built for real metrics: conversion, cost, speed, and reliability.
                  </p>
                </div>
              </div>

              <div className="card card-hover p-6 sm:p-8">
                <h4 className="text-xl font-bold text-gradient mb-5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-300" />
                  Highlights (fast scan)
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-purple-400"></div>
                    <p className="text-gray-300">
                      Ranked <span className="text-white font-semibold">#50 / 1,995</span> in the 10Alytics Global Data Hackathon (2025).
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                    <p className="text-gray-300">
                      Built <span className="text-white font-semibold">4+ production apps</span> across full-stack, dashboards, and payments.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-pink-400"></div>
                    <p className="text-gray-300">
                      Reduced AI operational costs by <span className="text-white font-semibold">95%</span> with custom hybrid solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-yellow-400"></div>
                    <p className="text-gray-300">
                      Placed <span className="text-white font-semibold">3rd (Computer Science)</span> at a county science & engineering fair.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-6">
                <h4 className="text-lg font-bold text-white mb-4">Toolbelt</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'TypeScript',
                    'React',
                    'Node.js',
                    'MongoDB',
                    'Prisma',
                    'Stripe',
                    'M-Pesa',
                    'Framer Motion',
                    'Tailwind',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-gray-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
            
          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card card-hover text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-gray-300 font-semibold mb-1">Full-Stack Projects</div>
              <div className="text-gray-500 text-sm">Production Ready</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card card-hover text-center p-8 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border-pink-500/20"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">2</div>
              <div className="text-gray-300 font-semibold mb-1">Payment Gateways</div>
              <div className="text-gray-500 text-sm">Stripe & M-Pesa</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card card-hover text-center p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-300 font-semibold mb-1">Cost Reduction</div>
              <div className="text-gray-500 text-sm">AI Optimization</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card card-hover text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">15</div>
              <div className="text-gray-300 font-semibold mb-1">Years Old</div>
              <div className="text-gray-500 text-sm">Building Dreams</div>
            </motion.div>
          </motion.div>

          {/* Quick Links to Other Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <Link href="/projects" className="card card-hover text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold text-gradient mb-2 relative z-10">Projects</h3>
              <p className="text-gray-400 text-sm relative z-10">View my featured work</p>
            </Link>
            <Link href="/certificates" className="card card-hover text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-xl font-bold text-gradient mb-2 relative z-10">Certificates</h3>
              <p className="text-gray-400 text-sm relative z-10">Achievements</p>
            </Link>
            <Link href="/case-studies" className="card card-hover text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold text-gradient mb-2 relative z-10">Case Studies</h3>
              <p className="text-gray-400 text-sm relative z-10">Deep dive into outcomes</p>
            </Link>
            <Link href="/skills" className="card card-hover text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-xl font-bold text-gradient mb-2 relative z-10">Skills</h3>
              <p className="text-gray-400 text-sm relative z-10">Technical expertise</p>
            </Link>
            <Link href="/testimonials" className="card card-hover text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h3 className="text-xl font-bold text-gradient mb-2 relative z-10">Testimonials</h3>
              <p className="text-gray-400 text-sm relative z-10">What clients say</p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-purple-400 mb-4 uppercase tracking-widest font-semibold"
            >
              Trusted & Recommended
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What People Say About My Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take my word for it—here's what clients and collaborators say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote: "Jeremy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and production-ready implementation saved us months of development time.",
                author: "Sarah Mitchell",
                role: "E-Commerce Director",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                quote: "Working with Jeremy was a game-changer. The custom AI system he built reduced our operational costs by 95% while maintaining excellent accuracy.",
                author: "David Chen",
                role: "CTO, Tech Innovations",
                gradient: "from-pink-500 to-cyan-500"
              },
              {
                quote: "Ranked #50 out of 1,995 participants—demonstrates exceptional data science and ML engineering skills with sophisticated analytics platforms.",
                author: "10Alytics Hackathon",
                role: "Global Data Hackathon 2025",
                gradient: "from-cyan-500 to-purple-500"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.author}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/testimonials" className="btn-secondary inline-flex items-center gap-2">
              View All Testimonials →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Build Something Extraordinary?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's turn your ideas into production-ready applications that drive real business results. 
              From concept to deployment, I'm here to help you succeed.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                  Start Your Project →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/projects" className="btn-secondary text-lg px-10 py-4">
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "⚡", text: "Fast Response" },
                { icon: "🏆", text: "Award Winning" },
                { icon: "💼", text: "Production Ready" },
                { icon: "🤝", text: "Client Focused" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-400">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-500/20 text-gray-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-gradient">
                Jeremy Nduati
              </h3>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer, UI/UX Designer & Portfolio Builder creating beautiful, production-ready web applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className="hover:text-purple-400 transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-purple-400 transition-colors">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jeremydev-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/jeremydev-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nduatijeremy7@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Jeremy Nduati. All rights reserved.</p>
            <p className="mt-2 text-gradient text-sm">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
