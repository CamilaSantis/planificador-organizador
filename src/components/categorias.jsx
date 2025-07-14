// src/components/categorias.jsx

import React from "react";

// Exportación default directa
export default function Categorias({ onSeleccionar }) {
  const categorias = [
    { id: 'fermentos', nombre: 'Fermentos Líquidos' },
    { id: 'pan', nombre: 'Pan' },
    { id: 'dulces', nombre: 'Masas Dulces' },
    { id: 'galletas', nombre: 'Galletas' }
  ];

  return (
    <div className="botones-categorias">
      {categorias.map(cat => (
        <button key={cat.id} onClick={() => onSeleccionar(cat.id)}>
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}

// Exportación nombrada adicional
export function CategoriasFiltradas({ onSeleccionar }) {
  const categorias = [
    { id: 'fermentos', nombre: 'Fermentos Líquidos' },
    { id: 'pan', nombre: 'Pan' },
    { id: 'dulces', nombre: 'Masas Dulces' },
    { id: 'galletas', nombre: 'Galletas' }
  ];

  return (
    <div className="categorias-filtradas">
      {categorias.map(cat => (
        <button key={cat.id} onClick={() => onSeleccionar(cat.id)}>
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}