// import { useState, useEffect } from "react";

// const backgroundImages = [
//   "/images/cover/2.jpg",
//   "/images/cover/7.jpg",
// ] as const;

// export function HeaderBackground() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loaded, setLoaded] = useState<boolean[]>([]);

//   // Preload all images and track their loaded state
//   useEffect(() => {
//     const loadStatus = Array(backgroundImages.length).fill(false);
    
//     backgroundImages.forEach((src, index) => {
//       const img = new Image();
//       img.onload = () => {
//         loadStatus[index] = true;
//         setLoaded([...loadStatus]);
//       };
//       img.src = `${src}?auto=format&fit=crop&w=1920&q=80`;
//     });
//   }, []);

//   // Rotate through images
//   useEffect(() => {
//     // Wait until at least the first two images are loaded
//     if (loaded.length < 2 || !loaded[0] || !loaded[1]) return;
    
//     const timer = setTimeout(() => {
//       setActiveIndex((activeIndex + 1) % backgroundImages.length);
//     }, 15000);
    
//     return () => clearTimeout(timer);
//   }, [activeIndex, loaded]);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Render all images with visibility controlled by z-index */}
//       {backgroundImages.map((src, index) => (
//         <div
//           key={src}
//           className="absolute inset-0"
//           style={{
//             // zIndex: index === activeIndex ? 1 : 0,
//             opacity: index === activeIndex ? 0.7 : 0,
//             backgroundImage: `url(${src}?auto=format&fit=crop&w=1920&q=80)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             transition: "opacity 3s ease-in-out",
//           }}
//         />
//       ))}

//       {/* Gradient Overlay */}
//        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass-bg)]" />
     
//       </div>
//   );
// }



import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const backgroundImages = [
  "/images/cover/2.jpg",
  "/images/cover/7.jpg",
] as const;

export function HeaderBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  // Preload all images and track their loaded state
  useEffect(() => {
    const loadStatus = Array(backgroundImages.length).fill(false);

    backgroundImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        loadStatus[index] = true;
        setLoaded([...loadStatus]);
      };
      img.src = `${src}?auto=format&fit=crop&w=1920&q=80`;
    });
  }, []);

  // Rotate through images
  useEffect(() => {
    if (loaded.length < 2 || !loaded[0] || !loaded[1]) return;

    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % backgroundImages.length);
    }, 15000);

    return () => clearTimeout(timer);
  }, [activeIndex, loaded]);

  // The full-page blurred background using createPortal
  const portalElement = (
    <div
      className="fixed top-0 left-0 w-screen h-[550px] blur-4xl opacity-30"
      style={{
        backgroundImage: `url(${backgroundImages[activeIndex]}?auto=format&fit=crop&w=1920&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(20px)",
        zIndex: -1, // Ensure it stays behind all content
      }}
    />
  );

  return (
    <>
      {/* Render the blurred background outside the main component tree */}
      {typeof window !== "undefined" &&
        createPortal(portalElement, document.body)}

      {/* Main Background Transition */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: index === activeIndex ? 0.7 : 0,
              backgroundImage: `url(${src}?auto=format&fit=crop&w=1920&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 3s ease-in-out",
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass-bg)]" />
      </div>
    </>
  );
}
