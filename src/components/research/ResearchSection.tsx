import { FlaskRound as Flask } from 'lucide-react';
import { Section } from '../layout/Section';
import { ResearchProjectCard } from './ResearchProjectCard';
import { researchProjects } from '../../data/data';

export function ResearchProjectsSection() {
  return (
    <Section 
      icon={<Flask className="w-6 h-6 text-purple-200" />} 
      title="Research Projects" 
      defaultExpanded
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchProjects.map(project => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}