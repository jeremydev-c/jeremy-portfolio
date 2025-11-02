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
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
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

  const designSkills = [
    { 
      name: "UI/UX Design", 
      items: [
        "User Interface Design", "User Experience Design", "Wireframing", 
        "Prototyping", "User Research", "Usability Testing", "Information Architecture",
        "Interaction Design", "Design Systems"
      ] 
    },
    { 
      name: "Visual Design", 
      items: [
        "Color Theory", "Typography", "Layout & Composition", "Visual Hierarchy",
        "Grid Systems", "Spacing & Rhythm", "Icon Design", "Illustration",
        "Brand Identity", "Design Principles"
      ] 
    },
    { 
      name: "Modern Design Trends", 
      items: [
        "Dark Theme Design", "Gradient Design", "Glassmorphism", "Neumorphism",
        "Micro-interactions", "Smooth Animations", "Responsive Design", 
        "Mobile-First Design", "Accessibility (WCAG)"
      ] 
    },
    { 
      name: "Design Tools", 
      items: [
        "Figma", "Adobe XD", "Sketch", "Framer", "Photoshop", "Illustrator",
        "Tailwind CSS", "CSS Animations", "Framer Motion"
      ] 
    },
    { 
      name: "Implementation", 
      items: [
        "HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript",
        "Responsive CSS", "CSS Grid", "Flexbox", "Animation Libraries"
      ] 
    },
    { 
      name: "Design Process", 
      items: [
        "Design Thinking", "Research & Analysis", "Ideation", "Design Iteration",
        "User Testing", "Design Handoff", "Design Documentation", "Collaboration"
      ] 
    },
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
            <a href="#projects" className="text-gray-300 hover:text-pink-400 transition-colors font-medium">Design Work</a>
            <a href="#design-skills" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Design Skills</a>
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
              Web Designer & UI/UX Specialist
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Creating beautiful, modern, and user-centered web experiences through innovative design
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent text-purple-400 rounded-lg font-semibold border-2 border-purple-400 hover:bg-purple-400/10 transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
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
              I'm a creative web designer specializing in modern UI/UX design, visual design, and user-centered interfaces. 
              My work combines aesthetic excellence with functional design principles, creating beautiful and intuitive 
              web experiences that engage users and drive results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in color theory, typography, layout design, and interactive animations, I transform ideas into 
              stunning visual realities. I excel at creating responsive designs, modern dark themes, and engaging user interfaces 
              that work flawlessly across all devices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My unique strength lies in both design and implementation—I don't just create beautiful designs, I bring them to 
              life with code. This end-to-end capability ensures pixel-perfect execution and seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Design Portfolio
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
                    <h4 className="font-semibold text-purple-400 mb-3">Design Highlights:</h4>
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
                    <h4 className="font-semibold text-cyan-400 mb-3">Design Tools & Tech:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

      {/* Design Philosophy Section */}
      <section className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Design Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Visual Excellence</h3>
              <p className="text-gray-300">
                Creating stunning visual designs that capture attention and create memorable user experiences through color, typography, and composition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl p-6 border border-pink-500/20"
            >
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">User-Centered</h3>
              <p className="text-gray-300">
                Designing with users in mind, ensuring every interface is intuitive, accessible, and provides a seamless experience across all devices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Modern & Responsive</h3>
              <p className="text-gray-300">
                Leveraging the latest design trends and technologies to create responsive, fast, and beautiful web experiences that work everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Skills Section */}
      <section id="design-skills" className="py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Design Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {skill.name}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2 hover:text-purple-400 transition-colors">
                      <span className="text-purple-400">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            What People Say
          </h2>
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
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-200 mb-12">
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:nduatijeremy7@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/jeremydev-c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeremydev-c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-500/20 text-gray-400 py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Jeremy Nduati. All rights reserved.</p>
          <p className="mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

