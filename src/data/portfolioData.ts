import { Project, Skill, Service, TimelineItem, Statistic } from '../types';

export const MEHRAN_PROFILE = {
  name: "MEHRAN ALI",
  title: "Software Engineer & Full Stack Web Developer",
  status: "Available for Projects",
  tagline: "Building modern, scalable and interactive web experiences with clean code and thoughtful design.",
  bio: "I am a dedicated Software Engineering student and Full Stack Web Developer with a strong passion for architecting high-performance digital products. My focus lies at the intersection of aesthetic frontend design, robust backend systems, and responsive user experiences that scale seamlessly.",
  email: "mehrannali57@gmail.com",
  location: "Islamabad / Remote Worldwide",
  socials: {
    github: "https://github.com/mehrannali57",
    linkedin: "https://linkedin.com/in/mehrannali",
    fiverr: "https://fiverr.com",
    email: "mailto:mehrannali57@gmail.com"
  }
};

export const PORTFOLIO_STATS: Statistic[] = [
  {
    label: "10+ Projects",
    value: 12,
    suffix: "+",
    sublabel: "Shipped & Production-Ready"
  },
  {
    label: "Multiple Technologies",
    value: 18,
    suffix: "+",
    sublabel: "Modern Frameworks & Stacks"
  },
  {
    label: "Responsive Designs",
    value: 100,
    suffix: "%",
    sublabel: "Mobile-First Precision"
  },
  {
    label: "Full Stack Development",
    value: 100,
    suffix: "%",
    sublabel: "End-to-End Solutions"
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    percentage: 95,
    iconName: "Atom",
    glowColor: "#06b6d4",
    description: "Component architecture, hooks, state management, and ecosystem"
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    percentage: 90,
    iconName: "Zap",
    glowColor: "#818cf8",
    description: "Server-side rendering, App Router, SSR/SSG, and optimization"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    percentage: 92,
    iconName: "FileCode",
    glowColor: "#3b82f6",
    description: "Strict typing, generics, interfaces, and compile-time safety"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Expert",
    percentage: 96,
    iconName: "Code2",
    glowColor: "#facc15",
    description: "ES6+, async/await, closures, DOM manipulation & event loop"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    percentage: 95,
    iconName: "Palette",
    glowColor: "#38bdf8",
    description: "Utility-first design systems, animations, and fluid responsive layouts"
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: "Proficient",
    percentage: 84,
    iconName: "Boxes",
    glowColor: "#10b981",
    description: "Composition API, reactivity engine, Pinia, and single-file components"
  },
  {
    name: "Shadcn UI",
    category: "Frontend",
    level: "Advanced",
    percentage: 90,
    iconName: "Sparkles",
    glowColor: "#c084fc",
    description: "Accessible, customizable, high-craft Radix-backed UI systems"
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: "Advanced",
    percentage: 90,
    iconName: "LayoutGrid",
    glowColor: "#9333ea",
    description: "Grid architectures, rapid prototyping, and responsive utilities"
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: "Expert",
    percentage: 98,
    iconName: "FileText",
    glowColor: "#f97316",
    description: "Semantic web structure, accessibility (a11y), and SEO standards"
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Expert",
    percentage: 96,
    iconName: "Layers",
    glowColor: "#2563eb",
    description: "Flexbox, CSS Grid, custom properties, animations, and 3D transforms"
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    percentage: 90,
    iconName: "Server",
    glowColor: "#22c55e",
    description: "Event-driven runtime, asynchronous I/O, and microservices"
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Advanced",
    percentage: 92,
    iconName: "Cpu",
    glowColor: "#a3a3a3",
    description: "RESTful architecture, custom middleware, auth, and error handling"
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Expert",
    percentage: 94,
    iconName: "Network",
    glowColor: "#0ea5e9",
    description: "API design, versioning, JWT security, documentation, and rate limiting"
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Advanced",
    percentage: 88,
    iconName: "Database",
    glowColor: "#336791",
    description: "Relational modeling, indexing, joins, migrations, and ACID compliance"
  },
  {
    name: "MongoDB",
    category: "Databases",
    level: "Advanced",
    percentage: 90,
    iconName: "HardDrive",
    glowColor: "#13aa52",
    description: "NoSQL document schemas, aggregation pipelines, and Mongoose ORM"
  },
  {
    name: "MySQL",
    category: "Databases",
    level: "Advanced",
    percentage: 86,
    iconName: "DatabaseBackup",
    glowColor: "#f29111",
    description: "Relational queries, transaction management, and schema optimization"
  },
  {
    name: "Supabase",
    category: "Databases",
    level: "Advanced",
    percentage: 89,
    iconName: "Flame",
    glowColor: "#3ecf8e",
    description: "Realtime subscriptions, Postgres database, Row Level Security & Auth"
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    level: "Advanced",
    percentage: 94,
    iconName: "GitBranch",
    glowColor: "#f05032",
    description: "Branching workflows, rebasing, merge resolutions, and version control"
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Advanced",
    percentage: 95,
    iconName: "GitPullRequest",
    glowColor: "#a855f7",
    description: "CI/CD actions, collaboration, code reviews, and repo management"
  },
  {
    name: "VS Code",
    category: "Tools",
    level: "Expert",
    percentage: 98,
    iconName: "Terminal",
    glowColor: "#007acc",
    description: "Advanced debugging, linting setups, snippets, and productivity extensions"
  },
  {
    name: "Vercel",
    category: "Tools",
    level: "Advanced",
    percentage: 92,
    iconName: "Globe",
    glowColor: "#e2e8f0",
    description: "Serverless deployments, edge network caching, and preview pipelines"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "vision-ui-dashboard",
    title: "Vision UI Dashboard",
    subtitle: "Enterprise Next-Gen Analytics Platform",
    description: "A futuristic enterprise dashboard featuring real-time financial metrics, dynamic telemetry graphs, glassmorphic analytics widgets, and dark mode theming.",
    longDescription: "Vision UI Dashboard is engineered to provide high-throughput observability for web applications. It delivers real-time data streaming, modular chart panels, role-based controls, and a bespoke glassmorphism visual system tailored for modern SaaS products.",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons"],
    category: "Dashboard",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://vision-ui-demo.vercel.app",
    githubUrl: "https://github.com/mehrannali57/vision-ui-dashboard",
    highlights: [
      "Dynamic real-time telemetry streaming charts",
      "Tailwind-powered responsive glassmorphism interface",
      "Interactive data filtration and multi-series comparison",
      "Modular dashboard widget layout with responsive states"
    ],
    metrics: { label: "Performance Score", value: "99/100" }
  },
  {
    id: "tastecraft",
    title: "TasteCraft",
    subtitle: "Culinary Discovery & Recipe Platform",
    description: "A full-featured culinary web application connecting food enthusiasts with intelligent ingredient-based recipe discovery, interactive cooking steps, and dietary filters.",
    longDescription: "TasteCraft revolutionizes home cooking by allowing users to explore curated culinary recipes based on pantry ingredients. Features interactive cooking timers, smart nutritional breakdowns, user recipe uploads, and real-time community reviews.",
    techTags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://tastecraft-app.vercel.app",
    githubUrl: "https://github.com/mehrannali57/tastecraft-fullstack",
    highlights: [
      "Ingredient-to-recipe AI recommendation logic",
      "Node.js & Express REST API with token authentication",
      "Interactive step-by-step cooking timeline with audio cues",
      "MongoDB aggregation pipeline for quick culinary filtering"
    ],
    metrics: { label: "Active Recipes", value: "2,500+" }
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "High-Performance Digital Storefront",
    description: "An end-to-end e-commerce store with instant product search, real-time inventory management, checkout pipelines, and PostgreSQL order management.",
    longDescription: "A modern, transactional digital shopping platform engineered with React and a robust Node.js backend. Powered by PostgreSQL for transactional reliability, complete with cart synchronization, payment gateway integration, and customer order history.",
    techTags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    category: "E-Commerce",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://apex-store-demo.vercel.app",
    githubUrl: "https://github.com/mehrannali57/ecommerce-postgres-platform",
    highlights: [
      "Full ACID transactional safety with PostgreSQL database",
      "Sub-second faceted product filtering and elastic search",
      "Persistent state cart and multi-step secure checkout",
      "Admin analytics panel for stock inventory management"
    ],
    metrics: { label: "Catalog Capacity", value: "10k+ SKUs" }
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    subtitle: "Data Visualization & Metrics Command Center",
    description: "Comprehensive metrics aggregation tool converting complex database telemetry into intuitive visualizations, KPI tracking cards, and exportable reports.",
    longDescription: "An advanced data visualization suite designed to monitor system health and business growth. Connects to RESTful data endpoints, providing configurable gauge charts, heatmaps, automated anomaly warnings, and CSV/PDF export capability.",
    techTags: ["React", "TypeScript", "REST API", "Database", "Tailwind CSS"],
    category: "Dashboard",
    featured: true,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://pulse-metrics-demo.vercel.app",
    githubUrl: "https://github.com/mehrannali57/analytics-command-dashboard",
    highlights: [
      "Real-time event logging and KPI card tracking",
      "Custom REST API integration with automated caching",
      "Multi-dimensional data slicing across timeframes",
      "Exportable executive reporting with high-res charting"
    ],
    metrics: { label: "Query Speed", value: "<45ms" }
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "edu-1",
    period: "2023 — Present",
    title: "Software Engineering Education",
    role: "Undergraduate Scholar",
    institution: "University Institute of Information Technology",
    description: "Pursuing a rigorous Software Engineering degree focusing on object-oriented programming, data structures, algorithms, operating systems, database design, and software architecture.",
    highlights: ["Algorithms & Data Structures", "Software Architecture & Design Patterns", "Database Systems & Operating Systems"],
    type: "education"
  },
  {
    id: "journey-web",
    period: "2023 — 2024",
    title: "Web Development Foundation",
    role: "Core Web Technologies",
    institution: "Self-Directed & Technical Academies",
    description: "Mastered semantic HTML5, modern CSS3 (Flexbox, Grid, custom keyframes), and modern JavaScript (ES6+). Built dozens of foundational interfaces focusing on clean semantics and performance.",
    highlights: ["Semantic HTML5 & Accessibility", "Advanced CSS3 Animations & Responsive Design", "Modern JavaScript (Async, DOM, APIs)"],
    type: "frontend"
  },
  {
    id: "journey-frontend",
    period: "2024",
    title: "Frontend Engineering Mastery",
    role: "Modern Frontend Specialist",
    institution: "Component Architecture & Frameworks",
    description: "Expanded into React.js, Next.js, and TypeScript ecosystems. Adopted Tailwind CSS, Shadcn UI, and state management libraries to craft modern, fluid, production-ready user interfaces.",
    highlights: ["React.js & Next.js App Router", "TypeScript Strict Typing & Reusable Hooks", "Tailwind CSS & High-Performance UI Systems"],
    type: "frontend"
  },
  {
    id: "journey-fullstack",
    period: "2024 — 2025",
    title: "Full Stack Development & Backend",
    role: "Full Stack Developer",
    institution: "Node.js & Database Systems",
    description: "Bridged client and server with Node.js, Express, RESTful APIs, PostgreSQL, MySQL, and MongoDB. Implemented secure JWT authentication, CRUD operations, and database relationships.",
    highlights: ["RESTful API Architecture & JWT Auth", "Relational (Postgres/MySQL) & NoSQL (MongoDB)", "Server-side Optimization & Supabase Realtime"],
    type: "fullstack"
  },
  {
    id: "journey-projects",
    period: "2025",
    title: "Personal Projects & Complex Architectures",
    role: "Architect & Lead Developer",
    institution: "Independent Portfolio Milestones",
    description: "Shipped flagship applications including Vision UI Dashboard, TasteCraft culinary platform, high-throughput E-Commerce store, and analytics systems.",
    highlights: ["Vision UI Dashboard (React + TS)", "TasteCraft Full-Stack Platform", "E-Commerce with PostgreSQL & Node.js"],
    type: "projects"
  },
  {
    id: "journey-freelance",
    period: "2025 — Present",
    title: "Freelance & Client Solutions",
    role: "Full Stack Web Developer",
    institution: "Global Clients & Open Source",
    description: "Collaborating with clients and startups on Fiverr and international platforms to build responsive, bespoke web applications with fast load times and clean codebases.",
    highlights: ["Custom Web Application Development", "Performance & SEO Optimization", "Direct Client Consultation & Rapid Delivery"],
    type: "freelance"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    tagline: "Modern responsive interfaces using React, TypeScript and Tailwind CSS.",
    description: "Delivering dynamic, high-performance web applications with clean component hierarchies, fluid animations, and pixel-perfect responsiveness across all screens.",
    iconName: "Layout",
    color: "#10b981",
    features: [
      "React.js & Next.js web applications",
      "TypeScript type-safe architecture",
      "Tailwind CSS responsive systems",
      "Smooth micro-interactions & 60fps animations",
      "Cross-browser & mobile optimization"
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Development",
    tagline: "Complete web applications with frontend, backend, APIs and databases.",
    description: "Building seamless end-to-end digital solutions from database schema design to server logic, secure authentication, and reactive client dashboards.",
    iconName: "Layers",
    color: "#14b8a6",
    features: [
      "End-to-end architecture & workflow",
      "Secure authentication & authorization",
      "Real-time data synchronization",
      "Database integration (SQL & NoSQL)",
      "Continuous deployment & hosting"
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    id: "ui-dev",
    title: "UI Development",
    tagline: "Clean, modern and responsive UI implementation.",
    description: "Transforming design mockups into living, interactive web interfaces with exceptional attention to typography, spacing, glassmorphism, and accessibility.",
    iconName: "Sparkles",
    color: "#f59e0b",
    features: [
      "Pixel-perfect Figma to code translation",
      "Design systems & reusable UI libraries",
      "Glassmorphism & futuristic aesthetics",
      "Accessible ARIA standards (WCAG compliant)",
      "Dark & light theme support"
    ],
    techStack: ["Tailwind CSS", "Shadcn UI", "CSS3", "HTML5", "Lucide"]
  },
  {
    id: "api-database",
    title: "API & Database Integration",
    tagline: "REST APIs and database-driven applications.",
    description: "Architecting reliable, scalable backend APIs with clean endpoints, structured data validation, relational indexing, and seamless cloud database integrations.",
    iconName: "Database",
    color: "#a855f7",
    features: [
      "RESTful API design & versioning",
      "PostgreSQL, MySQL & MongoDB schemas",
      "Supabase realtime & serverless pipelines",
      "Third-party service integrations",
      "Data security & input sanitization"
    ],
    techStack: ["Express.js", "REST APIs", "PostgreSQL", "Supabase", "MySQL"]
  }
];
