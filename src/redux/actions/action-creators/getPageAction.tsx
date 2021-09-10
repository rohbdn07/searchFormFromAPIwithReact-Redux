import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../action';

export const getPageAction = (pageNumber: number) => (dispatch: Dispatch<Action>) => {
  return dispatch({
    type: ActionType.GET_PAGE_COUNT,
    payload: {
      pageNumber,
    },
  });
};
