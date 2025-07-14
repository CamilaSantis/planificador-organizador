import ProductoCard from './ProductoCard';

export default function ListaProductos({ productos, onAgregar }) {
  return (
    <div id="contenedor-productos">
      {productos.length > 0 ? (
        productos.map(prod => (
          <ProductoCard key={prod.id} producto={prod} onAgregar={onAgregar} />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}
export function ListaProductosFiltrados({ productos, onAgregar }) {
  return (
    <div className="lista-productos-filtrados">
      {productos.map(prod => (
        <ProductoCard key={prod.id} producto={prod} onAgregar={onAgregar} />
      ))}
    </div>
  );
}   