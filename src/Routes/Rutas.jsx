import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Imagenes from '../Pages/Imagenes'
import LaEmpresa from '../Pages/LaEmpresa';
import Contactos from '../Pages/Contactos'
import Inicio from '../Pages/Inicio';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Imagenes" element={<Imagenes />} />
        <Route path="/LaEmpresa" element={<LaEmpresa />} />
        <Route path="/Contactos" element={<Contactos />} />
      </Routes>
      <Footer/>  
    </BrowserRouter>
  );
};

export default Rutas;
