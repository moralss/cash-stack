import * as actions from "../../../actionTypes";

const initalState = {
  allMembers: [],
  memberCount: 0,
  nextMembers: [],
};


export const membersReducer = (state = initalState, action) => {
  switch (action.type) {
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
    case actions.SAVE_NEXT_MEMEBERS:
      return {
        ...state,
        nextMembers: action.payload
      }
    default:
      return state;
  }
};