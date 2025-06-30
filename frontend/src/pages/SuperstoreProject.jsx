// SuperstoreProject.jsx
import '../CSS/SuperstoreProject.css';

export default function SuperstoreProject() {
  return (
    <div className="superstore-bg">
      <div className="superstore-container">

        <h1 className="superstore-title">
          Dashboard de Ventas – Superstore
        </h1>

        <p className="superstore-description">
          Proyecto de visualización interactiva en <strong>Power BI</strong> que analiza las ventas, beneficios y
          comportamiento de clientes del célebre dataset <em>Global Superstore</em>.
          Parte de un análisis exploratorio en Python (limpieza + verificación de calidad),
          para luego modelar, crear medidas DAX y diseñar el dashboard en Power BI.
          <br /><br />
          A continuación puedes navegar por el informe – filtra por año,
          segmento o modo de envío y descubre en segundos qué categorías impulsan el margen
          o dónde existen oportunidades de crecimiento regional.
        </p>

        {/* -----  iframe responsivo  ----- */}
        <div className="superstore-iframe-wrapper">
          <iframe
            title="Superstore Performance Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiYzlhMmU2ZGQtODIzNS00YjkxLThkNjYtNzc5ODhjYTU5ZTYzIiwidCI6IjZiMDFhYTlhLWRlMTMtNDU1Yy04M2UzLWZkYjE0NjY3NjE1MyJ9"
            allowFullScreen={true}
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </div>

        {/* -----  enlaces  ----- */}
        <div className="superstore-links">
          <a
            href="https://github.com/aFrattini/superstore-dashboard-preprocessing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notebook de pre-procesado
          </a>

          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiYzlhMmU2ZGQtODIzNS00YjkxLThkNjYtNzc5ODhjYTU5ZTYzIiwidCI6IjZiMDFhYTlhLWRlMTMtNDU1Yy04M2UzLWZkYjE0NjY3NjE1MyJ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir informe en ventana completa
          </a>
        </div>
      </div>
    </div>
  );
}
