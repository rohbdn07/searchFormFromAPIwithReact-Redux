import { GET_PAGE_COUNT, GET_SEARCH_DATA } from '../constants/action-types'
import { BookState } from '../../model/BookState'
import { BookAction } from '../../model/BookAction'
import { IBook } from '../../model/Book'

const initalState: BookState = {
  allData: [],
  totalItems: 0,
}

export default function dataReducer(state = initalState, action: BookAction): any {
  switch (action.type) {
    case GET_SEARCH_DATA:
      const { resultCount, records } = action.payload
      return {
        ...state,
        allData: records,
        totalItems: resultCount,
      }
      break
    case GET_PAGE_COUNT:
      const { pageNumber }: IBook = action.payload
      return {
        ...state,
        pageCount: pageNumber,
      }

    default:
      return state
      break
  }
}
