import { useState, useEffect } from 'react';
import { Phone, ShoppingCart } from 'lucide-react';

function Header({ cartItemsCount = 0, onCartClick, animate = false }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 animate-fade-in ${
        isScrolled ? 'shadow-xl bg-gradient-to-r from-red-700 to-orange-600' : 'shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Nombre del negocio */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
              RICURAS DJM
            </h1>
          </div>

          {/* Teléfono y Carrito */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Teléfono */}
            <a
              href="tel:+573052890338"
              className="flex items-center gap-2 text-white hover:text-orange-200 transition-all duration-300 hover:scale-105 rounded-lg px-2 py-1 hover:bg-white/10"
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
              className="relative flex items-center justify-center p-2 text-white hover:text-orange-200 transition-all duration-300 rounded-lg hover:bg-white/20 hover:scale-110 hover:shadow-lg"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart 
                className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${
                  animate ? 'animate-bounce' : ''
                }`} 
              />
              {cartItemsCount > 0 && (
                <span className={`absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm font-bold shadow-lg transition-transform duration-300 ${
                  animate ? 'animate-pulse scale-110' : ''
                }`}>
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animación de entrada */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </header>
  );
}

export default Header;

