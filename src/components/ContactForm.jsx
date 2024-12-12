import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-form-container bg-dark text-light py-5">
    <h3 className="text-center mb-4">Contáctame</h3>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
        <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="col-md-8 col-lg-6 mb-3 w-100">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-sm ">Enviar</button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
