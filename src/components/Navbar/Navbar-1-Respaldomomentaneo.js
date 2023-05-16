import React from 'react';
import Navbaritem from './NavbarItem';
import CartWidget from '../Cart/CartWidget';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand"> {props.navbarLogo} </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {props.item?.map((titulo) => (
            <Navbaritem key={titulo} titulo={titulo}/>))}

            <Navbaritem titulo={'Inicio'}/>
            <Navbaritem titulo={'Imagenes'}/>
            <Navbaritem titulo={'La empresa'}/>
            <Navbaritem titulo={'Contacto'}/>
          
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;