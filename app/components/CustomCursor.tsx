'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 20, mass: 0.8 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 20, mass: 0.8 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    // Check if on mobile via viewport
    if (window.innerWidth < 768) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .card, .btn-primary, .btn-secondary');
      setIsPointer(!!interactive);

      const hoverTarget = target.closest('.card, .btn-primary, .btn-secondary');
      setIsHovering(!!hoverTarget);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!isHidden && (
        <>
          {/* Inner dot */}
          <motion.div
            className="custom-cursor-dot"
            style={{
              x: dotX,
              y: dotY,
            }}
            animate={{
              scale: isPointer ? 0.5 : 1,
              opacity: isPointer ? 0.6 : 1,
            }}
            transition={{ duration: 0.15 }}
            aria-hidden="true"
          />
          {/* Outer ring */}
          <motion.div
            className="custom-cursor-ring"
            style={{
              x: ringX,
              y: ringY,
            }}
            animate={{
              scale: isHovering ? 1.8 : isPointer ? 1.4 : 1,
              opacity: isHovering ? 0.3 : isPointer ? 0.4 : 0.5,
              borderColor: isHovering
                ? 'rgba(255, 59, 59, 0.5)'
                : 'rgba(255, 255, 255, 0.35)',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            aria-hidden="true"
          />
        </>
      )}
    </AnimatePresence>
  );
}
