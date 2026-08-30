import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Microscope } from 'lucide-react';

import { Aurora } from './components/layout/Aurora';
import { Section } from './components/layout/Section';
import { Navbar } from './components/navigation/Navbar';
import { ScrollProgress } from './components/navigation/ScrollProgress';
import { Hero } from './components/hero/Hero';
import { BioCard } from './components/bio/BioCard';
import { ResearchInterests } from './components/research/ResearchInterests';
import { EducationSection } from './components/education/EducationSection';
import { WorkExperienceSection } from './components/work/WorkExperienceSection';
import { PublicationExpandable } from './components/research/PublicationExpandable';
import { AcademicProjectsSection } from './components/academicProjects/AcademicProjectsSection';
import { NewsCard } from './components/news/NewsCard';
import { Footer } from './components/footer/Footer';
import { NewsPage } from './components/news/NewsPage';
import { GalleryGrid } from './components/gallery/GalleryGrid';

import './styles/animations.css';

function HomePage() {
  return (
    <>
      <ScrollProgress />

      <main id="top" className="mx-auto max-w-7xl px-3 pt-3 sm:px-5 sm:pt-4">
        <Navbar />

        <div className="space-y-6">
          <Hero />

          {/* Primary column + sticky news rail */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-6">
              <Section
                id="about"
                title="About Me"
                eyebrow="Who I am"
                icon={<BookOpen className="h-5 w-5" />}
                accent="violet"
                defaultExpanded
              >
                <BioCard />
              </Section>

              <Section
                id="research"
                title="Research Interests"
                eyebrow="What I work on"
                icon={<Microscope className="h-5 w-5" />}
                accent="cyan"
                defaultExpanded
              >
                <ResearchInterests />
              </Section>

              <EducationSection />
            </div>

            <NewsCard />
          </div>

          <WorkExperienceSection />
          <PublicationExpandable />
          <AcademicProjectsSection />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Aurora />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gallery" element={<GalleryGrid />} />
        <Route path="resource" element={<NewsPage />} />
        <Route path="resource/:category" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}
