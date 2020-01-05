import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { membersReducer } from './members/membersReducer';
import { approvalReducer } from './approval/approvalReducer';

let rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  members: membersReducer,
  approval: approvalReducer
});

export default rootReducer;