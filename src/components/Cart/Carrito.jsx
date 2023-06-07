import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cartstyles.css';
import { CartContext } from '../Cart/CartContext';
import CartItem from './CartItem';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    // Lógica para finalizar la compra, por ejemplo, enviar los datos del carrito al servidor o realizar alguna acción específica.
    // Aquí puedes agregar tu lógica personalizada para finalizar la compra
    clearCart();
  };

  const handleVolverAtras = () => {
    navigate(-1); // Volver atrás en el historial de navegación
  };

  return (
    <div className="container">
      <h2 className='titulo-carrito'>Carrito de compras</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeFromCart} />
          ))}
          <div className="buttons-container">
            <button className="btn btn-outline-secondary border-0 text-white" onClick={clearCart}>
              Vaciar el carrito
            </button>
            <Link className="btn btn-outline-secondary border-0 text-white" to="/compratusentradas">
              Seguir comprando
            </Link>
            <button className="btn btn-outline-secondary border-0 text-white" onClick={handleFinalizarCompra}>
              Finalizar compra
            </button>
            <button className="btn btn-outline-secondary border-0 text-white" onClick={handleVolverAtras}>
              Volver atrás
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center text-white'>
          <hr className='transparent' />
          No hay productos en el carrito.
          <hr className='transparent'/>
          <div className='button-container'>
          <button className="btn btn-outline-secondary border-0 text-white" 
          onClick={handleVolverAtras}>
            Volver atrás
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Carrito;
