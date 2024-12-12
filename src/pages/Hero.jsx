import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aparecerá después de 0.5s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="hero bg-dark text-white d-flex align-items-center justify-content-center text-center"
      style={{
        height: '100vh', // Altura completa de la ventana
        backgroundImage: 'url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundAttachment: 'fixed', // Hace que el fondo no se mueva con el scroll (parallax)
        backgroundSize: 'cover', // Asegura que la imagen de fondo cubra toda la sección
      }}
    >
      <div className="container">
        <h2 className="display-4">¡Bienvenido a mi portafolio!</h2>
        <p className="lead">Aquí encontrarás mis mejores proyectos y habilidades.</p>
        <button className="btn btn-primary">Contáctame</button>
      </div>
    </section>
  );
};

export default Hero;
