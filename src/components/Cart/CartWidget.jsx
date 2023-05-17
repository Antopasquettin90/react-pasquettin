import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const CartWidget = ({ cartItems }) => {
  return (
    <div>
      <NavLink to="#" activeClassName="active">
        <FaShoppingCart style={{ fontSize: '24px', color: 'white' }} />
        <span>{cartItems}</span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
