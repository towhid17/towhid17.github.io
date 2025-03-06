import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Microscope } from 'lucide-react';
import { Header } from './components/resume/Header';
import { BioCard } from './components/bio/BioCard';
import { EducationCard } from './components/education/EducationCard';
import { ResearchInterests } from './components/research/ResearchInterests';
import { NewsCard } from './components/news/NewsCard';
import { Navbar } from "./components/navigation/Navbar";
import { Section } from './components/layout/Section';
import { PublicationExpandable } from './components/research/PublicationExpandable';
import { GalleryGrid } from './components/gallery/GalleryGrid';
import './styles/animations.css';
import { WorkExperienceSection } from './components/work/WorkExperienceSection';
import { ResearchProjectsSection } from './components/research/ResearchSection';
import { EducationSection } from './components/education/EducationSection';
import { AcademicProjectsSection } from './components/academicProjects/AcademicProjectsSection';
import { useState, useEffect } from 'react';

function HomePage() {
  const [contentLoaded, setContentLoaded] = useState(false);
  
  useEffect(() => {
    // Mark content as loaded after a short delay
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-white/90 ${contentLoaded ? 'content-reveal' : ''}`}>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <Header />
        
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4 space-y-6">
            <Section 
              title="About Me"
              icon={<BookOpen className="w-6 h-6 text-purple-200" />}
              defaultExpanded
            >
              <BioCard />
            </Section>

            <Section 
              icon={<Microscope className="w-6 h-6 text-purple-200" />} 
              title='Research Interests' 
              defaultExpanded
            >
              <ResearchInterests />
            </Section>

          </div>

          <div className="md:col-span-2 space-y-6">
            <NewsCard />
          </div>

          <div className="md:col-span-6 space-y-6">

            <EducationSection />

            <WorkExperienceSection />

            {/* <ResearchProjectsSection /> */}

            <PublicationExpandable />

            <AcademicProjectsSection />
            
          </div>

        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryGrid />} />
      </Routes>
    </Router>
  );
}