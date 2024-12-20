import { useState, useEffect } from 'react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
] as const;

export function HeaderBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-70'
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]}?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
        }}
      />

      {/* Next Image (Preloaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[nextImageIndex]}?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass-bg)]" />
    </div>
  );
}