import ProjectCard from '../components/ProjectCard';

function PowerBIProjects() {
  const dashboards = [
    {
      id: 'ventas',
      title: 'Dashboard de Ventas',
      description: 'Análisis de rendimiento mensual por región y producto.',
      image: '/assets/ventas-dashboard.png',
      link: '/project/dashboard-ventas'
    },
    {
      id: 'empleo',
      title: 'Indicadores de Empleo',
      description: 'Dashboards interactivos sobre desempleo y participación laboral.',
      image: '/assets/empleo-dashboard.png',
      link: '/project/dashboard-empleo'
    }
    // Agregás más dashboards acá
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Dashboards Power BI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default PowerBIProjects;
