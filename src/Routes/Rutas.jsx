import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Imagenes from '../Pages/Imagenes'
import LaEmpresa from '../Pages/LaEmpresa';
import Contactos from '../Pages/Contactos'
import Compratusentradas from '../Pages/Compratusentradas';
import Elbar from '../Pages/Elbar';
import Reserva from '../Pages/Reserva';
import Proximoseventos from '../Pages/Proximoseventos';
import SobreNosotros from '../Pages/SobreNosotros';
import Carta from '../Pages/Carta';


import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar';


const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Imagenes" element={<Imagenes />} />
        <Route path="/LaEmpresa" element={<LaEmpresa />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Compratusentradas" element={<Compratusentradas />} />
        <Route path="/Reserva" element={<Reserva />} />
        <Route path="/Elbar" element={<Elbar />} />
        <Route path="/Proximoseventos" element={<Proximoseventos />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Carta" element={<Carta />} />

      </Routes>
      <Footer/>  
    </BrowserRouter>
  );
};

export default Rutas;