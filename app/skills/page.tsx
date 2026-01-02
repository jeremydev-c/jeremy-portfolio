'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Code, Database, Zap, Shield, Smartphone, Sparkles, Github, Globe, Server, Lock, FileCode, Palette, Layers, Terminal, Cpu, Cloud, Smartphone as Mobile, Mail, FileImage, Calendar, QrCode, GitBranch, CheckCircle, Settings, Eye, Layout, Type, Grid, Layers as LayersIcon, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

// Technology icons mapping
const techIcons = [
  { name: 'HTML5', icon: FileCode, color: '#e34c26' },
  { name: 'CSS3', icon: Palette, color: '#264de4' },
  { name: 'JavaScript', icon: Code, color: '#f7df1e' },
  { name: 'TypeScript', icon: FileCode, color: '#3178c6' },
  { name: 'React', icon: Layers, color: '#61dafb' },
  { name: 'Next.js', icon: Globe, color: '#000000' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Python', icon: Terminal, color: '#3776ab' },
  { name: 'MongoDB', icon: Database, color: '#47a248' },
  { name: 'Prisma', icon: Database, color: '#2d3748' },
  { name: 'Stripe', icon: Zap, color: '#635bff' },
  { name: 'M-Pesa', icon: Mobile, color: '#00a859' },
  { name: 'JWT', icon: Lock, color: '#000000' },
  { name: 'OAuth', icon: Shield, color: '#4285f4' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
  { name: 'GitHub', icon: Github, color: '#181717' },
  { name: 'Vercel', icon: Cloud, color: '#000000' },
  { name: 'Figma', icon: Layout, color: '#f24e1e' },
  { name: 'Tailwind', icon: Palette, color: '#06b6d4' },
  { name: 'Framer', icon: Sparkles, color: '#0055ff' },
  { name: 'QR Code', icon: QrCode, color: '#000000' },
  { name: 'Email', icon: Mail, color: '#ea4335' },
  { name: 'Image', icon: FileImage, color: '#4285f4' },
  { name: 'Calendar', icon: Calendar, color: '#4285f4' },
  { name: 'UI/UX', icon: Eye, color: '#9333ea' },
  { name: 'Design', icon: LayersIcon, color: '#ec4899' },
];

export default function Skills() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    setMounted(true);
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Generate floating tech icons - only on client side
  const floatingIcons = useMemo(() => {
    if (!mounted || prefersReducedMotion) return [];

    // Reduce visual noise / GPU load on smaller screens
    const count = dimensions.width < 640 ? 14 : dimensions.width < 1024 ? 22 : 30;

    return Array.from({ length: count }, (_, i) => {
      const tech = techIcons[Math.floor(Math.random() * techIcons.length)];
      return {
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        duration: Math.random() * 8 + 6, // 6 to 14 seconds
        delay: Math.random() * 5, // 0 to 5 seconds
        size: Math.random() * 20 + 30, // 30 to 50px
        tech: tech,
        rotation: Math.random() * 360,
        floatY: Math.random() * 200 - 100, // -100 to 100px vertical movement
        floatX: Math.random() * 200 - 100, // -100 to 100px horizontal movement
      };
    });
  }, [dimensions, mounted, prefersReducedMotion]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Next.js 14+", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "Server Components", "Client Components"]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "purple",
      skills: ["Python", "Node.js", "MongoDB", "Prisma ORM", "RESTful APIs", "Webhooks", "Authentication (JWT, OAuth)", "API Routes", "Server Actions"]
    },
    {
      title: "Payment Integration",
      icon: Zap,
      color: "green",
      skills: ["Stripe Integration", "M-Pesa Integration", "Payment Webhooks", "STK Push", "Payment Status Polling", "Secure Transactions", "Multi-currency Support"]
    },
    {
      title: "Security & Best Practices",
      icon: Shield,
      color: "cyan",
      skills: ["JWT Authentication", "OAuth 2.0", "Password Hashing", "Input Validation", "Type Safety", "Error Handling", "Environment Variables", "Secure API Design"]
    },
    {
      title: "Additional Technologies",
      icon: Smartphone,
      color: "pink",
      skills: ["QR Code Generation", "Calendar Integration (.ics)", "File Generation", "Real-time Updates", "Form Validation (Zod)", "Email Services", "Image Processing"]
    },
    {
      title: "Development Tools",
      icon: Zap,
      color: "yellow",
      skills: ["Git & GitHub", "Vercel Deployment", "MongoDB Atlas", "Prisma Studio", "TypeScript", "ESLint", "Postman", "VS Code"]
    },
    {
      title: "AI-Assisted Development",
      icon: Sparkles,
      color: "purple",
      skills: ["ChatGPT", "Claude AI", "GitHub Copilot", "Cursor AI", "AI Code Generation", "Prompt Engineering", "AI-Powered Debugging", "AI Design Tools", "AI Content Generation"]
    },
    {
      title: "Data Science & ML",
      icon: TrendingUp,
      color: "indigo",
      skills: ["Python", "Machine Learning Models", "Data Analysis", "Plotly", "Risk Scoring", "Feature Importance Analysis", "Scenario Analysis", "Statistical Modeling", "Data Visualization"]
    },
    {
      title: "DevOps & Deployment",
      icon: Cloud,
      color: "green",
      skills: ["Vercel Deployment", "Git & GitHub", "CI/CD Pipelines", "Environment Configuration", "Domain Management", "SSL/HTTPS Setup", "Production Deployment", "Performance Optimization", "Monitoring & Analytics"]
    },
    {
      title: "UI/UX Design",
      icon: Sparkles,
      color: "purple",
      skills: ["User Interface Design", "User Experience Design", "Wireframing", "Prototyping", "User Research", "Usability Testing", "Information Architecture", "Interaction Design", "Design Systems"]
    },
    {
      title: "Visual Design",
      icon: Sparkles,
      color: "pink",
      skills: ["Color Theory", "Typography", "Layout & Composition", "Visual Hierarchy", "Grid Systems", "Spacing & Rhythm", "Icon Design", "Brand Identity", "Design Principles"]
    },
    {
      title: "Design Tools & Trends",
      icon: Sparkles,
      color: "cyan",
      skills: ["Figma", "Adobe XD", "Sketch", "Framer", "Dark Theme Design", "Gradient Design", "Glassmorphism", "Micro-interactions", "Responsive Design", "Accessibility (WCAG)"]
    }
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      blue: {
        gradient: "from-blue-400 to-cyan-400",
        border: "border-blue-500/20 hover:border-blue-500/40",
        shadow: "hover:shadow-blue-500/10",
        text: "text-blue-400"
      },
      purple: {
        gradient: "from-purple-400 to-pink-400",
        border: "border-purple-500/20 hover:border-purple-500/40",
        shadow: "hover:shadow-purple-500/10",
        text: "text-purple-400"
      },
      green: {
        gradient: "from-green-400 to-emerald-400",
        border: "border-green-500/20 hover:border-green-500/40",
        shadow: "hover:shadow-green-500/10",
        text: "text-green-400"
      },
      cyan: {
        gradient: "from-cyan-400 to-blue-400",
        border: "border-cyan-500/20 hover:border-cyan-500/40",
        shadow: "hover:shadow-cyan-500/10",
        text: "text-cyan-400"
      },
      pink: {
        gradient: "from-pink-400 to-rose-400",
        border: "border-pink-500/20 hover:border-pink-500/40",
        shadow: "hover:shadow-pink-500/10",
        text: "text-pink-400"
      },
      yellow: {
        gradient: "from-yellow-400 to-orange-400",
        border: "border-yellow-500/20 hover:border-yellow-500/40",
        shadow: "hover:shadow-yellow-500/10",
        text: "text-yellow-400"
      }
    };
    return classes[color as keyof typeof classes] || classes.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg relative overflow-hidden">
      {/* Floating Technology Icons - Only render on client */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {floatingIcons.map((icon) => {
          const IconComponent = icon.tech.icon;
          return (
            <motion.div
              key={icon.id}
              className="absolute"
              initial={{
                x: icon.x,
                y: icon.y,
                opacity: 0,
                scale: 0,
                rotate: icon.rotation,
              }}
              animate={{
                x: [icon.x, icon.x + icon.floatX, icon.x],
                y: [icon.y, icon.y + icon.floatY, icon.y],
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1, 0.8],
                rotate: [icon.rotation, icon.rotation + 360, icon.rotation],
              }}
              transition={{
                duration: icon.duration,
                repeat: Infinity,
                delay: icon.delay,
                ease: "easeInOut",
              }}
              style={{
                width: icon.size,
                height: icon.size,
                color: icon.tech.color,
              }}
            >
              <IconComponent 
                className="w-full h-full drop-shadow-lg" 
                style={{ 
                  filter: `drop-shadow(0 0 10px ${icon.tech.color}40)`,
                }}
              />
            </motion.div>
          );
        })}
        </div>
      )}

      <Navigation activePage="skills" />

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
              Technical Mastery
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive toolkit spanning frontend, backend, design, and modern development practices. Continuously learning and mastering new technologies.
            </p>
            
            {/* Skill Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10</div>
                <div className="text-sm text-gray-400">Skill Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">#50</div>
                <div className="text-sm text-gray-400">Hackathon Rank</div>
                <div className="text-xs text-gray-500">Out of 1,995</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-gray-400">Production Ready</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card card-hover ${colors.border} ${colors.shadow}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center gap-2 transition-colors group">
                        <span className={colors.text}>✦</span>
                        <span className="group-hover:text-purple-400">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="card card-hover max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-6 text-center">
                Why Choose Me?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <span>🎯</span> Full-Stack Expertise
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    I don't just code—I architect entire systems. From database design to API development, 
                    from pixel-perfect UI to scalable infrastructure, I handle every layer of the stack.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                    <span>⚡</span> Speed & Quality
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    At 15, I've learned to work efficiently without compromising quality. 
                    Every project is built with production standards, comprehensive testing, and clean code.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <span>🚀</span> Innovation First
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in cutting-edge solutions—AI/ML integration, custom computer vision, 
                    and hybrid architectures that reduce costs while maintaining performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <span>💎</span> Design + Code
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Unique ability to both design beautiful interfaces and implement them flawlessly. 
                    No handoffs, no miscommunication—just perfect execution from concept to deployment.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                    <span>🏆</span> Certified & Verified
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Backed by 8+ verified certificates from Coursera, FreeCodeCamp, Forage (EA), academic institutions, 
                    and competition awards like the Kenya Science & Engineering Fair. Continuous learning ensures I stay 
                    current with industry best practices.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                    <span>📊</span> Data Science Expertise
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ranked #50 out of 1,995 in global data hackathon. Expert in ML models, data visualization, 
                    and transforming complex data into actionable insights.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <span>🤖</span> AI-Assisted Development
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    I leverage cutting-edge AI tools (ChatGPT, Claude, GitHub Copilot, Cursor) to accelerate development, 
                    solve complex problems faster, and focus on what matters most—creating exceptional user experiences.
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

