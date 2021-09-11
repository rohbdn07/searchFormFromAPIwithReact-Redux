import { BookState } from '../../model/BookState';
import { ActionType } from '../actions/action-types';
import { Action } from '../actions/action';

const initalState: BookState = {
  allData: [],
  totalItems: 0,
  pageCount: 0,
  errorMessage: '',
};

export default function dataReducer(state = initalState, action: Action): BookState {
  switch (action.type) {
    case ActionType.GET_SEARCH_DATA:
      const { resultCount, records } = action.payload;
      return {
        ...state,
        allData: records,
        totalItems: resultCount,
      };
      break;
    case ActionType.GET_PAGE_COUNT:
      const { pageNumber } = action.payload;
      return {
        ...state,
        pageCount: pageNumber,
      };
      break;

    case ActionType.GET_SEARCH_DATA_ERROR:
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
      };

    default:
      return state;
      break;
  }
}
