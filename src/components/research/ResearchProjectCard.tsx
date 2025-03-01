import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, BookOpen, Lightbulb } from 'lucide-react';
import { type ResearchProject } from '../../data/types';

interface ResearchProjectCardProps {
  project: ResearchProject;
}

export function ResearchProjectCard({ project }: ResearchProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 ease-in-out">
      <div className="relative">
        {/* Project Image */}
        <div className="w-full h-48 md:h-64 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      
      {/* Project Brief */}
      <div className="p-6">
        <p className="text-tertiary mb-4">{project.brief}</p>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`project-details-${project.id}`}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
        
        {/* Expanded Content */}
        <div
          id={`project-details-${project.id}`}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4">
            {/* Detailed Description */}
            <div>
              <h4 className="text-lg font-medium text-primary mb-2">Project Details</h4>
              <p className="text-tertiary">{project.description}</p>
            </div>
            
            {/* Key Findings */}
            <div>
              <h4 className="text-lg font-medium text-primary mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-purple-200" />
                <span>Key Findings</span>
              </h4>
              <ul className="space-y-2 text-tertiary">
                {project.findings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-200 mt-1">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Methodologies */}
            <div>
              <h4 className="text-lg font-medium text-primary mb-2">Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.methodologies.map((method, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200/90 text-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Team Members */}
            <div>
              <h4 className="text-lg font-medium text-primary mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-200" />
                <span>Team & Collaborators</span>
              </h4>
              <p className="text-tertiary">{project.team.join(', ')}</p>
            </div>
            
            {/* Related Publications */}
            {project.relatedPublications && project.relatedPublications.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-primary mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-200" />
                  <span>Related Publications</span>
                </h4>
                <ul className="space-y-2 text-tertiary">
                  {project.relatedPublications.map((pub, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-200 mt-1">•</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Additional Images */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-primary mb-2">Additional Resources</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {project.additionalImages.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img 
                        src={img.url} 
                        alt={img.caption || `Additional image ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                      {img.caption && (
                        <p className="text-sm text-tertiary mt-1">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}