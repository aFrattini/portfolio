import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './CSS/Hero.css';
import heroBlob from '../assets/hero-blob.svg';
import plusIcon from '../assets/plus-icon.svg';

export default function Hero() {
  // Configura aquí las frases que quieres ciclar:
  const [text] = useTypewriter({
    words: [
      'Analista de Datos',
      'Creadora de Dashboards Interactivos',
      'Exploradora de Insights'
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000
  });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Antonella Frattini</span>
          </h1>
          
          {/* SUBTÍTULO CON EFECTO TYPEWRITER */}
          <p className="hero-subtitle">
            {text}
            <Cursor cursorStyle="|" />
          </p>
          
          <p className="hero-description">
            Convirtiendo datos en insights accionables mientras me adentro en el 
            fascinante mundo del análisis de datos, el Machine Learning y la visualización con Power BI.
          </p>
          
          <div className="hero-buttons">
            <Link to="#projects" className="btn btn-primary">
              Ver proyectos
            </Link>
            <Link to="#contact" className="btn btn-outline">
              Contacto
            </Link>
          </div>
        </div>

        {/* COLUMNA DERECHA: GRÁFICO */}
        <div className="hero-image">
          
        </div>
      </div>
    </section>
  );
}
