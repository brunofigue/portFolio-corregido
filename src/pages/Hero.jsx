import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aparecerá después de 0.5s
    return () => clearTimeout(timeout);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section
        id="hero"
        className="hero bg-dark text-white d-flex align-items-center justify-content-center text-center"
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h2 className="display-4">¡Bienvenido a mi portafolio!</h2>
          <p className="lead">Aquí encontrarás mis mejores proyectos y habilidades.</p>
          <button className="btn btn-primary" onClick={toggleModal}>
            Contáctame
          </button>
        </div>
      </section>

      {/* Modal personalizado */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
            }}
          >
            <h4 style={{ marginBottom: "15px", color: "#333" }}>¡Contáctame!</h4>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Te dejo mi número de contacto: <strong>+54 2392 544463</strong>
            </p>
            <button
              className="btn btn-primary"
              onClick={toggleModal}
              style={{ marginTop: "15px" }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
