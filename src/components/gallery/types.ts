export const categories = ['All', 'Research', 'Conferences', 'Lab'] as const;
export type Category = typeof categories[number];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'All'>;
}