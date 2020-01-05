import {
  store
} from "../store";
import history from './history';



export const checkAuth = () => {
  var authenticated = store.getState().user.auth;
  if (authenticated) {
    history.push("/profile");
  }

}


export const checkId = () => {
  var userId = store.getState().user.profile.id;
  return userId;
}