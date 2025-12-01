'use client';

import { motion } from 'framer-motion';
import { Target, Clock, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function CaseStudies() {
  const caseStudies = [
    {
      name: "Fiscal Intelligence Dashboard",
      summary: "Built a comprehensive data analytics platform for African sovereign debt analysis, featuring advanced ML models, interactive visualizations, and real-time risk scoring for the 10Alytics Global Data Hackathon 2025. Achieved #50 ranking out of 1,995 participants.",
      role: "Data Scientist & ML Engineer",
      timeline: "Hackathon Project",
      stackHighlight: "Python • Plotly • Machine Learning • Data Analysis • Interactive Dashboards",
      challenge: "Create an intuitive, data-driven platform that enables policymakers to understand fiscal risks, predict outcomes, and identify cost-saving opportunities across African countries using complex financial datasets. Compete against 1,995 participants in a global hackathon.",
      solution: [
        "Developed advanced ML models for risk scoring and scenario analysis with feature importance analysis.",
        "Built interactive dashboard with real-time filtering (country, time range, risk category) and dynamic visualizations.",
        "Implemented policy impact estimation system showing potential annual savings for each country.",
        "Created critical fiscal warnings system to highlight countries with high risk levels."
      ],
      metrics: [
        { label: "Hackathon Ranking", value: "#50 / 1,995" },
        { label: "Countries Analyzed", value: "10+" },
        { label: "ML Features", value: "8 Key Indicators" },
        { label: "Visualizations", value: "4 Interactive Charts" }
      ],
      result: "Ranked #50 out of 1,995 participants in the 10Alytics Global Data Hackathon 2025. Successfully deployed interactive dashboard on Netlify, demonstrating expertise in data science, ML model development, and creating production-ready analytics platforms. Showcased ability to transform complex financial data into actionable insights and compete at a global level."
    },
    {
      name: "EventVerse",
      summary: "Digitized the entire event lifecycle for organizers who previously relied on spreadsheets and manual payment reconciliation.",
      role: "Lead Full-Stack Engineer & Product Designer",
      timeline: "12 weeks",
      stackHighlight: "Next.js 14 • Prisma • Stripe • M-Pesa • WebSockets",
      challenge: "Create a unified experience for hybrid events with real-time ticketing, universal payments, and on-site verification queues that previously took 20+ minutes.",
      solution: [
        "Designed dual payment architecture (Stripe for cards, M-Pesa for mobile money) with webhook-based reconciliation.",
        "Built a scanner-first PWA that caches QR codes offline and syncs check-ins once connectivity is back.",
        "Shipped live ops dashboard showing ticket sales, attendee flow, and payment status across venues."
      ],
      metrics: [
        { label: "Payment success rate", value: "+38%" },
        { label: "Average check-in time", value: "-65%" },
        { label: "Support tickets per event", value: "-45%" }
      ],
      result: "Launched across 4 pilot conferences, processing over 3,200 attendees with zero double scans and instant refunds when STK pushes failed."
    },
    {
      name: "ShopStar",
      summary: "Scaled a founder's MVP into an enterprise retail platform capable of handling flash sales, fulfillment, and multi-warehouse inventory.",
      role: "Full-Stack Engineer & Systems Designer",
      timeline: "10 weeks",
      stackHighlight: "Next.js 16 • Node.js • MongoDB • Stripe • Resend",
      challenge: "Replace fragmented tooling (Google Sheets + WhatsApp orders) with a single source of truth for sales, stock, and customer communication.",
      solution: [
        "Implemented double-entry inventory ledger with low-stock automations and supplier notifications.",
        "Added role-based admin portal featuring cohort-based analytics, AOV tracking, and refund workflows.",
        "Embedded transactional comms (email + SMS) covering order lifecycle, shipping labels, and settlement reports."
      ],
      metrics: [
        { label: "Checkout conversion", value: "+27%" },
        { label: "Fulfillment speed", value: "2× faster" },
        { label: "Refund rate", value: "-18%" }
      ],
      result: "Enabled the merchant to process 5,000+ monthly orders with SLA-backed fulfillment, automated reconciliation, and audit-ready exports."
    },
    {
      name: "Fashion Fit",
      summary: "Built a cost-aware, AI-powered styling assistant capable of delivering computer-vision outfit suggestions in markets with unreliable bandwidth.",
      role: "AI Engineer & Product Designer",
      timeline: "14 weeks",
      stackHighlight: "Next.js • Custom CV Engine • Node.js • Cloudinary • OAuth 2.0",
      challenge: "Provide real-time item detection and styling tips without sending every image to expensive third-party APIs.",
      solution: [
        "Developed a hybrid CV pipeline: local canvas pixel parsing for color + silhouette, optional GPT-4 calls for semantic tagging.",
        "Created wardrobe intelligence layer that learns per-user fit preferences, occasions, and seasonal constraints.",
        "Internationalized the experience (11 languages) with RTL support, currency awareness, and localized content."
      ],
      metrics: [
        { label: "Inference cost", value: "-95%" },
        { label: "Detection accuracy", value: "88%+" },
        { label: "Supported locales", value: "11 languages" }
      ],
      result: "Delivered sub-3s detection on mid-tier Android devices, making AI styling accessible globally while preserving privacy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <Navigation activePage="case-studies" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-4"
            >
              Deep Dive • Real Results
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Case Studies & Product Outcomes
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl mb-8">
              Beyond shipping features, I help teams reach measurable outcomes. Here's how each flagship project evolved from problem definition to launch-ready solution.
            </p>
            
            {/* Key Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">+38%</div>
                <div className="text-sm text-gray-400">Payment Success</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">-65%</div>
                <div className="text-sm text-gray-400">Check-in Time</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5,000+</div>
                <div className="text-sm text-gray-400">Monthly Orders</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3,200+</div>
                <div className="text-sm text-gray-400">Attendees</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8+</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3rd</div>
                <div className="text-sm text-gray-400">County CS Fair</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover glow-border"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                  <div className="space-y-3">
                    <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs tracking-[0.2em] uppercase">
                      {study.name}
                    </span>
                    <h3 className="text-3xl font-semibold text-white">{study.summary}</h3>
                    <p className="text-gray-400">{study.result}</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 w-full lg:w-auto">
                    <div className="bg-gray-900/60 rounded-2xl border border-gray-700/60 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Role</p>
                      <p className="text-sm text-gray-200">{study.role}</p>
                    </div>
                    <div className="bg-gray-900/60 rounded-2xl border border-gray-700/60 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" /> Timeline
                      </p>
                      <p className="text-sm text-gray-200">{study.timeline}</p>
                    </div>
                    <div className="bg-gray-900/60 rounded-2xl border border-gray-700/60 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Stack</p>
                      <p className="text-sm text-gray-200">{study.stackHighlight}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-gray-900/40 rounded-2xl border border-gray-700/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-pink-400" />
                      <h4 className="text-xl font-semibold text-white">Challenge</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="bg-gray-900/40 rounded-2xl border border-gray-700/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-cyan-400" />
                      <h4 className="text-xl font-semibold text-white">Approach</h4>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-purple-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-purple-300" />
                    <h4 className="text-lg font-semibold text-white">Impact Metrics</h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="bg-gray-900/60 rounded-2xl border border-gray-700/40 p-4 text-center">
                        <p className="text-2xl font-bold text-gradient">{metric.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Methodology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="card card-hover max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-6 text-center">
                My Development Methodology
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-semibold text-purple-400 mb-2">Problem First</h4>
                  <p className="text-sm text-gray-300">
                    Deep understanding of business needs before writing code
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-semibold text-pink-400 mb-2">Rapid Iteration</h4>
                  <p className="text-sm text-gray-300">
                    Build, test, deploy, and iterate with continuous feedback
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Production Ready</h4>
                  <p className="text-sm text-gray-300">
                    Every project ships with scalability and security built-in
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Certified Expertise</h4>
                  <p className="text-sm text-gray-300">
                    Backed by verified certifications from top platforms and institutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

