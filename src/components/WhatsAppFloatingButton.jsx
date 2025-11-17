import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppFloatingButton({ 
  phoneNumber = '573014237422', 
  message = '¡Hola! Tengo una consulta sobre RICURAS DJM' 
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-[999] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#20BA5A] transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        
        {/* Animación pulsante personalizada */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      </button>

      {/* Tooltip mejorado */}
      {showTooltip && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 lg:bottom-28 lg:right-8 z-[999] bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm md:text-base whitespace-nowrap animate-fade-in pointer-events-none">
          <span className="font-semibold">¿Necesitas ayuda? Chatea con nosotros</span>
          {/* Flecha del tooltip */}
          <div className="absolute top-full right-4 md:right-6 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* Estilos CSS personalizados */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

export default WhatsAppFloatingButton;

