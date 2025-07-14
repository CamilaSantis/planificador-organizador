import React from "react";

export default function ProductoCard({ producto, onAgregar }) {
  console.log("Renderizando producto:", producto);

  return (
    <div className="tarjeta-prod">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h4>{producto.nombre}</h4>
      <p>{producto.descripcion}</p>
      {onAgregar && (
        <button onClick={() => onAgregar(producto.id)}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
}