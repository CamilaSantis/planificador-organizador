import React, { useState } from "react";

// Componentes principales
import Header from "./components/header.jsx";
import SearchBar from "./components/searchbar.jsx";
import Categorias from "./components/categorias.jsx";
import Carrusel from "./components/carrusel.jsx";
import RegistroForm from "./components/registroform.jsx";
import ContactoForm from "./components/contactoform.jsx";
import Carrito from "./components/carrito.jsx";
import ListaProductos from "./components/ListaProductos.jsx";
import ProductoCard from "./components/ProductoCard.jsx"; 

// Datos
import { productos as data } from "./data/productos.js";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("pan");
  const [carrito, setCarrito] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  // Todos los productos en un solo array para búsqueda
  const todosProductos = Object.values(data).flat();

  // Filtrado por categoría
  const productosFiltrados = categoriaSeleccionada
    ? data[categoriaSeleccionada] || []
    : [];

  // Agregar al carrito
  const agregarAlCarrito = (id) => {
    const producto = todosProductos.find((p) => p.id === id);
    if (producto) setCarrito([...carrito, producto]);
  };

  // Eliminar por índice
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  // Vaciar carrito completo
  const vaciarCarrito = () => setCarrito([]);

  return (
    <>
      <Header />
      <SearchBar productos={todosProductos} onResultados={setResultadosBusqueda} />

      <main>
        <Categorias onSeleccionar={setCategoriaSeleccionada} />
        <Carrusel />

        {/* Lista de productos filtrados por búsqueda o por categoría */}
        <ListaProductos
          productos={resultadosBusqueda.length > 0 ? resultadosBusqueda : productosFiltrados}
          onAgregar={agregarAlCarrito}
        />

        <RegistroForm />
        <ContactoForm />
      </main>

      {/* Carrito de compras */}
      <Carrito
        items={carrito}
        onEliminar={eliminarDelCarrito}
        onVaciar={vaciarCarrito}
      />
    </>
  );
}

export default App;