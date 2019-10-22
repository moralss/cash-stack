import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {modelReducer} from './modelReducer';

let rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    models : modelReducer
  });
  
  export default rootReducer;