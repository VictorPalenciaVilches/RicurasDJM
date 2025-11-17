import { Phone, ShoppingCart } from 'lucide-react';

function Header({ cartItemsCount = 0, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-orange-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Nombre del negocio */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              RICURAS DJM
            </h1>
          </div>

          {/* Teléfono y Carrito */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Teléfono */}
            <a
              href="tel:+573052890338"
              className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors duration-200"
              aria-label="Llamar al restaurante"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-semibold">
                305 2890338
              </span>
            </a>

            {/* Carrito */}
            <button
              onClick={onCartClick}
              className="relative flex items-center justify-center p-2 text-white hover:text-orange-200 transition-colors duration-200 rounded-lg hover:bg-white/10"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

