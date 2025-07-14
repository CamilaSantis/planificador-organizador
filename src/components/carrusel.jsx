import React, { useState } from 'react';

// Ejemplo de estructura de productos (debes reemplazar con tus datos reales)

const productos = {
  fermentos: [
    {
      nombre: "Kombucha de Feijoa",
      imagen: "imagenes/ingredienteskombuchafeijoa.jpeg",
      descripcion: "Kombucha saborizada naturalmente con feijoa",
      id: "kombucha"
    }
  ],
  pan: [
    {
      nombre: "Pan Ciabatta con Poolish",
      imagen: "imagenes/ciabatta.jpeg",
      descripcion: "Pan rústico con fermentación previa",
      id: "ciabatta"
    },
    {
      nombre: "Pan de Papa",
      imagen: "imagenes/pandepapa.jpeg",
      descripcion: "Suave y dorado, ideal para sandwiches",
      id: "pandepapa"
    }
  ],
  dulces: [
    {
      nombre: "Panqueques Esponjosos",
      imagen: "imagenes/panquequeesponjoso.jpeg",
      descripcion: "Perfectos para un desayuno dulce",
      id: "panquequeesponjoso"
    },
    {
      nombre: "Queque de Zapallo",
      imagen: "imagenes/Quequezapallo.jpeg",
      descripcion: "Humectado y especiado con canela",
      id: "quequezapallo"
    },
    {
      nombre: "Queque Casero",
      imagen: "imagenes/quequecasero.jpeg",
      descripcion: "Sabores de la abuelita",
      id: "quequecasero"
    },
     {
      nombre: "Alfajor Bon o Bon",
      imagen: "imagenes/alfajorbonobon.jpeg",
      descripcion: "Un clásico snack",
      id: "alfajorbob"
    }


  ],
  galletas: [
    {
      nombre: "Galletas de Maní con Chips",
      imagen: "imagenes/galletasmanichipschoco.jpeg",
      descripcion: "Crujientes por fuera, suaves por dentro",
      id: "galletas"
    }
  ]
};

const productosDestacados = [
    ...productos.fermentos,
    ...productos.pan,
    ...productos.dulces,
    ...productos.galletas
];

const Carrusel = () => {
    const [indice, setIndice] = useState(0);

    const mostrarPrevio = () => {
        setIndice((prev) => (prev - 1 + productosDestacados.length) % productosDestacados.length);
    };

    const mostrarSiguiente = () => {
        setIndice((prev) => (prev + 1) % productosDestacados.length);
    };

    const producto = productosDestacados[indice];

    return (
        <div style={{ textAlign: 'center' }}>
            <button id="prev-btn" onClick={mostrarPrevio}>Anterior</button>
            <div>
                <img
                    id="imagen-carrusel"
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '10px' }}
                />
                <h3 id="nombre-carrusel">{producto.nombre}</h3>
            </div>
            <button id="next-btn" onClick={mostrarSiguiente}>Siguiente</button>
        </div>
    );
};

export default Carrusel;