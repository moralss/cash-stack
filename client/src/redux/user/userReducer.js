import * as actions from "../actionTypes";

const values = [
  "ACCESS",
  "FIRST_TIME",
  "WAITING"
]

const initalState = {
  profile: {},
  auth: false,
  error: {},
  role: false,
  passwordChangeInfo: {
  }
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATED:
      return {
        ...state, auth: action.payload.auth
      };
    case actions.AUTH_ERROR:
      return {
        ...state, error: action.payload
      }
    case actions.SET_ROLE:
      return {
        ...state, role: action.payload
      }

    case actions.SET_USER:
      return {
        ...state,
        profile: action.payload.profile
      }
    case actions.CHANGE_PAGE_PASSWORD:
      return {
        ...state,
        passwordChangeInfo: { userId: action.payload }
      }
    case actions.REST_STATE:
      return {
        ...initalState,
      }

    default:
      return state;
  }
};