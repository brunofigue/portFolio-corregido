import React from 'react';
import foto from "../assets/bruno.jpg"
const About = () => {
  return (
    <section id="about" className="about py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Sobre mí</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
          <img src={foto} alt="Bruno" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-6">
            <p>
              Buenas, mi nombre es Bruno Figueroa, soy un desarrollador web apasionado por crear experiencias digitales únicas. 
              Me especializo en React, JavaScript, y diseño moderno. Mi objetivo es construir aplicaciones eficientes, 
              accesibles y fáciles de usar. Siempre busco aprender nuevas tecnologías y seguir mejorando mis habilidades.
            </p>
            <p>
              Actualmente, estoy aprendiendo sobre el desarrollo backend con Node.js y creando proyectos que me permitan mejorar mis habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
