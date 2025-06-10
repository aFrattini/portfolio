import ProjectCard from '../components/ProjectCard';
import '../CSS/MLprojects.css';
import titanicImg from '../assets/titanic.png';
import clusteringImg from '../assets/clustering.png';

function MLProjects() {
  const proyectosML = [
    {
      id: 'titanic',
      description: 'Predicción de la supervivencia de los pasajeros del Titanic aplicando algoritmos de clasificación sobre datos reales, considerando factores sociales y personales como la clase, edad, sexo y acompañantes a bordo.',
      image: titanicImg,
      link: '/project/titanic'
    },
    {
      id: 'cluster-paises',
      description: 'Agrupamiento de países según indicadores socioeconómicos mediante técnicas de aprendizaje no supervisado para identificar regiones más vulnerables.',
      image: clusteringImg,
      link: '/project/cluster-paises'
    }
  ];

  return (
    <div className="ml-projects-container">
      <h1 className="ml-title">Proyectos de Machine Learning</h1>
      <div className="ml-grid">
        {proyectosML.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default MLProjects;
