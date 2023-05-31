import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Carrito from './components/Cart/Carrito';
import CartProvider from './components/Cart/CartContext';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/Inicio" element={<Cards />} />
          <Route path="/category/:categoryId" element={<Cards />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
