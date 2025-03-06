import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/cover/2.jpg",
  "/images/cover/7.jpg",
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
      }, 2000); // Longer fade-out transition

    }, 7000); // Wait before switching (7s)

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-70"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]}?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.1)",
          transition: "transform 7s ease-in-out", // Smooth zoom effect
        }}
      />

      {/* Next Image (Preloaded & Fading In) */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          isTransitioning ? "opacity-70" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[nextImageIndex]}?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.1)",
          transition: "transform 7s ease-in-out",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass-bg)]" />
    </div>
  );
}
