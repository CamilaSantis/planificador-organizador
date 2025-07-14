import React, { useState } from "react";
import "./Carrito.css"; // Opcional para estilo modular

function Carrito() {
  const [items, setItems] = useState([]);
  
  const agregarProducto = (producto) => {
    setItems((prev) => [...prev, producto]);
  };

  const vaciarCarrito = () => {
    setItems([]);
  };

  return (
    <div className="carrito">
      <h3>🛒 Carrito de Compras</h3>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.nombre}</li>
            ))}
          </ul>
          <p>Total: {items.length} productos</p>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
      ) : (
        <p>El carrito está vacío 🍃</p>
      )}
    </div>
  );
}

export default Carrito;

