import { FlaskRound as Flask } from 'lucide-react';
import { Section } from '../layout/Section';
import { AcademicProjectCard } from './AcademicProjectCard';
import { academicProjects } from '../../data/data';

export function AcademicProjectsSection() {
  return (
    <Section
      id="projects"
      icon={<Flask className="h-5 w-5" />}
      title="Academic Projects"
      eyebrow={`${academicProjects.length} projects`}
      accent="indigo"
      defaultExpanded
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {academicProjects.map((project, index) => (
          <AcademicProjectCard
            key={project.id}
            academicProject={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
