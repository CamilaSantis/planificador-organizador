import ProductoCard from "./productossugeridos.jsx";

export default function ListaProductos({ productos, onAgregar }) {
  console.log("Recibiendo productos:", productos);

  return (
    <div id="contenedor-productos">
      {productos.length > 0 ? (
        productos.map((prod) => (
          <ProductoCard key={prod.id} producto={prod} onAgregar={onAgregar} />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}