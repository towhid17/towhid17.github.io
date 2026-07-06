import { CalendarDays } from 'lucide-react';
import { ExpandableCard } from '../layout/ExpandableCard';
import { NewsContainer } from './NewsContainer';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2023-05-01',
    title: 'Joined as Machine Learning Engineer at AIEdgeInside',
    description: '',
    link: '#',
  },
  {
    id: '2',
    date: '2023-06-15',
    title: 'Joined as Associate Software Engineer at Therap BD Ltd.',
    description: '',
    link: '#',
  },
  {
    id: '3',
    date: '2024-07-01',
    title: 'Promoted as Software Engineer at Therap BD Ltd.',
    description: '',
    link: '#',
  },
  {
    id: '4',
    date: '2024-10-15',
    title: 'Paper Accepted at IEEE/UCC 2024',
    description: 'Our paper titled "NFIRED: ENforcing IoT FIREwall using fog-cloud framework under Delay constraints" has been accepted at the IEEE/ACM International Conference on Utility and Cloud Computing 2024.',
    link: '#',
  },
  {
    id: '5',
    date: '2025-02-02',
    title: 'Paper Accepted at IMWUT 2024',
    description: 'Our paper titled "H2OPulse: Smartphone-Assisted Vein Evaluation for Early Recognition of Dehydration" has been accepted at the UbiComp/IMWUT 2024.',
    link: '#',
  },
];

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function NewsCard() {
  return (
    <ExpandableCard title="News & Updates">
      <NewsContainer>
        <div className="space-y-6 pr-4">
          {[...newsItems].reverse().map((item) => (
            <div
              key={item.id}
              className="group relative pl-4 border-l-2 border-purple-500/30 hover:border-purple-500/70 transition-colors border-b border-b-white/10 last:border-b-0 pb-6 last:pb-0"
            >
              <div className="flex items-center gap-2 text-sm text-accent mb-2">
                <CalendarDays className="w-4 h-4" />
                <time>{formatDate(item.date)}</time>
              </div>
              <h3 className="text-lg font-medium text-primary">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-secondary mt-2">{item.description}</p>
              )}
              {item.link && item.link !== '#' && (
                <a
                  href={item.link}
                  className="inline-link mt-3 inline-flex items-center text-sm"
                >
                  Read More →
                </a>
              )}
            </div>
          ))}
        </div>
      </NewsContainer>
    </ExpandableCard>
  );
}