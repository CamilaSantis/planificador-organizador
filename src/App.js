import React, { useState } from "react";
import Header from "./components/header.jsx";
import SearchBar from "./components/searchbar.jsx";
import Categorias from "./components/categorias.jsx";
import Carrusel from "./components/carrusel.jsx";
import ProductosSugeridos from "./components/productossugeridos.jsx";
import RegistroForm from "./components/registroform.jsx";
import ContactoForm from "./components/contactoform.jsx";
import Carrito from "./components/carrito.jsx";
import ListaProductos from "./components/ListaProductos.jsx";
import { productos as data } from "./data/productos.js";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("pan");
  const [carrito, setCarrito] = useState([]);

  const productosFiltrados = categoriaSeleccionada
    ? data[categoriaSeleccionada] || []
    : [];

  const agregarAlCarrito = (id) => {
    const todosProductos = Object.values(data).flat();
    const producto = todosProductos.find((p) => p.id === id);
    if (producto) setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Categorias onSeleccionar={setCategoriaSeleccionada} />
        <Carrusel />
        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarAlCarrito}
        />
        <ProductosSugeridos />
        <RegistroForm />
        <ContactoForm />
      </main>
      <Carrito
        carrito={carrito}
        onEliminar={eliminarDelCarrito}
        onVaciar={vaciarCarrito}
      />
    </>
  );
}

export default App;