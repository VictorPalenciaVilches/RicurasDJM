import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Grid principal con 3 secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {/* SECCIÓN IZQUIERDA - Información del Negocio */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              RICURAS DJM
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Las mejores comidas rápidas de Cerete. Calidad, sabor y servicio excepcional.
            </p>
          </div>

          {/* SECCIÓN CENTRO - Horarios */}
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
              Horarios
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-white/90">
              <li>Lun, Mié - Vie: 6:00 PM - 11:30 PM</li>
              <li>Sáb - Dom: 6:00 PM - 11:30 PM</li>
              <li className="text-white/70 font-semibold">Mar: Cerrado (Día de descanso)</li>
            </ul>
          </div>

          {/* SECCIÓN DERECHA - Contacto y Redes Sociales */}
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
              Contáctanos
            </h4>
            <div className="space-y-3 md:space-y-4">
              {/* Teléfono */}
              <a
                href="tel:+573052890338"
                className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors duration-200 group"
              >
                <div className="bg-white/10 group-hover:bg-white/20 rounded-full p-2 transition-colors duration-200">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-sm md:text-base font-medium">305 2890338</span>
              </a>

              {/* Ubicación */}
              <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
                <div className="bg-white/10 rounded-full p-2">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-sm md:text-base">Cerete, Córdoba</span>
              </div>

              {/* Redes Sociales */}
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Visitar Facebook de RICURAS DJM"
                  title="Facebook"
                >
                  <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Visitar Instagram de RICURAS DJM"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SECCIÓN INFERIOR - Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

