// src/components/Header.jsx
import { Link } from 'react-router-dom'
import './CSS/Header.css'

export default function Header() {
  return (
    <header className="header">
     <nav className="nav-container no-logo">
        {/* Logo eliminado */}
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="#about">Sobre mí</Link></li>
          <li><Link to="#technologies">Tecnologías</Link></li>
          <li><Link to="#projects">Proyectos</Link></li>
          <li><Link to="#contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}
