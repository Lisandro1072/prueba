// Home.js
import React from "react";
import "../pages/home.css"; // Importa el archivo de estilos para Home

const Home = () => {
  return (
    <div className="home-container">
      {" "}
      {/* Usa una clase CSS para aplicar estilos */}
      <h1>Bienvenido a mi Página de Inicio</h1>
      <p>Explora nuestras increíbles características y servicios.</p>
      <div className="feature-list">
        <div className="feature-item">
          <h2>Funcionalidad 1</h2>
          <p>Descripción de la funcionalidad 1.</p>
        </div>
        <div className="feature-item">
          <h2>Funcionalidad 2</h2>
          <p>Descripción de la funcionalidad 2.</p>
        </div>
        <div className="feature-item">
          <h2>Funcionalidad 3</h2>
          <p>Descripción de la funcionalidad 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
