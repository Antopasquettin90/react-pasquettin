import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink to={props.path} className="nav-link" activeClassName="active" exact>
        {props.titulo}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
