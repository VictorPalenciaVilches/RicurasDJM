import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[998] w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:from-red-700 hover:to-orange-600 transition-all duration-300 text-white"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
}

export default BackToTop;

