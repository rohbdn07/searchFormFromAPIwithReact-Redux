import { GET_PAGE_COUNT } from "../constants/action-types";
export const getPageAction = (pageNumber) => {
    return {
        type: GET_PAGE_COUNT,
        payload: {
            pageNumber,
        },
    };
};
