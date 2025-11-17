import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import ScrollReveal from './ScrollReveal';

function Menu({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Función para obtener el título de la categoría
  const getCategoryTitle = () => {
    if (selectedCategory === 'Todos') {
      return 'Menú Completo';
    }
    return selectedCategory === 'Sánduchon' ? 'Sánduchones' : `${selectedCategory}s`;
  };

  // Filtrar productos por categoría y búsqueda
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filtrar por búsqueda (nombre o descripción)
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [products, selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Título de la categoría */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {getCategoryTitle()}
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </p>
      </div>

      {/* Barra de búsqueda mejorada */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <div className="relative">
          {/* Ícono de búsqueda */}
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
          
          {/* Input de búsqueda */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca tu comida favorita... (Ej: hamburguesa, suizo, arepa)"
            className="w-full pl-14 pr-12 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-300"
            aria-label="Buscar productos"
          />
          
          {/* Botón limpiar (solo si hay texto) */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200 p-1"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>
        
        {/* Contador de resultados */}
        <p className="text-sm text-gray-600 mt-3">
          {filteredProducts.length > 0 
            ? `Mostrando ${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''}`
            : 'No se encontraron productos con esa búsqueda'
          }
        </p>
      </div>

      {/* Filtro de categorías */}
      <div className="mb-6 md:mb-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Grid de productos o mensaje sin resultados */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 md:py-16">
          {searchTerm.trim() !== '' ? (
            <>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                No encontramos productos
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md mx-auto">
                Intenta con otras palabras clave o explora nuestras categorías
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Ver todos los productos
              </button>
            </>
          ) : (
            <>
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
                No se encontraron productos
              </p>
              <p className="text-sm md:text-base text-gray-500">
                No hay productos disponibles en esta categoría
              </p>
              {selectedCategory !== 'Todos' && (
                <button
                  onClick={() => setSelectedCategory('Todos')}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-colors duration-200 font-semibold"
                >
                  Ver todas las categorías
                </button>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <ScrollReveal 
              key={product.id}
              animation="fade-up"
              delay={index * 50}
              threshold={0.1}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;

