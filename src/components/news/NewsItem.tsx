import { CalendarDays, Share2 } from 'lucide-react';
import { useState } from 'react';
// import { formatDistanceToNow } from 'date-fns';
import { NewsItem as NewsItemType } from './types';

interface NewsItemProps {
  item: NewsItemType;
  expanded?: boolean;
}

export function NewsItemComponent({ item, expanded = false }: NewsItemProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const toggleShareMenu = () => {
    setShowShareMenu(!showShareMenu);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(item.title)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard!');
      setShowShareMenu(false);
    });
  };

  return (
    <div className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-xl">
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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <CalendarDays className="w-4 h-4" />
            {/* <time dateTime={item.date}>{formatDistanceToNow(new Date(item.date), { addSuffix: true })}</time> */}
          </div>
          
          {/* Share Button */}
          <div className="relative">
            <button 
              onClick={toggleShareMenu}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-white/70" />
            </button>
            
            {/* Share Menu */}
            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 p-2 glass-card rounded-lg shadow-lg z-10">
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={shareOnTwitter}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white/90"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span>Twitter</span>
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white/90"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </button>
                  <button 
                    onClick={copyLink}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white/90"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white/90 group-hover:text-purple-200 transition-colors mb-3">
          {item.title}
        </h3>
        
        {expanded ? (
          <div 
            className="text-white/75 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        ) : (
          <p className="text-white/75 leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
  );
}