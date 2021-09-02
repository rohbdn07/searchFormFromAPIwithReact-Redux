import { GET_SEARCH_DATA } from "../constants/action-types";

export const getDataAction = (data) => {
    return {
        type: GET_SEARCH_DATA,
        payload: {
            resultCount: data.resultCount,
            records: data.records,
        },
    };
};
