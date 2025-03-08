import { Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GalleryButton() {
  return (
    <Link
      to="/gallery"
      className="group absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-500/90 rounded-full text-primary shadow-lg transition-all duration-300 hover:scale-105 animate-float"
    >
      <Grid className="w-5 h-5" />
      <span>View Gallery</span>
    </Link>
  );
}