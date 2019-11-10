import {
  store
} from "../store";
import history from './history';



export const checkAuth = () => {
  var authenticated = store.getState().user.auth;
  console.log("auth ", authenticated)
  if (authenticated) {
    history.push("/dashboard");
  }

}