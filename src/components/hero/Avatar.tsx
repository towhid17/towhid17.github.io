import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';

interface AvatarProps {
  src: string;
  alt: string;
}

/** Portrait that tilts toward the cursor and opens full size on click. */
export function Avatar({ src, alt }: AvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tiltRef = useTilt<HTMLButtonElement>(12);

  return (
    <>
      <button
        ref={tiltRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="tilt avatar-frame group/avatar relative block"
        aria-label={`Open portrait of ${alt}`}
      >
        <span className="avatar-glow" aria-hidden="true" />
        <img
          src={src}
          alt={alt}
          width={288}
          height={288}
          className="relative z-10 h-36 w-36 rounded-[26px] object-cover shadow-2xl transition-transform duration-500 group-hover/avatar:scale-[1.03] sm:h-44 sm:w-44 lg:h-56 lg:w-56"
        />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={src} alt={alt} className="max-h-[90vh] w-full object-contain" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="icon-btn absolute right-3 top-3 !border-white/30 !bg-black/40 !text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
