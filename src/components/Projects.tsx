import { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const categories = ['All', 'Full Stack', 'Dashboard', 'E-Commerce'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient gradient light shapes (Strictly non-blue emerald & amber) */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Semantic Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
              isDark
                ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
              Featured{' '}
              <span className="font-stylish-italic font-bold text-emerald-500 dark:text-emerald-400">Creations</span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
                Engineering Projects
              </span>
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              Explore production-grade full-stack applications, interactive data dashboards, and scalable architectures designed with performance and clean aesthetics.
            </p>
          </div>

          {/* Filter Pills Navigation */}
          <nav aria-label="Filter projects by category" className="flex items-center gap-2 flex-wrap self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md shadow-emerald-500/25 border border-emerald-400/40'
                    : isDark
                      ? 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
                      : 'bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border border-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </header>

        {/* Projects Grid Section: Large interactive cards with 3D tilt */}
        <section aria-label="Featured Projects Showcase" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </section>

        {/* GitHub Repository Banner Callout */}
        <aside className={`mt-16 p-6 sm:p-8 rounded-3xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl border ${
          isDark
            ? 'bg-zinc-900/90 border-zinc-800 text-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.5)]'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-md'
        }`}>
          <div>
            <h3 className="text-lg font-bold font-display mb-1 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              More Open Source Repositories
            </h3>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Check out my GitHub for additional experimental prototypes, algorithm implementations, and micro-tools.
            </p>
          </div>

          <a
            href="https://github.com/mehrannali57"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap shadow-sm ${
              isDark
                ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 hover:border-emerald-500/40'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300 hover:border-emerald-500/40'
            }`}
          >
            <span>Explore GitHub Profile</span>
            <span className="font-mono text-emerald-500">&rarr;</span>
          </a>
        </aside>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
