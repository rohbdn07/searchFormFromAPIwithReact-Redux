import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../action';

type DataTypes = {
  resultCount: number;
  records: [];
};

// HELMET-KIRJASTOJEN AINEISTOLUETTELOT
// Swagger API documentation:
// https://api.finna.fi/swagger-ui/?url=%2Fapi%2Fv1%3Fswagger#!

export const getDataAction = (queryString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetch(`https://api.finna.fi/api/v1/search?${queryString}`, {
        headers: { Accept: 'application/json' },
      });
      const data: DataTypes = await response.json();
      return dispatch({
        type: ActionType.GET_SEARCH_DATA,
        payload: {
          resultCount: data.resultCount,
          records: data.records,
        },
      });
    } catch (error) {
      console.log('there is an error', error);
    }
  };
};
