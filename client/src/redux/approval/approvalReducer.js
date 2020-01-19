import * as actions from "../actionTypes";

const values = [
    "FIRST_TIME",
    "WAITING",
    "ACCESS",
]

const initalState = {
    approvalType: 'FIRST_TIME',
    stage: 0,
    prodectedStage: 0,
    isNextPayment: false
};

export const approvalReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.CHANGE_APPROVAL:
            return {
                ...state, approvalType: action.payload.approvalType, stage: action.payload.stage
            };
        case actions.SAVE_PRODECTED_RUBY_STAGE:
            return {
                ...state,
                prodectedStage: action.payload.prodectedStage,
                isNextPayment: action.payload.status
            };
        case actions.REST_STATE:
            return {
                ...initalState,
            }


        default:
            return state;
    }
};