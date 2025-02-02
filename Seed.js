import mongoose from 'mongoose';
import Proyecto from './models/Proyecto.js';

const proyectos = [
  {
    name: 'Runing - Trails',
    description: 'Proyecto para entrega con js sobre inscripcion a una carrera. fecha 20/10/24.',
    image: 'https://i0.wp.com/carrerasdemontana.com/wp-content/uploads/2022/04/trail-las-palomas-2022-trail-running-andalucia-1.jpg?resize=222%2C180&ssl=1',
    url: 'https://github.com/brunofigue/entrega-con-js.git',
  },
  {
    name: 'RC inspecciones',
    description: 'Proyecto profesional en grupo, con división de tareas. Fecha 10/12/24',
    image: 'https://rcinspecciones.com/gallery_gen/9de942a5c7b3b7bfab377e490a9a3260_fit.jpg',
    url: 'https://github.com/carlos8788/PRACT_PROF.git',
  },
  {
    name: 'Mi portfolio',
    description: 'En este proyecto te muestro el código de mi portfolio.',
    image: 'https://images.unsplash.com/photo-1551641145-a1e18544acb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc2Fycm9sbGFkb3IlMjB3ZWJ8ZW58MHx8MHx8fDA%3D',
    url: 'https://github.com/brunofigue/portFolio-corregido.git',
  },
];

mongoose.connect('mongodb://127.0.0.1:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    Proyecto.insertMany(proyectos)
      .then(() => {
        console.log('Datos sembrados correctamente');
        mongoose.disconnect();
      })
      .catch((err) => {
        console.error('Error al sembrar los datos:', err);
        mongoose.disconnect();
      });
  })
  .catch((err) => console.error('Error al conectar a MongoDB:', err));
