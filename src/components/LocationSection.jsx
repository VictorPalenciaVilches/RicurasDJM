import { Phone, Clock, MapPin, Bike } from 'lucide-react';

function LocationSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12">
          📍 ¿Dónde Estamos?
        </h2>

        {/* Grid de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Columna izquierda: Mapa */}
          <div className="order-1 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1763178065819!6m8!1m7!1s_xMymRpylf98LkfOHuUY1A!2m2!1d8.895655235896978!2d-75.79139500656443!3f177.1910409981814!4f-32.794855212471376!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de RICURAS DJM"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div className="order-2 lg:order-2 bg-white rounded-lg shadow-xl p-6 md:p-8">
            <div className="space-y-6 md:space-y-8">
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+573052890338"
                    className="text-base md:text-lg text-red-600 hover:text-red-700 hover:underline transition-colors"
                  >
                    305 2890338
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Horarios
                  </h3>
                  <div className="text-base md:text-lg text-gray-700 space-y-1">
                    <p>Lun, Mié - Vie, Sáb - Dom: 6:00 PM - 11:30 PM</p>
                    <p className="text-red-600 font-semibold">Mar: Cerrado (Día de descanso)</p>
                  </div>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Cerete, Córdoba
                  </p>
                </div>
              </div>

              {/* Domicilios */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <Bike className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Domicilios
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Hacemos domicilios en todo Cerete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

