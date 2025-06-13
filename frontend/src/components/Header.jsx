import { useLocation, useNavigate } from 'react-router-dom';
import './CSS/Header.css';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTarget();
      }, 300); 
    } else {
      scrollToTarget();
    }
  };

  return (
    <header className="header">
      <nav className="nav-container no-logo">
        <ul className="nav-links">
          <li><a href="/" onClick={(e) => {
            e.preventDefault();
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}>Inicio</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Sobre mí</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Proyectos</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
