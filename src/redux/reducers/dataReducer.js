import { GET_PAGE_COUNT, GET_SEARCH_DATA } from "../constants/action-types";

const initalState = {
    allData: [],
    totalItems: 0,
};

export default function dataReducer(state = initalState, action) {
    switch (action.type) {
        case GET_SEARCH_DATA:
            const { resultCount, records, perPage, offSet, page } =
                action.payload;
            return {
                ...state,
                allData: records,
                totalItems: resultCount,
            };
            break;
        case GET_PAGE_COUNT:
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
