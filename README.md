# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<img src={project.image} className="card-img-top" alt={project.title} />


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/about';


const App = () => {
  return (
    <div>
      <Header />
        <Fade>
          <Hero />
            <Slide>
              <About/>
              <Technologies />
              <Projects />
            </Slide>
          <ContactForm />
          <Footer />
        </Fade>
    </div>
  );
};

export default App;
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 fixed-top w-100">
      <nav className="container d-flex justify-content-between">
        <h1 className="logo">Mi Portafolio</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#hero">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Layout from './layout/Layout';  // Ruta correcta al Layout
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/about';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"element={
              <>
                <Fade>
                  <Hero />
                </Fade>
                <Slide>
                  <About />
                </Slide>
                <Technologies />
                <Projects />
                <ContactForm />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

<div className="col-md-8 col-lg-6 mb-3">




import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
