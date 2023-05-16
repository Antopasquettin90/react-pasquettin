import React from 'react';
import CartWidget from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom';
import ImgLogo from '../assets/image3.jpeg'
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-expand-lg navbar navbar-dark text-end bg-dark">
      <div className="container letras">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <img className="img pulsate-bck text-white" 
            src={ImgLogo} 
            width="80px" height="80px" alt="Quijote" />

            </li>
            <li className="nav-item">
              <NavLink to="/Inicio" className="nav-link active" aria-current="page">Inicio</NavLink>
            </li>
            <li className="nav-item letras">
              <NavLink to="/Proximoseventos" className="nav-link letras">Próximos Eventos</NavLink>
            </li>
            <li className="nav-item letras">
              <NavLink to="/Imagenes" className="nav-link letras">Imágenes</NavLink>
            </li>
            <li className="nav-item letras">
              <NavLink to="/Compratusentradas" className="nav-link letras">Compra tus entradas</NavLink>
            </li>
            <li className="nav-item dropdown text-white">
              <NavLink to="/ElBar" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                El Bar
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="/SobreNosotros" className="dropdown-item letras">Sobre Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/NuestraCarta" className="dropdown-item letras" href="https://www.menudigital.com/restaurante/quijote-bar">Nuestra Carta</NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider letras" />
                </li>
                <li>
                  <NavLink to="/ReservaMesa" className="dropdown-item letras">Reserva tu mesa</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/Contactos" className="nav-link letras">Contactos</NavLink>
            </li>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
