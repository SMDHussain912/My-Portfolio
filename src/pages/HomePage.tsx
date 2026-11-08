import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownRight, ArrowUpRight, Code2, BriefcaseBusiness, Mail, Sparkles, GraduationCap, Terminal, Cpu, Gamepad2, Globe2, Search, X, Activity, Command, ChevronRight } from 'lucide-react'

 gsap.registerPlugin(ScrollTrigger)

const focusAreas = ['Full-Stack Development', 'AI & Machine Learning', 'Game Development', 'Systems Programming']

const journey = [
  { year: '2024', title: 'Started Computer Engineering', detail: 'Began my Diploma in Computer Engineering at Andhra Polytechnic, Kakinada, and started building a stronger foundation in programming and computing.' },
  { year: '2025', title: 'Learning by building', detail: 'Expanded into web development, databases, programming languages and independent software projects.' },
  { year: '2026', title: 'Industry experience at NIC', detail: 'Joined the National Informatics Centre at the Collector Office, Kakinada for industrial training and contributed to institutional web development and PM-SETU.' },
  { year: 'NOW', title: 'Exploring deeper engineering', detail: 'Continuing to develop projects across full-stack software, local AI systems and game-engine technology.' },
]

const projects = [
  {
    number: '01', name: 'PM-SETU', category: 'Government / Institutional Platform',
    description: 'Contributed during NIC industrial training to an institutional platform supporting ITI upgradation workflows. The public repositories contain a React + Vite frontend and a TypeScript + Express backend using Prisma and PostgreSQL.',
    stack: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    status: 'NIC industrial training contribution',
    links: [
      { label: 'Frontend', href: 'https://github.com/SMDHussain912/PM-SETU-Frontend' },
      { label: 'Backend', href: 'https://github.com/SMDHussain912/PM-SETU-Backend' },
    ],
  },
  {
    number: '02', name: 'ArcEngine', category: 'C++ Game Engine',
    description: 'An independent 2D/3D game-engine project exploring rendering, scene and entity systems, physics integration, scripting and editor architecture. The current codebase is an evolving prototype.',
    stack: ['C++', 'OpenGL', 'CMake'],
    status: 'In development',
    links: [{ label: 'Repository', href: 'https://github.com/SMDHussain912/ArcEngine' }],
  },
  {
    number: '03', name: 'MiraV2', category: 'Local AI / Linux Assistant',
    description: 'An early-stage, local-first Linux desktop assistant written in C++. Speech recognition with whisper.cpp, PipeWire audio capture and an activation hotkey are implemented; intent routing, application launching, input automation, screen understanding and TTS remain planned or incomplete.',
    stack: ['C++', 'whisper.cpp', 'PipeWire'],
    status: 'Early development · core audio and speech components implemented',
    links: [{ label: 'Repository', href: 'https://github.com/SMDHussain912/MiraV2' }],
  },
  {
    number: '04', name: 'ArcTester', category: 'Education / Examination Platform',
    description: 'An offline-first AP ECET CSE mock-test application with an exam engine, question management and performance analytics. Designed to run locally after installation.',
    stack: ['Next.js', 'React', 'TypeScript', 'Express', 'Prisma', 'SQLite', 'Vitest'],
    status: 'Actively developing',
    links: [{ label: 'Repository', href: 'https://github.com/SMDHussain912/ArcTester' }],
  },
  {
    number: '05', name: 'Freight Broker CRM & Carrier Vetting', category: 'Professional Full-Stack Product',
    description: 'Professional development work at Ricoz Innovation on a freight-brokerage CRM, covering carrier management and vetting workflows across web, backend and mobile applications.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Expo'],
    status: 'Professional work · Ricoz Innovation',
    links: [
      { label: 'Frontend', href: 'https://github.com/SMDHussain912/FriegthBrokerCMR-Frontend' },
      { label: 'Backend', href: 'https://github.com/SMDHussain912/FriegthBrokerCMR-Backend' },
      { label: 'Mobile', href: 'https://github.com/SMDHussain912/FriegthBrokerCMR-Mobile' },
    ],
  },
  {
    number: '06', name: 'Polling Officer Allocation System', category: 'Government Workflow / Allocation Software',
    description: 'A polling personnel allocation and administration platform with a React dashboard and Express backend. The repositories include officer and booth management, Excel uploads, allocation workflows, notifications, ID-card design and reporting modules.',
    stack: ['JavaScript', 'React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    status: 'Implemented project · frontend and backend repositories',
    links: [
      { label: 'Frontend', href: 'https://github.com/SMDHussain912/Polling-Officer-Allocation-Frontend' },
      { label: 'Backend', href: 'https://github.com/SMDHussain912/Polling-Officer-Allocation-Backend' },
    ],
  },
]

