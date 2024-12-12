import React from 'react';

const projects = [
  {
    title: 'Runing - Trails',
    description: 'Proyecto para entrega con js sobre inscripcion a una carrera. fecha 20/10/24.',
    image: 'https://i0.wp.com/carrerasdemontana.com/wp-content/uploads/2022/04/trail-las-palomas-2022-trail-running-andalucia-1.jpg?resize=222%2C180&ssl=1',
    link: 'https://github.com/brunofigue/entrega-con-js.git',
  },
  {
    title: 'RC inspecciones',
    description: 'Proyecto profesional en grupo, con división de tareas. Fecha 10/12/24',
    image: 'https://rcinspecciones.com/gallery_gen/9de942a5c7b3b7bfab377e490a9a3260_fit.jpg',
    link: 'https://github.com/carlos8788/PRACT_PROF.git',
  },
  {
    title: 'Mi portfolio',
    description: 'En este proyecto te muestro el código de mi portfolio.',
    image: 'https://images.unsplash.com/photo-1551641145-a1e18544acb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc2Fycm9sbGFkb3IlMjB3ZWJ8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/brunofigue/portfolio.git',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects py-5 bg-dark text-light">
      <div className="container text-center">
        <h3 className="mb-4">Mis Proyectos:</h3>
        <div className="row d-flex align-items-stretch">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card">
              <img src={project.image} className="card-img-top project-image" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
