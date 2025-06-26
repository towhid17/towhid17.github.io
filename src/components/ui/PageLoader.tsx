import { useState, useEffect } from 'react';
import '../../styles/loading.css';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Add a small delay to ensure all content is rendered
      setTimeout(() => {
        setIsVisible(false);
      }, 400);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`page-loader ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="relative">
        <div className="spinner w-16 h-16"></div>
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
}