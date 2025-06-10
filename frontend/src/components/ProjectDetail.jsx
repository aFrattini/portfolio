// src/pages/ProjectDetail.jsx
import { useParams } from 'react-router-dom';
import { allProjects } from '../components/Projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) return <p>Proyecto no encontrado.</p>;

  return (
    <section style={{ padding: '2rem' }}>
      <h1>{project.title}</h1>
      <p><strong>Año:</strong> {project.year}</p>
      <p><strong>Descripción:</strong> {project.description}</p>
      <p><strong>Etiquetas:</strong> {project.tags.join(', ')}</p>
    </section>
  );
}
