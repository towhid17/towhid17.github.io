import { CustomDoiIcon } from '../../components/icons/doi'
import { FileText } from 'lucide-react';
import { type Publication } from '../../data/types';

interface PublicationEntryProps {
  publication: Publication;
}

export function PublicationEntry({ publication }: PublicationEntryProps) {
  const { title, year, venue, authors, pdfUrl, paperUrl } = publication;

  return (
    <div className="group p-4 relative space-y-1 border-b border-white/10 last:border-0 pb-6 last:pb-0 hover:drop-shadow-lg transition-shadow">
      {/* Content */}
      <h4 className="font-medium text-white/90 group-hover:text-purple-200 transition-colors">
        {title} ({year})
      </h4>
      <p className="text-sm text-white/65">{venue}</p>
      <p className="text-sm text-white/75">
        Authors: {authors.map((author, i) => (
          <i key={author}>
            {author}{i < authors.length - 1 ? ', ' : ''}
          </i>
        ))}
      </p>
      
      {/* Gradient Animation (Right to Left) */}
      <div className="absolute inset-0 right-0 h-full w-full bg-gradient-to-l from-purple-500/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>


      {/* Action Buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {pdfUrl && (
          <a
            href={pdfUrl}
            className="glass-card backdrop-blur-lg shadow-lg rounded-lg p-2 text-white hover:bg-[rgba(128,0,128,0.1)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-10 w-10" />
          </a>
        )}
        {paperUrl && (
          <a
            href={paperUrl}
            className="glass-card backdrop-blur-lg shadow-lg rounded-lg p-2 text-white hover:bg-[rgba(128,0,128,0.1)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-10 w-10">
              <CustomDoiIcon />
            </div> 
          </a>
        )}
      </div>
    </div>
  );
}
