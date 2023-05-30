// Cards.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


import image1 from '../assets/image1.jpg';

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

function Cards({ categoryId }) {
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory !== 'All'
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="btn-group">
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === 'Mes 5' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Mes 5')}
            >
              Mes 5
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === 'Mes 6' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Mes 6')}
            >
              Mes 6
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === 'Mes 7' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('Mes 7')}
            >
              Mes 7
            </button>
          </div>
        </div>
        {filteredCards.map(({ id, title, image, url, price, quantity, description }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} price={price} quantity={quantity} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
}

Cards.propTypes = {
  categoryId: PropTypes.string
};

export default Cards;
