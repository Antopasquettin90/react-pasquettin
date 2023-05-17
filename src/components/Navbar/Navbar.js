import React from "react";
import CartWidget from "../Cart/CartWidget";
import { NavLink } from "react-router-dom";
import ImgLogo from "../assets/image3.jpeg";
import "./navbar.css";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg navbar navbar-dark text-end bg-dark">
      <div className="container letras">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <img
                className="img pulsate-bck text-white"
                src={ImgLogo}
                width="80px"
                height="80px"
                alt="Quijote"
              />
            </li>
            <NavbarItem titulo="Inicio" path="/Inicio" />
            <NavbarItem titulo="Próximos Eventos" path="/Proximoseventos" />
            <NavbarItem titulo="Imágenes" path="/Imagenes" />
            <NavbarItem
              titulo="Compra tus entradas"
              path="/Compratusentradas"
            />
            <li className="nav-item dropdown text-white">
              <NavLink
                to="/ElBar"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                El Bar
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavbarItem titulo="Sobre Nosotros" path="/SobreNosotros" className="text-dark" />
                <li className="dropdown-item">
                  <NavbarItem titulo="Carta" path="/Carta" className="text-dark" />
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <NavbarItem titulo="Reserva tu mesa" path="/ReservaMesa" className="text-dark" />
              </ul>
            </li>
            <NavbarItem titulo="Contactos" path="/Contactos" />
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
