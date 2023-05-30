import React from 'react';
import { useParams } from 'react-router-dom';

const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Producto 1',
    image: 'ruta-de-la-imagen-del-producto-1.jpg',
    details: 'Detalles del producto 1',
    price: '$100',
    stock: 10,
  },
  'producto-2': {
    id: 2,
    title: 'Producto 2',
    image: 'ruta-de-la-imagen-del-producto-2.jpg',
    details: 'Detalles del producto 2',
    price: '$200',
    stock: 5,
  },
  'producto-3': {
    id: 3,
    title: 'Producto 3',
    image: 'ruta-de-la-imagen-del-producto-3.jpg',
    details: 'Detalles del producto 3',
    price: '$300',
    stock: 8,
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];

  if (!selectedProduct) {
    return (
      <div>
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <p>Nombre: {selectedProduct.title}</p>
      <img src={selectedProduct.image} alt="Imagen del producto" />
      <p>Detalles: {selectedProduct.details}</p>
      <p>Precio: {selectedProduct.price}</p>
      <p>Stock: {selectedProduct.stock}</p>
    </div>
  );
};

export default ProductDetails;
