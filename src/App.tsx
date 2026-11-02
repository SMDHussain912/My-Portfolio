import { Code2, BriefcaseBusiness, Menu } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './styles/global.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [accent, setAccent] = useState('cyan')
  const links = [{label:'Home',href:'/#home'},{label:'About',href:'/#about'},{label:'Journey',href:'/#journey'},{label:'Experience',href:'/#experience'},{label:'Projects',href:'/#projects'},{label:'More work',href:'/#more-projects'},{label:'Skills',href:'/#skills'},{label:'Learning',href:'/#learning'}]
  return (
    <div className="site-shell" data-accent={accent}>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Shaik Mahammad Hussain home"><span className="brand-mark">SH</span><span>SHAIK MAHAMMAD HUSSAIN<small>ENGINEERING · SOFTWARE · IDEAS</small></span></Link>
        <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><Menu size={21}/></button>
        <nav className={menuOpen?'nav-links nav-open':'nav-links'} aria-label="Main navigation">
          {links.map(link=><a key={link.label} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</a>)}
          <div className="accent-switcher" role="group" aria-label="Choose portfolio accent color">
            <span className="accent-switcher-label">COLOR</span>
            <button className="accent-swatch" style={{'--swatch':'#62e6f2'} as React.CSSProperties} type="button" aria-label="Cyan accent" aria-pressed={accent==='cyan'} onClick={()=>setAccent('cyan')} />
            <button className="accent-swatch" style={{'--swatch':'#b69aff'} as React.CSSProperties} type="button" aria-label="Violet accent" aria-pressed={accent==='violet'} onClick={()=>setAccent('violet')} />
            <button className="accent-swatch" style={{'--swatch':'#ffc477'} as React.CSSProperties} type="button" aria-label="Amber accent" aria-pressed={accent==='amber'} onClick={()=>setAccent('amber')} />
            <button className="accent-swatch" style={{'--swatch':'#78e6b1'} as React.CSSProperties} type="button" aria-label="Mint accent" aria-pressed={accent==='mint'} onClick={()=>setAccent('mint')} />
          </div>
          <a className="nav-contact" href="mailto:shaikmahammadhussain9121@gmail.com">Let's talk <span>↗</span></a>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer"><span>© 2026 Shaik Mahammad Hussain</span><span>Built with curiosity & code.</span><div><a href="https://github.com/SMDHussain912" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={16}/></a><a href="https://www.linkedin.com/in/shaik-mahammad-hussain-996088430/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={16}/></a></div></footer>
    </div>
  )
}
