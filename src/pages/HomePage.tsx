import { ArrowDownRight, ArrowUpRight, Code2, BriefcaseBusiness, Mail, Sparkles, GraduationCap, Terminal, Cpu, Gamepad2, Globe2 } from 'lucide-react'

const focusAreas = ['Full-Stack Development', 'AI & Machine Learning', 'Game Development', 'Systems Programming']

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
  { icon: Code2, title: 'Programming', items: 'C · C++ · Python · JavaScript · TypeScript · Java · C#' },
  { icon: Globe2, title: 'Web & Backend', items: 'React · Node.js · Express · REST APIs · HTML · CSS' },
  { icon: Cpu, title: 'Data & AI', items: 'NumPy · Pandas · scikit-learn · PyTorch · PostgreSQL · MongoDB' },
  { icon: Gamepad2, title: 'Creative & Systems', items: 'Unity · Godot · Blender · OpenGL · Linux · Git' },
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
          <p>I'm a Computer Engineering diploma student at Andhra Polytechnic, Kakinada. I enjoy learning how technology works beneath the surface and applying that knowledge to build useful software.</p>
          <p>My interests move between full-stack development, machine learning, game development and systems programming. I learn best by building, testing ideas, reading source code and improving through real engineering challenges.</p>
          <div className="education-line"><GraduationCap size={19}/><span><strong>Andhra Polytechnic, Kakinada</strong><small>Diploma in Computer Engineering · 2024—2027</small></span></div>
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="section-heading compact-heading">
          <span className="section-index">02 / EXPERIENCE</span>
          <h2>Learning through <span>real work.</span></h2>
        </div>
        <article className="experience-card">
          <div className="experience-mark"><BriefcaseBusiness size={20}/></div>
          <div className="experience-main">
            <div className="experience-topline"><span className="experience-type">INDUSTRIAL TRAINING</span><span className="experience-location">KAKINADA, ANDHRA PRADESH</span></div>
            <h3>Web Development Intern</h3>
            <h4>National Informatics Centre (NIC) · Collector Office</h4>
            <p>Worked on institutional web development during a six-month industrial training placement, contributing to React interfaces and backend development for the PM-SETU project. Work included reusable UI components, REST APIs, database integration and application workflows.</p>
            <div className="tag-list"><span>React</span><span>Node.js</span><span>Express</span><span>REST APIs</span><span>Databases</span></div>
          </div>
        </article>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading">
          <span className="section-index">03 / SELECTED WORK</span>
          <h2>Ideas turned into <span>experiments.</span></h2>
          <p>A few projects that reflect what I'm learning, building and exploring. Their status is shown honestly—prototype means prototype.</p>
        </div>
        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
              <div className="project-symbol"><Terminal size={23}/></div>
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <div className="project-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={14}/></a>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="section-heading compact-heading">
          <span className="section-index">04 / TOOLKIT</span>
          <h2>Tools I work <span>with.</span></h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map(group => {
            const Icon = group.icon
            return <article className="skill-card" key={group.title}><Icon size={20}/><h3>{group.title}</h3><p>{group.items}</p></article>
          })}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <span className="section-index">05 / GET IN TOUCH</span>
        <h2>Have an idea?<br/><span>Let's build something.</span></h2>
        <p>I'm interested in meaningful projects, learning opportunities and conversations about engineering.</p>
        <a className="button button-primary" href="mailto:shaikmahammadhussain9121@gmail.com">Say hello <Mail size={16}/></a>
      </section>
    </div>
  )
}
