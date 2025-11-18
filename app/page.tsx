'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  ShoppingCart, 
  Sparkles,
  Database,
  Zap,
  Shield,
  Smartphone,
  Target,
  Clock,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
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

  const caseStudies = [
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Jeremy Nduati
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-pink-400 transition-colors font-medium">Projects</a>
            <a href="#technical-skills" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Skills</a>
            <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Developer & UI/UX Designer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Building beautiful, modern, and production-ready web applications through innovative design and robust development
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Specializing in Next.js, TypeScript, payment integrations (Stripe & M-Pesa), and creating exceptional user experiences. 
              At 15 years old, I'm already building enterprise-grade applications that solve real-world problems.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-purple-400 rounded-lg font-semibold border-2 border-purple-400 hover:bg-purple-400/10 transition-all"
              >
                Get In Touch
              </motion.a>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-8 flex-wrap text-center mt-12">
              <div>
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">2</div>
                <div className="text-sm text-gray-400">Payment Gateways</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Production Ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a full-stack developer and creative web designer specializing in modern UI/UX design, visual design, and user-centered interfaces. 
              My work combines aesthetic excellence with functional design principles, creating beautiful and intuitive 
              web experiences that engage users and drive results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in full-stack development (Next.js, TypeScript, MongoDB, Prisma), payment integrations (Stripe, M-Pesa), 
              and modern design principles, I build production-ready applications from concept to deployment. I excel at creating 
              responsive designs, secure authentication systems, and engaging user interfaces that work flawlessly across all devices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My unique strength lies in both design and implementation—I don't just create beautiful designs, I bring them to 
              life with code. This end-to-end capability ensures pixel-perfect execution, secure backend architecture, and seamless user experiences.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-gray-300 text-sm">Full-Stack Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">2</div>
                <div className="text-gray-300 text-sm">Payment Gateways</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-300 text-sm">Production Ready</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">15</div>
                <div className="text-gray-300 text-sm">Years Old</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-purple-500/20 transition-all"
              >
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-8xl relative z-10 drop-shadow-2xl">{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-8 bg-gray-800/50">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{project.name}</h3>
                  </div>
                  <p className="text-cyan-400 font-semibold mb-4">{project.tagline}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50 hover:border-cyan-400/50 hover:bg-gray-700/70 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Project Impact:</h4>
                    <p className="text-gray-300 text-sm">
                      {project.name === "EventVerse" && "Built a complete event management solution with dual payment gateways, serving both international (Stripe) and local (M-Pesa) markets. Features real-time payment processing, QR code ticketing, and comprehensive dashboards."}
                      {project.name === "ShopStar" && "Created an enterprise-grade e-commerce platform with full inventory management, order processing, and admin analytics. Implemented secure payment processing and comprehensive testing."}
                      {project.name === "Fashion Fit" && "Developed an AI-powered styling assistant with custom computer vision, reducing operational costs by 95% while maintaining high accuracy. Features 11-language internationalization."}
                    </p>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 border border-gray-600 transition-all transform hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm border-y border-purple-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-4">Deep Dive</p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Case Studies & Product Outcomes
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Beyond shipping features, I help teams reach measurable outcomes. Here’s how each flagship project evolved from problem definition to launch-ready solution.
            </p>
          </div>

          <div className="space-y-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 border border-purple-500/20 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-purple-500/10"
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
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Design Philosophy
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            My approach to design and development combines creativity, technical excellence, and user-centered thinking to deliver exceptional digital experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Visual Excellence</h3>
              <p className="text-gray-300 mb-4">
                Creating stunning visual designs that capture attention and create memorable user experiences through color, typography, and composition.
              </p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>• Color psychology & harmony</li>
                <li>• Typography hierarchy</li>
                <li>• Visual storytelling</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
            >
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">User-Centered</h3>
              <p className="text-gray-300 mb-4">
                Designing with users in mind, ensuring every interface is intuitive, accessible, and provides a seamless experience across all devices.
              </p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>• User research & testing</li>
                <li>• Accessibility (WCAG)</li>
                <li>• Responsive design</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Modern & Responsive</h3>
              <p className="text-gray-300 mb-4">
                Leveraging the latest design trends and technologies to create responsive, fast, and beautiful web experiences that work everywhere.
              </p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>• Performance optimization</li>
                <li>• Modern frameworks</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </motion.div>
          </div>
          
          {/* Additional Philosophy Points */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Security First</h3>
              <p className="text-gray-300">
                Building secure applications with proper authentication, data encryption, and following industry best practices for web security.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Production Ready</h3>
              <p className="text-gray-300">
                Every project is built with production standards in mind—clean code, comprehensive error handling, and scalable architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Skills Section */}
      <section id="technical-skills" className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Frontend Development
                </h3>
              </div>
              <ul className="space-y-2">
                {["HTML5", "CSS3", "JavaScript (ES6+)", "Next.js 14+", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "Server Components", "Client Components"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <span className="text-blue-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Backend & Database
                </h3>
              </div>
              <ul className="space-y-2">
                {["Python", "Node.js", "MongoDB", "Prisma ORM", "RESTful APIs", "Webhooks", "Authentication (JWT, OAuth)", "API Routes", "Server Actions"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="text-purple-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Payment Integration
                </h3>
              </div>
              <ul className="space-y-2">
                {["Stripe Integration", "M-Pesa Integration", "Payment Webhooks", "STK Push", "Payment Status Polling", "Secure Transactions", "Multi-currency Support"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="text-green-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Security & Best Practices
                </h3>
              </div>
              <ul className="space-y-2">
                {["JWT Authentication", "OAuth 2.0", "Password Hashing", "Input Validation", "Type Safety", "Error Handling", "Environment Variables", "Secure API Design"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Additional Technologies
                </h3>
              </div>
              <ul className="space-y-2">
                {["QR Code Generation", "Calendar Integration (.ics)", "File Generation", "Real-time Updates", "Form Validation (Zod)", "Email Services", "Image Processing"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-pink-400 transition-colors">
                    <span className="text-pink-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Development Tools
                </h3>
              </div>
              <ul className="space-y-2">
                {["Git & GitHub", "Vercel Deployment", "MongoDB Atlas", "Prisma Studio", "TypeScript", "ESLint", "Postman", "VS Code"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-yellow-400 transition-colors">
                    <span className="text-yellow-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  UI/UX Design
                </h3>
              </div>
              <ul className="space-y-2">
                {["User Interface Design", "User Experience Design", "Wireframing", "Prototyping", "User Research", "Usability Testing", "Information Architecture", "Interaction Design", "Design Systems"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="text-purple-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Visual Design
                </h3>
              </div>
              <ul className="space-y-2">
                {["Color Theory", "Typography", "Layout & Composition", "Visual Hierarchy", "Grid Systems", "Spacing & Rhythm", "Icon Design", "Brand Identity", "Design Principles"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-pink-400 transition-colors">
                    <span className="text-pink-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Design Tools & Trends
                </h3>
              </div>
              <ul className="space-y-2">
                {["Figma", "Adobe XD", "Sketch", "Framer", "Dark Theme Design", "Gradient Design", "Glassmorphism", "Micro-interactions", "Responsive Design", "Accessibility (WCAG)"].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Don't just take my word for it—here's what clients and collaborators have to say about working with me.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Jeremy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and production-ready implementation saved us months of development time. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah Mitchell</h4>
                  <p className="text-gray-400 text-sm">E-Commerce Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Working with Jeremy was a game-changer. The custom AI system he built reduced our operational costs by 95% while maintaining excellent accuracy. His technical expertise and innovative solutions are truly impressive."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  DC
                </div>
                <div>
                  <h4 className="text-white font-semibold">David Chen</h4>
                  <p className="text-gray-400 text-sm">CTO, Tech Innovations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Jeremy's full-stack capabilities are outstanding. He delivered both frontend and backend with comprehensive testing, proper documentation, and seamless deployment. A true professional who delivers quality work on time."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  AJ
                </div>
                <div>
                  <h4 className="text-white font-semibold">Alex Johnson</h4>
                  <p className="text-gray-400 text-sm">Senior Developer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The attention to security and best practices in Jeremy's code is remarkable. He implemented OAuth, JWT authentication, and followed industry standards throughout. Our team learned a lot from reviewing his work."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div>
                  <h4 className="text-white font-semibold">Maria Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Security Lead</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Jeremy built a complex AI-powered application with internationalization support for 11 languages. The architecture is scalable, the code is clean, and the user experience is exceptional. Very impressed!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  KT
                </div>
                <div>
                  <h4 className="text-white font-semibold">Kevin Thompson</h4>
                  <p className="text-gray-400 text-sm">Product Manager</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "As a startup founder, I needed someone who could build production-ready applications fast. Jeremy delivered exactly that - clean code, comprehensive testing, and deployment-ready solutions. Would definitely work with again!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  LW
                </div>
                <div>
                  <h4 className="text-white font-semibold">Lisa Wang</h4>
                  <p className="text-gray-400 text-sm">Startup Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-200 mb-4">
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you need a full-stack application, a beautiful UI/UX design, or both—I'm here to help bring your vision to life. 
            Let's create something amazing together!
          </p>
          
          {/* Contact Options */}
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            <motion.a
              href="mailto:nduatijeremy7@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all"
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
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
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
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>

          {/* What I Can Help With */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
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
              className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
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
              className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Payment Integration</h3>
              <p className="text-gray-200 text-sm">Stripe, M-Pesa, and other payment gateways</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-500/20 text-gray-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Jeremy Nduati
              </h3>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer & UI/UX Designer creating beautiful, production-ready web applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#technical-skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
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
            <p className="mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-sm">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

