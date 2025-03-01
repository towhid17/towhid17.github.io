import { Briefcase } from 'lucide-react';

interface WorkExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export function WorkExperienceCard({ 
  title, 
  company, 
  period, 
  description, 
  technologies 
}: WorkExperienceCardProps) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Briefcase className="w-6 h-6 text-purple-200" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-secondary text-sm">{company}, {period}</p>
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
                className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200/90 text-sm"
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