import { Fragment } from "react";

const NavbarItem = (props) => {
  return (
   <Fragment>
        <li className="nav-item">
    <p className="nav-link active"aria-current="page">
      {props.titulo}
      </p>
  </li>
  </Fragment>
    
  )
}

export default NavbarItem;