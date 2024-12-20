export interface Publication {
  title: string;
  year: number;
  venue: string;
  authors: string[];
  pdfUrl?: string;
  paperUrl?: string;
}