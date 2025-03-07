import { newsCategories } from './data';

interface NewsFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function NewsFilter({ activeCategory, onCategoryChange }: NewsFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 pt-5 pb-5 glass-card rounded-t-lg">
      {newsCategories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 hover:bg-white/20 text-white/90'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}