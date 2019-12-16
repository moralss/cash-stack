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
  allMembers: [],
  memberCount: 0,
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
    case actions.SAVE_MEMBERS:
      const {
        allMembers
      } = action.payload
      return {
        ...state,
        allMembers: [
          ...allMembers
        ],
        memberCount: action.payload.allMembers.length
      }
    case actions.SET_USER:
      return {
        ...state,
        profile: action.payload.profile
      }
    default:
      return state;
  }
};