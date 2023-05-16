import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItems }) => {
  return (
    <div>
      <a href="#">
        <FaShoppingCart style={{ fontSize: '24px', color: 'white' }} />
        <span>{cartItems}</span>
      </a>
    </div>
  );
};

export default CartWidget;

