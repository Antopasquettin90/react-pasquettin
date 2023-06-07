// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import ItemDetailsProduct from './components/Products/ItemDetailsProduct';
import Carrito from './components/Cart/Carrito';
import CartProvider from './components/Cart/CartContext';
import Footer from './components/Footer/Footer';

import './App.css';

import Inicio from './Pages/Inicio'
import Proximoseventos from './Pages/Proximoseventos'
import Imagenes from './Pages/Imagenes'
import Compratusentradas  from './Pages/Compratusentradas'
import Sobrenosotros from './Pages/SobreNosotros'
import Contacto from './Pages/Contacto'
import FormularioCompra from './components/Forms/FormularioCompra';
import MedioDePago from './components/Forms/MedioDePago';
import FinalizarCompra from './components/Forms/FinalizarCompra';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/proximoseventos" element={<Proximoseventos />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/compratusentradas" element={<Compratusentradas />} />
          <Route path="/sobrenosotros" element={<Sobrenosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:categoryId" element={<Cards />} />
          <Route path="/product/:id/details" element={<ItemDetailsProduct />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/formulario-compra" element={<FormularioCompra total={0} compras={[]} />} />
          <Route path="/formulario-medio-pago" element={<MedioDePago />} />
          <Route path="/finalizar-compra" element={<FinalizarCompra />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
