import React from 'react';
import Navbaritem from './NavbarItem';
import CartWidget from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <p className="navbar-brand" href="#">Quijote</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/Inicio.js">Inicio</NavLink>
          {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
        </li>
        <li className="nav-item">
        <NavLink to="/Imagenes">Imagenes</NavLink>
          {/*<a className="nav-link" href="#">Link</a>*/}
        </li>
        <li className="nav-item dropdown">
        <NavLink to="/LaEmpresa.js">La Empresa</NavLink>
          {/*<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown</a>*/}
          <li className="nav-item dropdown">
          <NavLink to="/Contactos.js">Contacto</NavLink>
          </li>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar