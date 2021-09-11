import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../action';
import { axiosInstance } from '../../../services/API_services/axiosInstance';

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
      const response = await axiosInstance.get(`v1/search?${queryString}`);
      const data: DataTypes = await response.data;
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
