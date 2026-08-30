import { Rss } from 'lucide-react';
import { accentVars } from '../../styles/accents';
import { useReveal } from '../../hooks/useReveal';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description?: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2023-05-01',
    title: 'Joined AIEdgeInside as Machine Learning Engineer',
  },
  {
    id: '2',
    date: '2023-06-15',
    title: 'Joined Therap BD Ltd. as Associate Software Engineer',
  },
  {
    id: '3',
    date: '2024-07-01',
    title: 'Promoted to Software Engineer at Therap BD Ltd.',
  },
  {
    id: '4',
    date: '2024-10-15',
    title: 'Paper accepted at IEEE/ACM UCC 2024',
    description:
      '"ENFIRED: ENforcing IoT FIREwall using fog-cloud framework under Delay constraints".',
  },
  {
    id: '5',
    date: '2025-02-02',
    title: 'Paper accepted at UbiComp/IMWUT 2024',
    description:
      '"H2OPulse: Smartphone-Assisted Vein Evaluation for Early Recognition of Dehydration".',
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
  const revealRef = useReveal<HTMLElement>(120);
  const ordered = [...newsItems].reverse();

  return (
    <section
      id="news"
      ref={revealRef}
      style={accentVars('rose')}
      className="card reveal group flex flex-col lg:sticky lg:top-24"
    >
      <div className="flex items-center gap-4 p-5 sm:p-6">
        <span className="icon-badge">
          <Rss className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-bold sm:text-xl">News</h2>
          <span className="text-sm text-[var(--text-3)]">Recent updates</span>
        </div>
      </div>

      <div className="custom-scrollbar scroll-fade max-h-[26rem] overflow-y-auto px-5 pb-6 sm:px-6 lg:max-h-[32rem]">
        <ol className="space-y-6">
          {ordered.map((item) => (
            <li key={item.id} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <time className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--accent))]">
                {formatDate(item.date)}
              </time>
              <h3 className="mt-1 text-sm font-semibold leading-snug text-[var(--text-1)]">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-3)]">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
