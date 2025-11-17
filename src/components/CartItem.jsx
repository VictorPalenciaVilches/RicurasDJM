import { Plus, Minus, Trash2 } from 'lucide-react';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { product, quantity } = item;

  // Función para formatear el precio en pesos colombianos
  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-CO')}`;
  };

  // Calcular subtotal
  const subtotal = product.price * quantity;

  // Manejar incremento de cantidad
  const handleIncrement = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  // Manejar decremento de cantidad
  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    } else {
      // Si la cantidad llega a 0, eliminar el producto
      onRemove(product.id);
    }
  };

  // Manejar eliminación
  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div className="bg-white border-b border-gray-200 py-3 md:py-4 px-4 md:px-6 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
        {/* Información del producto */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">
            {formatPrice(product.price)} c/u
          </p>
        </div>

        {/* Controles de cantidad y acciones */}
        <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
          {/* Botones de cantidad */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="p-1.5 md:p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-200"
              aria-label="Disminuir cantidad"
            >
              <Minus className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <span className="text-base md:text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-1.5 md:p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-200"
              aria-label="Aumentar cantidad"
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-base md:text-lg font-bold text-red-600">
              {formatPrice(subtotal)}
            </p>
          </div>

          {/* Botón eliminar */}
          <button
            onClick={handleRemove}
            className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors duration-200"
            aria-label="Eliminar del carrito"
          >
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

