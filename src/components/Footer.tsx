import { Terminal, ArrowUp } from 'lucide-react';
import { MEHRAN_PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`relative border-t pt-16 pb-12 overflow-hidden z-10 ${
      isDark
        ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
        : 'bg-zinc-100 border-zinc-200 text-zinc-700'
    }`}>
      {/* Ambient gradient light shapes (Strictly non-blue emerald & amber) */}
      <div className="absolute top-0 left-1/4 w-96 h-40 bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-center">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-3 text-left group cursor-pointer"
              title="Click to return to top"
            >
              {/* Custom Developer Monogram Logo Mark */}
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 p-[1.5px] shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <div className={`w-full h-full rounded-[10px] flex items-center justify-center relative overflow-hidden ${
                    isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
                  }`}>
                    <div className="relative flex items-center justify-center font-display font-black text-xs tracking-tighter select-none">
                      <span className="text-emerald-500 dark:text-emerald-400 text-[10px] font-mono">&lt;</span>
                      <span className="font-extrabold text-xs tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">M</span>
                      <span className="font-stylish-italic text-xs font-bold text-amber-400">A</span>
                      <span className="text-emerald-500 dark:text-emerald-400 text-[10px] font-mono">/&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-lg font-extrabold tracking-tight font-display ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  MEHRAN
                </span>
                <span className="font-stylish-italic text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Ali
                </span>
                <span className={`ml-1 px-1.5 py-0.2 rounded text-[10px] font-mono border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-emerald-400' : 'bg-white border-zinc-300 text-emerald-700'
                }`}>
                  &lt;dev/&gt;
                </span>
              </div>
            </button>
            <p className={`text-xs sm:text-sm max-w-md leading-relaxed font-normal ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Software Engineer &amp; <span className="font-stylish-italic font-medium text-emerald-500 dark:text-emerald-400">Full Stack Web Developer</span> crafting high-performance, accessible, and interactive web applications.
            </p>
          </div>

          {/* Semantic Navigation Links */}
          <nav aria-label="Footer quick navigation" className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 ${
                  isDark ? 'text-zinc-300 hover:text-emerald-400' : 'text-zinc-600 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className={`p-3 rounded-xl border transition-all cursor-pointer group flex items-center gap-2 text-xs font-mono shadow-sm ${
                isDark
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-800 hover:border-emerald-500/40'
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border-zinc-300 hover:border-emerald-500/40'
              }`}
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-emerald-500" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? 'border-zinc-800 text-zinc-500' : 'border-zinc-200 text-zinc-500'
        }`}>
          <div>
            &copy; {new Date().getFullYear()} Mehran Ali. Designed &amp; Engineered with React, Three.js &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Available for Hire
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
