import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { MEHRAN_PROFILE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'py-3.5 bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-zinc-200/90 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Unique Standalone Clickable Logo (Scrolls to Home on Click) */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Mehran Ali - Return to Home Page"
            title="Click to go to Home Page"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400/50 rounded-2xl p-1"
          >
            {/* Unique Geometric Tech Emblem Logo */}
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 p-[1.5px] shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 group-hover:scale-105 transition-all duration-300">
                <div className={`w-full h-full rounded-[14px] flex items-center justify-center relative overflow-hidden transition-colors ${
                  isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
                }`}>
                  {/* Subtle ambient gradient mesh inside unique logo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-amber-500/15 opacity-80" />
                  
                  {/* Unique Custom Geometric Monogram SVG */}
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  >
                    {/* Outer stylized hexagonal / diamond frame */}
                    <path
                      d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z"
                      stroke="url(#emblem-grad)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                    />
                    
                    {/* Interlocking 'M' and 'A' geometric vectors */}
                    {/* Stylized M */}
                    <path
                      d="M10 24V14L15 19L18 16L21 19L26 14V24"
                      stroke="url(#emblem-accent)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Center Core Triangle / 'A' apex with Amber Spark */}
                    <path
                      d="M18 11L14 18H22L18 11Z"
                      fill="url(#core-grad)"
                      className="opacity-80"
                    />
                    
                    {/* Glowing Core Reactor Dot */}
                    <circle cx="18" cy="18" r="1.8" fill="#10b981" />

                    <defs>
                      <linearGradient id="emblem-grad" x1="5" y1="3" x2="31" y2="33" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#34d399" />
                        <stop offset="0.5" stopColor="#14b8a6" />
                        <stop offset="1" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="emblem-accent" x1="10" y1="14" x2="26" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981" />
                        <stop offset="0.7" stopColor="#38bdf8" stopOpacity="0" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                      <linearGradient id="core-grad" x1="14" y1="11" x2="22" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Online pulse beacon dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-[0_0_8px_#10b981]" />
            </div>

            {/* Brand Identity */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`text-lg font-extrabold tracking-tight font-display transition-colors ${
                  isDark ? 'text-white group-hover:text-emerald-400' : 'text-zinc-950 group-hover:text-emerald-600'
                }`}>
                  MEHRAN
                </span>
                <span className="font-stylish-italic text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Ali
                </span>
              </div>
              <span className={`text-[11px] font-mono tracking-wider transition-colors ${
                isDark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-zinc-500 group-hover:text-zinc-700'
              }`}>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            aria-label="Desktop"
            className={`hidden md:flex items-center gap-1 backdrop-blur-lg px-4 py-1.5 rounded-full border transition-all ${
              isDark
                ? 'bg-zinc-900/70 border-zinc-800 shadow-inner'
                : 'bg-zinc-100/80 border-zinc-200 shadow-sm'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  id={`nav-link-${sectionId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark ? 'text-emerald-300 font-semibold' : 'text-emerald-700 font-semibold'
                      : isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className={`absolute inset-0 rounded-full border -z-10 shadow-sm ${
                        isDark
                          ? 'bg-emerald-500/15 border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                          : 'bg-emerald-100 border-emerald-300'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher & Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button (Light / Dark) */}
            <button
              id="theme-toggle-desktop"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                isDark
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-amber-400 border-zinc-700/80 hover:border-amber-400/50 shadow-sm'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300 hover:border-zinc-400 shadow-sm'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              id="navbar-lets-talk-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-emerald-400/30"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
                Let's Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button & Theme Switcher */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="theme-toggle-mobile"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className={`p-2 rounded-xl border cursor-pointer ${
                isDark
                  ? 'bg-zinc-900 text-amber-400 border-zinc-800'
                  : 'bg-zinc-100 text-zinc-800 border-zinc-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border focus:outline-none ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-900'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden backdrop-blur-2xl border-b shadow-2xl ${
              isDark ? 'bg-zinc-950/95 border-zinc-800' : 'bg-white/95 border-zinc-200'
            }`}
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? isDark
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : isDark
                          ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                          : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/30"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
