import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../Cart/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="item-details">
        <span className="item-title text-white">{item.title}</span>
        <span className="item-price text-white">{item.price}</span>
        <span className="item-quantity text-white">Cantidad: {item.quantity}</span>
        <button className='btn btn-outline-secondary border-0' onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;



