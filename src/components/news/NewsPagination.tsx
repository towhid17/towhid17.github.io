interface NewsPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export function NewsPagination({ currentPage, totalPages, onPageChange }: NewsPaginationProps) {
    // Generate page numbers array
    const getPageNumbers = () => {
      const pages = [];
      const maxPagesToShow = 5;
      
      if (totalPages <= maxPagesToShow) {
        // Show all pages if there are fewer than maxPagesToShow
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always include first page
        pages.push(1);
        
        // Calculate start and end of page range
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);
        
        // Adjust if at the beginning or end
        if (currentPage <= 2) {
          end = 4;
        } else if (currentPage >= totalPages - 1) {
          start = totalPages - 3;
        }
        
        // Add ellipsis if needed
        if (start > 2) {
          pages.push('...');
        }
        
        // Add middle pages
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        
        // Add ellipsis if needed
        if (end < totalPages - 1) {
          pages.push('...');
        }
        
        // Always include last page
        if (totalPages > 1) {
          pages.push(totalPages);
        }
      }
      
      return pages;
    };
  
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg ${
            currentPage === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-white/10 transition-colors'
          }`}
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                currentPage === page
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-white/10 text-white/90'
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-2 text-white/50">
              {page}
            </span>
          )
        ))}
        
        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-white/10 transition-colors'
          }`}
          aria-label="Next page"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    );
  }