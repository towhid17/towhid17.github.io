import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Profile Image */}
      <div className="relative group cursor-pointer" onClick={openModal}>
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 rounded-xl object-cover border-2 border-purple-400/30 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-xl ring-2 ring-purple-400/20 ring-offset-2 ring-offset-[var(--glass-bg)] transition-opacity duration-300 group-hover:ring-purple-400/40" />
      </div>

      {/* Modal with Expandable Image Viewer */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-transparent border-2 border-transparent rounded-2xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image
          >
            {/* Rounded Image inside the modal */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain bg-transparent rounded-2xl border-2 border-transparent transition-all duration-500 ease-in-out transform"
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl bg-purple-600 hover:bg-purple-500 rounded-full p-2 focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
