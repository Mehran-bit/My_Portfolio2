import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to disable custom cursor on mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth trailing interpolation
    let animationId: number;
    const updateTrailing = () => {
      setTrailingPos(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationId = requestAnimationFrame(updateTrailing);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    animationId = requestAnimationFrame(updateTrailing);

    // Hover listener for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.interactive-hover') ||
          target.hasAttribute('data-cursor-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationId);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary fast dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-screen shadow-[0_0_8px_#22d3ee]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          transition: 'transform 0.04s ease-out'
        }}
      />

      {/* Trailing smoothed glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 flex items-center justify-center transition-colors duration-200"
        animate={{
          width: isHovered ? 44 : 26,
          height: isHovered ? 44 : 26,
          borderColor: isHovered ? 'rgba(99, 102, 241, 0.7)' : 'rgba(56, 189, 248, 0.4)',
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.12)' : 'rgba(6, 182, 212, 0.03)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 22 : 13)}px, ${trailingPos.y - (isHovered ? 22 : 13)}px, 0)`,
        }}
      />
    </>
  );
}
