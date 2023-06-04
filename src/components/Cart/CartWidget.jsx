import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../Cart/CartContext';
import "./cartstyles.css";

const CartWidget = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{cartItems.length}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
