import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Inicio from '../Pages/Inicio';
import Proximoseventos from '../Pages/Proximoseventos';
import Imagenes from '../Pages/Imagenes';
import Compratusentradas from '../Pages/Compratusentradas';
import SobreNosotros from '../Pages/SobreNosotros';
import Contacto from '../Pages/Contacto';
import Footer from '../components/Footer/Footer';

const CustomRoutes = () => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los detalles del producto
    fetch('http://localhost:3000/api/product/1')
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/proximoseventos" element={<Proximoseventos />} />
      <Route path="/imagenes" element={<Imagenes />} />
      <Route path="/compratusentradas" element={<Compratusentradas />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      {productDetails && <p>{productDetails.name}</p>}
      <Footer />
    </Routes>
  );
};

export default CustomRoutes;
