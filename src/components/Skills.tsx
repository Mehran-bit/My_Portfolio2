import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  CheckCircle2,
  Zap,
  Boxes,
  ShieldCheck,
  Activity,
  Sliders,
  Maximize2,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools';
  tier: 'Core Daily Driver' | 'Production Grade' | 'Proficient';
  experience: string;
  mastery: number;
  usedIn: string;
  description: string;
  keyFeatures: string[];
  ecosystem: string[];
  accentColor: string;
}

const MODERN_TECH_STACK: TechItem[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    tier: 'Core Daily Driver',
    experience: '3+ Years',
    mastery: 96,
    usedIn: 'Health Analytics Dashboard, E-Commerce Hub, Dev Portfolio',
    description: 'Component-driven UI architecture, custom hooks, context state management, and optimized virtual DOM render cycles.',
    keyFeatures: ['Hooks & Custom Lifecycle', 'Context API & State Reducers', 'React Server Components', 'Virtual DOM Optimization'],
    ecosystem: ['React Router', 'Zustand', 'React Query', 'Framer Motion'],
    accentColor: '#10b981'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    tier: 'Core Daily Driver',
    experience: '2+ Years',
    mastery: 94,
    usedIn: 'Full Stack SaaS, SSR Portfolios, SEO Optimized Platforms',
    description: 'Modern App Router, Server-Side Rendering (SSR), Static Site Generation (SSG), and Edge Middleware execution.',
    keyFeatures: ['App Router & Layouts', 'Server-Side Rendering (SSR)', 'API Route Handlers', 'Asset & Font Optimization'],
    ecosystem: ['Turbopack', 'Vercel Edge', 'NextAuth', 'Server Actions'],
    accentColor: '#14b8a6'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    tier: 'Core Daily Driver',
    experience: '3+ Years',
    mastery: 98,
    usedIn: 'All production codebases & enterprise applications',
    description: 'Strict type safety, generics, discriminated unions, interfaces, and compile-time defect prevention.',
    keyFeatures: ['Strict Null Checks', 'Generic Constraints & Utility Types', 'Discriminated Unions', 'Zero Runtime Type Errors'],
    ecosystem: ['TSConfig Strict', 'Zod Schema Validation', 'TypeDoc', 'ESLint Plugin'],
    accentColor: '#34d399'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    tier: 'Core Daily Driver',
    experience: '3+ Years',
    mastery: 97,
    usedIn: 'Responsive modern UIs, design systems, interactive components',
    description: 'Utility-first rapid styling, mobile-first breakpoints, dark/light theming, and token-based design systems.',
    keyFeatures: ['Mobile-First Precision', 'Custom Token Extensions', 'CSS Grid & Flexbox', 'Fluid Motion Transitions'],
    ecosystem: ['PostCSS', 'clsx & tailwind-merge', 'Tailwind Typography', 'Lucide Icons'],
    accentColor: '#06b6d4'
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'Backend',
    tier: 'Core Daily Driver',
    experience: '2.5+ Years',
    mastery: 92,
    usedIn: 'Microservices, REST APIs, Authentication Services',
    description: 'Event-driven server runtime, asynchronous I/O, middleware pipelines, rate-limiting, and microservices.',
    keyFeatures: ['RESTful Architecture', 'Express Middleware Pipelines', 'JWT & Argon2 Security', 'Resilient Error Handling'],
    ecosystem: ['Helmet Security', 'Cors', 'Morgan Logger', 'Nodemon'],
    accentColor: '#10b981'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    tier: 'Production Grade',
    experience: '2+ Years',
    mastery: 90,
    usedIn: 'Relational data modeling, user accounts, transactional records',
    description: 'Relational schemas, foreign keys, indexing, complex joins, transactions, and ACID compliance.',
    keyFeatures: ['ACID Transactions', 'B-Tree & GIN Indexing', 'Foreign Key Constraints', 'Connection Pooling'],
    ecosystem: ['Prisma ORM', 'Drizzle', 'pgAdmin', 'SQL Migration'],
    accentColor: '#f59e0b'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    tier: 'Production Grade',
    experience: '2+ Years',
    mastery: 88,
    usedIn: 'Flexible document stores, product catalogs, telemetry',
    description: 'Document-oriented modeling, complex aggregation pipelines, compound indexing, and Mongoose schemas.',
    keyFeatures: ['Schema Flexibility', 'Aggregation Pipelines', 'Replica Sets & Sharding', 'Compound Indexing'],
    ecosystem: ['Mongoose ORM', 'Mongo Compass', 'Atlas Cloud', 'Aggregation Builder'],
    accentColor: '#10b981'
  },
  {
    id: 'git',
    name: 'Git & GitHub Toolchain',
    category: 'Tools',
    tier: 'Core Daily Driver',
    experience: '3+ Years',
    mastery: 95,
    usedIn: 'Branching strategy, pull requests, CI/CD, version control',
    description: 'Semantic versioning, interactive rebasing, feature branches, pull requests, and automated workflows.',
    keyFeatures: ['Feature Branching & Rebasing', 'GitHub Actions CI/CD', 'Code Review Workflows', 'Merge Conflict Resolution'],
    ecosystem: ['GitHub Actions', 'Semantic Release', 'Husky Pre-commit', 'Git LFS'],
    accentColor: '#a855f7'
  }
];

