import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>© 2024 Mi Portafolio - Todos los derechos reservados</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a
            href="https://instagram.com/br_figueroa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-figueroa-2307932a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a
            href="https://wa.me/2392544463"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
