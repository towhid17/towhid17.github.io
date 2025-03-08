import { ExpandableCard } from '../layout/ExpandableCard';
import { NewsContainer } from '../../components/news/NewsContainer';
import { Microscope } from 'lucide-react';
import { PublicationEntry } from './PublicationEntry';
import { publications } from '../../data/data';
import { underReview } from '../../data/data';

export function PublicationExpandable() {
  return (
    <ExpandableCard icon={<Microscope className="w-6 h-6 text-primary" />} title="Publications">
      <NewsContainer>
        <div className="space-y-6 pr-4">
          <div className="space-y-2">
            {publications.map((pub) => (
              <PublicationEntry key={pub.id} publication={pub} />
            ))}
          </div>
          <hr className="border-t border-primary/10" />
          <h3 className="text-xl font-semibold">Under Review</h3>
          <div className="space-y-2">
            {underReview.map((pub) => (
              <PublicationEntry key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </NewsContainer>
    </ExpandableCard>
  );
}