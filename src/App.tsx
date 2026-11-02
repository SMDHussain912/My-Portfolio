import { Code2, BriefcaseBusiness, Menu } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './styles/global.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [{label:'Home',href:'/#home'},{label:'About',href:'/#intro'},{label:'Projects',href:'/#projects'}]
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Shaik Mahammad Hussain home"><span className="brand-mark">SH</span><span>SHAIK MAHAMMAD HUSSAIN<small>ENGINEERING · SOFTWARE · IDEAS</small></span></Link>
        <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><Menu size={21}/></button>
        <nav className={menuOpen?'nav-links nav-open':'nav-links'} aria-label="Main navigation">
          {links.map(link=><a key={link.label} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</a>)}
          <a className="nav-contact" href="mailto:shaikmahammadhussain9121@gmail.com">Let's talk <span>↗</span></a>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer"><span>© {new Date().getFullYear()} Shaik Mahammad Hussain</span><span>Built with curiosity & code.</span><div><a href="https://github.com/SMDHussain912" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={16}/></a><a href="https://www.linkedin.com/in/shaik-mahammad-hussain-996088430/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={16}/></a></div></footer>
    </div>
  )
}
