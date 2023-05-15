
import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
// import ItemListContainer from './componentes/Contenido/ItemlistConteiner';
import Cards from './componentes/Cards/Cards';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar navbarLogo={'Quijote'} />
      <h1>Compra tus Entradas</h1>
      <Cards Cards={'Quijote'} />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;