import { Microscope } from 'lucide-react';
import { Section } from '../layout/Section';
import { PublicationEntry } from './PublicationEntry';
import { publications, underReview } from '../../data/data';

export function PublicationExpandable() {
  // Newest first.
  const ordered = [...publications].sort((a, b) => b.year - a.year);

  return (
    <Section
      id="publications"
      icon={<Microscope className="h-5 w-5" />}
      title="Publications"
      eyebrow={`${publications.length} peer-reviewed papers`}
      accent="fuchsia"
      defaultExpanded
    >
      <div className="grid gap-4">
        {ordered.map((publication, index) => (
          <PublicationEntry
            key={publication.id}
            publication={publication}
            index={index}
          />
        ))}
      </div>

      {underReview.length > 0 && (
        <>
          <div className="divider my-6" />
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-3)]">
            Under Review
          </h3>
          <div className="grid gap-4">
            {underReview.map((publication, index) => (
              <PublicationEntry
                key={publication.id}
                publication={publication}
                index={index}
              />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
