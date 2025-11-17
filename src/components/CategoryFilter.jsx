function CategoryFilter({ selectedCategory, onSelectCategory }) {
  const categories = [
    'Todos',
    'Suizo',
    'Arepa',
    'Picada',
    'Salchipapa',
    'Choripapa',
    'Hamburguesa',
    'Perro',
    'Sánduchon'
  ];

  // Función helper para obtener emoji de categoría
  const getCategoryEmoji = (category) => {
    const emojis = {
      'Todos': '🍽️',
      'Suizo': '🌭',
      'Arepa': '🫓',
      'Picada': '🍖',
      'Salchipapa': '🍟',
      'Choripapa': '🌭',
      'Hamburguesa': '🍔',
      'Perro': '🌭',
      'Sánduchon': '🥪'
    };
    return emojis[category] || '🍴';
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 mb-8 md:mb-10 sticky top-20 z-40">
      {/* Título opcional - solo visible en desktop */}
      <h3 className="hidden md:block text-xl font-semibold text-gray-700 mb-4">
        Explora por Categoría
      </h3>
      
      {/* Contenedor de botones con scroll horizontal */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max pb-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`
                  px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold md:font-bold text-sm md:text-base
                  transition-all duration-300 whitespace-nowrap
                  ${
                    isSelected
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:scale-105 hover:shadow-md'
                  }
                `}
                aria-label={`Filtrar por ${category}`}
                aria-pressed={isSelected}
              >
                <span className="mr-2">{getCategoryEmoji(category)}</span>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;

