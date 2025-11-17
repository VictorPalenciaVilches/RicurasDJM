import { ArrowDown } from 'lucide-react';

function HeroBanner({ onOrderClick }) {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('main');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500"></div>
      
      {/* Overlay oscuro semitransparente */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 py-20 md:py-32 animate-fade-in">
        {/* Nombre del negocio */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 drop-shadow-2xl">
          RICURAS DJM
        </h1>

        {/* Eslogan */}
        <p className="text-xl md:text-3xl lg:text-4xl text-white/95 mb-8 md:mb-12 font-medium drop-shadow-lg">
          El gusto que te mereces 
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          {/* Botón Ver Menú Completo */}
          <button
            onClick={scrollToMenu}
            className="group bg-white text-red-600 hover:bg-gray-100 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-base md:text-lg w-full sm:w-auto"
            aria-label="Ver menú completo"
          >
            <span className="flex items-center justify-center gap-2">
              Ver Menú Completo
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </button>

          {/* Botón Ordenar Ahora */}
          <button
            onClick={onOrderClick}
            className="group bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-base md:text-lg w-full sm:w-auto"
            aria-label="Ordenar ahora"
          >
            Ordenar Ahora
          </button>
        </div>
      </div>

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
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}

export default HeroBanner;

