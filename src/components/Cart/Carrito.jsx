import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './cartstyles.css';
import { CartContext } from '../Cart/CartContext';
import CartItem from './CartItem';

const Carrito = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Carrito de compras</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeFromCart} />
          ))}
          <Link to="/">Seguir comprando</Link>
          <button className="btn btn-primary">Finalizar compra</button>
        </div>
      ) : (
        <div>No hay productos en el carrito.</div>
      )}
    </div>
  );
};

export default Carrito;
