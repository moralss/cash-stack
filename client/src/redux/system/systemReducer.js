import * as actions from "../actionTypes";

const initalState = {
    page: 1
};

export const systemReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.CHANGE_PAGE:
            return {
                ...state, page: action.payload
            };
        default:
            return state;
    }
};