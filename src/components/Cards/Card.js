import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

function Card({ imageSource, title, text, url, price, quantity, description, expanded, onExpand, onCollapse }) {
  const { addToCart } = useCart();

  const handleExpand = () => {
    if (expanded) {
      onCollapse();
    } else {
      onExpand();
    }
  };

  const handleAddToCart = () => {
    // Crea un objeto con la información del producto
    const product = {
      id: url,
      title,
      price,
      quantity: 1 // Puedes ajustar la cantidad según tus necesidades
    };

    addToCart(product);
  };

  return (
    <div className={`card text-center bg-dark animate__animated ${expanded ? 'expanded' : 'animate__fadeInUp'}`}>
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        {expanded && description && (
          <p className="card-text text-secondary">
            {description}
          </p>
        )}
        <p>Precio: {price}</p>
        <p>Cantidad: {quantity}</p>
        <div className="button-container">
          {expanded ? (
            <>
              <Link to={`/product/${url}/details`}>
                <button className="btn btn-outline-secondary border-0">Ver más detalles</button>
              </Link>
              <button className="btn btn-outline-secondary border-0" onClick={handleExpand}>
                Ver menos
              </button>
            </>
          ) : (
            <button className="btn btn-outline-secondary border-0" onClick={handleExpand}>
              Ver más
            </button>
          )}
          <button className="btn btn-outline-secondary border-0 btn-add-to-cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string,
  expanded: PropTypes.bool,
  onExpand: PropTypes.func,
  onCollapse: PropTypes.func
};

export default Card;
