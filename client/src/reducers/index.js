import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { modelReducer } from './modelReducer';
import { approvalReducer } from './approvalReducer';

let rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  models: modelReducer,
  approval: approvalReducer
});

export default rootReducer;