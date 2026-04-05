'use client';

import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const ROLES = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'AI Engineer',
  'Payment Architect',
  'Building the Future',
];

function CountUp({ target, delay }: { target: number; delay: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let intervalId: number | null = null;
    const timeout = window.setTimeout(() => {
      const steps = 12;
      const stepMs = 48;
      let i = 0;
      intervalId = window.setInterval(() => {
        i += 1;
        const t = Math.min(1, i / steps);
        const eased = 1 - (1 - t) * (1 - t);
        setVal(Math.round(target * eased));
        if (i >= steps) {
          if (intervalId !== null) window.clearInterval(intervalId);
          intervalId = null;
          setVal(target);
        }
      }, stepMs);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, [target, delay]);
  return <>{val}</>;
}

export default function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(0);
  const [dims, setDims] = useState({ w: 1920, h: 1080 });
  const progressMv = useMotionValue(0);
  const progressPercent = useTransform(progressMv, [0, 1], [0, 100]);
  const [pLabel, setPLabel] = useState(0);
  const cleanupRef = useRef<(() => void) | null>(null);
  const isSmall = mounted && dims.w < 640;

  const ringR = isSmall ? 52 : 68;
  const ringCirc = 2 * Math.PI * ringR;
  const ringOffset = useTransform(progressMv, [0, 1], [ringCirc, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true);
    setDims({ w: window.innerWidth, h: window.innerHeight });
    setIsLoading(true);
    progressMv.set(0);
    setPLabel(0);

    const dur = prefersReducedMotion ? 2200 : 5200;

    const ctrl = animate(progressMv, 1, {
      duration: dur / 1000,
      ease: [0.16, 0.84, 0.24, 1],
      onComplete: () => {
        setPLabel(100);
        const settle = prefersReducedMotion ? 100 : 260;
        window.setTimeout(() => setIsLoading(false), settle);
      },
    });

    const lastT = { t: 0 };
    const unsub = progressPercent.on('change', (v) => {
      const now = performance.now();
      if (now - lastT.t < 80) return;
      lastT.t = now;
      setPLabel(Math.min(100, Math.round(v)));
    });
    cleanupRef.current = () => {
      unsub();
      ctrl.stop();
    };

    if (!prefersReducedMotion) {
      const t1 = setTimeout(() => setPhase(1), 280);
      const t2 = setTimeout(() => setPhase(2), 1100);
      const t3 = setTimeout(() => setPhase(3), 2000);
      const t4 = setTimeout(() => setPhase(4), 2900);
      return () => {
        [t1, t2, t3, t4].forEach(clearTimeout);
        cleanupRef.current?.();
        cleanupRef.current = null;
      };
    }

    setPhase(4);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [prefersReducedMotion, progressMv, progressPercent]);

  const roleIdx = useRef(0);
  const [activeRole, setActiveRole] = useState(0);
  useEffect(() => {
    if (phase < 3 || prefersReducedMotion) return;
    const iv = setInterval(() => {
      roleIdx.current = (roleIdx.current + 1) % ROLES.length;
      setActiveRole(roleIdx.current);
    }, 1400);
    return () => clearInterval(iv);
  }, [phase, prefersReducedMotion]);

  const dots = useMemo(() => {
    if (!mounted || prefersReducedMotion) return [];
    const count = isSmall ? 14 : 28;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 160 + Math.random() * 200;
      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 1.5 + 1.5,
        dur: Math.random() * 3 + 3,
      };
    });
  }, [mounted, isSmall, prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden [transform:translateZ(0)]"
          style={{ background: '#000000' }}
          role="status"
          aria-label="Loading"
        >
          {/* Grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,59,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,59,59,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Horizontal line reveal */}
          <motion.div
            className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,59,0.25), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Vertical line reveal */}
          <motion.div
            className="absolute top-0 left-1/2 w-px h-full -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(255,59,59,0.2), transparent)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Expanding dots */}
          {dots.map((d) => (
            <motion.div
              key={d.id}
              className="absolute rounded-full"
              style={{
                width: d.size,
                height: d.size,
                background: 'rgba(255,59,59,0.35)',
                left: '50%',
                top: '50%',
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={
                phase >= 2
                  ? {
                      x: [0, d.x * 0.6, d.x],
                      y: [0, d.y * 0.6, d.y],
                      opacity: [0, 0.7, 0],
                      scale: [0, 1.5, 0],
                    }
                  : {}
              }
              transition={{
                duration: d.dur,
                delay: d.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Monogram + progress ring */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={phase >= 1 ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative"
                style={{ width: (ringR + 8) * 2, height: (ringR + 8) * 2 }}
              >
                {/* Track */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox={`0 0 ${(ringR + 8) * 2} ${(ringR + 8) * 2}`}
                >
                  <circle
                    cx={ringR + 8}
                    cy={ringR + 8}
                    r={ringR}
                    fill="none"
                    stroke="rgba(255,59,59,0.08)"
                    strokeWidth="1"
                  />
                  <motion.circle
                    cx={ringR + 8}
                    cy={ringR + 8}
                    r={ringR}
                    fill="none"
                    stroke="rgba(255,59,59,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={ringCirc}
                    style={{ strokeDashoffset: ringOffset }}
                  />
                </svg>

                {/* Inner glow */}
                <motion.div
                  className="absolute inset-4 rounded-full will-change-transform"
                  style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.06), transparent 70%)' }}
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                />

                {/* Letters */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-3xl sm:text-4xl font-bold text-white select-none"
                    initial={{ opacity: 0, y: 6 }}
                    animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    JN
                  </motion.span>
                </div>

                {/* Orbiting dot */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-sand-400 will-change-transform"
                    style={{
                      top: 8,
                      left: ringR + 8 - 4,
                      transformOrigin: `4px ${ringR}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </div>
            </motion.div>

            {/* Name reveal with mask */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight text-center"
                initial={{ y: '110%' }}
                animate={phase >= 2 ? { y: '0%' } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Jeremy
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-sand-400 tracking-tight text-center"
                initial={{ y: '110%' }}
                animate={phase >= 2 ? { y: '0%' } : {}}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Nduati
              </motion.h1>
            </div>

            {/* Decorative bar */}
            <motion.div
              className="h-px w-16 mb-5"
              style={{ background: 'linear-gradient(90deg, transparent, #ff3b3b, transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            {/* Rotating role */}
            <motion.div
              className="h-7 overflow-hidden mb-10"
              initial={{ opacity: 0 }}
              animate={phase >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeRole}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm sm:text-base text-carbon-400 tracking-[0.2em] uppercase text-center"
                >
                  {ROLES[activeRole]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-10 sm:gap-14 mb-12"
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {[
                { val: 4, suffix: '+', label: 'Apps' },
                { val: 50, prefix: '#', label: 'Rank' },
                { val: 95, suffix: '%', label: 'Saved' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ y: 16, opacity: 0 }}
                  animate={phase >= 4 ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                    {s.prefix}
                    <CountUp target={s.val} delay={3200 + i * 150} />
                    {s.suffix}
                  </div>
                  <div className="text-[10px] text-carbon-600 uppercase tracking-[0.2em] mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress */}
            <motion.div
              className="w-full max-w-[260px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="relative h-[2px] bg-carbon-800/80 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    scaleX: progressMv,
                    transformOrigin: 'left',
                    background: 'linear-gradient(90deg, #e62e2e, #ff3b3b, #ff6b6b)',
                  }}
                />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[10px] text-carbon-700 uppercase tracking-[0.15em]">
                  Loading portfolio
                </span>
                <span className="text-[11px] text-carbon-500 font-mono tabular-nums">
                  {pLabel}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Corner frames */}
          <motion.div
            className="absolute top-6 left-6 sm:top-10 sm:left-10"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-8 h-8 border-l border-t border-sand-500/15" />
          </motion.div>
          <motion.div
            className="absolute top-6 right-6 sm:top-10 sm:right-10"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-8 h-8 border-r border-t border-sand-500/15" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-8 h-8 border-l border-b border-sand-500/15" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="w-8 h-8 border-r border-b border-sand-500/15" />
          </motion.div>

          {/* Bottom signature */}
          <motion.p
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-carbon-700 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            modenova.co.ke
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
