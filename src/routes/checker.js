import {store} from "../store";
import history from './history';


var authenticated = store.getState().user.auth;

export const checkAuth = () => {
  console.log("auth ", authenticated)
  if (authenticated) {
    history.push("/dashboard");
  }

}