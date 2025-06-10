// src/components/About.jsx
import React from 'react';
import './CSS/About.css';
import { FaChartLine, FaBrain, FaChartPie, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          Sobre <span className="highlight">Mí</span>
        </h2>

        <div className="about-content">
          {/* Columna Izquierda: Quién soy */}
          <div className="about-text-card">
            <h3 className="card-heading">¿Quién soy?</h3>
            <p>
             Soy Técnica Superior en Desarrollo de Aplicaciones Web especializada en Inteligencia Artificial y Big Data, con un enfoque marcado en el 
             análisis de datos. Mi formación combina programación con técnicas de machine learning, manipulación de grandes volúmenes de datos y 
             visualización de resultados. 
            </p>
            <p>
            Me interesa especialmente entender y comunicar el significado detrás de los datos, transformar la información en decisiones inteligentes y 
            diseñar soluciones que tengan impacto real.
            </p>
            <p>
            Aunque busco actualmente mi primera oportunidad profesional en ciencia de datos, cuento con sólida experiencia laboral previa, tanto en grandes 
            compañías como en startups, donde desarrollé una fuerte capacidad de adaptación, pensamiento crítico y colaboración en equipo. Además, mi nivel 
            avanzado de inglés me permite integrarme fácilmente en entornos internacionales.
            </p>
          </div>

          {/* Columna Derecha: Cards de Servicios */}
          <div className="about-cards">
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3 className="service-title">Análisis de Datos</h3>
              <p className="service-desc">
                Transformación y análisis de datos para descubrir patrones y tendencias significativas.
              </p>
            </div>
            <div className="service-card">
              <FaBrain className="service-icon" />
              <h3 className="service-title">Machine Learning</h3>
              <p className="service-desc">
                Desarrollo de modelos predictivos y algoritmos de aprendizaje automático.
              </p>
            </div>
            <div className="service-card">
              <FaChartPie className="service-icon" />
              <h3 className="service-title">Visualización</h3>
              <p className="service-desc">
                Creación de dashboards interactivos y visualizaciones efectivas con Power BI.
              </p>
            </div>
            <div className="service-card">
              <FaLightbulb className="service-icon" />
              <h3 className="service-title">Business Intelligence</h3>
              <p className="service-desc">
                Transformación de datos en insights estratégicos para la toma de decisiones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
