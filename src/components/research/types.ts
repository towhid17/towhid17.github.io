export interface Publication {
  id: string;  // Added unique ID field
  title: string;
  year: number;
  venue: string;
  authors: string[];
  pdfUrl?: string;
  paperUrl?: string;
}