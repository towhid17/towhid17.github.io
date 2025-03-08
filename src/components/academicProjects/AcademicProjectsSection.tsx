import { FlaskRound as Flask } from 'lucide-react';
import { Section } from '../layout/Section';
import { AcademicProjectCard } from './AcademicProjectCard';
import { academicProjects } from '../../data/data';

export function AcademicProjectsSection() {
  return (
    <Section 
      icon={<Flask className="w-6 h-6 text-primary" />} 
      title="Academic Projects" 
      defaultExpanded
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {academicProjects.map((proj) => (
                      <AcademicProjectCard key={proj.id} academicProject={proj} />
                    ))}
      </div>
    </Section>
  );
}