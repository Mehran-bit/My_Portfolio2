import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import abstractCore1 from '../assets/images/minimal_emerald_core_1789332068587.jpg';
import abstractCore2 from '../assets/images/sleek_prism_core_1789332083111.jpg';

export default function Hero3DVisual() {
  const [selectedBg, setSelectedBg] = useState<'emerald' | 'prism'>('emerald');
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

  const currentBgImage = selectedBg === 'emerald' ? abstractCore1 : abstractCore2;

  return (
    <figure
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md aspect-square m-0 flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      <figcaption className="sr-only">
        Minimalist glowing geometric crystal nexus artwork matching website ambient aesthetic
      </figcaption>

      {/* Seamless Ambient Backlight Glow matching website backside */}
      <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-amber-500/15 blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* Interactive Switcher */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 p-1 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-700/60 shadow-xl backdrop-blur-md">
        <button
          type="button"
          onClick={() => setSelectedBg('emerald')}
          className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
            selectedBg === 'emerald'
              ? 'bg-emerald-500 text-zinc-950 shadow-sm font-semibold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>Emerald Nexus</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedBg('prism')}
          className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
            selectedBg === 'prism'
              ? 'bg-emerald-500 text-zinc-950 shadow-sm font-semibold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Layers className="w-3 h-3" />
          <span>Prism Core</span>
        </button>
      </div>

      {/* Main 3D Artwork Container - Completely Borderless & Seamlessly Blended */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated Artwork Image with smooth continuous breathing & drift */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBg}
            className="w-full h-full relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* The Abstract Artwork - Clean, Matching Backside, No Computers/Monitors */}
            <motion.img
              src={currentBgImage}
              alt="Minimalist abstract glowing geometric core"
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -6, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* Seamless Radial Edge Blend with Website Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/50 pointer-events-none" />

            {/* Subtle Vertical Scanning Line */}
            <motion.div
              animate={{ y: ['-100%', '300%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-emerald-400/15 to-transparent pointer-events-none"
            />

            {/* Subtle Floating Embers/Light Flecks */}
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#10b981] pointer-events-none"
                style={{
                  left: `${25 + i * 18}%`,
                  bottom: '20%'
                }}
                animate={{
                  y: [0, -140],
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.3, 0.5]
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Top Status Bar Badge (Border-free Glass) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/75 backdrop-blur-md text-emerald-400 text-xs font-mono shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold tracking-wider">SYSTEM ACTIVE</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-zinc-950/75 backdrop-blur-md text-zinc-300 text-[11px] font-mono shadow-md">
            <Terminal className="w-3 h-3 text-amber-400" />
            <span>v2.6.4</span>
          </div>
        </div>

        {/* Lower Holographic Status Card (Seamless Glass matching website) */}
        <div
          className="absolute inset-x-4 bottom-4 p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl shadow-2xl transition-all pointer-events-auto"
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
