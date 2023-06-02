import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Imagenes from '../Pages/Imagenes';
import LaEmpresa from '../Pages/LaEmpresa';
import Contactos from '../Pages/Contactos';
import Compratusentradas from '../Pages/Compratusentradas';
import Reserva from '../Pages/Reserva';
import Proximoseventos from '../Pages/Proximoseventos';
import SobreNosotros from '../Pages/SobreNosotros';
import Carta from '../Pages/Carta';

import Footer from '../components/Footer/Footer';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Imagenes" element={<Imagenes />} />
      <Route path="/LaEmpresa" element={<LaEmpresa />} />
      <Route path="/Contactos" element={<Contactos />} />
      <Route path="/Compratusentradas" element={<Compratusentradas />} />
      <Route path="/Reserva" element={<Reserva />} />
      <Route path="/Proximoseventos" element={<Proximoseventos />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Carta" element={<Carta />} />
      <Footer />
    </Routes>
  );
};

export default CustomRoutes;
