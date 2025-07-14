import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categorias from "./components/Categorias";
import Carrusel from "./components/Carrusel";
import ProductosSugeridos from "./components/ProductosSugeridos";
import RegistroForm from "./components/registroform.jsx";
import ContactoForm from "./components/ContactoForm";
import Carrito from "./components/Carrito";

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


