import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { ContactItem } from './ContactItem';
import { ProfileImage } from '../profile/ProfileImage';

export function Header() {
  return (
    <div className="glass-card overflow-hidden mt-20">
      <div className="relative h-48 md:h-64">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=80"
            alt="Cover"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass-bg)]" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row gap-6 items-center md:items-end">
          <ProfileImage
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
            alt="Towhidul Islam"
          />
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Towhidul Islam</h1>
            <p className="text-white/75 text-lg">AI Research Scientist & Machine Learning Engineer</p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="h-px bg-white/10 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContactItem icon={Mail} label="Email" value="towhid@example.com" />
          <ContactItem icon={Phone} label="Phone" value="+1 (555) 123-4567" />
          <ContactItem icon={MapPin} label="Location" value="San Francisco, CA" />
          <ContactItem icon={Globe} label="Website" value="towhid.dev" />
        </div>
      </div>
    </div>
  );
}