import React from "react";
import Header from "./components/header.jsx";
import SearchBar from "./components/searchbar.jsx";
import Categorias from "./components/categorias.jsx";
import Carrusel from "./components/carrusel.jsx";
import ProductosSugeridos from "./components/productossugeridos.jsx";
import RegistroForm from "./components/registroform.jsx";
import ContactoForm from "./components/contactoform.jsx";
import Carrito from "./components/carrito.jsx";


function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Categorias />
        <Carrusel />
        <ProductosSugeridos />
        <RegistroForm />
        <ContactoForm />
      </main>
      <Carrito />
    </>
  );
}

export default App;


