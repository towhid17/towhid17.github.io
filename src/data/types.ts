export interface Publication {
  id: string;  // Added unique ID field
  title: string;
  year: number;
  venue: string;
  authors: string[];
  pdfUrl?: string;
  paperUrl?: string;
  articleId?: string; // like "Article 36"
  pages?: string; // like "24 pages"
  month?: string; // like "June"
}

export interface AdditionalImage {
  url: string;
  caption?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  brief: string;
  description: string;
  imageUrl: string;
  findings: string[];
  methodologies: string[];
  team: string[];
  relatedPublications?: string[];
  additionalImages?: AdditionalImage[];
}

export interface AcademicProject {
  id: string;
  title: string;
  link: string;
  description: string;
  technologies?: string[];
}