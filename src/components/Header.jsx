import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container text-center">
        <h1>Mi Portafolio</h1>
        <nav>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-light">Inicio</Link></li>
            <li><Link to="/about" className="text-light">Sobre mí</Link></li>
            <li><Link to="/technologies" className="text-light">Tecnologías</Link></li>
            <li><Link to="/projects" className="text-light">Proyectos</Link></li>
            <li><Link to="/contact" className="text-light">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
