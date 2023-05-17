import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ imageSource, title, text, url, price, quantity }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = () => {
    console.log('Elemento agregado al carrito');
  };

  return (
    <div className={`card text-center bg-dark animate__animated ${expanded ? 'expanded' : 'animate__fadeInUp'}`}>
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        {expanded && (
          <p className="card-text text-secondary">
            {text
              ? text
              : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.'}
          </p>
        )}
        <p>Precio: {price}</p>
        <p>Cantidad: {quantity}</p>
        <div className="button-container">
          <button
            className={`btn btn-outline-secondary border-0 ${expanded ? 'expanded' : ''}`}
            onClick={handleExpand}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
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
};

export default Card;

