import { motion } from 'motion/react';
import { ArrowDown, Sparkles, FolderGit2, Mail, ExternalLink, Code2, Terminal } from 'lucide-react';
import Hero3DVisual from './Hero3DVisual';
import { MEHRAN_PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    if (id === '#hero' || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      try {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } catch {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient illuminated light shapes (Warm Emerald & Amber, strictly non-blue) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-emerald-500/12 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Semantic Header containing intro, name, and role */}
            <header className="w-full">
              {/* Status Badge: Available for Projects (Strictly non-blue emerald/amber) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md mb-6 border transition-all ${
                  isDark
                    ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-mono tracking-wide">{MEHRAN_PROFILE.status}</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-300 ml-0.5" />
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display leading-[1.08] mb-4">
                <span className={`block text-lg sm:text-2xl font-mono font-medium tracking-normal mb-2 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  Hello, I&apos;m
                </span>
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark
                    ? 'from-white via-zinc-100 to-zinc-400'
                    : 'from-zinc-950 via-zinc-800 to-zinc-600'
                }`}>
                  MEHRAN{' '}
                </span>
                <span className="font-stylish-italic font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
                  ALI
                </span>
              </h1>

              {/* Subtitle / Role */}
              <div className="mb-6 flex items-center gap-2.5 flex-wrap">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-display">
                  Software Engineer &amp;{' '}
                  <span className="font-stylish-italic font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
                    Full Stack
                  </span>{' '}
                  Web Developer
                </span>
              </div>
            </header>

            {/* Description */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-9 font-normal ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              &ldquo;Engineering <span className="font-bold text-zinc-950 dark:text-white">scalable</span>, highly responsive digital systems with <span className="font-stylish-italic text-emerald-600 dark:text-emerald-400 font-bold">clean architecture</span> and modern interactive aesthetics.&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Button 1: View My Work */}
              <button
                id="hero-cta-view-work"
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group border border-emerald-400/40"
              >
                <FolderGit2 className="w-5 h-5 text-emerald-100 group-hover:rotate-6 transition-transform" />
                <span>View My Work</span>
              </button>

              {/* Button 2: Contact Me */}
              <button
                id="hero-cta-contact"
                type="button"
                onClick={() => scrollToSection('#contact')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group shadow-md border ${
                  isDark
                    ? 'bg-zinc-900/90 text-zinc-200 border-zinc-700/80 hover:border-emerald-400/50 hover:text-white'
                    : 'bg-white text-zinc-800 border-zinc-300 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                <Mail className="w-5 h-5 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Tech Highlights Badge Row using Semantic UL/LI (Strictly non-blue) */}
            <ul className="flex items-center gap-3 text-xs sm:text-sm flex-wrap list-none p-0">
              <li className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-sm ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <Code2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>React &amp; Next.js</span>
              </li>
              <li className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-sm ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <Terminal className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Node.js &amp; Express</span>
              </li>
              <li className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-sm ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <ExternalLink className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                <span>PostgreSQL &amp; MongoDB</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Hero 3D Interactive Visual with Developer Image in 3D Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <Hero3DVisual />
          </motion.div>
        </div>

        {/* Animated Engineering Marquee Ticker */}
        <div className="mt-14 pt-6 border-t border-zinc-700/20 overflow-hidden relative">
          <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
            {[
              "⚡ React & Next.js Ecosystem",
              "🚀 High-Throughput Node.js & Express",
              "🛡️ 100% TypeScript Strict Type Safety",
              "💾 PostgreSQL & MongoDB Schemas",
              "🎨 Tailwind CSS Responsive Precision",
              "📦 Modular Architecture & Clean Code",
              "🌐 Web Performance & SEO Optimization",
              "✨ Available for Worldwide Opportunities",
              "⚡ React & Next.js Ecosystem",
              "🚀 High-Throughput Node.js & Express",
              "🛡️ 100% TypeScript Strict Type Safety",
              "💾 PostgreSQL & MongoDB Schemas",
            ].map((item, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1.5 rounded-full border ${
                  isDark
                    ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300'
                    : 'bg-white/80 border-zinc-200 text-zinc-700 shadow-sm'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Footer: Scroll Down Indicator */}
      <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
        <span className={`text-[11px] font-mono tracking-widest uppercase opacity-80 ${
          isDark ? 'text-zinc-400' : 'text-zinc-500'
        }`}>Scroll Down</span>
        <motion.button
          type="button"
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`p-1.5 rounded-full transition-colors cursor-pointer ${
            isDark ? 'text-zinc-400 hover:text-emerald-400' : 'text-zinc-500 hover:text-emerald-600'
          }`}
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </footer>
    </section>
  );
}
