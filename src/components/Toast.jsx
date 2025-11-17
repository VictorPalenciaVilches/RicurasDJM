import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

function Toast({ message, isVisible, onClose, duration = 3000 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 md:right-6 z-50 animate-slide-in-right">
      <div className="bg-green-500 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-xl flex items-center gap-3 md:gap-4 min-w-[280px] md:min-w-[320px] max-w-[90vw] md:max-w-md">
        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        <p className="flex-1 text-sm md:text-base font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-green-600 rounded-full p-1 transition-colors duration-200"
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Toast;

