import * as actions from "../actionTypes";

const initalState = {
  isOpen: false
};


export const modelReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.SET_MODEL_TYPE:
      return {
        ...state, isOpen: !state.isOpen
      };
    default:
      return state;
  }
};