const otherProjects = [
  { name: 'UniSphere', category: 'Student & Examination Platform', description: 'A full-stack student platform covering exam enrollment, hall tickets, online tests, answer evaluation, results, jobs, applications and role-based administration.', href: 'https://github.com/SMDHussain912/UniSphere', stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose'], status: 'Active development' },
  { name: 'UniChat', category: 'Communication Application', description: 'A communication application repository. Its current source stack and feature completeness still need repository-level verification.', href: 'https://github.com/SMDHussain912/UniChat', stack: [], status: 'Repository details need verification' },
  { name: 'RobotSimulator', category: 'C++ / Robotics Simulation', description: 'A C++17 robot simulator built with a custom project structure, including engine utilities, grid and node logic, robot behavior, A* pathfinding and text-to-speech components.', href: 'https://github.com/SMDHussain912/RobotSimulator', stack: ['C++', 'CMake'], status: 'Independent project' },
  { name: 'Career Navigator', category: 'AI-Powered Learning Platform', description: 'A Node.js and Express career recommendation and learning platform using EJS templates, MongoDB/Mongoose and authentication-related backend components.', href: 'https://github.com/SMDHussain912/Web-server', stack: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB', 'Mongoose'], status: 'Independent project' },
  { name: 'UniTech-Site', category: 'Organization Website', description: 'A responsive one-page website for UniTech Organization, built with standard browser technologies and custom interactions without a build process or external dependencies.', href: 'https://github.com/SMDHussain912/UniTech-Site', stack: ['HTML', 'CSS', 'JavaScript'], status: 'Website project' },
  { name: 'THE-SYSTEM', category: 'Java Application', description: 'A Solo Leveling-inspired progression and level-system project. Its current implementation stack needs source-level verification before technologies are listed.', href: 'https://github.com/SMDHussain912/THE-SYSTEM', stack: [], status: 'Repository details need verification' },
  { name: 'EGCOR', category: 'Institutional Recruitment Website', description: 'An East Godavari Collector Office recruitment website project using an Express server, EJS templates and Mongoose-backed data models.', href: 'https://github.com/SMDHussain912/EGCOR', stack: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB', 'Mongoose'], status: 'Institutional project' },
  { name: 'E-OFFICE', category: 'Office Workflow Web Application', description: 'An E-OFFICE web application repository with an Express server, EJS views and dependencies for authentication, request validation, file handling and application security.', href: 'https://github.com/SMDHussain912/E-OFFICE', stack: ['JavaScript', 'Node.js', 'Express', 'EJS'], status: 'Repository implementation' },
  { name: 'Arc-Dev-Lab', category: 'Programming Laboratory', description: 'A learning repository for programming experiments, prototypes and small projects across multiple development areas. Individual languages should be attributed to specific experiments, not to the whole repository.', href: 'https://github.com/SMDHussain912/Arc-Dev-Lab', stack: [], status: 'Ongoing learning repository' },
]

const allProjects = [
  ...projects,
  ...otherProjects.map((project, index) => ({
    number: String(index + 7).padStart(2, '0'),
    name: project.name,
    category: project.category,
    description: project.description,
    stack: project.stack,
    status: project.status,
    links: [{ label: 'Repository', href: project.href }],
  })),
]

const skillGroups = [
  { icon: Code2, title: 'Programming languages', items: 'C · C++ · Python · JavaScript · TypeScript · C# · Java · Kotlin · PHP · Lua' },
  { icon: Globe2, title: 'Web & frontend development', items: 'HTML · CSS · React · Next.js · Vite · React Router · Three.js · Node.js · Express.js · REST APIs · JWT · Socket.IO · Prisma · Swagger' },
  { icon: Terminal, title: 'Databases', items: 'PostgreSQL · MongoDB · MySQL · SQLite · SQL' },
  { icon: Cpu, title: 'Machine learning & data science', items: 'PyTorch · scikit-learn · NumPy · Pandas · Matplotlib · ONNX' },
  { icon: Gamepad2, title: 'Game & graphics development', items: 'Unity · Godot · Blender · OpenGL · SDL2' },
  { icon: Globe2, title: 'Mobile development', items: 'Android Studio · Expo' },
  { icon: Terminal, title: 'Tools & systems', items: 'Git · GitHub · Docker · Linux · CMake · AWS' },
]

const learningTracks = [
  { label: '01', title: 'Machine learning foundations', detail: 'Strengthening the mathematics behind ML—linear algebra, calculus, probability and statistics—then applying it through scikit-learn and PyTorch.' },
  { label: '02', title: 'Deep learning & modern AI', detail: 'Going deeper into neural networks, tokenization, embeddings, transformers and local language-model systems.' },
  { label: '03', title: 'Advanced C++ & engine development', detail: 'Improving C++ architecture, memory and performance fundamentals, graphics programming, physics integration and tools for ArcEngine.' },
  { label: '04', title: 'Modern web & mobile engineering', detail: 'Building stronger TypeScript and Next.js skills while learning Flutter and cross-platform mobile application development.' },
  { label: '05', title: 'Systems, DevOps & security', detail: 'Exploring Linux internals, deployment workflows, containers, CI/CD, networking and practical cybersecurity foundations.' },
  { label: '06', title: 'Robotics & intelligent systems', detail: 'Connecting programming, sensors, simulation and machine learning to understand autonomous and interactive systems.' },
]

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [projectFilter, setProjectFilter] = useState('All')
  const [projectSearch, setProjectSearch] = useState('')
  const [selectedFocus, setSelectedFocus] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [githubProfile, setGithubProfile] = useState<{ public_repos: number; followers: number } | null>(null)
  const [githubRepos, setGithubRepos] = useState<Array<{ name: string; html_url: string; description: string | null; language: string | null; updated_at: string }>>([])
  const [githubState, setGithubState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalOutput, setTerminalOutput] = useState<string[]>(['Welcome to arc://portfolio', 'Type help to see available commands.'])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[number] | null>(null)
  const [paletteQuery, setPaletteQuery] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedTechnology, setSelectedTechnology] = useState('TypeScript')
  const projectFilters = ['All', 'Personal', 'Professional', 'Institutional']
  const technologyExplorer = Array.from(new Set(['C', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'PHP', 'Lua', 'HTML', 'CSS', ...allProjects.flatMap((project) => project.stack)])).sort((a, b) => a.localeCompare(b))
  const technologyProjects = allProjects.filter((project) => project.stack.some((technology) => technology.toLowerCase() === selectedTechnology.toLowerCase()))
  const visibleProjects = useMemo(() => projects.filter((project) => {
    const kind = project.name === 'Freight Broker CRM & Carrier Vetting'
      ? 'Professional'
      : ['PM-SETU', 'Polling Officer Allocation System'].includes(project.name)
        ? 'Institutional'
        : 'Personal'
    const matchesFilter = projectFilter === 'All' || kind === projectFilter
    const query = projectSearch.trim().toLowerCase()
    const matchesSearch = !query || [project.name, project.category, project.description, ...project.stack]
      .join(' ').toLowerCase().includes(query)
    return matchesFilter && matchesSearch
  }), [projectFilter, projectSearch])


  useEffect(() => {
    let ticking = false
    const updateScrollUI = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0
        document.documentElement.style.setProperty('--reading-progress', String(progress))
        setShowBackToTop(window.scrollY > 620)
        ticking = false
      })
    }
    updateScrollUI()
    window.addEventListener('scroll', updateScrollUI, { passive: true })
    window.addEventListener('resize', updateScrollUI)
    return () => {
      window.removeEventListener('scroll', updateScrollUI)
      window.removeEventListener('resize', updateScrollUI)
    }
  }, [])

  useEffect(() => {
    const page = pageRef.current
    if (!page || window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const moveSpotlight = (event: PointerEvent) => {
      const bounds = page.getBoundingClientRect()
      page.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
      page.style.setProperty('--pointer-y', `${event.clientY - bounds.top + window.scrollY}px`)
    }
    page.addEventListener('pointermove', moveSpotlight, { passive: true })
    return () => page.removeEventListener('pointermove', moveSpotlight)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setRoleIndex((current) => (current + 1) % focusAreas.length), 3200)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const loadGithub = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/SMDHussain912', { signal: controller.signal }),
          fetch('https://api.github.com/users/SMDHussain912/repos?sort=updated&per_page=5', { signal: controller.signal }),
        ])
        if (!profileResponse.ok || !reposResponse.ok) throw new Error('GitHub API unavailable')
        const profile = await profileResponse.json()
        const repos = await reposResponse.json()
        setGithubProfile({ public_repos: profile.public_repos, followers: profile.followers })
        setGithubRepos(repos.map((repo: { name: string; html_url: string; description: string | null; language: string | null; updated_at: string }) => ({
          name: repo.name, html_url: repo.html_url, description: repo.description, language: repo.language, updated_at: repo.updated_at,
        })))
        setGithubState('ready')
      } catch {
        if (!controller.signal.aborted) setGithubState('error')
      }
    }
    loadGithub()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
        setPaletteQuery('')
      }
      if (event.key === 'Escape') { setPaletteOpen(false); setSelectedProject(null) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const runTerminalCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const command = terminalInput.trim().toLowerCase()
    if (!command) return
    const responses: Record<string, string> = {
      help: 'Commands: help, whoami, about, projects, skills, stack, journey, experience, date, time, github, linkedin, email, copy, open <project>, clear',
      about: 'Arc is a multidisciplinary developer exploring web, AI, games and systems engineering.',
      projects: 'Featured work: PM-SETU, ArcEngine, MiraV2, ArcTester, Freight Broker CRM and Polling Officer Allocation.',
      skills: 'C/C++ · Python · TypeScript · React · Node.js · PostgreSQL · PyTorch · Unity · Linux',
      github: 'Opening GitHub profile…',
      contact: 'Email: shaikmahammadhussain9121@gmail.com',
      copy: 'Copying contact email to clipboard…',
      whoami: 'arc — multidisciplinary developer | Computer Engineering student',
      stack: 'Web: React, Next.js, Node.js | Data: PostgreSQL, MongoDB | AI: PyTorch, scikit-learn | Games: Unity, Godot, C++',
      journey: '2024: Diploma in Computer Engineering · 2025: learning by building · 2026: NIC industrial training and professional development.',
      experience: 'NIC industrial training · Ricoz Innovation — Full-stack development',
      email: 'shaikmahammadhussain9121@gmail.com',
      date: new Date().toLocaleDateString(undefined, { dateStyle: 'full' }),
      time: new Date().toLocaleTimeString(),
    }
    if (command === 'clear') setTerminalOutput([])
    else {
      const projectQuery = command.startsWith('open ') ? command.slice(5).trim() : ''
      const projectMatch = projectQuery ? projects.find((project) => project.name.toLowerCase().includes(projectQuery)) : undefined
      const output = command.startsWith('open ')
        ? (projectMatch ? 'Opening ' + projectMatch.name + ' case study…' : 'No project matches that name. Try: open arcengine')
        : (responses[command] ?? ('Command not found: ' + command + '. Type help.'))
      setTerminalOutput((lines) => [...lines, 'arc@portfolio:~$ ' + command, output])
      if (command === 'github') window.open('https://github.com/SMDHussain912', '_blank', 'noopener,noreferrer')
      if (command === 'linkedin') window.open('https://www.linkedin.com/in/shaik-mahammad-hussain-996088430/', '_blank', 'noopener,noreferrer')
      if (projectMatch) setSelectedProject(projectMatch)
      if (command === 'copy') {
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText('shaikmahammadhussain9121@gmail.com')
            .then(() => setTerminalOutput((lines) => [...lines, 'Email copied to clipboard.']))
            .catch(() => setTerminalOutput((lines) => [...lines, 'Clipboard unavailable. Email: shaikmahammadhussain9121@gmail.com']))
        } else {
          setTerminalOutput((lines) => [...lines, 'Clipboard unavailable. Email: shaikmahammadhussain9121@gmail.com'])
        }
      }
    }
    setTerminalInput('')
  }

  const paletteItems = [
    { label: 'Home', detail: 'Back to the introduction', href: '#home' },
    { label: 'About', detail: 'Background and education', href: '#about' },
    { label: 'Journey', detail: 'Milestones and progression', href: '#journey' },
    { label: 'Experience', detail: 'Industrial training', href: '#experience' },
    { label: 'Projects', detail: 'Selected engineering work', href: '#projects' },
    { label: 'GitHub activity', detail: 'Live public profile data', href: '#github-activity' },
    { label: 'Technology explorer', detail: 'Find projects by technology', href: '#tech-lab' },
    { label: 'Skills', detail: 'Technical toolkit', href: '#skills' },
    { label: 'Terminal', detail: 'Explore with commands', href: '#terminal' },
    { label: 'Contact', detail: 'Start a conversation', href: '#contact' },
  ].filter((item) => (item.label + ' ' + item.detail).toLowerCase().includes(paletteQuery.toLowerCase()))

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cards = gsap.utils.toArray<HTMLElement>('.project-card')
    if (!cards.length) return

    const isMobile = window.matchMedia('(max-width: 700px)').matches
    const horizontalTravel = isMobile ? 42 : 150
    const animations = cards.map((card, index) => {
      const fromLeft = index % 2 === 0
      return gsap.fromTo(card, {
        autoAlpha: 0,
        x: fromLeft ? -horizontalTravel : horizontalTravel,
        y: isMobile ? 22 : 30,
        scale: isMobile ? 0.98 : 0.95,
        rotateY: isMobile ? 0 : (fromLeft ? -5 : 5),
      }, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top 96%',
          end: isMobile ? 'top 62%' : 'top 54%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    })

    ScrollTrigger.refresh()
    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill()
        animation.kill()
      })
    }
  }, [projectFilter, projectSearch])

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    const motion = gsap.matchMedia()
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const hero = gsap.timeline({ defaults: { ease: 'power3.out' } })
        hero
          .fromTo('.hero-copy > *', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09 })
          .fromTo('.hero-aside', { autoAlpha: 0, scale: 0.96, x: 18 }, { autoAlpha: 1, scale: 1, x: 0, duration: 0.9 }, '-=0.55')
          .fromTo('.scroll-cue', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, '-=0.25')

        const getCards = (selector: string) =>
          Array.from(page.querySelectorAll<HTMLElement>(selector))

        // General content keeps a calm upward reveal.
        const generalTargets = getCards(
          '.intro-strip, .section-heading, .about-copy > p, .education-line, .contact-section > *'
        )
        generalTargets.forEach((element) => {
          gsap.fromTo(element, { autoAlpha: 0, y: 28 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
          })
        })

        const isMobile = window.matchMedia('(max-width: 700px)').matches
        const horizontalTravel = isMobile ? 38 : 145
        const makeScrollCard = (
          card: HTMLElement,
          fromX: number,
          end: string,
          extra: gsap.TweenVars = {},
        ) => {
          gsap.fromTo(card, {
            autoAlpha: 0,
            x: fromX,
            y: isMobile ? 18 : 28,
            scale: isMobile ? 0.985 : 0.96,
            ...extra,
          }, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            rotateY: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 96%',
              end,
              // No smoothing lag: the card reaches its final position exactly
              // when its top reaches the end marker, and reverses immediately.
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
        }

        // Skills: left/right sweep. scrub:true removes the lingering animation bug.
        getCards('.skill-card').forEach((card, index) => {
          const fromLeft = index % 2 === 0
          makeScrollCard(
            card,
            fromLeft ? -horizontalTravel : horizontalTravel,
            isMobile ? 'top 62%' : 'top 54%',
            { rotateY: isMobile ? 0 : (fromLeft ? -4 : 4) },
          )
        })

        // Learning roadmap: reverse the direction pattern for visual variety.
        getCards('.learning-card').forEach((card, index) => {
          const fromRight = index % 2 === 0
          makeScrollCard(
            card,
            fromRight ? horizontalTravel : -horizontalTravel,
            isMobile ? 'top 62%' : 'top 54%',
            { rotate: isMobile ? 0 : (fromRight ? 2 : -2) },
          )
        })

        // Other content cards also receive scroll-linked motion, not just hover effects.
        getCards('.journey-item, .experience-card, .other-project-card, .approach-grid article').forEach((card, index) => {
          const fromLeft = index % 2 === 0
          makeScrollCard(
            card,
            fromLeft ? -horizontalTravel : horizontalTravel,
            isMobile ? 'top 64%' : 'top 56%',
            { rotateY: isMobile ? 0 : (fromLeft ? -3 : 3) },
          )
        })
      }, page)

      return () => context.revert()
    })

    return () => motion.revert()
  }, [])

  return (
    <div className="home-page" ref={pageRef}>
      <div className="reading-progress" aria-hidden="true" />
      <section className="hero section-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> COMPUTER ENGINEERING STUDENT · DEVELOPER</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1 id="hero-title">Shaik Mahammad <span>Hussain.</span></h1>
          <div className="hero-role"><span className="role-line" /> <span className="role-rotator" aria-live="polite">{focusAreas[roleIndex]}</span><span className="role-counter">0{roleIndex + 1} / 04</span></div>
          <p className="hero-description">
            I build software across web development, AI, game development, and systems programming.
            I enjoy exploring technology, solving engineering problems, and turning ideas into working projects.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="mailto:shaikmahammadhussain9121@gmail.com">Get in touch <Mail size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/SMDHussain912" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <a href="https://www.linkedin.com/in/shaik-mahammad-hussain-996088430/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Areas of engineering interest">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-pair" aria-label="Portrait photos">
            <figure className="portrait-card portrait-standing">
              <img
                src="/images/arc-standing.webp"
                alt="Arc standing with arms crossed"
                onError={(event) => { event.currentTarget.style.visibility = 'hidden' }}
              />
              <figcaption><span>01</span> STANDING</figcaption>
            </figure>
            <figure className="portrait-card portrait-seated">
              <img
                src="/images/arc-seated.webp"
                alt="Arc seated in a chair"
                onError={(event) => { event.currentTarget.style.visibility = 'hidden' }}
              />
              <figcaption><span>02</span> SEATED</figcaption>
            </figure>
          </div>
          <div className="aside-card">
            <div className="aside-card-heading"><Sparkles size={15} /> AREAS I EXPLORE</div>
            <ul className="focus-list">{focusAreas.map((area, index) => (
              <li key={area}>
                <button type="button" className={selectedFocus === index ? 'focus-option is-selected' : 'focus-option'} onClick={() => setSelectedFocus(index)} aria-pressed={selectedFocus === index}>
                  <span>0{index + 1}</span>{area}<ArrowUpRight size={13}/>
                </button>
              </li>
            ))}</ul>
            <div className="aside-card-foot focus-detail" aria-live="polite">
              {[
                'Building complete products, from interfaces to APIs and data.',
                'Exploring models, data and practical intelligent applications.',
                'Creating interactive worlds, tools and gameplay systems.',
                'Understanding performance, architecture and how computers work.'
              ][selectedFocus]}
            </div>
          </div>
          <div className="coordinate coordinate-top">16° 59' N<br />82° 15' E</div>
          <div className="coordinate coordinate-bottom">INDEPENDENTLY<br />BUILDING & LEARNING</div>
        </aside>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
      </section>

      <section className="intro-strip section-shell" id="about">
        <span className="section-index">01 / ABOUT</span>
        <p>One discipline is a starting point.<br /><strong>Building across disciplines is the journey.</strong></p>
        <span className="intro-note">WEB · AI · GAMES · SYSTEMS</span>
      </section>

      <section className="about-section section-shell">
        <div className="section-heading">
          <span className="section-index">A LITTLE ABOUT ME</span>
          <h2>Curious by nature.<br /><span>Builder by practice.</span></h2>
        </div>
        <div className="about-copy">
          <p>I'm a Computer Engineering diploma student at Andhra Polytechnic, Kakinada, with a broad interest in how software and computing systems are designed. I enjoy moving between layers of technology: from building user interfaces and backend services to exploring machine learning, graphics and lower-level systems.</p>
          <p>I don't want to limit myself to a single framework or development area. I like understanding the fundamentals behind the tools I use, experimenting with unfamiliar technologies and connecting ideas across disciplines. That curiosity has led me to work on institutional web applications, a local AI assistant and a C++ game-engine prototype.</p>
          <p>My approach is practical: learn a concept, build something with it, test where it breaks, read the documentation and improve the design. I'm still growing as an engineer, and I prefer to describe my work honestly—what I've used, what I've built and what I'm actively learning.</p>
          <p>My long-term direction is to become a versatile software engineer with strong foundations in computer science, capable of building reliable applications as well as understanding the systems underneath them.</p>
          <div className="education-line"><GraduationCap size={19}/><span><strong>Andhra Polytechnic, Kakinada</strong><small>Diploma in Computer Engineering · 2024—2027</small></span></div>
        </div>
      </section>

      <section className="journey-section section-shell" id="journey">
        <div className="section-heading compact-heading">
          <span className="section-index">02 / THE JOURNEY</span>
          <h2>Learning, building, <span>evolving.</span></h2>
          <p>Not a straight line—just a steady progression from learning fundamentals to applying them in real projects.</p>
        </div>
        <div className="journey-list">
          {journey.map((item, index) => (
            <article className="journey-item" key={item.year}>
              <div className="journey-marker"><span>{item.year}</span><i /></div>
              <div className="journey-content"><span className="journey-step">MILESTONE 0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="section-heading compact-heading">
          <span className="section-index">03 / EXPERIENCE</span>
          <h2>Learning through <span>real work.</span></h2>
        </div>
        <article className="experience-card">
          <div className="experience-mark"><BriefcaseBusiness size={20}/></div>
          <div className="experience-main">
            <div className="experience-topline"><span className="experience-type">INDUSTRIAL TRAINING</span><span className="experience-location">KAKINADA, ANDHRA PRADESH</span></div>
            <h3>Web Development Intern</h3>
            <h4>National Informatics Centre (NIC) · Collector Office</h4>
            <p>Contributed to PM-SETU, an institutional web platform, during my industrial training at the Collector Office. My work focused on backend development and connecting application workflows with persistent data, alongside exposure to frontend implementation.</p>
            <div className="experience-details">
              <div><strong>Backend contribution</strong><span>API development, request validation, application logic and database integration.</span></div>
              <div><strong>Frontend collaboration</strong><span>React interfaces and reusable components for institutional workflows.</span></div>
              <div><strong>Engineering practice</strong><span>Working with a real project structure, debugging, integration and iterative development.</span></div>
            </div>
            <div className="tag-list"><span>React</span><span>TypeScript</span><span>Node.js</span><span>Express</span><span>Prisma</span><span>PostgreSQL</span><span>REST APIs</span></div>
          </div>
        </article>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading">
          <span className="section-index">04 / SELECTED WORK</span>
          <h2>Ideas turned into <span>experiments.</span></h2>
          <p>These projects represent different sides of my engineering interests—from delivering institutional software to exploring how engines and local AI systems are built. I keep project status transparent: ongoing work is not presented as finished software.</p>
        </div>
        <div className="project-controls" aria-label="Filter projects">
          <div className="project-filter-list" role="group" aria-label="Project type">
            {projectFilters.map((filter) => (
              <button
                className={projectFilter === filter ? 'filter-chip is-active' : 'filter-chip'}
                type="button"
                key={filter}
                aria-pressed={projectFilter === filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
                {filter === 'All' && <span>{projects.length}</span>}
              </button>
            ))}
          </div>
          <label className="project-search">
            <Code2 size={16} aria-hidden="true" />
            <input
              type="search"
              value={projectSearch}
              onChange={(event) => setProjectSearch(event.target.value)}
              placeholder="Search projects or technologies"
              aria-label="Search featured projects or technologies"
            />
          </label>
        </div>
        <p className="project-results" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} featured projects
        </p>
        <div className="project-grid">
          {visibleProjects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
              <div className="project-card-heading">
                <div className="project-symbol"><Terminal size={21}/></div>
                <div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div>
              </div>
              <p className="project-card-summary">{project.description}</p>
              <div className="project-card-footer">
                <button className="case-study-trigger" type="button" onClick={() => setSelectedProject(project)}>
                  Open full case study <ArrowUpRight size={15}/>
                </button>
                <div className="project-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={14}/></a>)}</div>
              </div>
            </article>
          ))}
          {visibleProjects.length === 0 && (
            <div className="project-empty">
              <strong>No matching projects</strong>
              <span>Try another keyword or choose a different project type.</span>
              <button type="button" onClick={() => { setProjectSearch(''); setProjectFilter('All') }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>

      <section className="other-projects-section section-shell" id="more-projects">
        <div className="section-heading compact-heading">
          <span className="section-index">05 / MORE BUILDS</span>
          <h2>More things I've <span>worked on.</span></h2>
          <p>A wider look at independent applications, experiments and learning projects across my GitHub repositories.</p>
        </div>
        <div className="other-projects-grid">
          {otherProjects.map(project => (
            <article className="other-project-card" key={project.name}>
              <span>{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={14}/></a>
            </article>
          ))}
        </div>
      </section>


      <section className="github-section section-shell" id="github-activity">
        <div className="section-heading compact-heading">
          <span className="section-index">06 / OPEN SOURCE PRESENCE</span>
          <h2>Code in <span>public.</span></h2>
          <p>A live snapshot of my public GitHub profile and recently updated repositories. Data is fetched directly from GitHub, never invented.</p>
        </div>
        <div className="github-panel">
          <div className="github-profile">
            <div className="github-mark"><Code2 size={28}/></div>
            <div><strong>SMDHussain912</strong><span>Public GitHub profile</span></div>
            <a href="https://github.com/SMDHussain912" target="_blank" rel="noreferrer">View profile <ArrowUpRight size={14}/></a>
          </div>
          {githubState === 'loading' && <p className="github-state"><Activity size={16}/> Connecting to GitHub…</p>}
          {githubState === 'error' && <p className="github-state">GitHub's public API could not be reached right now. The rest of the portfolio still works, and you can open the profile directly.</p>}
          {githubState === 'ready' && githubProfile && <>
            <div className="github-stats">
              <div><strong>{githubProfile.public_repos}</strong><span>Public repositories</span></div>
              <div><strong>{githubProfile.followers}</strong><span>Followers</span></div>
              <div><strong>{githubRepos.length}</strong><span>Recently updated</span></div>
            </div>
            <div className="github-repo-list">
              {githubRepos.map((repo) => <a className="github-repo" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.name}>
                <span><strong>{repo.name}</strong><small>{repo.description || 'Public repository'}</small></span>
                <span className="github-repo-meta">{repo.language || 'Code'} · {new Date(repo.updated_at).toLocaleDateString()} <ArrowUpRight size={13}/></span>
              </a>)}
            </div>
          </>}
        </div>
      </section>

      <section className="approach-section section-shell">
        <div className="section-heading compact-heading">
          <span className="section-index">07 / HOW I WORK</span>
          <h2>Curiosity with an <span>engineering mindset.</span></h2>
        </div>
        <div className="approach-grid">
          <article><span>01</span><h3>Understand the fundamentals</h3><p>I like knowing why a system works—not just which commands make it run.</p></article>
          <article><span>02</span><h3>Build to learn</h3><p>I turn concepts into small experiments and gradually grow them into practical projects.</p></article>
          <article><span>03</span><h3>Improve through iteration</h3><p>I value debugging, documentation, feedback and honest progress over pretending everything is finished.</p></article>
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="section-heading compact-heading">
          <span className="section-index">08 / TECHNICAL TOOLKIT</span>
          <h2>Technologies I've <span>worked with.</span></h2>
          <p>A snapshot of languages, frameworks, libraries and tools I've studied or used across coursework and projects. This is a working toolkit—not a claim of expert-level proficiency in every item.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map(group => {
            const Icon = group.icon
            return <article className="skill-card" key={group.title}><Icon size={20}/><h3>{group.title}</h3><p>{group.items}</p></article>
          })}
        </div>
      </section>

      <section className="tech-lab-section section-shell" id="tech-lab">
        <div className="section-heading compact-heading">
          <span className="section-index">09 / INTERACTIVE TECHNOLOGY MAP</span>
          <h2>Find the tech behind <span>the work.</span></h2>
          <p>Choose a verified technology to discover every showcased project whose repository documents or manifests support it. Projects without enough source evidence are intentionally not counted.</p>
        </div>
        <div className="tech-lab">
          <div className="tech-orbit" aria-hidden="true"><span/><span/><span/></div>
          <div className="tech-picker" role="group" aria-label="Filter projects by technology">
            {technologyExplorer.map((technology) => <button type="button" key={technology} className={selectedTechnology === technology ? 'tech-chip is-active' : 'tech-chip'} aria-pressed={selectedTechnology === technology} onClick={() => setSelectedTechnology(technology)}>{technology}<span>{allProjects.filter((project) => project.stack.some((item) => item.toLowerCase() === technology.toLowerCase())).length}</span></button>)}
          </div>
          <div className="tech-results" aria-live="polite">
            <div className="tech-results-heading"><span>SELECTED TECHNOLOGY</span><strong>{selectedTechnology}</strong><small>{technologyProjects.length} matching {technologyProjects.length === 1 ? 'project' : 'projects'}</small></div>
            {technologyProjects.length > 0 ? technologyProjects.map((project) => <button className="tech-project" type="button" key={project.name} onClick={() => setSelectedProject(project)}><span><small>{project.category}</small><strong>{project.name}</strong></span><ArrowUpRight size={17}/></button>) : <p>No verified showcased project currently lists this technology.</p>}
          </div>
        </div>
      </section>

      <section className="learning-section section-shell" id="learning">
        <div className="section-heading compact-heading">
          <span className="section-index">10 / CURRENT LEARNING ROADMAP</span>
          <h2>What I'm <span>learning next.</span></h2>
          <p>These are active learning directions and deeper areas I want to develop—not technologies I'm claiming to have mastered.</p>
        </div>
        <div className="learning-grid">
          {learningTracks.map(track => <article className="learning-card" key={track.label}><span>{track.label}</span><div><h3>{track.title}</h3><p>{track.detail}</p></div></article>)}
        </div>
      </section>


      <section className="terminal-section section-shell" id="terminal">
        <div className="section-heading compact-heading">
          <span className="section-index">11 / INTERACTIVE EXPERIMENT</span>
          <h2>Curious? Open the <span>terminal.</span></h2>
          <p>A tiny command-line-style tour. Try <code>help</code>, <code>stack</code>, <code>date</code>, or <code>open arcengine</code>.</p>
        </div>
        <div className="portfolio-terminal">
          <div className="terminal-topbar"><span><i/><i/><i/></span><strong>arc@portfolio — interactive shell</strong><span>LOCAL SESSION</span></div>
          <div className="terminal-screen" aria-live="polite">
            {terminalOutput.map((line, index) => <p className={line.startsWith('arc@') ? 'terminal-command' : 'terminal-response'} key={index + '-' + line}>{line}</p>)}
          </div>
          <form className="terminal-form" onSubmit={runTerminalCommand}>
            <label htmlFor="terminal-input">arc@portfolio:~$</label>
            <input id="terminal-input" value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} autoComplete="off" spellCheck={false} placeholder="type a command…" />
            <button type="submit" aria-label="Run terminal command"><ChevronRight size={18}/></button>
          </form>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <span className="section-index">12 / GET IN TOUCH</span>
        <h2>Have an idea?<br/><span>Let's build something.</span></h2>
        <p>I'm interested in meaningful projects, learning opportunities and conversations about engineering.</p>
        <a className="button button-primary" href="mailto:shaikmahammadhussain9121@gmail.com">Say hello <Mail size={16}/></a>
      </section>
      {selectedProject && <div className="case-study-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null) }}>
        <article className="case-study-dialog" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
          <button className="case-study-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={20}/></button>
          <span className="section-index">{selectedProject.number} / PROJECT CASE STUDY</span>
          <p className="case-study-category">{selectedProject.category}</p>
          <h2 id="case-study-title">{selectedProject.name}</h2>
          <div className="case-study-status">{selectedProject.status}</div>
          <section><h3>Overview</h3><p>{selectedProject.description}</p></section>
          <section><h3>Technology and tools</h3><div className="tag-list">{selectedProject.stack.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
          <section><h3>Explore the source</h3><div className="case-study-links">{selectedProject.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={15}/></a>)}</div></section>
        </article>
      </div>}
      {showBackToTop && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })} aria-label="Back to top"><ArrowUpRight size={18}/><span>TOP</span></button>}
      {paletteOpen && <div className="command-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false) }}>
        <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Portfolio command palette">
          <div className="command-search"><Search size={18}/><input autoFocus value={paletteQuery} onChange={(event) => setPaletteQuery(event.target.value)} placeholder="Search sections…"/><kbd>ESC</kbd><button type="button" onClick={() => setPaletteOpen(false)} aria-label="Close command palette"><X size={17}/></button></div>
          <div className="command-results">{paletteItems.map((item) => <a href={item.href} key={item.href} onClick={() => setPaletteOpen(false)}><span><strong>{item.label}</strong><small>{item.detail}</small></span><ChevronRight size={17}/></a>)}
            {paletteItems.length === 0 && <p>No matching section. Try another search.</p>}
          </div>
          <div className="command-hint"><Command size={13}/> Quick navigation <span>Ctrl K</span></div>
        </div>
      </div>}
    </div>
  )
}
