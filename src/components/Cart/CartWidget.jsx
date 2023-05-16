import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
      <a href="#">
        <FaShoppingCart style={{ fontSize: '24px', color: 'white' }} />
      </a>
    </div>
  );
};

export default CartWidget;
