import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import ItemDetailsProduct from './components/Products/ItemDetailsProduct';
import Carrito from './components/Cart/Carrito';
import CartProvider from './components/Cart/CartContext';
import Footer from './components/Footer/Footer';
import CustomRoutes
 from './Routes/CustomRoutes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/Inicio" element={<Cards />} />
          <Route path="/Inicio" element={<CustomRoutes />} />
          <Route path="/category/:categoryId" element={<Cards />} />
          <Route path="/product/:id/details" element={<ItemDetailsProduct />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

