import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css'; // íconos bootstrap 

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`py-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container text-center">
        <h1>Mi Portafolio</h1>
        <nav>
          <ul className="list-unstyled d-flex justify-content-center gap-3">
            <li><Link to="/" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Inicio</Link></li>
            <li><Link to="/about" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Sobre mí</Link></li>
            <li><Link to="/technologies" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Tecnologías</Link></li>
            <li><Link to="/projects" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Proyectos</Link></li>
            <li><Link to="/contact" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Contacto</Link></li>
          </ul>
        </nav>
        {/* Ícono de cambio de tema */}
        <button 
          className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} mt-3`} 
          onClick={toggleTheme}
          style={{ border: 'none', background: 'none' }} // Sin borde ni fondo
        >
          {theme === 'dark' ? (
            <i className="bi bi-sun" style={{ fontSize: '30px' }}></i> // Ícono de sol para tema claro
          ) : (
            <i className="bi bi-moon" style={{ fontSize: '30px' }}></i> // Ícono de luna para tema oscuro
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
