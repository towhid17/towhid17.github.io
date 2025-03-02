import { useState, useEffect } from 'react';

const backgroundImages = [
  // '/src/images/cover/1.jpg',
  '/images/cover/2.jpg',
  // '/src/images/cover/3.jpg',
  // '/src/images/cover/4.jpg',
  // '/src/images/cover/5.jpg',
  // '/src/images/cover/6.jpg',
  '/images/cover/7.jpg',
  // '/src/images/cover/8.jpg',
  '/images/cover/9.jpg',
  // '/src/images/cover/10.jpg',
  // '/src/images/cover/11.jpg',
  // '/src/images/cover/12.jpg',
  // '/src/images/cover/13.jpg',
  // '/src/images/cover/14.jpg',
  '/images/cover/15.jpg',
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
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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