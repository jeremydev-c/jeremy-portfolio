'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, ExternalLink, Calendar, TrendingUp, FileText, Download, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

function CourseraCertificatesModal({ certificates, isOpen, onClose }: { certificates: string[], isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-gray-900 rounded-2xl border border-purple-500/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gradient">All Coursera Certificates</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6">Click on any certificate to view it:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {certificates.map((pdf, index) => (
                    <motion.a
                      key={index}
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="card card-hover p-4 flex items-center gap-3 group"
                    >
                      <FileText className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">Certificate {index + 1}</h4>
                        <p className="text-gray-400 text-sm">Coursera Course</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Certificates() {
  const [courseraModalOpen, setCourseraModalOpen] = useState(false);
  
  const certificates = [
    {
      title: "10Alytics Global Data Hackathon 2025",
      issuer: "10Alytics",
      description: "Ranked #50 out of 1,995 participants in the global data hackathon. Built a comprehensive Fiscal Intelligence Dashboard with advanced ML models, interactive visualizations, and real-time risk scoring for African sovereign debt analysis.",
      date: "2025",
      type: "Hackathon Achievement",
      rank: "#50 / 1,995",
      icon: Trophy,
      color: "from-purple-500 to-indigo-600",
      badge: "Top 2.5%",
      link: "https://moonlit-starlight-601077.netlify.app",
      skills: ["Data Science", "Machine Learning", "Python", "Plotly", "Data Visualization", "ML Models", "Risk Scoring"],
      pdf: "/CERTIFICATES/Jeremy_Nduati_Hackathon_Certificate.pdf"
    },
    {
      title: "Kenya Science & Engineering Fair 2025",
      issuer: "Ministry of Education, Science and Technology – Kirinyaga County",
      description: "Awarded Certificate of Merit for placing 3rd in the Computer Science category at the Kirinyaga County Students’ Science and Engineering Fair 2025, demonstrating strong problem-solving, innovation, and applied computer science skills.",
      date: "March 2025",
      type: "Competition Achievement",
      rank: "3rd Place – County Level",
      icon: Trophy,
      color: "from-red-500 to-green-600",
      badge: "County Level • Position 3",
      skills: ["Computer Science", "Problem Solving", "Innovation", "Presentation", "Teamwork"],
      pdf: "/CERTIFICATES/Kenya_Science_Engineering_Fair_2025.pdf"
    },
    {
      title: "Moringa School Highschool Certificate",
      issuer: "Moringa School",
      description: "Highschool completion certificate from Moringa School, demonstrating academic excellence and foundational education.",
      date: "2025",
      type: "Education",
      rank: "Completed",
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      badge: "Education",
      skills: ["Academic Excellence", "Foundation Education"],
      pdf: "/CERTIFICATES/Moringa School - Highschool Cert 2025 -- Jeremy Nduati.pdf"
    },
    {
      title: "Coursera Certifications",
      issuer: "Coursera",
      description: "Multiple professional certifications from Coursera covering various aspects of software development, data science, and technology. Demonstrates commitment to continuous learning and professional development across multiple domains.",
      date: "2024-2025",
      type: "Professional Certification",
      rank: "7 Courses",
      icon: Award,
      color: "from-blue-500 to-indigo-600",
      badge: "Coursera",
      skills: ["Professional Development", "Online Learning", "Technology Skills", "Continuous Learning", "Data Science", "Software Development"],
      pdf: null,
      multiplePdfs: [
        "/CERTIFICATES/Coursera 2XL8MFKL2E3Y (1).pdf",
        "/CERTIFICATES/Coursera 6O13FZERW55P.pdf",
        "/CERTIFICATES/Coursera 79TZTF9IKQRU (1).pdf",
        "/CERTIFICATES/Coursera 7THPJ5KTSDGJ.pdf",
        "/CERTIFICATES/Coursera KPADPSJIIT7M.pdf",
        "/CERTIFICATES/Coursera L28JSI8M03D0.pdf",
        "/CERTIFICATES/Coursera PEV1EWXGGI9E.pdf"
      ]
    },
    {
      title: "Front-End Development Libraries",
      issuer: "FreeCodeCamp",
      description: "Certified in Front-End Development Libraries including React, Redux, and modern JavaScript frameworks. Demonstrates expertise in building interactive user interfaces.",
      date: "2024-2025",
      type: "Professional Certification",
      rank: "Certified",
      icon: Award,
      color: "from-green-500 to-emerald-600",
      badge: "FreeCodeCamp",
      skills: ["React", "Redux", "JavaScript", "Frontend Libraries", "UI Development"],
      pdf: "/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_front-end-development-libraries.pdf"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      description: "Certified in Responsive Web Design, mastering HTML5, CSS3, and modern web design principles. Skills include creating mobile-first, accessible, and visually appealing websites.",
      date: "2024-2025",
      type: "Professional Certification",
      rank: "Certified",
      icon: Award,
      color: "from-cyan-500 to-blue-600",
      badge: "FreeCodeCamp",
      skills: ["HTML5", "CSS3", "Responsive Design", "Web Design", "Accessibility"],
      pdf: "/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_responsive-web-design.pdf"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage (EA Electronic Arts)",
      description: "Completed a comprehensive software engineering job simulation with EA Electronic Arts through Forage. Demonstrated practical skills in game development, including feature proposals, game object classes, inventory systems, and live bugfixes. This hands-on experience showcases real-world software engineering practices.",
      date: "October 2025",
      type: "Job Simulation",
      rank: "Completed",
      icon: Award,
      color: "from-indigo-500 to-purple-600",
      badge: "Forage",
      skills: ["Software Engineering", "Game Development", "Feature Proposals", "Object-Oriented Programming", "Bug Fixing", "Inventory Systems", "EA Electronic Arts"],
      pdf: "/CERTIFICATES/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_68fa7c9cd4e60dd4d4dd7974_1761249350600_completion_certificate.pdf"
    },
    {
      title: "Full-Stack Development",
      issuer: "Self-Taught / Production Projects",
      description: "Demonstrated expertise through 4+ production-ready applications including EventVerse, ShopStar, Fashion Fit, and Fiscal Intelligence Dashboard. Mastered modern full-stack technologies and deployment practices.",
      date: "2024-2025",
      type: "Practical Experience",
      rank: "4+ Projects",
      icon: Award,
      color: "from-blue-500 to-cyan-600",
      badge: "Production Ready",
      skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Prisma", "Payment Integration", "Deployment"],
      pdf: null
    },
    {
      title: "Payment Integration Specialist",
      issuer: "Production Applications",
      description: "Successfully integrated dual payment gateways (Stripe & M-Pesa) in production applications, handling webhooks, payment callbacks, and secure transaction processing for thousands of users.",
      date: "2024-2025",
      type: "Technical Expertise",
      rank: "2 Gateways",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      badge: "Dual Integration",
      skills: ["Stripe", "M-Pesa", "Payment Webhooks", "STK Push", "Secure Transactions"],
      pdf: null
    },
    {
      title: "AI/ML Engineering",
      issuer: "Custom Solutions",
      description: "Developed custom AI solutions including computer vision models and ML analytics platforms. Achieved 95% cost reduction through innovative hybrid AI architectures while maintaining high accuracy.",
      date: "2024-2025",
      type: "Technical Achievement",
      rank: "95% Cost Reduction",
      icon: Award,
      color: "from-pink-500 to-rose-600",
      badge: "Innovation",
      skills: ["Machine Learning", "Computer Vision", "AI Optimization", "Custom ML Models", "Cost Optimization"],
      pdf: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 particle-bg">
      <Navigation activePage="certificates" />

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
              Achievements & Recognition
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Certificates & Achievements
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Recognized achievements, hackathon rankings, and demonstrated expertise across full-stack development, data science, and AI/ML engineering.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8+</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">#50</div>
                <div className="text-sm text-gray-400">Hackathon Rank</div>
                <div className="text-xs text-gray-500">Out of 1,995</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4+</div>
                <div className="text-sm text-gray-400">Production Apps</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-gray-400">Verified</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card card-hover glow-border overflow-hidden relative"
                >
                  {/* Badge */}
                  {cert.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cert.color} shadow-lg`}>
                        {cert.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Icon className="w-16 h-16 text-white relative z-10 drop-shadow-lg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-gray-800/50">
                    <div className="mb-4">
                      <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">{cert.type}</span>
                      <h3 className="text-2xl font-bold text-gradient mt-2 mb-1">{cert.title}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {cert.date} • {cert.issuer}
                      </p>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                    {/* Rank/Achievement */}
                    <div className="mb-6 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Achievement:</span>
                        <span className="text-purple-400 font-bold">{cert.rank}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Skills Demonstrated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-xs border border-gray-600/50 hover:border-cyan-400/50 hover:bg-gray-700/70 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-wrap relative z-20" style={{ pointerEvents: 'auto' }}>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2 flex-1 justify-center min-w-[140px]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                      {cert.multiplePdfs ? (
                        <button
                          onClick={() => setCourseraModalOpen(true)}
                          className="btn-primary flex items-center gap-2 flex-1 justify-center min-w-[140px]"
                        >
                          <FileText className="w-4 h-4" />
                          View All Certificates ({cert.multiplePdfs.length})
                        </button>
                      ) : cert.pdf ? (
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 flex-1 justify-center min-w-[140px] relative z-20 ${cert.link ? 'btn-secondary' : 'btn-primary'}`}
                          style={{ pointerEvents: 'auto', cursor: 'pointer', position: 'relative', zIndex: 20 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(cert.pdf, '_blank');
                          }}
                        >
                          <FileText className="w-4 h-4" />
                          View Certificate
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                Ready to See My Work?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Explore my projects to see these achievements in action.
              </p>
              <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
      
      {/* Coursera Certificates Modal */}
      <CourseraCertificatesModal
        certificates={certificates.find(c => c.multiplePdfs)?.multiplePdfs || []}
        isOpen={courseraModalOpen}
        onClose={() => setCourseraModalOpen(false)}
      />
    </div>
  );
}

