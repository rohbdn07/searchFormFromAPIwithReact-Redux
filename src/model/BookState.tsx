import { IBook } from './Book'
export interface BookState {
  allData: IBook[] | undefined
  totalItems: number | any
  pageCount: number | undefined
}
