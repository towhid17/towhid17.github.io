import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { ContactItem } from './ContactItem';
import { ProfileImage } from '../profile/ProfileImage';
import { HeaderBackground } from '../header/HeaderBackground';
import { GalleryButton } from '../gallery/GalleryButton';

export function Header() {
  return (
    <div className="glass-card overflow-hidden mt-16">
      <div className="relative h-96 md:h-96">
        <HeaderBackground />
        
        <div className="absolute bottom-0 left-0 right-0 gap-6 items-center md:items-end">
          <div className="flex flex-col md:flex-row bottom-0 md:items-end gap-6 p-6">
            <ProfileImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Towhidul Islam"
            />
          
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Towhidul Islam</h1>
                <p className="text-white/75 text-lg">AI Research Scientist & Machine Learning Engineer</p>
              </div>
          </div>

            <div className="w-full px-6 pb-6 glass-card backdrop-blur-lg rounded-none">
              <div className="h-px mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ContactItem icon={Mail} label="Email" value="towhid@example.com" />
                  <ContactItem icon={Phone} label="Phone" value="+1 (555) 123-4567" />
                  <ContactItem icon={MapPin} label="Location" value="San Francisco, CA" />
                  <ContactItem icon={Globe} label="Website" value="towhid.dev" />
                </div>
            </div>

        </div>

        {/* <GalleryButton /> */}
      </div>
      
    </div>
  );
}