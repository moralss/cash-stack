import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { membersReducer } from './members/membersReducer';
import { approvalReducer } from './approval/approvalReducer';
import { systemReducer } from './system/systemReducer';
import { uiReducer } from './ui/uiReducer';
import { accountReducer } from './account/accountReducer';

let rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  members: membersReducer,
  approval: approvalReducer,
  system: systemReducer,
  uiReducer: uiReducer,
  account: accountReducer
});

export default rootReducer;