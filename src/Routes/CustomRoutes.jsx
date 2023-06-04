import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../Pages/Inicio';
import Proximoseventos from '../Pages/Proximoseventos';
import Imagenes from '../Pages/Imagenes';
import Compratusentradas from '../Pages/Compratusentradas';
import SobreNosotros from '../Pages/SobreNosotros';
import Contacto from '../Pages/Contacto';


import Footer from '../components/Footer/Footer';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/proximoseventos" element={<Proximoseventos />} />
      <Route path="/imagenes" element={<Imagenes />} />
      <Route path="/compratusentradas" element={<Compratusentradas />} />
      <Route path="/sobreNosotros" element={<SobreNosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Footer />
    </Routes>
  );
};

export default CustomRoutes;
