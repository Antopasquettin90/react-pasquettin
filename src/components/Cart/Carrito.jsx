import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './cartstyles.css';
import { CartContext } from '../Cart/CartContext';
import CartItem from './CartItem';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleFinalizarCompra = () => {
    // Lógica para finalizar la compra, por ejemplo, enviar los datos del carrito al servidor o realizar alguna acción específica.
    console.log('Compra finalizada');
    // Aquí también puedes llamar a una función para limpiar el carrito después de finalizar la compra
    clearCart();
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
          </div>
        </div>
      ) : (
        <div className='text-white'>No hay productos en el carrito.</div>
      )}
    </div>
  );
};

export default Carrito;
