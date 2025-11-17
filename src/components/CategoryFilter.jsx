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

  return (
    <div className="w-full overflow-x-auto py-4 px-4 md:px-6">
      <div className="flex gap-2 md:gap-3 min-w-max pb-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base
                transition-all duration-200 whitespace-nowrap
                ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 hover:shadow-sm'
                }
              `}
              aria-label={`Filtrar por ${category}`}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;

