import React from 'react';
import './styles.css';

import video from '../components/assets/tomorrowland-comprimido.mp4';
import entradaBoliche from '../components/assets/entrada-boliche.jpg';
import genteColores from '../components/assets/gente-colores.jpg';
import genteVioleta from '../components/assets/gente-violeta.jpg';

const Inicio = () => {
  return (
    <div>
      <h1 className="text-white text-center tracking-in-contract-bck-top estilo-letra">
        30 AÑOS HACIENDO HISTORIA
      </h1>
      <main id="hero">
        <div className="capa">
          <video muted autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </main>
      <div className="margen">
        <h2 className="text-white text-center tamaños-titulos-reserva">
          Imágenes Destacadas
        </h2>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={entradaBoliche} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={genteVioleta} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={genteColores} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Inicio;
