import { Mail, MapPin, Phone, Globe, Linkedin, Github } from 'lucide-react';
import { ContactItem } from './ContactItem';
import { ProfileImage } from '../profile/ProfileImage';
import { HeaderBackground } from '../header/HeaderBackground';
import { GalleryButton } from '../gallery/GalleryButton';
import { LG } from '../lg/lg';

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
              <h1 className="text-3xl font-bold mb-2">Towhidul Islam</h1>
              <p className="text-primary text-lg">Software Engineer & Incoming PhD Student</p>
            </div>
          </div>

            <LG>
            <div className="w-full px-6 pb-6 rounded-none">
              <div className="h-px mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ContactItem icon={Mail} label="Email" value="towhidulislam2608@gmail.com" />
                  <ContactItem icon={MapPin} label="Location" value="Dhaka, Bangladesh" />
                  <ContactItem icon={Linkedin} label="LinkedIn" value=<a href='https://www.linkedin.com/in/towhidul-islam--/' target='_blank'>Towhidul Islam</a> />
                
                  <ContactItem icon={Github} label="Github" value=<a href='https://github.com/towhid17' target='_blank'>towhid17</a> />
                </div>
            </div>
            </LG>

        </div>

        {/* <GalleryButton /> */}
      </div>
      
    </div>
  );
}