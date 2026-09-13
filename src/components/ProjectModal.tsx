import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl rounded-3xl backdrop-blur-2xl border shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col ${
            isDark
              ? 'bg-zinc-900 border-zinc-700 text-zinc-100'
              : 'bg-white border-zinc-300 text-zinc-900'
          }`}
        >
          {/* Modal Header Image with Gradient */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-950 flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              isDark
                ? 'from-zinc-900 via-zinc-900/60 to-transparent'
                : 'from-white via-white/60 to-transparent'
            }`} />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className={`absolute top-4 right-4 p-2.5 rounded-full border transition-all cursor-pointer z-10 ${
                isDark
                  ? 'bg-zinc-950/80 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-850'
                  : 'bg-white/90 border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-white shadow-sm'
              }`}
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Floating Title info */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500 text-zinc-950 mb-2 font-semibold shadow-md">
                {project.category}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-extrabold font-display ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}>
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                Overview &amp; Architecture
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Key Technical Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-zinc-800/60 border-zinc-700/60 text-zinc-300'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-amber-500" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                      isDark
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'border-zinc-800' : 'border-zinc-200'
            }`}>
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Project Demo
                </a>
                <a
                  href={project.githubUrl || 'https://github.com/mehrannali57'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-colors ${
                    isDark
                      ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border-zinc-700'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 hover:text-zinc-950 border-zinc-300'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={`text-xs font-mono transition-colors px-3 py-2 cursor-pointer ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                Close Preview [Esc]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
