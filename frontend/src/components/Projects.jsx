import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Projects.css';

const allProjects = [
  {
    id: 1,
    title: 'Predicción de supervivencia',
    description: 'Modelo predictivo para forecast de supervivencia con regresión y árboles de decisión.',
    year: 2023,
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    category: 'Machine Learning',
    icon: '🧠',
    link: '/proyectos/titanic'
  },
  {
    id: 2,
    title: 'Dashboard Financiero',
    description: 'Dashboard interactivo para análisis financiero con KPIs y métricas clave.',
    year: 2023,
    tags: ['Power BI', 'DAX'],
    category: 'Power BI',
    icon: '📊',
    link: '/proyectos/titanic'
  },
  {
    id: 3,
    title: 'Segmentación de Clientes',
    description: 'Análisis de clustering para identificar segmentos de clientes y patrones de comportamiento.',
    year: 2022,
    tags: ['Machine Learning', 'Python', 'K-means'],
    category: 'Machine Learning',
    icon: '👥',
    link: '/proyectos/cluster-paises'
  },
  {
    id: 4,
    title: 'Clasificación de Imágenes',
    description: 'CNN entrenada para clasificar imágenes en 5 categorías.',
    year: 2022,
    tags: ['Machine Learning', 'Python', 'CNN'],
    category: 'Machine Learning',
    icon: '🖼️',
    link: '/proyectos/titanic'
  },
  {
    id: 5,
    title: 'Clasificación de Imágenes',
    description: 'CNN entrenada para clasificar imágenes en 5 categorías.',
    year: 2022,
    tags: ['Machine Learning', 'Python', 'CNN'],
    category: 'Machine Learning',
    icon: '🖼️',
    link: '/proyectos/titanic'
  },
  {
    id: 6,
    title: 'Clasificación de Imágenes',
    description: 'CNN entrenada para clasificar imágenes en 5 categorías.',
    year: 2022,
    tags: ['Machine Learning', 'Python', 'CNN'],
    category: 'Machine Learning',
    icon: '🖼️',
    link: '/proyectos/titanic'
  }
];

const categories = ['Todos', 'Machine Learning', 'Power BI'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(4);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(4); // Reiniciar al cambiar filtro
  };

  const filtered =
    activeCategory === 'Todos'
      ? allProjects
      : allProjects.filter(p => p.category === activeCategory);

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section className="projects-section">
      <h2 className="section-title">
        Mis <span className="highlight">Proyectos</span>
      </h2>

      <div className="project-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${cat === activeCategory ? 'active' : ''}`}
            onClick={() => handleFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map(({ id, title, description, year, tags, icon, link }) => (
          <Link to={link} key={id} className="project-card">
            <div className="card-icon">{icon}</div>
            <div className="card-content">
              <div className="card-header">
                <span className="category-label">{tags[0]}</span>
                <span className="project-year">{year}</span>
              </div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{description}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length > visibleCount && (
        <div className="see-more-wrapper">
          <button className="see-more-btn" onClick={() => setVisibleCount(visibleCount + 4)}>
            Ver más
          </button>
        </div>
      )}
    </section>
  );
}
