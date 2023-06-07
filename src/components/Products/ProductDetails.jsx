import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import image1 from '../assets/image1.jpg';

const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Producto 1',
    image: image1,
    details: 'Detalles del producto 1',
    price: '$100',
    stock: 10,
  },
  'producto-2': {
    id: 2,
    title: 'Producto 2',
    image: image1,
    details: 'Detalles del producto 2',
    price: '$200',
    stock: 5,
  },
  'producto-3': {
    id: 3,
    title: 'Producto 3',
    image: image1,
    details: 'Detalles del producto 3',
    price: '$300',
    stock: 8,
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const addToCart = () => {
    // Lógica para agregar el producto al carrito
  };

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
      <div style={{ display: 'flex' }}>
        <div>
          <img src={selectedProduct.image} alt="Imagen del producto" style={{ width: '200px' }} />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>Precio: {selectedProduct.price}</p>
          <p>Stock: {selectedProduct.stock}</p>
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
      </div>
      <button onClick={toggleDetails}>Ver más detalles</button>
      {showDetails && (
        <div>
          <p>Detalles: {selectedProduct.details}</p>
        </div>
      )}
      <Link to="/carrito">Ir al carrito</Link>
    </div>
  );
};

export default ProductDetails;
