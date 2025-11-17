import { useState } from 'react';
import { Plus, Check } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  // Detectar si el producto es especial
  const isSpecial = product.name.toUpperCase().includes('DJM') || 
                    product.name.toUpperCase().includes('D J M');

  // Función para formatear el precio en pesos colombianos
  const formatPrice = (price) => {
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    
    // Mostrar confirmación temporal en el botón
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="relative bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-red-200 transition-all duration-300 p-6 flex flex-col justify-between h-full cursor-pointer animate-fade-in">
      {/* Badge de producto especial */}
      {isSpecial && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
          🔥 ESPECIAL
        </div>
      )}

      {/* Contenido del producto */}
      <div className="flex-1">
        {/* Categoría del producto */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
          {product.category}
        </p>

        {/* Nombre del producto */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Divisor visual */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Precio */}
        <p className="text-2xl md:text-3xl font-extrabold text-red-600 mb-5">
          {isSpecial ? `$ ${product.price.toLocaleString('es-CO')}` : formatPrice(product.price)}
        </p>
      </div>

      {/* Botón Agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className={`w-full font-bold py-3 md:py-4 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 ${
          isAdded
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white hover:scale-105'
        }`}
        aria-label={`Agregar ${product.name} al carrito`}
      >
        {isAdded ? (
          <>
            <Check className="w-5 h-5" />
            <span className="text-base md:text-lg">Agregado</span>
          </>
        ) : (
          <>
            <Plus className="w-5 h-5" />
            <span className="text-base md:text-lg">Agregar al carrito</span>
          </>
        )}
      </button>

      {/* Estilos de animación */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default ProductCard;

