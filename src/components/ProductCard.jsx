import { Plus } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  // Función para formatear el precio en pesos colombianos
  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-CO')}`;
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-5 flex flex-col justify-between h-full">
      {/* Contenido del producto */}
      <div className="flex-1">
        {/* Nombre del producto */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Precio */}
        <p className="text-xl md:text-2xl font-bold text-red-600 mb-4">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Botón Agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        aria-label={`Agregar ${product.name} al carrito`}
      >
        <Plus className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-sm md:text-base">Agregar al carrito</span>
      </button>
    </div>
  );
}

export default ProductCard;

