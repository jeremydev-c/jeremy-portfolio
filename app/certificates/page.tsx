'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, X } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

function CourseraCertificatesModal({
  certificates,
  isOpen,
  onClose,
}: {
  certificates: string[];
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <div className="bg-carbon-900 rounded-lg border border-carbon-700/60 shadow-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto pointer-events-auto">
              <div className="sticky top-0 bg-carbon-900/95 backdrop-blur-sm border-b border-carbon-700/60 p-4 sm:p-5 flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-bold text-white">Coursera Certificates</h3>
                <button onClick={onClose} className="p-1.5 hover:bg-carbon-800 rounded transition-colors" aria-label="Close">
                  <X className="w-5 h-5 text-carbon-400" />
                </button>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((pdf, index) => (
                  <a
                    key={index}
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-3 sm:p-4 flex items-center gap-3 group"
                  >
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-sand-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-xs sm:text-sm font-medium">Certificate {index + 1}</h4>
                      <p className="text-carbon-500 text-[10px] sm:text-xs">Coursera</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-carbon-600 group-hover:text-sand-400 transition-colors shrink-0" />
                  </a>
                ))}
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
      title: '10Alytics Global Data Hackathon 2025',
      issuer: '10Alytics',
      type: 'Hackathon',
      rank: '#50 / 1,995',
      badge: 'Top 2.5%',
      skills: ['Data Science', 'Machine Learning', 'Python', 'Plotly'],
      link: 'https://moonlit-starlight-601077.netlify.app',
      pdf: '/CERTIFICATES/Jeremy_Nduati_Hackathon_Certificate.pdf',
    },
    {
      title: 'Kenya Science & Engineering Fair 2025',
      issuer: 'Ministry of Education — Kirinyaga County',
      type: 'Competition',
      rank: '3rd Place',
      badge: 'County Level',
      skills: ['Computer Science', 'Problem Solving', 'Innovation'],
      pdf: '/CERTIFICATES/Kenya_Science_Engineering_Fair_2025.pdf',
    },
    {
      title: 'Moringa School Certificate',
      issuer: 'Moringa School',
      type: 'Education',
      rank: 'Completed',
      skills: ['Academic Excellence'],
      pdf: '/CERTIFICATES/Moringa School - Highschool Cert 2025 -- Jeremy Nduati.pdf',
    },
    {
      title: 'Coursera Certifications (7)',
      issuer: 'Coursera',
      type: 'Professional',
      rank: '7 Courses',
      badge: 'Coursera',
      skills: ['Software Development', 'Data Science', 'Continuous Learning'],
      multiplePdfs: [
        '/CERTIFICATES/Coursera 2XL8MFKL2E3Y (1).pdf',
        '/CERTIFICATES/Coursera 6O13FZERW55P.pdf',
        '/CERTIFICATES/Coursera 79TZTF9IKQRU (1).pdf',
        '/CERTIFICATES/Coursera 7THPJ5KTSDGJ.pdf',
        '/CERTIFICATES/Coursera KPADPSJIIT7M.pdf',
        '/CERTIFICATES/Coursera L28JSI8M03D0.pdf',
        '/CERTIFICATES/Coursera PEV1EWXGGI9E.pdf',
      ],
    },
    {
      title: 'Front-End Development Libraries',
      issuer: 'FreeCodeCamp',
      type: 'Certification',
      rank: 'Certified',
      skills: ['React', 'Redux', 'JavaScript'],
      pdf: '/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_front-end-development-libraries.pdf',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      type: 'Certification',
      rank: 'Certified',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      pdf: '/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_responsive-web-design.pdf',
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'Forage (EA Electronic Arts)',
      type: 'Simulation',
      rank: 'Completed',
      skills: ['Software Engineering', 'Game Dev', 'OOP', 'Bug Fixing'],
      pdf: '/CERTIFICATES/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_68fa7c9cd4e60dd4d4dd7974_1761249350600_completion_certificate.pdf',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="certificates" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Achievements</span>
            <h1 className="section-title">Certificates</h1>
            <p className="text-carbon-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
              Verified achievements, hackathon rankings, and professional certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] text-sand-500 uppercase tracking-[0.2em] font-semibold">
                    {cert.type}
                  </span>
                  {cert.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] bg-sand-500/10 border border-sand-500/20 text-sand-400 font-semibold whitespace-nowrap shrink-0">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-sm sm:text-base mb-1 leading-snug">{cert.title}</h3>
                <p className="text-carbon-500 text-[10px] sm:text-xs mb-3 sm:mb-4">{cert.issuer}</p>

                <div className="flex items-center justify-between mb-3 sm:mb-4 bg-carbon-800/40 border border-carbon-700/30 rounded p-2.5 sm:p-3">
                  <span className="text-carbon-500 text-[10px] sm:text-xs">Achievement</span>
                  <span className="text-white text-xs sm:text-sm font-semibold">{cert.rank}</span>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-carbon-800/60 border border-carbon-700/40 text-carbon-300 rounded text-[9px] sm:text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-primary gap-1.5 text-xs flex-1 justify-center">
                      <ExternalLink className="w-3.5 h-3.5" /> View Project
                    </a>
                  )}
                  {cert.multiplePdfs ? (
                    <button
                      onClick={() => setCourseraModalOpen(true)}
                      className="btn-primary gap-1.5 text-xs flex-1 justify-center"
                    >
                      <FileText className="w-3.5 h-3.5" /> View All ({cert.multiplePdfs.length})
                    </button>
                  ) : cert.pdf ? (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`gap-1.5 text-xs flex-1 justify-center ${cert.link ? 'btn-secondary' : 'btn-primary'}`}
                    >
                      <FileText className="w-3.5 h-3.5" /> View Certificate
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/projects" className="btn-secondary gap-2">
              View Projects
            </Link>
          </div>
        </div>
      </section>
      <ScrollToTop />

      <CourseraCertificatesModal
        certificates={certificates.find((c) => c.multiplePdfs)?.multiplePdfs || []}
        isOpen={courseraModalOpen}
        onClose={() => setCourseraModalOpen(false)}
      />
    </div>
  );
}
