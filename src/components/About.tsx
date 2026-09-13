import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  GraduationCap,
  Code2,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Compass,
  Monitor,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { MEHRAN_PROFILE, PORTFOLIO_STATS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Counter component for animated statistics
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const coreCompetencies = [
    {
      icon: GraduationCap,
      title: "Software Engineering Scholar",
      desc: "Deep theoretical grounding in computer science algorithms, system design, data structures, and software lifecycles.",
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: Code2,
      title: "Modern Frontend Development",
      desc: "Specialized in React, Next.js, and TypeScript with component-driven architecture and fluid micro-interactions.",
      color: "text-teal-500 dark:text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    },
    {
      icon: Cpu,
      title: "Backend & API Engineering",
      desc: "Crafting scalable Node.js and Express services, RESTful API design, JWT security, and high-throughput handlers.",
      color: "text-amber-500 dark:text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      icon: Database,
      title: "Database Integration",
      desc: "Relational schemas with PostgreSQL & MySQL, alongside flexible document modeling using MongoDB and Supabase.",
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: Compass,
      title: "Problem Solving & Optimization",
      desc: "Writing maintainable, DRY codebases with rigorous attention to runtime performance, SEO, and accessibility.",
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Layers,
      title: "Responsive Web Design",
      desc: "Flawless multi-breakpoint adaptability, fluid spacing, and high-DPI crispness across all screens.",
      color: "text-rose-500 dark:text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative ambient non-blue gradient shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Terminal className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            About Mehran Ali
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
            Architecting The{' '}
            <span className="font-stylish-italic font-bold text-emerald-500 dark:text-emerald-400">Future</span>{' '}
            of{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">
              Interactive Web
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            Bridging software engineering rigor with contemporary design sensibilities to engineer fast, resilient, and engaging web applications.
          </p>
        </header>

        {/* Top Split: Animated Profile / Overview Article & Core Competencies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Profile Article featuring developer photo and coding narrative */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-5 rounded-3xl backdrop-blur-2xl border p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden shadow-2xl ${
              isDark
                ? 'bg-zinc-900/90 border-zinc-700/60 text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
            }`}
          >
            {/* Top gradient edge shimmer */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-amber-400 opacity-90" />
            
            <div>
              {/* Profile Card Header with Developer Monogram Emblem */}
              <header className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 p-[1.5px] shadow-lg shadow-emerald-500/25">
                    <div className={`w-full h-full rounded-[14px] flex items-center justify-center relative overflow-hidden ${
                      isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-amber-500/15" />
                      <div className="relative flex items-center justify-center font-display font-black text-base tracking-tighter select-none">
                        <span className="text-emerald-500 dark:text-emerald-400 text-xs font-mono">&lt;</span>
                        <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">M</span>
                        <span className="font-stylish-italic text-base font-bold text-amber-400">A</span>
                        <span className="text-emerald-500 dark:text-emerald-400 text-xs font-mono">/&gt;</span>
                      </div>
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-900 shadow-[0_0_10px_#10b981]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display flex items-center gap-1.5">
                    {MEHRAN_PROFILE.name}
                    <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    Software Engineering Scholar
                  </p>
                  <p className={`text-xs ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    Full Stack Web Developer
                  </p>
                </div>
              </header>

              {/* Bio Narrative */}
              <div className={`space-y-3.5 text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                isDark ? 'text-zinc-200' : 'text-zinc-700'
              }`}>
                <p>
                  Hello! I am a passionate <strong className="font-bold text-zinc-950 dark:text-white">Software Engineering</strong> undergraduate student and <span className="font-stylish-italic font-bold text-emerald-600 dark:text-emerald-400">Full Stack Web Developer</span>. My journey centers around building modern, scalable digital systems that don&apos;t just work seamlessly under the hood, but also delight users through fluid interfaces and responsive aesthetics.
                </p>
                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Whether creating <strong className="font-semibold text-zinc-900 dark:text-zinc-200">high-throughput backend APIs</strong> with Node.js and PostgreSQL or crafting immersive, animated frontend architectures with React, Next.js, and Three.js, I approach every project with <span className="font-stylish-italic font-semibold text-amber-500 dark:text-amber-400">clean code conventions</span> and structured problem solving.
                </p>
              </div>

              {/* Quick Key Facts in Semantic Definition List */}
              <dl className={`space-y-3 pt-4 border-t mb-6 ${
                isDark ? 'border-zinc-800' : 'border-zinc-200'
              }`}>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <dt className={isDark ? 'text-zinc-400 font-mono' : 'text-zinc-500 font-mono'}>Specialization</dt>
                  <dd className="font-semibold">Full Stack &amp; Reactive UI</dd>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <dt className={isDark ? 'text-zinc-400 font-mono' : 'text-zinc-500 font-mono'}>Status</dt>
                  <dd className="text-emerald-500 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                    Open for Client &amp; Full-time Work
                  </dd>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <dt className={isDark ? 'text-zinc-400 font-mono' : 'text-zinc-500 font-mono'}>Academic Discipline</dt>
                  <dd className={isDark ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-medium'}>Software Engineering</dd>
                </div>
              </dl>
            </div>

            {/* Quick Terminal Code Snippet */}
            <aside className={`rounded-xl border p-3.5 font-mono text-xs shadow-inner ${
              isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-300' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
            }`}>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                <span className={`text-[10px] ml-2 font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>mehran.config.ts</span>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400">
                const developer = &#123;
              </p>
              <p className="pl-4">
                name: <span className="text-amber-500 dark:text-amber-300">&apos;Mehran Ali&apos;</span>,
              </p>
              <p className="pl-4">
                mindset: <span className="text-amber-500 dark:text-amber-300">&apos;Clean Code + Fast UX&apos;</span>,
              </p>
              <p className="pl-4">
                readyForNewChallenges: <span className="text-emerald-500 dark:text-emerald-400 font-bold">true</span>
              </p>
              <p className="text-emerald-600 dark:text-emerald-400">&#125;;</p>
            </aside>
          </motion.article>

          {/* Right: Core Engineering Strengths Section with Semantic Articles */}
          <section aria-label="Core Technical Competencies" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <motion.article
                  key={comp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`rounded-2xl backdrop-blur-xl border p-5 transition-all duration-300 group shadow-lg ${
                    isDark
                      ? 'bg-zinc-900/80 border-zinc-800 hover:bg-zinc-800/90 hover:border-emerald-500/40 text-zinc-100'
                      : 'bg-white border-zinc-200 hover:bg-zinc-50 hover:border-emerald-500/40 text-zinc-900 shadow-sm'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl ${comp.bg} ${comp.border} border flex items-center justify-center ${comp.color} mb-3.5 group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display mb-1.5 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {comp.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? 'text-zinc-300' : 'text-zinc-600'
                  }`}>
                    {comp.desc}
                  </p>
                </motion.article>
              );
            })}
          </section>
        </div>

        {/* Developer Coding Workstation & Work Environment Showcase (Requested by User) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl border overflow-hidden mb-16 shadow-2xl backdrop-blur-xl ${
            isDark ? 'bg-zinc-900/90 border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white border-zinc-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Interactive Architecture Pipeline & Engineering Rig Visual */}
            <div className="lg:col-span-6 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-center">
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    STACK TOPOLOGY &bull; ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    4-TIER PIPELINE
                  </span>
                </div>

                {/* Tier 1: Client Experience */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  isDark ? 'bg-zinc-950/80 border-zinc-800 hover:border-emerald-500/50' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">
                        01
                      </div>
                      <span className="text-xs font-bold font-display">Client Layer</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">React 19 &bull; Next.js</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Accessible, responsive UI with Tailwind CSS &amp; Motion animations.
                  </p>
                </div>

                {/* Tier 2: Serverless API & Microservices */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  isDark ? 'bg-zinc-950/80 border-zinc-800 hover:border-teal-500/50' : 'bg-zinc-50 border-zinc-200 hover:border-teal-500/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-mono">
                        02
                      </div>
                      <span className="text-xs font-bold font-display">API Gateway &amp; Services</span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-400">Node.js &bull; Express</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    RESTful APIs, JWT authentication, and resilient rate-limiting.
                  </p>
                </div>

                {/* Tier 3: Database & Caching */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  isDark ? 'bg-zinc-950/80 border-zinc-800 hover:border-amber-500/50' : 'bg-zinc-50 border-zinc-200 hover:border-amber-500/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono">
                        03
                      </div>
                      <span className="text-xs font-bold font-display">Data &amp; Persistence</span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400">PostgreSQL &bull; Prisma</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Strict relational schema integrity, indexes, and connection pooling.
                  </p>
                </div>

                {/* Tier 4: Quality & Delivery */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  isDark ? 'bg-zinc-950/80 border-zinc-800 hover:border-emerald-500/50' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">
                        04
                      </div>
                      <span className="text-xs font-bold font-display">Testing &amp; CI/CD</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Jest &bull; Vite &bull; Git</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Automated static analysis, unit testing, and zero-downtime deployment.
                  </p>
                </div>
              </div>

              {/* Ambient Glow behind architecture cards */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Workstation Description & Engineering Discipline */}
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Monitor className="w-3.5 h-3.5" />
                Workstation &amp; Development Flow
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
                Crafted for Speed, Precision, and Deep Focus
              </h3>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Great software demands an environment engineered for deep work. My daily workstation pairs high-refresh dual displays for concurrent code and test tracking, terminal multiplexing with custom shell scripts, and an automated continuous delivery pipeline.
              </p>

              {/* Workstation Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <p className="text-xs font-mono text-emerald-500 font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Fast Build Times
                  </p>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Sub-second HMR with Vite &amp; Turbopack
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <p className="text-xs font-mono text-teal-500 font-semibold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Strict Static Checks
                  </p>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    100% strict TypeScript &amp; ESLint
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Animated Statistics Banner Section */}
        <motion.section
          aria-label="Track Record & Metrics"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl backdrop-blur-2xl border p-6 sm:p-10 shadow-2xl ${
            isDark
              ? 'bg-zinc-900/90 border-zinc-800 shadow-[0_15px_45px_rgba(0,0,0,0.5)]'
              : 'bg-white border-zinc-200 shadow-lg'
          }`}
        >
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x ${
            isDark ? 'divide-zinc-800' : 'divide-zinc-200'
          }`}>
            {PORTFOLIO_STATS.map((stat, idx) => (
              <figure
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent mb-1.5 font-display tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <figcaption className="text-sm sm:text-base font-bold mb-0.5">
                  {stat.label}
                </figcaption>
                <p className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {stat.sublabel}
                </p>
              </figure>
            ))}
          </div>
        </motion.section>

      </div>
    </section>
  );
}
