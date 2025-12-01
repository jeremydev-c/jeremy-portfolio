'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "E-Commerce Director",
      initials: "SM",
      gradient: "from-purple-500 to-pink-500",
      quote: "Jeremy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and production-ready implementation saved us months of development time. Highly recommended!"
    },
    {
      name: "David Chen",
      role: "CTO, Tech Innovations",
      initials: "DC",
      gradient: "from-pink-500 to-cyan-500",
      quote: "Working with Jeremy was a game-changer. The custom AI system he built reduced our operational costs by 95% while maintaining excellent accuracy. His technical expertise and innovative solutions are truly impressive."
    },
    {
      name: "Alex Johnson",
      role: "Senior Developer",
      initials: "AJ",
      gradient: "from-cyan-500 to-purple-500",
      quote: "Jeremy's full-stack capabilities are outstanding. He delivered both frontend and backend with comprehensive testing, proper documentation, and seamless deployment. A true professional who delivers quality work on time."
    },
    {
      name: "Maria Rodriguez",
      role: "Security Lead",
      initials: "MR",
      gradient: "from-purple-500 to-cyan-500",
      quote: "The attention to security and best practices in Jeremy's code is remarkable. He implemented OAuth, JWT authentication, and followed industry standards throughout. Our team learned a lot from reviewing his work."
    },
    {
      name: "Kevin Thompson",
      role: "Product Manager",
      initials: "KT",
      gradient: "from-pink-500 to-purple-500",
      quote: "Jeremy built a complex AI-powered application with internationalization support for 11 languages. The architecture is scalable, the code is clean, and the user experience is exceptional. Very impressed!"
    },
    {
      name: "Lisa Wang",
      role: "Startup Founder",
      initials: "LW",
      gradient: "from-cyan-500 to-pink-500",
      quote: "As a startup founder, I needed someone who could build production-ready applications fast. Jeremy delivered exactly that - clean code, comprehensive testing, and deployment-ready solutions. Would definitely work with again!"
    },
    {
      name: "10Alytics Hackathon",
      role: "Global Data Hackathon 2025",
      initials: "10A",
      gradient: "from-purple-500 to-indigo-500",
      quote: "Jeremy's Fiscal Intelligence Dashboard demonstrated exceptional data science and ML engineering skills. Ranking #50 out of 1,995 participants showcases his ability to build sophisticated analytics platforms with advanced machine learning models and interactive visualizations."
    },
    {
      name: "Kenya Science & Engineering Fair",
      role: "Kirinyaga County – Computer Science Category",
      initials: "KS",
      gradient: "from-green-500 to-red-500",
      quote: "Jeremy presented a Computer Science project that earned 3rd place at the county level, demonstrating strong problem-solving, creativity, and clear communication of complex technical ideas to a non-technical judging panel."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect-strong z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Jeremy Nduati
          </Link>
          <div className="flex gap-6">
            <Link href="/#about" className="nav-link">About</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/certificates" className="nav-link">Certificates</Link>
            <Link href="/skills" className="nav-link">Skills</Link>
            <Link href="/testimonials" className="nav-link text-purple-400">Testimonials</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

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
              className="text-sm md:text-base text-purple-400 mb-4 uppercase tracking-widest font-semibold"
            >
              Client Testimonials
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
              What People Say
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Don't just take my word for it—here's what clients, collaborators, and platforms have to say about working with me.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8</div>
                <div className="text-sm text-gray-400">Testimonials</div>
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
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5.0</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover glow-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="card card-hover max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-6 text-center">
                Trusted By Industry Leaders
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="font-semibold text-purple-400 mb-2">Enterprise Clients</h4>
                  <p className="text-sm text-gray-300">
                    Building solutions for companies processing thousands of transactions daily
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold text-pink-400 mb-2">Startups</h4>
                  <p className="text-sm text-gray-300">
                    Helping founders launch MVPs and scale to production-ready platforms
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💼</div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Agencies</h4>
                  <p className="text-sm text-gray-300">
                    Collaborating with teams to deliver exceptional digital experiences
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Certified Platforms</h4>
                  <p className="text-sm text-gray-300">
                    Recognized by Coursera, FreeCodeCamp, Forage (EA), and academic institutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

