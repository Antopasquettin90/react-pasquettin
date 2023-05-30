import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import ItemList from './components/Items/ItemList';
import ProductDetails from './components/Products/ProductDetails';
import ItemDetailsProduct from './components/Products/ItemDetailsProduct';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Inicio" element={<Cards />} />
        <Route path="/" element={<Cards />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id/details" element={<ItemDetailsProduct />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
