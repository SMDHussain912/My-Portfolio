import './styles/global.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <nav className="navbar">
        <div className="navbar-logo">Arc Portfolio</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="container mx-auto py-8">
        <Outlet />
      </div>
    </main>
  )
}

export default App
