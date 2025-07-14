import React, { useState } from "react";

// Componentes principales
import Header from "./components/header.jsx";
import SearchBar from "./components/searchbar.jsx";
import Categorias from "./components/categorias.jsx";
import Carrusel from "./components/carrusel.jsx";
import { ProductosSugeridos } from "./components/productossugeridos.jsx"; // ✅ corregido: import nombrado
import RegistroForm from "./components/registroform.jsx";
import ContactoForm from "./components/contactoform.jsx";
import Carrito from "./components/carrito.jsx";
import ListaProductos from "./components/ListaProductos.jsx";

// Datos
import { productos as data } from "./data/productos.js"; // ✅ export nombrado

function App() {
  // Estado para categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("pan"); // Puedes cambiar por "dulces", "galletas", etc.

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Filtrar productos según categoría
  const productosFiltrados = categoriaSeleccionada
    ? data[categoriaSeleccionada] || []
    : [];

  // Agregar al carrito
  const agregarAlCarrito = (id) => {
    const todosProductos = Object.values(data).flat();
    const producto = todosProductos.find((p) => p.id === id);
    if (producto) setCarrito([...carrito, producto]);
  };

  // Eliminar un producto del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => setCarrito([]);

  // Debug opcional
  console.log("Productos visibles:", productosFiltrados);

  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Categorias onSeleccionar={setCategoriaSeleccionada} />
        <Carrusel />

        {/* Lista de productos filtrados por categoría */}
        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarAlCarrito}
        />

        {/* Productos sugeridos */}
        <ProductosSugeridos
          productos={Object.values(data).flat().slice(0, 3)} // ejemplo: mostrar 3 sugeridos
          onAgregar={agregarAlCarrito}
        />

        <RegistroForm />
        <ContactoForm />
      </main>

      {/* Carrito de compras */}
      <Carrito
        carrito={carrito}
        onEliminar={eliminarDelCarrito}
        onVaciar={vaciarCarrito}
      />
    </>
  );
}

export default App;