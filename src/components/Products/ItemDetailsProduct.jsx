import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Products/products.css';
import image1 from '../assets/image1.jpg';
import { useCart } from '../Cart/CartContext';

const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Sabado 1/07/2023',
    image: image1,
    url: 'producto-1',
    category: 'Julio',
    description: 'Descripción del evento 1',
    prices: {
      general: 800,
      vip: 2000
    },
    quantity: {
      general: 500,
      vip: 100
    },
    initialQuantity: {
      general: 500,
      vip: 100
    }
  },
  'producto-2': {
    id: 2,
    title: 'Sabado 5/08/2023',
    image: image1,
    url: 'producto-2',
    category: 'Agosto',
    description: 'Descripción del evento 2',
    prices: {
      general: 800,
      vip: 2000
    },
    quantity: {
      general: 500,
      vip: 100
    },
    initialQuantity: {
      general: 500,
      vip: 100
    }
  },
  'producto-3': {
    id: 3,
    title: 'Sabado 2/09/2023',
    image: image1,
    url: 'producto-3',
    category: 'Septiembre',
    description: 'Descripción del evento 3',
    prices: {
      general: 800,
      vip: 2000
    },
    quantity: {
      general: 500,
      vip: 100
    },
    initialQuantity: {
      general: 500,
      vip: 100
    }
  }
};

const ItemDetailsProduct = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState('general');
  const { addToCart, cartItems, clearCart } = useCart();

  useEffect(() => {
    return () => {
      // Restablecer el stock cuando se desmonta el componente o se vacía el carrito
      if (cartItems.length === 0) {
        productDetails[id].quantity = { ...productDetails[id].initialQuantity };
      }
    };
  }, [cartItems, id]);

  const handleAddToCart = () => {
    const product = {
      id: selectedProduct.url,
      title: selectedProduct.title,
      price: selectedProduct.prices[selectedType],
      quantity: quantity
    };

    addToCart(product);
    updateStock(selectedType, quantity);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setQuantity(1);
  };

  const updateStock = (type, quantity) => {
    const updatedProduct = { ...selectedProduct };
    updatedProduct.quantity[type] -= quantity;
    productDetails[id] = updatedProduct;
  };

  const handleQuantityChange = (value) => {
    if (quantity + value >= 1 && quantity + value <= selectedProduct.quantity[selectedType]) {
      setQuantity(quantity + value);
    }
  };

  return (
    <div className="letras">
      {selectedProduct ? (
        <div>
          <h2 className="titulo-producto">Detalles del producto con ID: {id}</h2>
          <div className="product-details">
            <div className="product-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="small-image" />
            </div>
            <div className="product-info">
              <p>Precio: ${selectedProduct.prices[selectedType]}</p>
              <p>Stock disponible: {selectedProduct.quantity[selectedType]}</p>
              <div>
                <label>Tipo:</label>
                <select value={selectedType} onChange={handleTypeChange}>
                  <option value="general">Entrada general</option>
                  <option value="vip">Entrada VIP</option>
                </select>
              </div>
              <p>Descripción: {selectedProduct.description}</p>
              <div>
                <label>Cantidad:</label>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
          </div>
          <Link to="/">Volver a la página principal</Link>
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
