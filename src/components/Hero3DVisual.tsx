import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Code2,
  ShieldCheck,
  Cpu,
  Terminal,
  Layers
} from 'lucide-react';
import { MEHRAN_PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import developerPortrait from '../assets/images/developer_portrait_1789327871613.jpg';

export default function Hero3DVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: y * -10,
      y: x * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <figure
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md aspect-square m-0 flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      <figcaption className="sr-only">
        Profile portrait of Mehran Ali, Software Engineer & Full Stack Web Developer
      </figcaption>

      {/* Seamless Ambient Backlight Glow matching website backdrop */}
      <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-amber-500/20 blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* Main 3D Card Container with Ambient Gradient Border (no inner border around image) */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="relative z-10 w-full h-full p-[2.5px] rounded-3xl bg-gradient-to-tr from-emerald-400 via-teal-400 to-amber-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Inner Card Layer */}
        <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-zinc-950">
          {/* Centered Profile Image - Completely borderless inside */}
          <motion.img
            src={developerPortrait}
            alt="Mehran Ali - Software Engineer"
            animate={{
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-full h-full object-cover object-top select-none pointer-events-none border-0"
            referrerPolicy="no-referrer"
          />

          {/* Smooth Ambient Gradient Overlay to seamlessly blend with bottom status card */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent pointer-events-none" />

          {/* Top Status Bar Badge (Glassmorphic) */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md text-emerald-400 text-xs font-mono shadow-md border-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold tracking-wider">SYSTEM ACTIVE</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md text-zinc-300 text-[11px] font-mono shadow-md border-0">
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>v2.6.4</span>
            </div>
          </div>

          {/* Lower Holographic Status Card (Seamless Glass matching website) */}
          <div
            className="absolute inset-x-4 bottom-4 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl shadow-2xl transition-all pointer-events-auto border-0"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-display text-white tracking-wide">
                    SYSTEM ARCHITECTURE
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400">Full-Stack Engineer</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                High Performance
              </span>
            </div>

            {/* Architecture Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-2 border-t border-zinc-800/70">
              <div className="p-1 rounded bg-zinc-900/70">
                <span className="text-zinc-400 block text-[9px]">Runtime</span>
                <span className="text-emerald-400 font-bold">Node 20+</span>
              </div>
              <div className="p-1 rounded bg-zinc-900/70">
                <span className="text-zinc-400 block text-[9px]">Frontend</span>
                <span className="text-teal-400 font-bold">React 19</span>
              </div>
              <div className="p-1 rounded bg-zinc-900/70">
                <span className="text-zinc-400 block text-[9px]">Type Safety</span>
                <span className="text-amber-400 font-bold">100% TS</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Badges */}
      <motion.aside
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-3 -right-2 sm:-right-6 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 z-20 pointer-events-auto transition-all ${
          isDark
            ? 'bg-zinc-900/90 text-zinc-100 shadow-[0_10px_25px_rgba(0,0,0,0.4)]'
            : 'bg-white/95 text-zinc-900 shadow-md'
        }`}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[10px] font-mono text-emerald-500 dark:text-emerald-400 font-semibold">Production Ready</p>
          <p className="text-xs font-semibold">Clean Architecture</p>
        </div>
      </motion.aside>

      <motion.aside
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className={`absolute -bottom-5 -left-2 sm:-left-4 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 z-20 pointer-events-auto transition-all ${
          isDark
            ? 'bg-zinc-900/90 text-zinc-100 shadow-[0_10px_25px_rgba(0,0,0,0.4)]'
            : 'bg-white/95 text-zinc-900 shadow-md'
        }`}
      >
        <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[10px] font-mono text-amber-500 dark:text-amber-400 font-semibold">Engineering Scholar</p>
          <p className="text-xs font-semibold">Mehran Ali &bull; Software Eng.</p>
        </div>
      </motion.aside>

      <motion.aside
        animate={{ x: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`hidden sm:flex absolute -left-8 top-1/2 -translate-y-1/2 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-lg items-center gap-2 z-20 font-mono text-[11px] ${
          isDark
            ? 'bg-zinc-950/90 text-emerald-300'
            : 'bg-white/95 text-emerald-700'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>git push origin main</span>
      </motion.aside>
    </figure>
  );
}
