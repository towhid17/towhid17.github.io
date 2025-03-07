import { NewsItem } from './types';
// import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

interface FeaturedNewsProps {
  items: NewsItem[];
}

export function FeaturedNews({ items }: FeaturedNewsProps) {
  // Get only featured items
  const featuredItems = items.filter(item => item.featured).slice(0, 3);
  
  if (featuredItems.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white/90 mb-6 text-center">Featured Updates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map(item => (
          <Link 
            key={item.id}
            to={`/news?id=${item.id}`}
            className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm rounded-full bg-purple-600/80 text-white">
                  {item.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="text-sm text-white/50">
                  {/* {formatDistanceToNow(new Date(item.date), { addSuffix: true })} */}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white/90 group-hover:text-purple-200 transition-colors mb-3">
                {item.title}
              </h3>
              
              <p className="text-white/75 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}