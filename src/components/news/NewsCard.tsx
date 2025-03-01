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
    date: '2024-10-15',
    title: 'Paper Accepted at IEEE/UCC 2024',
    description: 'Our paper titled "NFIRED: ENforcing IoT FIREwall using fog-cloud framework under Delay constraints" has been accepted at the IEEE/ACM International Conference on Utility and Cloud Computing 2024.',
    link: '#',
  },
  {
    id: '2',
    date: '2024-07-01',
    title: 'Promoted as Software Engineer at Therap BD Ltd.',
    description: '',
    link: '#',
  },
  {
    id: '3',
    date: '2023-06-15',
    title: 'Joined as Associate Software Engineer at Therap BD Ltd.',
    description: '',
    link: '#',
  },
  {
    id: '4',
    date: '2023-05-01',
    title: 'Joined as Machine Learning Engineer at AIEdgeInside',
    description: '',
    link: '#',
  },
];

export function NewsCard() {
  return (
    <ExpandableCard title="News & Updates">
      <NewsContainer>
        <div className="space-y-6 pr-4">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group border-b border-white/10 last:border-0 pb-6 last:pb-0"
            >
              <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                <CalendarDays className="w-4 h-4" />
                <time>{item.date}</time>
              </div>
              <h3 className="text-lg font-medium text-white/90 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 mt-2 mb-3">{item.description}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-purple-300 hover:text-purple-200 text-sm"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </NewsContainer>
    </ExpandableCard>
  );
}