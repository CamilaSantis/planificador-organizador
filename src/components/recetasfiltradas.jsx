import React, { useState } from "react";
import productos from "../data/productos";

function RecetasFiltradas() {
  const [categoriaActiva, setCategoriaActiva] = useState("pan");

  const recetas = productos[categoriaActiva] || [];

  return (
    <section>
      <h2>Recetas de {categoriaActiva}</h2>
      <div className="botones-categorias">
        {Object.keys(productos).map((cat) => (
          <button key={cat} onClick={() => setCategoriaActiva(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="recetas">
        {recetas.map((r) => (
          <div key={r.id} className="receta-card">
            <img src={r.imagen} alt={r.nombre} />
            <h3>{r.nombre}</h3>
            <p>{r.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecetasFiltradas;
