import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Proyecto from './models/Proyecto.js'; // Importar el modelo Proyecto

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta para obtener los proyectos
app.get('/api/projects', async (req, res) => {
  try {
    //  obtener los proyectos desde la base de datos
    const proyectos = await Proyecto.find();

    if (proyectos.length === 0) {
      // Si no hay proyectos en la base de datos, devolvemos los proyectos predefinidos
      const proyectosPredefinidos = [
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

      return res.json(proyectosPredefinidos); // Retorna proyectos predefinidos si no hay en la base de datos
    }

    // Si hay proyectos en la base de datos, los devuelve
    res.json(proyectos);
  } catch (err) {
    console.error('Error al obtener los proyectos:', err);
    res.status(500).json({ message: 'Error al obtener los proyectos' });
  }
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
