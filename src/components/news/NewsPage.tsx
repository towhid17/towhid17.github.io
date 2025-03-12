import { useState, useEffect } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
// import { format } from 'date-fns';
import { NewsFilter } from './NewsFilter';
import { NewsItemComponent } from './NewsItem';
import { NewsPagination } from './NewsPagination';
import { FeaturedNews } from './FeaturedNews';
import { newsItems, newsCategories } from './data';
import { type NewsItem } from './types';

const ITEMS_PER_PAGE = 9;

export function NewsPage() {
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const newsId = searchParams.get('id');
  
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter news items based on category
  const filteredItems = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    window.history.pushState({}, '', `/resource${category !== 'All' ? '/' + category.toLowerCase() : ''}`);
  };
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Find selected news item on mount or when URL changes
  useEffect(() => {
    if (newsId) {
      const news = newsItems.find(item => item.id === newsId);
      if (news) {
        setSelectedNews(news);
        setActiveCategory(news.category);
      }
    } else {
      setSelectedNews(null);
    }
  }, [newsId]);
  
  return (
    <div className="min-h-screen pt-10 px-6 pb-16">
      <div className="max-w-[100rem] mx-auto">
        <div className="glass-card px-6 py-8 rounded-b-lg bg-gradient-to-l from-purple-500/30 to-transparent">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-primary text-3xl font-bold mt-4 mb-2">Resources</h1>
          <p className="text-primary">Important resources: blogs, links, research, and events</p>
        </div>
        
        {selectedNews ? (
          <div className="glass-card overflow-hidden mt-8">
            {/* Featured Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedNews(null);
                  window.history.pushState({}, '', `/resource${activeCategory !== 'All' ? '/' + activeCategory.toLowerCase() : ''}`);
                }}
                className="absolute top-4 left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                aria-label="Back to news list"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  {/* <time dateTime={selectedNews.date}>
                    {format(new Date(selectedNews.date), 'MMMM d, yyyy')}
                  </time> */}
                </div>
                
                <div className="flex items-center gap-2 text-primary">
                  <Tag className="w-4 h-4" />
                  <span>{selectedNews.category}</span>
                </div>
              </div>
              
              <h2 className="text-primary text-2xl font-bold mb-6">{selectedNews.title}</h2>
              
              <div 
                className="prose prose-invert prose-purple max-w-none text-primary"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium mb-4">Share this update</h3>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedNews.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(selectedNews.title)}`, '_blank')}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied to clipboard!'))}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Copy link"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => window.open(`mailto:?subject=${encodeURIComponent(selectedNews.title)}&body=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Share via email"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            <NewsFilter 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
            />
            
            {/* Featured News */}
            {/* {currentPage === 1 && activeCategory === 'All' && (
              <FeaturedNews items={newsItems} />
            )} */}
            
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map(item => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setSelectedNews(item);
                    window.history.pushState({}, '', `/resource?id=${item.id}`);
                  }}
                  className="cursor-pointer"
                >
                  <NewsItemComponent item={item} />
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <NewsPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}