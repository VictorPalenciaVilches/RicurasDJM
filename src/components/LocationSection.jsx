import { Phone, Clock, MapPin, Bike } from 'lucide-react';

function LocationSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          📍 ¿Dónde Estamos?
        </h2>

        {/* Grid de dos columnas: Mapa + Información */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:items-stretch">
          {/* Columna izquierda: Mapa */}
          <div className="order-1 lg:order-1 h-full">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl h-full flex flex-col">
              <div className="flex-1 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1763178065819!6m8!1m7!1s_xMymRpylf98LkfOHuUY1A!2m2!1d8.895655235896978!2d-75.79139500656443!3f177.1910409981814!4f-32.794855212471376!5f0.7820865974627469"
                  width="100%"
                  height="450"
                  className="w-full h-[450px] md:h-[500px] rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de RICURAS DJM"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div className="order-2 lg:order-2 bg-white rounded-xl shadow-xl p-8 md:p-10 h-full flex flex-col justify-between">
            <div className="space-y-6 md:space-y-8">
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <Phone className="w-12 h-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+573052890338"
                    className="text-base md:text-lg text-green-600 hover:text-green-700 hover:underline transition-colors"
                  >
                    305 2890338
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Horarios
                  </h3>
                  <div className="text-base md:text-lg text-gray-600 space-y-1">
                    <p>Lun, Mié - Vie, Sáb - Dom: 6:00 PM - 11:30 PM</p>
                    <p className="text-red-600 font-semibold">Mar: Cerrado (Día de descanso)</p>
                  </div>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                  <MapPin className="w-12 h-12 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Cerete, Córdoba
                  </p>
                </div>
              </div>

              {/* Domicilios */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                  <Bike className="w-12 h-12 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Domicilios
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Hacemos domicilios en todo Cerete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección del Video - ¿Cómo llegar? */}
        <div className="mt-20 md:mt-24 max-w-6xl mx-auto px-4 md:px-6">
          {/* Título del video */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            🎥 ¿Cómo llegar?
          </h3>
          
          {/* Subtítulo */}
          <p className="text-lg text-gray-600 text-center mb-10 md:mb-12">
            Conoce la ubicación exacta y las referencias para llegar sin problemas
          </p>
          
          {/* Contenedor del video */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden bg-black">
              <video 
                src="/videos/VideoDJM.mp4"
                controls
                className="w-full h-[400px] md:h-[500px] rounded-lg object-contain"
                preload="metadata"
                title="Video: Cómo llegar a RICURAS DJM"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
