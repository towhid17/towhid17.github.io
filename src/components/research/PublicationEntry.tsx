import { CustomDoiIcon } from '../../components/icons/doi'
import { FileText } from 'lucide-react';
import { type Publication } from '../../data/types';
import { PdfViewerModal } from '../pdfViewer/PdfViewerModal';
import { useState } from 'react';

function getDriveDownloadLink(driveUrl: string): string {
  const match = driveUrl.match(/\/d\/([^/]+)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return driveUrl; 
}


interface PublicationEntryProps {
  publication: Publication;
}

export function PublicationEntry({ publication }: PublicationEntryProps) {
  const { title, year, venue, authors, pdfUrl, paperUrl } = publication;
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="group p-4 relative space-y-1 border-b border-white/10 last:border-0 pb-6 last:pb-0 hover:drop-shadow-lg transition-shadow">
      {/* Content */}
      <p className="text-primary">
        {authors.map((author, i) => (
          <span key={author} className={author === 'Towhidul Islam' ? 'font-semibold' : undefined}>
            {author}{i < authors.length - 1 ? ', ' : ''}
          </span>
        ))}. {year}
      </p>
      <p className="text-lg font-medium text-primary group-hover:text-accent transition-colors">
        {title}
      </p>
      <p className="text-primary">{venue}</p>
      
      {/* Gradient Animation (Right to Left) */}
      <div className="absolute inset-0 right-0 h-full w-full bg-gradient-to-l from-purple-500/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>


      {/* Action Buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {pdfUrl && (
          <a
            href={pdfUrl}
            className="glass-card backdrop-blur-lg shadow-lg rounded-lg p-2 text-primary hover:bg-[rgba(128,0,128,0.1)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-10 w-10" />
          </a>
        )}
        {/* {pdfUrl && (
          <button
            onClick={() => setShowPdf(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            <FileText className="h-10 w-10" />
        </button>)
        }
        {pdfUrl && (showPdf && <PdfViewerModal pdfUrl={pdfUrl} onClose={() => setShowPdf(false)} />)} */}
          
        {paperUrl && (
          <a
            href={paperUrl}
            className="glass-card backdrop-blur-lg shadow-lg rounded-lg p-2 text-primary hover:bg-[rgba(128,0,128,0.1)] transition-colors"
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
