export interface IBook {
  index: number
  title: string
  authors?: string
  year: number
  cleanIsbn: number
  resultCount?: number
  records?: []
  pageNumber?: number
}
