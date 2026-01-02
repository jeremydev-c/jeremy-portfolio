'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, ShoppingCart, Sparkles, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Projects() {
  const projects = [
    {
      name: "Fiscal Intelligence Dashboard",
      tagline: "10Alytics Hackathon 2025 - Advanced ML Analytics Platform",
      description: "A comprehensive data visualization and analytics platform for African sovereign debt analysis. Features advanced ML models for risk scoring, scenario analysis, policy impact estimates, and interactive visualizations. Built for the 10Alytics Global Data Hackathon 2025, ranking #50 out of 1,995 participants - showcasing expertise in data science, machine learning, and interactive dashboard development.",
      tech: ["Python", "Plotly", "Machine Learning", "Data Analysis", "HTML5", "CSS3", "JavaScript", "Netlify"],
      features: [
        "Advanced ML Models for Risk Scoring",
        "Interactive Country/Region Filtering",
        "Real-time Policy Impact Estimates",
        "ML Feature Importance Analysis",
        "Critical Fiscal Warnings System",
        "Comprehensive Data Visualizations",
        "Scenario Analysis & Predictions",
        "Time Range Filtering (1-10 Years)"
      ],
      liveUrl: "https://moonlit-starlight-601077.netlify.app",
      githubUrl: "#",
      image: "📊",
      color: "from-purple-600 to-indigo-700",
      icon: TrendingUp,
      badge: "Top 50 / 1,995",
      badgeColor: "from-purple-400 to-pink-500"
    },
    {
      name: "EventVerse",
      tagline: "Full-Stack Event Management Platform",
      description: "A comprehensive event management platform with dual payment gateways (Stripe & M-Pesa), QR code ticketing, real-time attendance tracking, and role-based dashboards. Features secure authentication, webhook handling, and production-ready architecture.",
      tech: ["Next.js 14", "TypeScript", "MongoDB", "Prisma", "Stripe", "M-Pesa", "QR Codes"],
      features: [
        "Dual Payment Integration (Stripe + M-Pesa)",
        "QR Code Generation & Scanning System",
        "Real-time Payment Status Polling",
        "Role-Based Dashboards (Organizer/Attendee)",
        "Secure JWT + Google OAuth Authentication",
        "Webhook Handling & Payment Callbacks",
        "Calendar Integration (.ics files)",
        "Printable Ticket Receipts"
      ],
      liveUrl: "https://eventverse-mu.vercel.app",
      githubUrl: "https://github.com/jeremydev-c/eventverse",
      image: "🎫",
      color: "from-blue-500 to-cyan-600",
      icon: Code
    },
    {
      name: "ShopStar",
      tagline: "Enterprise-Grade E-Commerce Platform",
      description: "A full-stack e-commerce solution with Stripe payments, inventory management, admin dashboard, and comprehensive order processing. Built with modern architecture and production-ready code.",
      tech: ["Next.js 16", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "Resend"],
      features: [
        "Secure Payment Processing (Stripe)",
        "Real-time Inventory Management",
        "Admin Dashboard with Analytics",
        "Order Tracking & Email Notifications",
        "Role-Based Access Control",
        "Comprehensive Testing (95%+ coverage)"
      ],
      liveUrl: "https://shopstar-psi.vercel.app",
      githubUrl: "https://github.com/jeremydev-c/shopstar",
      image: "🛒",
      color: "from-purple-500 to-indigo-600",
      icon: ShoppingCart
    },
    {
      name: "Fashion Fit",
      tagline: "AI-Powered Personal Styling Assistant",
      description: "An intelligent fashion recommendation platform using custom computer vision AI to analyze clothing items and suggest perfect outfit combinations. Features hybrid AI architecture, wardrobe management, and 11-language internationalization.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Custom AI/ML", "Cloudinary", "OAuth 2.0"],
      features: [
        "Custom Computer Vision AI (95% cost reduction)",
        "AI-Powered Outfit Recommendations",
        "Smart Camera Real-time Detection",
        "Wardrobe Management System",
        "11 Languages (i18n) Support",
        "OAuth 2.0 Authentication"
      ],
      liveUrl: "https://fashion-fit-two.vercel.app",
      githubUrl: "https://github.com/jeremydev-c/fashion-fit",
      image: "✨",
      color: "from-pink-500 to-rose-600",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <Navigation activePage="projects" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
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
              className="text-sm md:text-base text-purple-400 mb-4 uppercase tracking-widest font-semibold"
            >
              Featured Work
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Projects That Define Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              Enterprise-grade applications built with cutting-edge technologies, AI-assisted development, 
              payment integrations, and production-ready deployments. Backed by verified certifications and proven expertise.
            </p>
            <p className="text-base text-purple-400/80 max-w-2xl mx-auto mb-8">
              🏆 Top 50 Global Hackathon Rank • 🚀 4+ Production Applications • 💼 Portfolio Builder for Professionals • 
              🤖 AI-Powered Development Expert • ⚡ Payment Gateway Integration Specialist
            </p>
            
            {/* Impressive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4+</div>
                <div className="text-sm text-gray-400">Production Apps</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8+</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2</div>
                <div className="text-sm text-gray-400">Payment Gateways</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">95%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">#50</div>
                <div className="text-sm text-gray-400">Hackathon Rank</div>
                <div className="text-xs text-gray-500">Out of 1,995</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card card-hover glow-border overflow-hidden group"
              >
                <div className={`h-56 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <motion.div 
                    className="text-8xl relative z-10 drop-shadow-2xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {project.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  {project.badge && (
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-xl flex items-center gap-2 z-20 backdrop-blur-sm border border-white/20`}
                    >
                      <Award className="w-4 h-4" />
                      {project.badge}
                    </motion.div>
                  )}
                </div>
                <div className="p-8 bg-gray-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className="w-7 h-7 text-purple-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gradient">{project.name}</h3>
                  </div>
                  <p className="text-cyan-400 font-semibold mb-4 text-lg">{project.tagline}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-400 mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3 text-gray-300 group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="text-purple-400 mt-1 text-lg"
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            ✓
                          </motion.span>
                          <span className="group-hover:text-white transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {project.liveUrl !== "#" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl !== "#" && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="card card-hover max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Let's collaborate on your next project. I specialize in turning complex ideas into elegant, production-ready solutions.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

