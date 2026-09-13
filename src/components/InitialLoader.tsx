import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT...');

  useEffect(() => {
    // Smooth progress counter reaching 100% in ~1.5s
    const startTime = Date.now();
    const duration = 1600; // 1.6 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculatedProgress);

      if (calculatedProgress < 30) {
        setStatusText('INITIALIZING RUNTIME CORE...');
      } else if (calculatedProgress < 65) {
        setStatusText('MOUNTING FULL-STACK MODULES...');
      } else if (calculatedProgress < 90) {
        setStatusText('CALIBRATING SYSTEM ARCHITECTURE...');
      } else {
        setStatusText('SYSTEM READY // WELCOME');
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 250);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.aside
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080a] text-zinc-100 overflow-hidden select-none"
      role="status"
      aria-label="Loading application"
    >
      {/* Ambient background glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Animated Intro Core */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Custom Hexagonal Monogram Logo */}
        <div className="relative mb-8">
          {/* Rotating ambient aura rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-dashed border-emerald-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-8 rounded-full border border-emerald-500/15"
          />

          {/* Center Monogram Shield */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 p-[2px] shadow-[0_0_40px_rgba(16,185,129,0.35)]"
          >
            <div className="w-full h-full rounded-[14px] bg-zinc-950 flex items-center justify-center relative overflow-hidden">
              {/* Scanline passing over shield */}
              <motion.div
                animate={{ y: [-40, 80] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-emerald-400/25 to-transparent pointer-events-none"
              />

              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 relative z-10"
              >
                {/* Outer stylized diamond frame */}
                <path
                  d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z"
                  stroke="url(#loader-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />
                
                {/* Stylized M */}
                <path
                  d="M10 24V14L15 19L18 16L21 19L26 14V24"
                  stroke="url(#loader-accent)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Center Core Triangle */}
                <path
                  d="M18 11L14 18H22L18 11Z"
                  fill="url(#loader-core)"
                  className="opacity-90"
                />
                
                {/* Glowing Reactor Dot */}
                <circle cx="18" cy="18" r="1.8" fill="#10b981" />

                <defs>
                  <linearGradient id="loader-grad" x1="5" y1="3" x2="31" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" />
                    <stop offset="0.5" stopColor="#14b8a6" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                  <linearGradient id="loader-accent" x1="10" y1="14" x2="26" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                  <linearGradient id="loader-core" x1="14" y1="11" x2="22" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Brand Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider font-display flex items-center justify-center gap-2">
            <span>MEHRAN</span>
            <span className="font-stylish-italic text-emerald-400">Ali</span>
          </h1>
          <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase mt-1">
            Full-Stack Software Engineer
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full space-y-2 mb-3">
          <div className="w-full bg-zinc-900 border border-zinc-800 h-2 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.7)]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Status Label & Percentage */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              {statusText}
            </span>
            <span className="font-bold text-zinc-200">{progress}%</span>
          </div>
        </div>

        {/* System Vitals Indicators */}
        <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 pt-2">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-emerald-400" /> TS Strict
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Terminal className="w-3 h-3 text-teal-400" /> React 19
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-amber-400" /> V2.6
          </span>
        </div>
      </div>
    </motion.aside>
  );
}
