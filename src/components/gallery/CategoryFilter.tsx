import { type Category } from './types';

interface CategoryFilterProps {
  categories: readonly Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-purple-600 text-primary'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}