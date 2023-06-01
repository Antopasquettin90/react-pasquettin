import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';

import image1 from '../assets/image1.jpg';
import { useCart } from '../Cart/CartContext';

const cards = [
  {
    id: 1,
    title: 'Sabado 13/05/2023',
    image: image1,
    url: 'producto-1',
    category: 'Mes 5',
    description: 'Descripción del evento 1',
    price: '$800',
    quantity: 500
  },
  {
    id: 2,
    title: 'Sabado 20/06/2023',
    image: image1,
    url: 'producto-2',
    category: 'Mes 6',
    description: 'Descripción del evento 2',
    price: '$800',
    quantity: 300
  },
  {
    id: 3,
    title: 'Sabado 27/07/2023',
    image: image1,
    url: 'producto-3',
    category: 'Mes 7',
    description: 'Descripción del evento 3',
    price: '$800',
    quantity: 1500
  }
];

const ItemDetailsProduct = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Elemento agregado al carrito:', product);
  };

  return (
    <div className="letras">
      <h2 className='titulo-producto'>Detalles del producto con ID: {product.url}</h2>
      <p>ID: {product.id}</p>
      <p>Precio: {product.price}</p>
      <p>Stock disponible: {product.quantity}</p>
      <p>Descripción: {product.description}</p>
      <button className="btn btn-outline-secondary border-0" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

function Cards({ categoryId }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const { addToCart } = useCart();

  const handleCardExpand = (cardId) => {
    setExpandedCard(cardId);
  };

  const handleCardCollapse = () => {
    setExpandedCard(null);
  };

  const { id } = useParams();

  const selectedProduct = cards.find((card) => card.url === id);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {selectedProduct ? (
          <div className="col-md-12">
            <ItemDetailsProduct product={selectedProduct} />
          </div>
        ) : (
          cards.map(({ id, title, image, url, price, quantity, description }) => (
            <div className="col-md-4" key={id}>
              <Card
                imageSource={image}
                title={title}
                url={url}
                price={price}
                quantity={quantity}
                description={description}
                expanded={expandedCard === id}
                onExpand={() => handleCardExpand(id)}
                onCollapse={handleCardCollapse}
                onAddToCart={() => addToCart({ id, title, image, url, price, quantity, description })}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

Cards.propTypes = {
  categoryId: PropTypes.string
};

export default Cards;
