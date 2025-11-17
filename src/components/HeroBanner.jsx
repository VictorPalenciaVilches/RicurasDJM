import { ChevronDown, ShoppingCart } from 'lucide-react';

function HeroBanner({ onOrderClick, backgroundImage }) {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('main');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      {/* Fondo degradado (solo si no hay imagen) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500"></div>
      )}
      
      {/* Overlay oscuro profesional */}
      <div className={`absolute inset-0 ${
        backgroundImage 
          ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/70' 
          : 'bg-gradient-to-br from-black/70 via-black/60 to-black/70'
      }`}></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 py-20 md:py-32 w-full">
        {/* Nombre del negocio */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight animate-fadeInUp"
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)'
          }}
        >
          RICURAS DJM
        </h1>

        {/* Eslogan */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-12 font-semibold animate-fadeInUp-delay-1">
          El gusto que te mereces 
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeInUp-delay-2">
          {/* Botón Ver Menú Completo */}
          <button
            onClick={scrollToMenu}
            className="group bg-white text-red-600 hover:bg-gray-100 font-bold px-8 md:px-10 py-4 md:py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg md:text-xl w-full sm:w-auto"
            aria-label="Ver menú completo"
          >
            <span className="flex items-center justify-center gap-2">
              Ver Menú Completo
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce transition-transform duration-300" />
            </span>
          </button>

          {/* Botón Ordenar Ahora */}
          <button
            onClick={onOrderClick}
            className="group bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg md:text-xl w-full sm:w-auto"
            aria-label="Ordenar ahora"
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" />
              Ordenar Ahora
            </span>
          </button>
        </div>
      </div>

      {/* Indicador de scroll (solo desktop) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fadeInUp-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fadeInUp-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

export default HeroBanner;

