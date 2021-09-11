import { ActionType } from '../action-types';

interface ClientSearchResponse {
  resultCount: number;
  records: [];
}

interface getAllData {
  type: ActionType.GET_SEARCH_DATA;
  payload: ClientSearchResponse;
}

interface getPageNumber {
  type: ActionType.GET_PAGE_COUNT;
  payload: {
    pageNumber: number;
  };
}

interface getError {
  type: ActionType.GET_SEARCH_DATA_ERROR;
  payload: {
    errorMessage: string;
  };
}

export type Action = getAllData | getPageNumber | getError;
