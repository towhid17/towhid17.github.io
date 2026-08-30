import { FileText } from 'lucide-react';
import { CustomDoiIcon } from '../icons/doi';
import { type Publication } from '../../data/types';
import { useTilt } from '../../hooks/useTilt';

interface PublicationEntryProps {
  publication: Publication;
  index: number;
}

export function PublicationEntry({ publication, index }: PublicationEntryProps) {
  const { title, year, venue, authors, pdfUrl, paperUrl } = publication;
  const hasPdf = Boolean(pdfUrl && pdfUrl !== '#');
  const tiltRef = useTilt<HTMLElement>(7);

  return (
    <article
      ref={tiltRef}
      className="card-soft tilt sheen rim-glow group flex gap-4 p-5 sm:gap-5"
    >
      <span className="pub-index flex-none pt-0.5" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-snug text-[var(--text-1)] transition-colors duration-300 group-hover:text-[rgb(var(--accent))] sm:text-lg">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text-2)]">
          {authors.map((author, position) => (
            <span
              key={author}
              className={
                author === 'Towhidul Islam'
                  ? 'font-semibold text-[var(--text-1)]'
                  : undefined
              }
            >
              {author}
              {position < authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="chip !text-xs">{venue}</span>
          <span className="chip !text-xs">{year}</span>
        </div>

        {(hasPdf || paperUrl) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {hasPdf && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !px-3.5 !py-1.5 !text-xs"
              >
                <FileText className="h-3.5 w-3.5" />
                PDF
              </a>
            )}
            {paperUrl && (
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !px-3.5 !py-1.5 !text-xs"
              >
                <CustomDoiIcon className="h-3.5 w-3.5" />
                DOI
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
