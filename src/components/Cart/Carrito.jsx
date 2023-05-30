import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './cartstyles.css';
import { useCart } from '../Cart/CartContext';
import CartItem from './CartItem';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Agregar clearCart en destructuring

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <CartWidget />
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeFromCart} />
          ))}
          <button className="clear-cart btn btn-outline-secondary border-0 text-white" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <p className='text-white'>No hay productos en el carrito.</p>
      )}
      <Link to="/Inicio" className='carrito cart-margin btn btn-outline-secondary border-0'>Volver a la página principal</Link>
    </div>
  );
};

export default Carrito;


