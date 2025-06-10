// ClusterPaisesProject.jsx
import '../CSS/ClusterPaisesProject.css';

function ClusterPaisesProject() {
  return (
    <div className="paises-background">
      <div className="paises-project-container">
        <h2>Clustering - Aprendizaje no Supervisado</h2>

        <p className="project-description">
          Este proyecto forma parte de la asignatura de Machine Learning del curso de especialización en IA y Big Data, 
          diseñado para poner a prueba los conocimientos sobre modelos de aprendizaje no supervisado y técnicas como PCA 
          para la reducción de dimensionalidad.
          El objetivo es identificar patrones ocultos en los datos socioeconómicos y de salud de 166 países, agrupándolos 
          según su nivel de necesidad. La motivación parte de un encargo ficticio de la Fundación Ortega, interesada en 
          determinar qué países requieren mayor apoyo social para la apertura de hospitales, escuelas o comedores.
          A través del análisis de variables como mortalidad infantil, esperanza de vida, ingresos per cápita, gasto en 
          salud e inflación, se aplican algoritmos de agrupamiento (como K-Means y Clústering Jerárquico), buscando no solo generar 
          grupos significativos, sino también interpretar qué factores caracterizan a cada cluster.
        </p>

        <div className="paises-grid">
          <div className="paises-column">
            <section className="paises-box">
              <h3>Objetivo</h3>
              <p className="project-description">
                Identificar qué países se encuentran en mayor situación de pobreza mediante algoritmos de agrupamiento, 
                evaluando además si el uso de PCA resulta beneficioso para mejorar el análisis y la calidad de la agrupación de los datos.
              </p>
            </section>
          </div>
          <div className="paises-column">
            <section className="paises-box">
              <h3>Dataset</h3>
              <p className="project-description">
                Conjunto de datos compuesto por información de 166 países, que incluye variables clave como mortalidad 
                infantil, exportaciones e importaciones, gasto en salud, ingresos per cápita, inflación, esperanza de vida,
                número de hijos por mujer y PIB per cápita.
              </p>
            </section>            
          </div>
          <section className="paises-box resultados-full">
            <h3>Resultados</h3>
            <p className="project-description">
              El modelo K-Means agrupó a los países en cuatro clusters, de los cuales uno fue identificado como el grupo 
              con mayores índices de pobreza, compuesto por 41 países antes de aplicar PCA y 45 después. Este grupo 
              destaca por presentar ingresos per cápita bajos, alta mortalidad infantil y baja esperanza de vida. El 
              clustering jerárquico, por su parte, permitió identificar un grupo de países aún más específico con 
              condiciones socioeconómicas críticas.
              En términos de análisis dimensional, aplicar PCA logró reducir las variables a seis componentes explicando 
              un 97% de la varianza. Sin embargo, ni el rendimiento del modelo ni la claridad de los clusters mejoraron, 
              y el tiempo de ejecución incluso aumentó ligeramente. La conclusión es que, dado el tamaño moderado y la 
              naturaleza del dataset, el uso de PCA no resulta beneficioso en este caso. Entre los países más necesitados 
              identificados destacan Afghanistan, Benin, Burkina Faso, Burundi, Cameroon, Chad, Congo, Gambia, Guinea, 
              Haiti, Madagascar, Malawi, Mali, Mozambique, Niger, Sierra Leone, Tanzania, Togo, Uganda y Zambia. Estos 
              países concentran los peores indicadores socioeconómicos, lo que sugiere la necesidad de priorizar 
              inversiones en salud, educación e infraestructura.
            </p>
          </section>
        </div>

        <div className="project-link">
          <a href="https://github.com/aFrattini/countries-clustering/" target="_blank" rel="noopener noreferrer">
            Ver notebook en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClusterPaisesProject;
