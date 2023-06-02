import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Products/products.css';
import Card from './Card';
import image1 from '../assets/image1.jpg';

const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Sabado 13/05/2023',
    image: image1,
    url: 'producto-1',
    category: 'Mes 5',
    description: 'Descripción del evento 1',
    price: '$800',
    quantity: 500
  },
  'producto-2': {
    id: 2,
    title: 'Sabado 20/06/2023',
    image: image1,
    url: 'producto-2',
    category: 'Mes 6',
    description: 'Descripción del evento 2',
    price: '$800',
    quantity: 300
  },
  'producto-3': {
    id: 3,
    title: 'Sabado 27/07/2023',
    image: image1,
    url: 'producto-3',
    category: 'Mes 7',
    description: 'Descripción del evento 3',
    price: '$800',
    quantity: 1500
  }
};

const ItemDetailsProduct = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];

  return (
    <div className="letras">
      {selectedProduct ? (
        <div>
          <h2 className='titulo-producto'>Detalles del producto con ID: {id}</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Precio: {selectedProduct.price}</p>
          <p>Stock disponible: {selectedProduct.quantity}</p>
          <p>Descripción: {selectedProduct.description}</p>
        </div>
      ) : (
        <div>
          <h2>Producto no encontrado</h2>
        </div>
      )}
    </div>
  );
};

function Cards() {
  const { id } = useParams();
  const selectedProduct = productDetails[id];
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleExpand = (cardId) => {
    setExpandedCardId(cardId);
  };

  const handleCollapse = () => {
    setExpandedCardId(null);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {selectedProduct ? (
          <div className="col-md-12">
            <ItemDetailsProduct />
          </div>
        ) : (
          Object.values(productDetails).map((product) => (
            <div className="col-md-4" key={product.id}>
              <Card
                imageSource={product.image}
                title={product.title}
                url={product.url}
                price={product.price}
                quantity={product.quantity}
                description={product.description}
                expanded={expandedCardId === product.id}
                onExpand={() => handleExpand(product.id)}
                onCollapse={handleCollapse}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cards;
