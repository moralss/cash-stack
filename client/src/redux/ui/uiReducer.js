import * as actions from "../actionTypes";

const initalState = {
    isUiLoading: false,
};

export const uiReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.UI_TOGGLE_LOADDING:
            return {
                ...state, isUiLoading: action.payload
            };

        default:
            return state;
    }
};