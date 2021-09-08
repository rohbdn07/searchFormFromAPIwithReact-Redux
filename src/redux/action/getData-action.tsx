import { GET_SEARCH_DATA } from '../constants/action-types'
import { IBook } from '../../model/Book'

interface ClientSearchRecord {
  book: IBook
}

interface ClientSearchResponse {
  resultCount: number
  records: ClientSearchRecord[]
}

export const getDataAction = (data: ClientSearchResponse) => {
  return {
    type: GET_SEARCH_DATA,
    payload: {
      resultCount: data.resultCount,
      records: data.records,
    },
  }
}
