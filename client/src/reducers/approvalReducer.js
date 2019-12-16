import * as actions from "../actionTypes";

const values = [
    "ACCESS",
    "FIRST_TIME",
    "WAITING"
]

const initalState = {
    approvalType: 'FIRST_TIME'

};

export const approvalReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.CHANGE_APPROVAL:
            return {
                ...state, approvalType: action.payload
            };
        default:
            return state;
    }
};