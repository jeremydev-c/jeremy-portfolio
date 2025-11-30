'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

// Rotating compelling messages component
function AnimatedTextRotator() {
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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 1200); // Change message every 1.2 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {messages[currentIndex].main}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2"
          >
            {messages[currentIndex].sub}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            {messages[currentIndex].tagline}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    setMounted(true);
    // Get window dimensions
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    // Check if we've already shown the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen');
    
    if (hasSeenLoading === 'true') {
      // Already shown, skip loading screen
      setIsLoading(false);
      setHasShownOnce(true);
      return;
    }

    // First time visit - show loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasShownOnce(true);
      // Mark that we've shown it in this session
      sessionStorage.setItem('hasSeenLoadingScreen', 'true');
    }, 5000); // 5 seconds

    // Fallback: ensure content is always visible after 6 seconds
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
      setHasShownOnce(true);
      sessionStorage.setItem('hasSeenLoadingScreen', 'true');
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []); // Empty dependency array - only run once on mount

  // Generate particle positions - only on client side
  const particles = useMemo(() => {
    if (!mounted) return [];
    const colors = ['rgba(147, 51, 234, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(6, 182, 212, 0.4)'];
    return Array.from({ length: 15 }, (_, i) => ({
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
    if (!mounted) return [];
    return ['💻', '🎨', '⚡', '🚀', '🔒', '📱'].map((icon, i) => ({
      id: i,
      icon: icon,
      x: Math.random() * dimensions.width,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 3,
    }));
  }, [dimensions, mounted]);

  // Don't render anything if not loading to prevent blocking
  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={(definition) => {
            // Ensure component knows when exit is complete
            if (definition === 'exit') {
              setIsLoading(false);
            }
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden"
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
            {/* Logo/Name */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
                Jeremy Nduati
              </h1>
            </motion.div>

            {/* Powerful Text - Rotating Messages */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12 min-h-[200px]"
            >
              <AnimatedTextRotator />
            </motion.div>

            {/* Impressive Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mb-12"
            >
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-sm md:text-base text-gray-300">Enterprise Projects</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.7, type: "spring", bounce: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">95%</div>
                  <div className="text-sm md:text-base text-gray-300">Cost Reduction</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: "spring", bounce: 0.5 }}
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
              transition={{ delay: 2.1, duration: 0.8 }}
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

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <motion.div
                className="w-3 h-3 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4,
                }}
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="w-72 md:w-96 mx-auto"
            >
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden shadow-lg border border-gray-600/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                  style={{
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
                transition={{ delay: 2.7, duration: 0.5 }}
                className="flex items-center justify-center gap-2 mt-3"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-purple-400"
                >
                  ⚡
                </motion.span>
                <p className="text-xs md:text-sm text-gray-300 font-medium">
                  Preparing an extraordinary experience...
                </p>
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-cyan-400"
                >
                  ✨
                </motion.span>
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

