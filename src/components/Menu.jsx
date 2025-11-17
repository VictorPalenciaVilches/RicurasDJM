import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';

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

      {/* Barra de búsqueda */}
      <div className="mb-4 md:mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar productos..."
            className="block w-full pl-10 pr-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base"
            aria-label="Buscar productos"
          />
        </div>
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
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
            No se encontraron productos
          </p>
          <p className="text-sm md:text-base text-gray-500">
            {searchTerm.trim() !== ''
              ? 'Intenta con otros términos de búsqueda o selecciona otra categoría'
              : 'No hay productos disponibles en esta categoría'}
          </p>
          {(searchTerm.trim() !== '' || selectedCategory !== 'Todos') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg hover:from-red-700 hover:to-orange-600 transition-colors duration-200 font-semibold"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;

