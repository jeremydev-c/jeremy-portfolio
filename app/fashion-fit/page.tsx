'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Camera,
  Shirt,
  Calendar,
  MessageSquare,
  BarChart3,
  CloudSun,
  CreditCard,
  Globe,
  Sparkles,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  Smartphone,
  Eye,
  Palette,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

const features = [
  {
    icon: Camera,
    title: 'AI Vision Capture',
    desc: 'Point your camera at any clothing item — the AI identifies category, colors, pattern, fit, style, occasions, and even brand. Single capture or bulk mode for up to 30 items at once.',
    accent: true,
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    desc: '14 custom fashion intelligence algorithms analyze your wardrobe, occasion, time of day, and real-time weather to suggest complete outfits you\'ll actually wear.',
    accent: true,
  },
  {
    icon: Shirt,
    title: 'Digital Wardrobe',
    desc: 'Every piece you own, catalogued and searchable. Filter by category, search by name, view as grid or list. Your entire closet in your pocket.',
    accent: false,
  },
  {
    icon: CloudSun,
    title: 'Weather-Aware Styling',
    desc: 'GPS-based local weather or destination city weather (Nairobi, Mombasa, Kisumu, and more). Suggestions adapt to temperature, humidity, wind, and rain probability.',
    accent: false,
  },
  {
    icon: Calendar,
    title: '7-Day Outfit Planner',
    desc: 'Plan outfits for the week ahead. Pick date, occasion, and time — the AI fills in the rest. Never repeat or under-dress again.',
    accent: false,
  },
  {
    icon: MessageSquare,
    title: 'AI Style Coach',
    desc: 'Chat with a fashion-trained AI. Ask style questions, get advice, save conversation history. Like having a personal stylist on call 24/7.',
    accent: false,
  },
  {
    icon: Palette,
    title: 'Style DNA Profile',
    desc: 'A unique fingerprint of your fashion identity — primary/secondary styles, color preferences, brand affinity, uniqueness and consistency scores.',
    accent: false,
  },
  {
    icon: BarChart3,
    title: 'Wardrobe Analytics',
    desc: 'See what you actually wear vs. what sits idle. Category distribution, outfit history, and AI-generated insights to optimize your wardrobe.',
    accent: false,
  },
  {
    icon: Target,
    title: 'Learning Engine',
    desc: 'Every save, reject, and interaction teaches the AI your preferences. Recommendations get smarter over time — personalized to you alone.',
    accent: false,
  },
  {
    icon: CreditCard,
    title: 'Freemium + Paystack',
    desc: 'Free tier for casual users. Pro and Elite plans unlock bulk upload, destination weather, analytics, planner, and unlimited recommendations. Payments via Paystack (KES).',
    accent: false,
  },
  {
    icon: Globe,
    title: '30 Languages',
    desc: 'Full i18n support with 30 locales. Built for a global audience from day one.',
    accent: false,
  },
  {
    icon: Shield,
    title: 'Production Security',
    desc: 'JWT authentication, bcrypt hashing, input validation, plan-gated features, and server-side enforcement. Enterprise-grade from the start.',
    accent: false,
  },
];

