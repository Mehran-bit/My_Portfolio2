import type { ElementType } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Code2,
  Layers,
  Rocket,
  Briefcase,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const TYPE_ICONS: Record<string, ElementType> = {
  education: GraduationCap,
  frontend: Code2,
  fullstack: Layers,
  projects: Rocket,
  freelance: Briefcase,
};

const TYPE_COLORS: Record<string, { badge: string; text: string; ring: string }> = {
  education: { badge: 'bg-emerald-500/15 border-emerald-500/30', text: 'text-emerald-500 dark:text-emerald-300', ring: '#10b981' },
  frontend: { badge: 'bg-teal-500/15 border-teal-500/30', text: 'text-teal-500 dark:text-teal-300', ring: '#14b8a6' },
  fullstack: { badge: 'bg-amber-500/15 border-amber-500/30', text: 'text-amber-500 dark:text-amber-300', ring: '#f59e0b' },
  projects: { badge: 'bg-purple-500/15 border-purple-500/30', text: 'text-purple-500 dark:text-purple-300', ring: '#a855f7' },
  freelance: { badge: 'bg-rose-500/15 border-rose-500/30', text: 'text-rose-500 dark:text-rose-300', ring: '#f43f5e' },
};

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient gradient light shapes (Strictly non-blue emerald & amber) */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Semantic Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Compass className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            Milestones &amp; Evolution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
            My Developer{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            From algorithmic foundations to shipping production-ready web applications and client solutions.
          </p>
        </header>

        {/* Animated Timeline Container Section */}
        <section aria-label="Timeline of Milestones" className="relative">
          {/* Central Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/40 via-amber-500/40 to-purple-500/20" />
          
          {/* Vertical Glowing Line for Mobile */}
          <div className="block md:hidden absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/40 via-amber-500/40 to-purple-500/20" />

          {/* Timeline Nodes Articles */}
          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = TYPE_ICONS[item.type] || Clock;
              const styling = TYPE_COLORS[item.type] || TYPE_COLORS.education;

              return (
                <article
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Left Side Content (Desktop: for even indexes) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`rounded-3xl backdrop-blur-xl border p-6 sm:p-7 transition-all duration-300 group shadow-xl ${
                        isDark
                          ? 'bg-zinc-900/90 border-zinc-800 hover:border-emerald-500/40 text-zinc-100'
                          : 'bg-white border-zinc-200 hover:border-emerald-500/40 text-zinc-900 shadow-md'
                      }`}
                    >
                      {/* Period Badge & Category */}
                      <header
                        className={`flex items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border ${
                          isDark ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                        }`}>
                          {item.period}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${styling.badge} ${styling.text}`}
                        >
                          {item.role}
                        </span>
                      </header>

                      {/* Title & Institution */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-3.5 font-medium">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Highlights Pill List using Semantic UL/LI */}
                      <ul
                        className={`flex flex-wrap gap-2 pt-3 border-t list-none p-0 ${
                          isDark ? 'border-zinc-800' : 'border-zinc-200'
                        } ${isEven ? 'md:justify-end' : 'justify-start'}`}
                      >
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs border ${
                              isDark
                                ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300'
                                : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Central Node Indicator Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                        isDark ? 'bg-zinc-950' : 'bg-white'
                      }`}
                      style={{ borderColor: styling.ring }}
                    >
                      <Icon className="w-5 h-5" style={{ color: styling.ring }} />
                    </motion.div>
                  </div>

                  {/* Empty Spacer on Opposite Side for Desktop Grid Symmetry */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? 'md:order-2' : 'md:order-1'
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </section>
  );
}
