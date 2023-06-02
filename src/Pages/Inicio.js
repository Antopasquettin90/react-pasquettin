import React from 'react';
import Cards from '../components/Cards/Cards';
import video from '../components/assets/tomorrowland-comprimido.mp4';
import entradaBoliche from '../components/assets/entrada-boliche.jpg';
import genteColores from '../components/assets/gente-colores.jpg';
import genteVioleta from '../components/assets/gente-violeta.jpg';
import logo25a from '../components/assets/logo-25a.jpeg';
import speedunlimited from '../components/assets/speedunlimited.png';
import cocacolaLogo from '../components/assets/cocacola-logo.jpg';
import cervezaCorona from '../components/assets/cerrar-una-caja-de-cerveza-corona-extra-calgary-alberta-canada-junio-186157999.jpg';
import quilmesLogo from '../components/assets/cerveceria-y-malteria-quilmes-logo-en-alta.jpg';

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
        <h2 className="text-white text-center tamaños-titulos-reserva">Imágenes Destacadas</h2>
      </div>
      <div
        id="carouselExampleIndicators"
        className="margen carousel carrusel-modificado"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={entradaBoliche} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={genteColores} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={genteVioleta} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center">
        <h2 className="mt-5 text-center titulos text-white tamaños-titulos-reserva">
          Vení a disfrutar de la buena gastronomía
        </h2>
      </div>

      <div className="container-fluid text-center">
        <div className="mt-5 row align-items-start text-white tamaños-letras-chicas">
          <div className="mt-5 col separar1 scale-in-top">
            <img className="img border border-white" src={logo25a} width="250px" height="" alt="" />
          </div>
          <div className="col">
            <p className="mt-5 tamaños-letras-chicas text-white text-center text-focus-in">
              La discoteca y el bar más emblemáticos de Villa Huidobro y la zona, donde se combinan
              patrimonio, música, buena gastronomía y coctelería. Una mezcla eléctrica de
              autenticidad, espontaneidad, diversión y prestigio. Desde 1993, Quijote ha sido el
              pionero del movimiento cultural, musical y gastronómico.
            </p>
          </div>
          <div className=" text-center roll-in-top">
            <a href="reserva.html" className="mt-5 btn btn-danger color-boton">
              Reserva tu Mesa
            </a>
          </div>
        </div>
      </div>

      <div className="separar container-fluid text-center">
        <div className="row align-items-start text-white">
          <div className="col mt-3 jello-horizontal">
            <img src={speedunlimited} height="" width="" className="img tamaños-iconos" alt="" />
          </div>
          <div className="col mt-3 jello-horizontal">
            <img src={cocacolaLogo} height="" width="" className="img tamaños-iconos" alt="" />
          </div>
          <div className="col mt-3 jello-horizontal">
            <img
              src={cervezaCorona}
              height=""
              width=""
              className="img tamaños-iconos"
              alt=""
            />
          </div>
          <div className="col mt-3 jello-horizontal">
            <img src={quilmesLogo} height="" width="" className="img tamaños-iconos" alt="" />
          </div>
        </div>
      </div>

      <h1>Inicio</h1>
      <Cards />
    </div>
  );
};

export default Inicio;
