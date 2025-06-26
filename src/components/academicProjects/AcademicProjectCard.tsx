import { Briefcase } from 'lucide-react';
import { AcademicProject } from '../../data/types';

interface AcademicProjectCardProps {
  academicProject: AcademicProject
}

export function AcademicProjectCard({ academicProject }: AcademicProjectCardProps) {
    const { id, title, link, description, technologies } = academicProject;
  return (
    <div id={id} className="glass-card-2 p-6">
      <div className="flex items-center gap-3 mb-4">
        {/* <div className="p-2 bg-purple-500/20 rounded-lg">
          <Briefcase className="w-6 h-6 text-purple-200" />
        </div> */}
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <div className="flex items-center gap-2">
                <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
                >
                {link}
                </a>
            </div>
        </div>
      </div>
      <p className="mt-2 text-tertiary leading-relaxed">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-secondary mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-purple-500/10 text-primary text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}