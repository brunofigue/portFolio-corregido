import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`py-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Título */}
          <h1>Mi Portafolio</h1>
          {/* Botón hamburguesa (solo visible en móviles) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
            style={{ border: 'none', background: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* Menú */}
        <nav
          className={`navbar-collapse ${menuOpen ? 'show' : 'collapse d-lg-flex justify-content-lg-center'}`}
          id="navbarNav"
        >
         <ul className="list-unstyled d-flex justify-content-center gap-3">
            <li><Link to="/" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Inicio</Link></li>
            <li><Link to="/about" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Sobre mí</Link></li>
            <li><Link to="/technologies" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Tecnologías</Link></li>
            <li><Link to="/projects" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Proyectos</Link></li>
            <li><Link to="/contact" className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Contacto</Link></li>
          </ul>
        </nav>
        {/* Botón de tema */}
        <div className="text-center mt-3">
          <button
            className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
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
      </div>
    </header>
  );
};

export default Header;
