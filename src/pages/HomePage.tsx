import { ArrowDownRight, ArrowUpRight, Code2, BriefcaseBusiness, Mail, Sparkles } from 'lucide-react'

const focusAreas = ['Full-Stack Development', 'AI & Machine Learning', 'Game Development', 'Systems Programming']

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
        <a className="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
      </section>
      <section className="intro-strip section-shell" id="intro">
        <span className="section-index">01 / INTRODUCTION</span>
        <p>One discipline is a starting point.<br /><strong>Building across disciplines is the journey.</strong></p>
        <span className="intro-note">WEB · AI · GAMES · SYSTEMS</span>
      </section>
      <section className="next-section section-shell" id="projects">
        <span className="section-index">02 / SELECTED WORK</span>
        <p>Projects are coming into focus.</p>
        <span>Real work. Honest progress. Engineering in public.</span>
      </section>
    </div>
  )
}
