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
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#technologies">Tecnologías</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