const techStack = [
  { category: 'Mobile', items: ['React Native', 'Expo 51', 'React Navigation', 'Reanimated', 'Gesture Handler'] },
  { category: 'State & Data', items: ['TanStack React Query', 'Zustand', 'AsyncStorage'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'] },
  { category: 'AI / ML', items: ['OpenAI GPT-4o-mini', 'Vision API', 'Custom Scoring Engine', '14 Algorithms'] },
  { category: 'Cloud', items: ['Cloudinary (images)', 'Paystack (payments)', 'Resend (email)'] },
  { category: 'Device', items: ['Camera', 'Location', 'Haptics', 'Audio', 'File System'] },
];

const metrics = [
  { value: '14', label: 'Fashion Intelligence Algorithms' },
  { value: '95%', label: 'AI Cost Reduction vs Cloud APIs' },
  { value: '30', label: 'Languages Supported' },
  { value: '6', label: 'Core Screens + Modals' },
  { value: '15+', label: 'API Endpoints' },
  { value: '88%+', label: 'Vision Categorization Accuracy' },
];

const timeline = [
  { phase: 'Research', desc: 'Problem validation — 92M tonnes textile waste, 20-30% wardrobe utilization in Kenya/East Africa.' },
  { phase: 'Architecture', desc: 'Hybrid AI pipeline design: local parsing + GPT-4o-mini for semantic tagging. Freemium model design.' },
  { phase: 'Core Build', desc: 'Wardrobe CRUD, camera capture, AI categorization, recommendation engine with 14 scoring algorithms.' },
  { phase: 'Intelligence', desc: 'Style DNA, learning engine, weather integration, destination-based styling, analytics dashboard.' },
  { phase: 'Polish', desc: 'Subscription tiers, onboarding flow, bulk capture, i18n (30 locales), theme system, accessibility.' },
  { phase: 'Competition', desc: 'Preparing for Young Scientist Kenya (YSK) 2026 — AI + fashion sustainability for East Africa.' },
];

export default function FashionFit() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sand-500/[0.04] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-sand-600/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="section-label mb-0">Featured Project</span>
                <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] bg-sand-500/10 border border-sand-500/20 text-sand-400 uppercase tracking-wider font-semibold">
                  YSK 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">
                Fashion Fit
              </h1>
              <p className="text-xl sm:text-2xl text-carbon-300 font-light mb-4 sm:mb-6 leading-snug">
                AI-powered wardrobe management &amp; outfit recommendations for the real world.
              </p>
              <p className="text-sm sm:text-base text-carbon-400 leading-relaxed mb-8 max-w-lg">
                Point your camera, digitize your wardrobe, and let 14 fashion intelligence
                algorithms dress you for any occasion — with real-time weather, learning
                preferences, and a personal AI style coach. Built at 15 for
                Young Scientist Kenya 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/jeremydev-c/fashion-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  View on GitHub <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/case-studies" className="btn-secondary gap-2">
                  Read Case Study <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* App icon + floating stats */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-[40px] sm:rounded-[56px] overflow-hidden border border-carbon-700/40 shadow-2xl shadow-black/40">
                  <Image
                    src="/fashion-fit-icon.jpeg"
                    alt="Fashion Fit App Icon"
                    width={260}
                    height={260}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-carbon-900 border border-carbon-700/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-sand-500" />
                    <span className="text-[10px] sm:text-xs text-white font-semibold">14 AI Algorithms</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-carbon-900 border border-carbon-700/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-sand-500" />
                    <span className="text-[10px] sm:text-xs text-white font-semibold">88%+ Vision Accuracy</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-carbon-900 border border-carbon-700/60 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-sand-500" />
                    <span className="text-[10px] sm:text-xs text-white font-semibold">95% Cost Cut</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">The Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:mb-6 max-w-2xl leading-tight">
              92 million tonnes of textile waste. 
              <span className="text-carbon-400"> People wear only 20-30% of what they own.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Time waste', desc: 'Manually remembering or cataloging what you own is impractical.' },
                { title: 'Decision fatigue', desc: 'Choosing from dozens of items daily drains mental energy.' },
                { title: 'Clothing underuse', desc: 'Without visibility, people rewear the same few items and forget the rest.' },
                { title: 'Unnecessary spending', desc: 'Buying new clothes for occasions when suitable items already exist.' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-carbon-800 pl-4 sm:pl-5 hover:border-sand-500/50 transition-colors">
                  <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-1">{item.title}</h3>
                  <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Features</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 sm:mb-4">
              Everything the app does
            </h2>
            <p className="text-carbon-400 max-w-xl mx-auto text-sm sm:text-base">
              12 core capabilities working together to solve wardrobe management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className={`card group ${feature.accent ? 'border-sand-500/20 hover:border-sand-500/40' : ''}`}
              >
                <feature.icon className={`w-5 h-5 mb-3 ${feature.accent ? 'text-sand-500' : 'text-carbon-500'}`} />
                <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-1.5 group-hover:text-sand-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="section-label">By The Numbers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Built to scale
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-carbon-700/30 rounded-lg overflow-hidden">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-carbon-900 p-5 sm:p-8 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{m.value}</div>
                <div className="text-[10px] sm:text-xs text-carbon-500 uppercase tracking-wider leading-tight">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="section-label">Architecture</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tech stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-sand-500 uppercase tracking-wider mb-3 sm:mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-carbon-300 text-xs sm:text-sm flex gap-2">
                      <span className="text-carbon-600 shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Deep Dive */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">AI Architecture</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:mb-6 max-w-2xl leading-tight">
              Hybrid AI pipeline.
              <span className="text-sand-400"> 95% cheaper than cloud-only.</span>
            </h2>
            <p className="text-carbon-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Instead of sending every image to expensive cloud APIs, Fashion Fit uses a hybrid
              approach: local parsing for color and silhouette extraction, with GPT-4o-mini
              for semantic tagging only when needed. This cuts inference costs by 95% while
              maintaining 88%+ accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  icon: Camera,
                  title: 'Vision Layer',
                  desc: 'Camera capture → base64 encoding → GPT-4o-mini vision analysis. Returns category, subcategory, colors, pattern, fit, style, occasions, brand, and confidence score.',
                },
                {
                  icon: Sparkles,
                  title: 'Intelligence Layer',
                  desc: '14 scoring algorithms: occasion profiles, time-of-day profiles, weather adaptation, color harmony, style coherence, wardrobe diversity, and learning-weighted preferences.',
                },
                {
                  icon: Brain,
                  title: 'Learning Layer',
                  desc: 'Every save, reject, and interaction feeds the learning engine. Style DNA recalculates. Recommendations evolve. The AI gets better the more you use it.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card border-sand-500/10 hover:border-sand-500/30"
                >
                  <item.icon className="w-5 h-5 text-sand-500 mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <span className="section-label">Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Development timeline
            </h2>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-6"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-2.5 h-2.5 rounded-full ${i === timeline.length - 1 ? 'bg-sand-500' : 'bg-carbon-600'} shrink-0`} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-carbon-800 min-h-[48px]" />}
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-1">{item.phase}</h3>
                  <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YSK Context */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card sm:p-8 md:p-10 border-sand-500/15">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Smartphone className="w-5 h-5 text-sand-500" />
                <span className="section-label mb-0">Young Scientist Kenya 2026</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
                AI meets fashion sustainability — built for Kenya, designed for the world.
              </h2>
              <p className="text-carbon-300 text-sm sm:text-base leading-relaxed mb-6">
                Fashion Fit addresses a real, measurable problem: the fashion industry produces
                92 million tonnes of textile waste annually, and the average person uses only
                20-30% of their wardrobe. In Kenya and East Africa, the growing availability
                of affordable fast fashion and imported secondhand clothing means wardrobes are
                expanding, but utilization isn&apos;t keeping pace.
              </p>
              <p className="text-carbon-300 text-sm sm:text-base leading-relaxed mb-6">
                This app is the first AI-powered wardrobe management solution targeting
                everyday users in East Africa — combining computer vision, 14 fashion
                intelligence algorithms, weather awareness, and a learning engine that gets
                smarter with every interaction. Built entirely by a 15-year-old developer.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { value: 'AI + CV', label: 'Core Technology' },
                  { value: 'Kenya', label: 'Target Market' },
                  { value: '15 yrs', label: 'Developer Age' },
                  { value: 'Aug 2026', label: 'Competition Date' },
                ].map((s) => (
                  <div key={s.label} className="bg-carbon-800/40 border border-carbon-700/30 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm sm:text-base">{s.value}</div>
                    <div className="text-carbon-500 text-[9px] sm:text-[10px] uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Interested?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:mb-6 text-balance">
              Want to collaborate or learn more?
            </h2>
            <p className="text-sm sm:text-base text-carbon-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Fashion Fit is actively in development. If you&apos;re interested in the project,
              the technology, or working together — reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="btn-primary gap-2">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/jeremydev-c/fashion-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
              >
                View Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
