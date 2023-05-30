// ItemDetailsProduct.js
import React from 'react';
import { useParams } from 'react-router-dom';


const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Producto 1',
    price: '$100',
    stock: 10,
    description: 'Descripción detallada del producto 1'
  },
  'producto-2': {
    id: 2,
    title: 'Producto 2',
    price: '$200',
    stock: 5,
    description: 'Nueva descripción para el producto 2'
  },
  'producto-3': {
    id: 3,
    title: 'Producto 3',
    price: '$300',
    stock: 8,
    description: 'Nueva descripción para el producto 3'
  }
};

const ItemDetailsProduct = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];

  return (
    <div>
      {selectedProduct ? (
        <div>
          <h2>Detalles del producto con ID: {id}</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Precio: {selectedProduct.price}</p>
          <p>Stock disponible: {selectedProduct.stock}</p>
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

export default ItemDetailsProduct;
