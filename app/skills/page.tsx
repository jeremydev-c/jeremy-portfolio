'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Next.js 14+', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'Prisma ORM', 'RESTful APIs', 'Webhooks', 'JWT/OAuth'],
    },
    {
      title: 'Payment Integration',
      skills: ['Stripe', 'M-Pesa', 'Paystack', 'Payment Webhooks', 'STK Push', 'Multi-currency'],
    },
    {
      title: 'AI & Machine Learning',
      skills: ['OpenAI API', 'Computer Vision', 'Custom ML Models', 'Data Analysis', 'Plotly', 'Prompt Engineering'],
    },
    {
      title: 'Security',
      skills: ['JWT Authentication', 'OAuth 2.0', 'Password Hashing', 'Input Validation', 'Type Safety', 'Secure API Design'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git & GitHub', 'Vercel', 'Expo', 'MongoDB Atlas', 'Cloudinary', 'ESLint', 'CI/CD'],
    },
    {
      title: 'UI/UX Design',
      skills: ['User Interface Design', 'Wireframing', 'Prototyping', 'Figma', 'Responsive Design', 'Accessibility (WCAG)'],
    },
    {
      title: 'AI-Assisted Development',
      skills: ['ChatGPT', 'Claude AI', 'GitHub Copilot', 'Cursor AI', 'AI Code Generation', 'AI Debugging'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="skills" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Technical Expertise</span>
            <h1 className="section-title">Skills</h1>
            <p className="text-carbon-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              A comprehensive toolkit spanning frontend, backend, design, AI, and modern development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-sand-500 uppercase tracking-wider mb-3 sm:mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-carbon-300 text-xs sm:text-sm flex gap-2">
                      <span className="text-carbon-600 shrink-0">+</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why me */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-16"
          >
            <div className="card max-w-4xl mx-auto sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">Why work with me?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: 'Full-stack ownership', desc: 'Design, code, deploy — I handle every layer.' },
                  { title: 'Speed without shortcuts', desc: 'AI-assisted workflow that accelerates without cutting corners.' },
                  { title: 'Innovation focus', desc: 'Custom CV AI, hybrid architectures, 95% cost reductions.' },
                  { title: 'Certified & verified', desc: '8+ certificates from Coursera, FreeCodeCamp, Forage, and more.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">{item.title}</h4>
                    <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/contact" className="btn-primary gap-2">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
