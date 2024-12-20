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
    date: '2024-03-15',
    title: 'Published Research on Advanced NLP Techniques',
    description: 'Our team\'s latest research on transformer architectures has been accepted at ICML 2024.',
    link: '#',
  },
  {
    id: '2',
    date: '2024-02-28',
    title: 'Keynote Speaker at AI Summit',
    description: 'Delivered keynote address on the future of machine learning in healthcare.',
    link: '#',
  },
  {
    id: '3',
    date: '2024-02-10',
    title: 'New Research Grant',
    description: 'Received $500K research grant for investigating novel deep learning applications.',
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