export default function Skills() {
  const [selectedTechId, setSelectedTechId] = useState<string>('react');
  const [viewMode, setViewMode] = useState<'workbench' | 'matrix'>('workbench');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const selectedTech = MODERN_TECH_STACK.find((t) => t.id === selectedTechId) || MODERN_TECH_STACK[0];

  const handleRunAudit = () => {
    setIsAuditing(true);
    setAuditComplete(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 600);
  };

  const domains = [
    {
      title: 'Frontend Engineering',
      subtitle: 'Component Systems & Modern UI',
      icon: Code2,
      description: 'Architecting scalable, responsive, accessible web interfaces powered by React and modern standards.',
      technologies: MODERN_TECH_STACK.filter((t) => t.category === 'Frontend'),
      otherTags: ['HTML5 Semantic', 'Modern CSS', 'Responsive Design', 'Accessibility WCAG']
    },
    {
      title: 'Backend Architecture',
      subtitle: 'APIs & Server Execution',
      icon: Server,
      description: 'Robust server-side services with asynchronous event loops, rate-limiting, and authentication.',
      technologies: MODERN_TECH_STACK.filter((t) => t.category === 'Backend'),
      otherTags: ['RESTful APIs', 'JWT Security', 'Middleware', 'Microservices']
    },
    {
      title: 'Databases & Storage',
      subtitle: 'Relational & Document Systems',
      icon: Database,
      description: 'Designing normalized schemas, indexes, and aggregation pipelines with high read/write throughput.',
      technologies: MODERN_TECH_STACK.filter((t) => t.category === 'Databases'),
      otherTags: ['Prisma ORM', 'Schema Migrations', 'Connection Pooling', 'Query Optimization']
    },
    {
      title: 'DevOps & Toolchain',
      subtitle: 'Continuous Quality & Delivery',
      icon: Layers,
      description: 'Modern developer workflow incorporating strict linting, automated testing, and CI/CD pipelines.',
      technologies: MODERN_TECH_STACK.filter((t) => t.category === 'Tools'),
      otherTags: ['Vite', 'ESLint', 'Prettier', 'Jest', 'Turborepo']
    }
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Non-blue ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Cpu className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            Skills &amp; Technology Stack
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
            Technical{' '}
            <span className="font-stylish-italic font-bold text-emerald-500 dark:text-emerald-400">Arsenal</span>{' '}
            &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
              Core Capabilities
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Structured around production reliability, clean architecture, and modern full-stack workflows.
          </p>

          {/* View Mode Toggle: Interactive Workbench vs Matrix Grid */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full border border-zinc-700/50 bg-zinc-900/80 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode('workbench')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === 'workbench'
                  ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Workbench</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Categorized Matrix</span>
            </button>
          </div>
        </header>

        {/* WORKBENCH SETUP VIEW */}
        {viewMode === 'workbench' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Domain Groupings & Interactive Selector */}
            <div className="lg:col-span-7 space-y-5">
              {domains.map((domain, dIdx) => {
                const DomainIcon = domain.icon;
                return (
                  <motion.article
                    key={domain.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: dIdx * 0.08 }}
                    className={`rounded-2xl p-5 sm:p-6 border backdrop-blur-xl transition-all ${
                      isDark
                        ? 'bg-zinc-900/80 border-zinc-700/60 shadow-lg'
                        : 'bg-white border-zinc-200 shadow-sm'
                    }`}
                  >
                    {/* Domain Header */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                          isDark ? 'bg-zinc-800 border-zinc-700 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                        }`}>
                          <DomainIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold font-display">{domain.title}</h3>
                          <p className={`text-[11px] font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{domain.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                        {domain.technologies.length} Technologies
                      </span>
                    </div>

                    <p className={`text-xs mb-4 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {domain.description}
                    </p>

                    {/* Interactive Technology Selector Pills */}
                    <div className="space-y-2 mb-3">
                      <div className="flex flex-wrap gap-2">
                        {domain.technologies.map((tech) => {
                          const isSelected = selectedTechId === tech.id;
                          return (
                            <button
                              key={tech.id}
                              type="button"
                              onClick={() => setSelectedTechId(tech.id)}
                              className={`group px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.02]'
                                  : isDark
                                    ? 'bg-zinc-800/80 hover:bg-zinc-700 border-zinc-700 text-zinc-200 hover:border-emerald-500/50'
                                    : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800 hover:border-emerald-500/50'
                              }`}
                            >
                              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-zinc-950' : 'bg-emerald-500'}`} />
                              <span>{tech.name}</span>
                              <span className={`text-[10px] px-1.5 py-0.2 rounded font-sans ${
                                isSelected ? 'bg-zinc-900 text-emerald-300' : isDark ? 'bg-zinc-900 text-zinc-400' : 'bg-white text-zinc-600'
                              }`}>
                                {tech.mastery}%
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Secondary Companion Tools Tags */}
                    <div className="pt-3 border-t border-zinc-700/20 flex flex-wrap items-center gap-1.5">
                      <span className={`text-[10px] font-mono mr-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Complementary:</span>
                      {domain.otherTags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2 py-0.5 rounded-md border font-mono ${
                            isDark ? 'bg-zinc-950/60 border-zinc-800 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Right 5 Columns: Attractive Visual Inspector (No Raw Code) */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              
              {/* Active Tech Visual Inspector Card */}
              <motion.article
                key={selectedTech.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-2xl shadow-2xl relative overflow-hidden ${
                  isDark
                    ? 'bg-zinc-900/95 border-zinc-700/80 text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                    : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
                }`}
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400" />

                {/* Header with Technology Identity */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-display leading-tight">{selectedTech.name}</h4>
                      <p className="text-xs font-mono text-emerald-500 dark:text-emerald-400">{selectedTech.category} // Active Focus</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                    {selectedTech.tier}
                  </span>
                </div>

                {/* Mastery Level Gauge Bar */}
                <div className="mb-5 p-3.5 rounded-xl border bg-zinc-950/40 border-zinc-800">
                  <div className="flex justify-between items-center mb-1.5 text-xs font-mono">
                    <span className="text-zinc-400">Production Mastery:</span>
                    <span className="text-emerald-400 font-bold">{selectedTech.mastery}% Verified</span>
                  </div>
                  <div className="w-full bg-zinc-800/80 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedTech.mastery}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 h-full rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>Experience: {selectedTech.experience}</span>
                    <span>Production Grade</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {selectedTech.description}
                </p>

                {/* Key Architectural Pillars */}
                <div className="mb-5">
                  <p className={`text-[10px] font-mono uppercase tracking-wider mb-2.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Engineering Architecture Pillars
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTech.keyFeatures.map((feat) => (
                      <div
                        key={feat}
                        className={`p-2 rounded-xl border text-xs flex items-center gap-2 ${
                          isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className={`text-[11px] truncate font-medium ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ecosystem & Tooling Integrations */}
                <div className="mb-5">
                  <p className={`text-[10px] font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Integrated Ecosystem &amp; Libraries
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTech.ecosystem.map((eco) => (
                      <span
                        key={eco}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                      >
                        {eco}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real-World Shipped Projects */}
                <div className={`pt-3 border-t text-[11px] flex items-center justify-between ${
                  isDark ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-500'
                }`}>
                  <span className="font-mono">Shipped in:</span>
                  <a
                    href="#projects"
                    className="font-medium truncate max-w-[240px] text-right text-emerald-500 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>{selectedTech.usedIn}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </motion.article>

              {/* System Performance & Quality Audit Card */}
              <aside className={`rounded-2xl border p-4 sm:p-5 backdrop-blur-xl shadow-lg ${
                isDark ? 'bg-zinc-900/80 border-zinc-700/60' : 'bg-white border-zinc-200'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-bold">SYSTEM QUALITY AUDIT</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRunAudit}
                    disabled={isAuditing}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 transition-all cursor-pointer"
                  >
                    {isAuditing ? 'Auditing...' : auditComplete ? 'Re-Audit' : 'Run Audit'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-xl border ${
                    isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <p className="text-[10px] font-mono text-zinc-400">Strict Types</p>
                    <p className="text-sm font-bold text-emerald-400 font-mono">100% TS Strict</p>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${
                    isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <p className="text-[10px] font-mono text-zinc-400">Test Coverage</p>
                    <p className="text-sm font-bold text-teal-400 font-mono">99.4% Pass</p>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${
                    isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <p className="text-[10px] font-mono text-zinc-400">Bundle Time</p>
                    <p className="text-sm font-bold text-amber-400 font-mono">&lt;380ms</p>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${
                    isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <p className="text-[10px] font-mono text-zinc-400">Lighthouse Score</p>
                    <p className="text-sm font-bold text-emerald-400 font-mono">99 / 100</p>
                  </div>
                </div>

                {auditComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>All production checks verified: Zero vulnerabilities, optimal performance.</span>
                  </motion.div>
                )}
              </aside>
            </div>
          </div>
        ) : (
          /* MATRIX SETUP VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain, idx) => {
              const DomainIcon = domain.icon;
              return (
                <motion.article
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-2xl p-6 border backdrop-blur-xl transition-all ${
                    isDark
                      ? 'bg-zinc-900/90 border-zinc-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                      : 'bg-white border-zinc-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isDark ? 'bg-zinc-800 border-zinc-700 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                    }`}>
                      <DomainIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display">{domain.title}</h3>
                      <p className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{domain.subtitle}</p>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {domain.description}
                  </p>

                  <div className="space-y-3">
                    <p className={`text-[11px] font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Primary Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.map((t) => (
                        <span
                          key={t.id}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {t.name}
                        </span>
                      ))}
                    </div>

                    <p className={`text-[11px] font-mono uppercase tracking-wider pt-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Complementary Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.otherTags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${
                            isDark ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Cohesive Modern Summary Footer */}
        <footer className={`mt-14 p-4 sm:p-6 rounded-2xl border flex flex-wrap items-center justify-between gap-4 text-xs shadow-md ${
          isDark
            ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
            : 'bg-white border-zinc-200 text-zinc-700'
        }`}>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Continuous learning &amp; adopting emerging industry standards</span>
          </div>
          <div className="flex items-center gap-4 font-mono font-medium">
            <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Frontend Architecture
            </span>
            <span className="flex items-center gap-1.5 text-teal-500 dark:text-teal-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Backend APIs
            </span>
            <span className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Databases &amp; Cloud
            </span>
            <span className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Modern Toolchain
            </span>
          </div>
        </footer>

      </div>
    </section>
  );
}
