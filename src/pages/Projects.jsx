import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]); // Para almacenar los proyectos
  const [loading, setLoading] = useState(true); // Para controlar el estado de carga

  useEffect(() => {
    // Obtener los proyectos desde el backend
    fetch('http://localhost:5001/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Actualizar el estado con los proyectos obtenidos
        setLoading(false); // Cambiar el estado de carga a falso una vez que los datos se hayan recibido
      })
      .catch((error) => {
        console.error('Error al obtener los proyectos:', error);
        setLoading(false); // En caso de error también desactivamos la carga
      });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return (
      <section id="projects" className="projects py-5 bg-dark text-light">
        <div className="container text-center">
          <h3 className="mb-4">Mis Proyectos</h3>
          <p>Cargando proyectos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects py-5 bg-dark text-light">
      <div className="container text-center">
        <h3 className="mb-4">Mis Proyectos</h3>
        <div className="row d-flex align-items-stretch">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={project.image}
                    className="card-img-top project-image"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.url} className="btn btn-primary">
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron proyectos.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
