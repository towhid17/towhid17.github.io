import { BookOpen } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Microscope } from 'lucide-react';
import { Header } from './components/resume/Header';
import { BioCard } from './components/bio/BioCard';
import { EducationCard } from './components/education/EducationCard';
import { ResearchInterests } from './components/research/ResearchInterests';
// import { Publications } from './components/research/Publications';
import { NewsCard } from './components/news/NewsCard';
import { Navbar } from "./components/navigation/Navbar";
import { Section } from './components/layout/Section';
import { PublicationExpandable } from './components/research/PublicationExpandable';

export default function App() {
  return (
    <div className="min-h-screen text-white/90">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <Header />
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">

          <Section title="About Me"
            icon={<BookOpen className="w-6 h-6 text-purple-200" />}
            defaultExpanded
            >

              <BioCard />
            </Section>

            <Section icon={<GraduationCap className="w-6 h-6 text-purple-200" />} title="Education" defaultExpanded>
              <div className="space-y-4">
                <EducationCard
                  title="Ph.D. in Computer Science"
                  institution="Stanford University"
                  period="2018-2022"
                  description="Thesis: 'Advanced Applications of Deep Learning in Natural Language Processing'"
                />
                <EducationCard
                  title="M.S. in Computer Science"
                  institution="MIT"
                  period="2016-2018"
                  description="Focus: Machine Learning and Artificial Intelligence"
                />
              </div>
            </Section>

            <Section icon={<Microscope className="w-6 h-6 text-purple-200" />} title='Research Interests' defaultExpanded>
              <ResearchInterests />
            </Section>

            <PublicationExpandable />

          </div>

          <div className="space-y-6">
            <NewsCard />
          </div>
        </div>
      </main>
    </div>
  );
}