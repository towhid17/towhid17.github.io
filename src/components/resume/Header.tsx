import { Mail, MapPin, Phone, Globe, Linkedin, Github } from 'lucide-react';
import { ContactItem } from './ContactItem';
import { ProfileImage } from '../profile/ProfileImage';
import { HeaderBackground } from '../header/HeaderBackground';
import { GalleryButton } from '../gallery/GalleryButton';

export function Header() {
  return (
    <div className="glass-card overflow-hidden mt-0">
      <div className="relative h-[400px] md:h-[380px]">
        <HeaderBackground />
        
        <div className="absolute bottom-0 left-0 right-0 gap-6 items-center md:items-end">
          <div className="flex flex-row items-end md:flex-row bottom-0 md:items-end gap-6 p-6">
            <ProfileImage
              src="/images/profile/profile.jpg"
              alt="Towhidul Islam"
            />
          
            <div className="text-left md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Towhidul Islam</h1>
              <p className="text-secondary text-lg font-medium">Software Engineer &amp; Incoming PhD Student</p>
            </div>
          </div>

            <div className="w-full px-6 pb-6 glass-card backdrop-blur-lg rounded-none">
              <div className="h-px mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ContactItem icon={Mail} label="Email" value="towhidulislam2608@gmail.com" />
                  <ContactItem icon={MapPin} label="Location" value="Dhaka, Bangladesh" />
                  <ContactItem icon={Linkedin} label="LinkedIn" value={<a className="inline-link" href="https://www.linkedin.com/in/towhidul-islam--/" target="_blank" rel="noopener noreferrer">Towhidul Islam</a>} />

                  <ContactItem icon={Github} label="Github" value={<a className="inline-link" href="https://github.com/towhid17" target="_blank" rel="noopener noreferrer">towhid17</a>} />
                </div>
            </div>

        </div>

        {/* <GalleryButton /> */}
      </div>
      
    </div>
  );
}