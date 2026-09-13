import { useState, useRef, type MouseEvent } from 'react';
import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Mouse tilt calculation
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: max 8 degrees
    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 h-full"
    >
      <div
        className={`relative h-full rounded-3xl backdrop-blur-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group ${
          isDark
            ? 'bg-zinc-900/90 border-zinc-800 shadow-xl'
            : 'bg-white border-zinc-200 shadow-md'
        }`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          boxShadow: isHovered
            ? isDark
              ? '0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 0 25px rgba(245, 158, 11, 0.15)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 20px rgba(16, 185, 129, 0.2)'
            : undefined,
          borderColor: isHovered ? 'rgba(16, 185, 129, 0.6)' : undefined
        }}
      >
        {/* Top Image Preview with Overlay */}
        <figure className="relative h-56 sm:h-64 overflow-hidden w-full bg-zinc-900 m-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDark
              ? 'from-zinc-900 via-zinc-900/40 to-transparent'
              : 'from-white via-white/40 to-transparent'
          }`} />

          {/* Floating category badge & performance badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border shadow-md backdrop-blur-md ${
              isDark
                ? 'bg-zinc-950/90 border-emerald-500/30 text-emerald-400'
                : 'bg-white/90 border-emerald-500/40 text-emerald-700'
            }`}>
              {project.category}
            </span>
            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500 text-zinc-950 shadow-md font-semibold">
                {project.metrics.label}: {project.metrics.value}
              </span>
            )}
          </div>

          {/* Quick action overlay button on image */}
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-emerald-600 text-white shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-500 hover:scale-110 cursor-pointer"
            aria-label={`View details for ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </figure>

        {/* Card Body Section */}
        <section className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Title & Subtitle */}
            <div className="mb-3">
              <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between ${
                isDark ? 'text-zinc-100' : 'text-zinc-900'
              }`}>
                <span>{project.title}</span>
                <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed mb-6 font-normal ${
              isDark ? 'text-zinc-300' : 'text-zinc-600'
            }`}>
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                    isDark
                      ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300 group-hover:border-emerald-500/40'
                      : 'bg-zinc-100 border-zinc-200 text-zinc-700 group-hover:border-emerald-500/40'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons Footer: Live Demo and GitHub */}
          <footer className={`pt-4 border-t flex items-center gap-3 ${
            isDark ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            <button
              id={`project-demo-${project.id}`}
              type="button"
              onClick={() => onOpenDetails(project)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-emerald-100" />
              <span>Live Demo</span>
            </button>

            <a
              id={`project-github-${project.id}`}
              href={project.githubUrl || 'https://github.com/mehrannali57'}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer ${
                isDark
                  ? 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-200 hover:text-white hover:border-emerald-500/40'
                  : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:border-emerald-500/40'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </footer>
        </section>
      </div>
    </article>
  );
}
