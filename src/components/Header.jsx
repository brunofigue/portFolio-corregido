import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`py-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container text-center">
        <h1>Mi Portafolio</h1>
        <nav>
          <ul className="list-unstyled d-flex justify-content-center gap-3">
            <li><Link to="/" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Inicio</Link></li>
            <li><Link to="/about" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Sobre mí</Link></li>
            <li><Link to="/technologies" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Tecnologías</Link></li>
            <li><Link to="/projects" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Proyectos</Link></li>
            <li><Link to="/contact" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Contacto</Link></li>
          </ul>
        </nav>
        <button 
          className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} mt-3`} 
          onClick={toggleTheme}
          style={{ border: 'none', background: 'none' }}
        >
          {theme === 'dark' ? (
            <i className="bi bi-sun" style={{ fontSize: '30px' }}></i>
          ) : (
            <i className="bi bi-moon" style={{ fontSize: '30px' }}></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
