import { useState, useRef, type MouseEvent, type ElementType } from 'react';
import { motion } from 'motion/react';
import {
  Layout,
  Layers,
  Sparkles,
  Database,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Service } from '../types';
import { useTheme } from '../context/ThemeContext';

const SERVICE_ICON_MAP: Record<string, ElementType> = {
  Layout,
  Layers,
  Sparkles,
  Database,
};

interface ServiceCardProps {
  key?: string;
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const IconComponent = SERVICE_ICON_MAP[service.iconName] || Sparkles;

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative h-full rounded-3xl backdrop-blur-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden shadow-xl ${
          isDark
            ? 'bg-zinc-900/90 border-zinc-800'
            : 'bg-white border-zinc-200 shadow-md'
        }`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
          borderColor: isHovered ? `${service.color}80` : undefined,
          boxShadow: isHovered
            ? `0 20px 40px -10px ${service.color}40, 0 0 25px ${service.color}20`
            : undefined,
        }}
      >
        {/* Subtle hover gradient bloom */}
        <div
          className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
            isHovered ? 'opacity-35' : 'opacity-0'
          }`}
          style={{ backgroundColor: service.color }}
        />

        <div>
          {/* Service Icon and Number */}
          <header className="flex items-center justify-between mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
              style={{
                backgroundColor: `${service.color}20`,
                border: `1px solid ${service.color}40`,
                color: service.color,
              }}
            >
              <IconComponent className="w-7 h-7" />
            </div>

            <span className={`font-mono text-2xl font-extrabold transition-colors ${
              isDark ? 'text-zinc-700 group-hover:text-zinc-500' : 'text-zinc-300 group-hover:text-zinc-500'
            }`}>
              0{index + 1}
            </span>
          </header>

          {/* Service Title & Tagline */}
          <h3 className={`text-xl sm:text-2xl font-bold font-display mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors ${
            isDark ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            {service.title}
          </h3>
          <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-4 ${
            isDark ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            {service.tagline}
          </p>
          <p className={`text-xs leading-relaxed mb-6 font-normal ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            {service.description}
          </p>

          {/* Features Deliverables List using Semantic UL/LI */}
          <ul className={`space-y-2.5 mb-6 pt-4 border-t list-none p-0 ${
            isDark ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            {service.features.map((feat) => (
              <li key={feat} className={`flex items-center gap-2.5 text-xs ${
                isDark ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: service.color }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Tech Stack & CTA Footer */}
        <footer className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 rounded-md text-[11px] font-mono border ${
                  isDark
                    ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm border transition-all cursor-pointer group/btn shadow-sm ${
              isDark
                ? 'text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-750 border-zinc-700 hover:border-emerald-500/40'
                : 'text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border-zinc-300 hover:border-emerald-500/40'
            }`}
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-emerald-500" />
          </button>
        </footer>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient gradient light shapes (Strictly non-blue emerald & amber) */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Semantic Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Cpu className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            Engineering Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
            Tailored{' '}
            <span className="font-stylish-italic font-bold text-emerald-500 dark:text-emerald-400">Solutions</span>{' '}
            &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
              Engineering Services
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Delivering bespoke engineering solutions from pixel-perfect responsive user interfaces to resilient full-stack web applications.
          </p>
        </header>

        {/* 4 Premium Service Cards Grid Section with Semantic Articles */}
        <section aria-label="Available Engineering Services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </section>

      </div>
    </section>
  );
}
