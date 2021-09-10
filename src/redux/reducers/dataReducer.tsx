import { BookState } from '../../model/BookState';
import { ActionType } from '../actions/action-types';
import { Action } from '../actions/action';

const initalState: BookState = {
  allData: [],
  totalItems: 0,
  pageCount: 0,
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

    default:
      return state;
      break;
  }
}
