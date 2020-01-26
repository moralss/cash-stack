import * as actions from "../actionTypes";

const initalState = {
    accountInfo: {},
};


export const accountReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.SAVE_ACCOUNT_INFO:
            return {
                ...state,
                accountInfo: action.payload,
            }
        default:
            return state;
    }
};