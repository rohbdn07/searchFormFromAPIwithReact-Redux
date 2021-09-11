export interface IBook {
  index: number;
  title: string;
  authors?: any;
  year: number;
  authorName?: string | undefined;
  cleanIsbn: number;
  resultCount?: number;
  records?: any[];
  pageNumber?: number;
}
