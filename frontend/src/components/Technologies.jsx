// src/components/Technologies.jsx
import React from 'react';
import './CSS/Technologies.css';
import pythonLogo from '../assets/python.svg';
import pandasLogo from '../assets/pandas.svg';
import sklLogo from '../assets/scikit-learn.svg';
import pbLogo from '../assets/powerbi.svg';
import mlLogo from '../assets/ml.svg';
import sqlLogo from '../assets/sql.svg';
import npLogo from '../assets/numpy.svg';
import mplLogo from '../assets/matplotlib.svg';

const techs = [
  { src: pythonLogo, alt: 'Python', name: 'Python' },
  { src: sqlLogo, alt: 'SQL', name: 'SQL' },
  { src: pbLogo, alt: 'Power BI', name: 'Power BI' },
  { src: mlLogo, alt: 'Machine Learning', name: 'Machine Learning' },
  { src: pandasLogo, alt: 'Pandas', name: 'Pandas' },
  { src: npLogo, alt: 'NumPy', name: 'NumPy' },
  { src: sklLogo, alt: 'Scikit-learn', name: 'Scikit-learn' },
  { src: mplLogo, alt: 'Matplotlib', name: 'Matplotlib' },
];

export default function Technologies() {
  return (
    <section id="technologies" className="tech-section">
      <h2 className="section-title">
        Mis <span className="highlight">Tecnologías</span>
      </h2>
      <p className="tech-description">
        Herramientas y tecnologías que utilizo en mis proyectos para analizar datos y crear soluciones efectivas.
      </p>
      <div className="tech-grid">
        {techs.map(({ src, alt, name }) => (
          <figure key={name} className="tech-item">
            <img src={src} alt={alt} className="tech-logo" />
            <figcaption className="tech-name">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}