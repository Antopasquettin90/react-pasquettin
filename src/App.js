import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import ItemList from './components/Items/ItemList';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Inicio" element={<Cards />} />
        <Route path="/category/:categoryId" element={<Cards />} />
        <Route path="/detail/:detailId" element={<ItemList />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;



