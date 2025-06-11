import './CSS/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-cta">
        ¿Quieres contactarme? Puedes hacerlo en las siguientes plataformas:
      </p>

      <div className="footer-social">
        <a href="https://github.com/aFrattini" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/antonella-frattini/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:antonellafrattini@hotmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-made-with">
        ✨ Hecho con React, café ☕ y unos cuantos consejos de ChatGPT 🤖
      </p>
      <p className="footer-copy">© {year} Antonella Frattini</p>
    </footer>
  );
}
