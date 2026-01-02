'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

// Rotating compelling messages component
function AnimatedTextRotator({ reducedMotion }: { reducedMotion: boolean }) {
  const messages = [
    {
      main: "Building the Future",
      sub: "One Line of Code at a Time",
      tagline: "Transforming Ideas Into Production-Ready Applications"
    },
    {
      main: "Crafting Digital Excellence",
      sub: "Where Innovation Meets Design",
      tagline: "Enterprise-Grade Solutions That Scale"
    },
    {
      main: "15 Years Old",
      sub: "Building What Others Dream Of",
      tagline: "Age is Just a Number, Excellence is Everything"
    },
    {
      main: "Full-Stack Mastery",
      sub: "From Concept to Deployment",
      tagline: "Payment Gateways • AI/ML • Modern Architecture"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 1400); // Change message every 1.4 seconds

    return () => clearInterval(interval);
  }, [messages.length, reducedMotion]);

  const active = reducedMotion ? messages[0] : messages[currentIndex];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={reducedMotion ? 'static' : currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
          >
            {active.main}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2"
          >
            {active.sub}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            {active.tagline}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    // Show on every reload
    setIsLoading(true);
    setProgress(0);
    
    // Long enough to actually enjoy the intro + read everything
    const duration = prefersReducedMotion ? 2500 : 5200;

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, duration + 250);

    return () => {
      window.clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]); // run on mount

  // Generate particle positions - only on client side
  const particles = useMemo(() => {
    if (!mounted || prefersReducedMotion) return [];
    const colors = ['rgba(147, 51, 234, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(6, 182, 212, 0.4)'];
    const count = dimensions.width < 640 ? 8 : 14;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [dimensions, mounted]);

  // Generate tech icon positions - only on client side
  const techIcons = useMemo(() => {
    if (!mounted || prefersReducedMotion) return [];
    return ['💻', '🎨', '⚡', '🚀', '🔒', '📱'].map((icon, i) => ({
      id: i,
      icon: icon,
      x: Math.random() * dimensions.width,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 3,
    }));
  }, [dimensions, mounted]);

  // Don't render anything if not loading or not mounted (prevents hydration mismatch)
  if (!mounted || !isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden"
          role="status"
          aria-label="Loading"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Premium mark */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="relative">
                <motion.div
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[1px] shadow-2xl shadow-purple-500/30"
                  animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
                  transition={prefersReducedMotion ? {} : { duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-3xl bg-gray-900/70 backdrop-blur flex items-center justify-center border border-white/10">
                    <span className="text-white font-bold text-2xl">JN</span>
                  </div>
                </motion.div>
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-2xl -z-10" />
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-bold text-gradient">
                Jeremy Nduati
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Full-Stack • UI/UX • Payments • AI/ML
              </p>
            </motion.div>

            {/* Powerful Text - Rotating Messages */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mb-10 min-h-[170px]"
            >
              <AnimatedTextRotator reducedMotion={prefersReducedMotion} />
            </motion.div>

            {/* Impressive Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mb-12"
            >
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", bounce: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-sm md:text-base text-gray-300">Enterprise Projects</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">95%</div>
                  <div className="text-sm md:text-base text-gray-300">Cost Reduction</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", bounce: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-sm md:text-base text-gray-300">Production Ready</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300"
                >
                  Full-Stack Developer
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300"
                >
                  UI/UX Designer
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300"
                >
                  AI Engineer
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300"
                >
                  Payment Integration Expert
                </motion.span>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-72 md:w-96 mx-auto"
            >
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden shadow-lg border border-gray-600/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative transition-[width] duration-150"
                  style={{
                    width: `${Math.round(progress * 100)}%`,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-2 mt-4"
              >
                <p className="text-xs md:text-sm text-gray-300 font-medium">
                  Loading… {Math.min(100, Math.round(progress * 100))}%
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Particles - Enhanced */}
          {mounted && particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, ${particle.color}, transparent)`,
              }}
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: [particle.y, particle.y - 150],
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1, 1.2, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Tech Icons Floating */}
          {mounted && techIcons.map((techIcon) => (
            <motion.div
              key={techIcon.id}
              className="absolute text-4xl opacity-20"
              initial={{
                x: techIcon.x,
                y: dimensions.height + 50,
                rotate: 0,
              }}
              animate={{
                y: -100,
                rotate: 360,
                opacity: [0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: techIcon.duration,
                repeat: Infinity,
                delay: techIcon.delay,
                ease: "linear",
              }}
            >
              {techIcon.icon}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

