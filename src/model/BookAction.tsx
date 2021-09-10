import { IBook } from './Book';

export interface BookAction {
  type: string;
  allData: IBook;
  payload: IBook;
}
