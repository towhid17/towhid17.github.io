import { useState } from "react";
import { createPortal } from "react-dom";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Profile Image */}
      <div className="relative group cursor-pointer" onClick={openModal}>
        <img
          src={src}
          alt={alt}
          className="w-52 h-52 rounded-xl object-cover border-2 border-purple-400/30 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-xl ring-2 ring-purple-400/20 ring-offset-2 ring-offset-[var(--glass-bg)] transition-opacity duration-300 group-hover:ring-purple-400/40" />
      </div>

      {/* Modal with Expandable Image Viewer */}
      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[9999]"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] p-4 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image
            >
              {/* Blurry Transparent Border (Separate Layer) */}
              <div className="absolute inset-0 rounded-2xl border-[3px] border-white/20 backdrop-blur-xl pointer-events-none" />

              {/* Image Wrapper (Ensures Rounded Corners) */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-contain bg-transparent rounded-2xl border-2 border-transparent transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl bg-purple-600 hover:bg-purple-500 rounded-full p-2 focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>,
          document.body // Render outside parent, directly inside <body>
        )}
    </div>
  );
}
