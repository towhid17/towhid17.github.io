import { useState, useEffect, useRef } from 'react';
import { ImageViewer } from './ImageViewer';
import { useInView } from '../../hooks/useInView';
import { CategoryFilter } from './CategoryFilter';
import { GalleryImage } from './GalleryImage';
import { categories, type Category, type GalleryImage as GalleryImageType } from './types';
import { galleryImages } from './data';

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(loadMoreRef);

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'All' || img.category === activeCategory
  );

  useEffect(() => {
    if (isInView) {
      setPage(prev => prev + 1);
    }
  }, [isInView]);

  return (
    <div className="min-h-screen pt-24 px-6">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map(image => (
          <GalleryImage
            key={image.id}
            image={image}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-20" />

      {selectedImage && (
        <ImageViewer
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}