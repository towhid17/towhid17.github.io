import { Microscope } from 'lucide-react';
import { type Publication } from './types';
import { PublicationEntry } from './PublicationEntry';

const publications: Publication[] = [
  {
    title: 'Advanced Natural Language Processing Techniques',
    year: 2022,
    venue: 'Nature Machine Intelligence',
    authors: ['Islam T', 'Smith J', 'Johnson A'],
    pdfUrl: '#',
    paperUrl: '#'
  },
  {
    title: 'Deep Learning Applications in Healthcare',
    year: 2021,
    venue: 'ICML Conference Proceedings',
    authors: ['Islam T', 'Chen X', 'Williams R'],
    pdfUrl: '#',
    paperUrl: '#'
  }
];

export function Publications() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Microscope className="w-6 h-6 text-purple-200" />
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">Publications</h3>
          <a
            href="#"
            className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            [Curriculum Vitae PDF]
          </a>
        </div>
      </div>
      <div className="space-y-6">
        {publications.map((pub) => (
          <PublicationEntry key={`${pub.title}-${pub.year}`} publication={pub} />
        ))}
      </div>
    </div>
  );
}