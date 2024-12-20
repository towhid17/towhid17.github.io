import { type GalleryImage as GalleryImageType } from './types';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: (image: GalleryImageType) => void;
}

export function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <div className="relative break-inside-avoid group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          onClick={() => onClick(image)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}