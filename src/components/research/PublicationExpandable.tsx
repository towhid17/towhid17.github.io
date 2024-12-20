import { ExpandableCard } from '../layout/ExpandableCard';
import { NewsContainer } from '../../components/news/NewsContainer';
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
  },
  {
    title: 'Deep Learning Applications in Healthcare',
    year: 2021,
    venue: 'ICML Conference Proceedings',
    authors: ['Islam T', 'Chen X', 'Williams R'],
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

export function PublicationExpandable() {
  return (
    <ExpandableCard icon={<Microscope className="w-6 h-6 text-purple-200" />} title="Publications">
      <NewsContainer>
        <div className="space-y-6 pr-4">
            <div className="space-y-6">
                {publications.map((pub) => (
                <PublicationEntry key={`${pub.title}-${pub.year}`} publication={pub} />
                ))}
            </div>
        </div>
      </NewsContainer>
    </ExpandableCard>
  );
}