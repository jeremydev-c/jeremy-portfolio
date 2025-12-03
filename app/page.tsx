'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Sparkles, Zap, Target, TrendingUp, Award, Rocket, Heart, Lightbulb, Cloud } from 'lucide-react';
import Link from 'next/link';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <a href="#main-heading" className="skip-to-main">
        Skip to main content
      </a>
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full glass-effect-strong z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/10"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gradient"
            aria-label="Jeremy Nduati - Home"
          >
            Jeremy Nduati
          </Link>
          <div className="hidden md:flex gap-6" role="menubar">
            <Link href="/#about" className="nav-link" role="menuitem" aria-label="About section">About</Link>
            <Link href="/projects" className="nav-link" role="menuitem" aria-label="View projects">Projects</Link>
            <Link href="/certificates" className="nav-link" role="menuitem" aria-label="View certificates">Certificates</Link>
            <Link href="/skills" className="nav-link" role="menuitem" aria-label="View skills">Skills</Link>
            <Link href="/testimonials" className="nav-link" role="menuitem" aria-label="View testimonials">Testimonials</Link>
            <Link href="/contact" className="nav-link" role="menuitem" aria-label="Contact me">Contact</Link>
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        aria-label="Hero section"
      >
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient" id="main-heading">
              Full-Stack Developer, UI/UX Designer & Portfolio Builder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Building beautiful, modern, and production-ready web applications through innovative design and robust development
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Specializing in Next.js, TypeScript, payment integrations (Stripe & M-Pesa), and creating exceptional user experiences. 
              Leveraging AI tools like ChatGPT, Claude, and GitHub Copilot to accelerate development and deliver exceptional results. 
              At 15 years old, I'm already building enterprise-grade applications that solve real-world problems.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mb-8" role="group" aria-label="Call to action buttons">
              <Link 
                href="/projects" 
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="btn-secondary"
                aria-label="Get in touch with me"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-center mt-12">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-400">Production Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-pink-400">#50</div>
                <div className="text-sm text-gray-400">Global Hackathon Rank</div>
                <div className="text-xs text-gray-500">Out of 1,995 (10Alytics)</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">3rd</div>
                <div className="text-sm text-gray-400">County CS Fair Position</div>
                <div className="text-xs text-gray-500">Computer Science Category</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">8+</div>
                <div className="text-sm text-gray-400">Certificates & Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-4 relative overflow-hidden"
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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card card-hover p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">The Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At just <span className="text-purple-400 font-semibold">15 years old</span>, I'm already building enterprise-grade applications that solve real-world problems. 
                  What started as curiosity about how websites work has evolved into a passion for creating exceptional digital experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a full-stack developer, creative web designer, and portfolio builder specializing in modern UI/UX design, visual design, and user-centered interfaces. 
                  My work combines aesthetic excellence with functional design principles, creating beautiful and intuitive web experiences. I also build custom portfolios for professionals looking to showcase their work effectively.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I leverage cutting-edge <span className="text-purple-400 font-semibold">AI tools like ChatGPT, Claude, and GitHub Copilot</span> to accelerate development, 
                  solve complex problems faster, and focus on what matters most—creating exceptional user experiences. AI doesn't replace my skills; it amplifies them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My unique strength lies in both <span className="text-pink-400 font-semibold">design and implementation</span>—I don't just create beautiful designs, 
                  I bring them to life with code. This end-to-end capability ensures pixel-perfect execution, secure backend architecture, and seamless user experiences.
                </p>
              </div>

              {/* Fun Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card card-hover p-6"
              >
                <h4 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Fun Facts
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1">🏆</span>
                    <span>Ranked <span className="text-cyan-400 font-semibold">#50 out of 1,995</span> in 10Alytics Global Data Hackathon 2025</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-400 mt-1">🎖️</span>
                    <span>Placed <span className="text-green-400 font-semibold">3rd in Computer Science</span> at the Kirinyaga County Science & Engineering Fair 2025</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-400 mt-1">⚡</span>
                    <span>Reduced AI operational costs by <span className="text-cyan-400 font-semibold">95%</span> through custom solutions</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">🚀</span>
                    <span>Built <span className="text-purple-400 font-semibold">4+ production apps</span> including ML analytics platforms</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-yellow-400 mt-1">💡</span>
                    <span>Mastered <span className="text-pink-400 font-semibold">50+ technologies</span> across full-stack, ML, and data science</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-400 mt-1">🎯</span>
                    <span>Every project ships <span className="text-green-400 font-semibold">100% production-ready</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">📊</span>
                    <span>Expertise in <span className="text-blue-400 font-semibold">data science, ML models, and interactive dashboards</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-indigo-400 mt-1">🏆</span>
                    <span><span className="text-indigo-400 font-semibold">8+ verified certificates</span> from Coursera, FreeCodeCamp, Forage, and more</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1">🤖</span>
                    <span>Leveraging <span className="text-purple-400 font-semibold">AI tools (ChatGPT, Claude, Copilot)</span> to accelerate development and enhance creativity</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right: Values & Principles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Core Values */}
              <div className="card card-hover p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <Heart className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">Core Values</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Target className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Excellence First</h4>
                      <p className="text-gray-400 text-sm">Every line of code, every design decision, every interaction is crafted with precision and purpose.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-500/10 rounded-lg">
                      <Zap className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Innovation Driven</h4>
                      <p className="text-gray-400 text-sm">Pushing boundaries with custom AI solutions, hybrid architectures, and cutting-edge technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Rocket className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Production Ready</h4>
                      <p className="text-gray-400 text-sm">No prototypes, no MVPs—only scalable, secure, and deployment-ready solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Continuous Learning</h4>
                      <p className="text-gray-400 text-sm">Always exploring new technologies, patterns, and best practices to stay ahead of the curve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Cloud className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">DevOps Excellence</h4>
                      <p className="text-gray-400 text-sm">Managing deployments, CI/CD pipelines, domain configurations, and ensuring production-ready infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                      <Award className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Certified Professional</h4>
                      <p className="text-gray-400 text-sm">8+ verified certificates from top platforms including Coursera, FreeCodeCamp, Forage (EA), and academic institutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI-Powered Development</h4>
                      <p className="text-gray-400 text-sm">Leveraging ChatGPT, Claude, GitHub Copilot, and Cursor AI to accelerate development, enhance creativity, and deliver exceptional results faster.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card card-hover p-6"
              >
                <h4 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  What I Do
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg border border-purple-500/20">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-sm text-gray-300 font-semibold">UI/UX Design</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-500/10 to-transparent rounded-lg border border-pink-500/20">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="text-sm text-gray-300 font-semibold">Full-Stack Dev</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/20">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="text-sm text-gray-300 font-semibold">AI Integration</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/20">
                    <div className="text-2xl mb-2">💳</div>
                    <div className="text-sm text-gray-300 font-semibold">Payments</div>
                  </div>
                </div>
              </motion.div>
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
