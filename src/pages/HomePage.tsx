import { ArrowDownRight, ArrowUpRight, Code2, BriefcaseBusiness, Mail, Sparkles, GraduationCap, Terminal, Cpu, Gamepad2, Globe2 } from 'lucide-react'

const focusAreas = ['Full-Stack Development', 'AI & Machine Learning', 'Game Development', 'Systems Programming']

const journey = [
  { year: '2024', title: 'Started Computer Engineering', detail: 'Began my Diploma in Computer Engineering at Andhra Polytechnic, Kakinada, and started building a stronger foundation in programming and computing.' },
  { year: '2025', title: 'Learning by building', detail: 'Expanded into web development, databases, programming languages and independent software projects.' },
  { year: '2026', title: 'Industry experience at NIC', detail: 'Joined the National Informatics Centre at the Collector Office, Kakinada for industrial training and contributed to institutional web development and PM-SETU.' },
  { year: 'NOW', title: 'Exploring deeper engineering', detail: 'Continuing to develop projects across full-stack software, local AI systems and game-engine technology.' },
]

const projects = [
  {
    number: '01',
    name: 'PM-SETU',
    category: 'Institutional Web Platform',
    description: 'A government-focused platform developed during my NIC industrial training, with backend workflows, database integration, API development and validation.',
    stack: ['TypeScript', 'Prisma', 'PostgreSQL'],
    status: 'Project work completed',
    links: [
      { label: 'Frontend', href: 'https://github.com/SMDHussain912/PM-SETU-Frontend' },
      { label: 'Backend', href: 'https://github.com/SMDHussain912/PM-SETU-Backend' },
    ],
  },
  {
    number: '02',
    name: 'ArcEngine',
    category: 'C++ Game Engine',
    description: 'An experimental 2D and 3D game engine focused on understanding rendering, physics, scripting and editor architecture. The current work is an evolving prototype, not a production engine.',
    stack: ['C++', 'OpenGL', 'Lua', 'CMake'],
    status: 'Prototype · In development',
    links: [{ label: 'View repository', href: 'https://github.com/SMDHussain912/ArcEngine' }],
  },
  {
    number: '03',
    name: 'MiraV2',
    category: 'Local AI Assistant',
    description: 'A local-first Linux desktop assistant exploring speech recognition, intent handling and modular C++ architecture, with privacy and local execution as core goals.',
    stack: ['C++', 'Python', 'Whisper.cpp'],
    status: 'Early development',
    links: [{ label: 'View repository', href: 'https://github.com/SMDHussain912/MiraV2' }],
  },
]

const skillGroups = [
  { icon: Code2, title: 'Programming languages', items: 'C · C++ · Python · Java · JavaScript · TypeScript · C# · PHP · Lua · Kotlin' },
  { icon: Globe2, title: 'Frontend & application development', items: 'HTML · CSS · React · Vite · React Router' },
  { icon: Terminal, title: 'Backend & databases', items: 'Node.js · Express.js · REST APIs · JWT · Socket.IO · MongoDB · PostgreSQL · MySQL · SQLite · SQL' },
  { icon: Cpu, title: 'Data science & machine learning', items: 'NumPy · Pandas · Matplotlib · scikit-learn · PyTorch · model training fundamentals' },
  { icon: Gamepad2, title: 'Game & graphics development', items: 'Unity · Godot · Blender · OpenGL · SDL2 · game-engine architecture' },
  { icon: Globe2, title: 'Developer tools & platforms', items: 'Git · GitHub · Linux · CMake · Docker · Firebase · AWS · Vercel · Render' },
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
  return (
    <div className="home-page">
      <section className="hero section-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> COMPUTER ENGINEERING STUDENT · DEVELOPER</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1 id="hero-title">Shaik Mahammad <span>Hussain.</span></h1>
          <div className="hero-role"><span className="role-line" /> Multidisciplinary Developer</div>
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
          <div className="hero-monogram"><span>SH</span><i /></div>
          <div className="aside-card">
            <div className="aside-card-heading"><Sparkles size={15} /> AREAS I EXPLORE</div>
            <ul>{focusAreas.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}</li>)}</ul>
            <div className="aside-card-foot">Curiosity, built into everything.</div>
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
        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
              <div className="project-symbol"><Terminal size={23}/></div>
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-learning"><strong>What this project explores</strong><span>{project.name === 'PM-SETU' ? 'Institutional workflows, backend architecture, relational data modelling and API integration.' : project.name === 'ArcEngine' ? 'Rendering architecture, engine subsystems, physics integration, scripting and editor foundations.' : 'Local speech interfaces, modular C++ components, intent processing and privacy-conscious design.'}</span></div>
              <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <div className="project-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={14}/></a>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section-shell">
        <div className="section-heading compact-heading">
          <span className="section-index">05 / HOW I WORK</span>
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
          <span className="section-index">06 / TECHNICAL TOOLKIT</span>
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

      <section className="learning-section section-shell" id="learning">
        <div className="section-heading compact-heading">
          <span className="section-index">07 / CURRENT LEARNING ROADMAP</span>
          <h2>What I'm <span>learning next.</span></h2>
          <p>These are active learning directions and deeper areas I want to develop—not technologies I'm claiming to have mastered.</p>
        </div>
        <div className="learning-grid">
          {learningTracks.map(track => <article className="learning-card" key={track.label}><span>{track.label}</span><div><h3>{track.title}</h3><p>{track.detail}</p></div></article>)}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <span className="section-index">08 / GET IN TOUCH</span>
        <h2>Have an idea?<br/><span>Let's build something.</span></h2>
        <p>I'm interested in meaningful projects, learning opportunities and conversations about engineering.</p>
        <a className="button button-primary" href="mailto:shaikmahammadhussain9121@gmail.com">Say hello <Mail size={16}/></a>
      </section>
    </div>
  )
}
